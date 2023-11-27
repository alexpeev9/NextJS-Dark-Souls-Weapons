import { NextRequest } from 'next/server'
import { sql } from '@vercel/postgres'

import Category from '@/utils/types/Category'
import { nextResponse, NOT_FOUND, OK, SERVER_ERROR } from '@/utils/apiHelper'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug

    const data = await sql<Category>`
      SELECT
        categories.name,
        LOWER(REPLACE(categories.name, ' ', '-')) as slug,
        categories.description,
        categories.imageUrl,
        categories.weapons,
        json_agg(
          jsonb_build_object(
            'name', weapons.name,
            'slug', LOWER(REPLACE(weapons.name, ' ', '-')),
            'imageurl', CONCAT(LOWER(REPLACE(weapons.name, ' ', '_')), '.png')
          )
        ) as weapons
      FROM
        categories
      LEFT JOIN
        weapons ON weapons.id = ANY(categories.weapons)
      WHERE
        LOWER(REPLACE(categories.name, ' ', '-')) = ${slug}
      GROUP BY
        categories.name,
        categories.description,
        categories.imageUrl,
        categories.weapons
      ORDER BY
        categories.name ASC
      LIMIT 1`

    if (!data.rowCount) {
      return nextResponse(NOT_FOUND, { message: 'Category not found' })
    }

    return nextResponse(OK, data.rows[0])
  } catch (error: any) {
    return nextResponse(SERVER_ERROR, { message: error.message })
  }
}

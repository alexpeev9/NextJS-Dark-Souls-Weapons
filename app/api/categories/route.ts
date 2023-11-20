import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

import Category from '@/types/Category'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json('Slug parameter is not set', {
        status: 400
      })
    }

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
            'slug', LOWER(REPLACE(weapons.name, ' ', '-'))
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
      return NextResponse.json('Category not found', {
        status: 404
      })
    }

    return NextResponse.json(data.rows)
  } catch (error: any) {
    return NextResponse.json(`Error ${error.message}`, {
      status: 500
    })
  }
}

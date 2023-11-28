import { NextRequest } from 'next/server'
import { sql } from '@vercel/postgres'

import Weapon from '@/utils/types/Weapon'
import { NOT_FOUND, OK, SERVER_ERROR, nextResponse } from '@/utils/apiHelper'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug

    const data = await sql<Weapon>`
      SELECT
        weapons.name,
        weapons.slug,
        weapons.weight,
        weapons.image,
        weapons.durability,
        weapons.attackType,
        weapons.requirements,
        weapons.damage,
        weapons.bonus,
        jsonb_build_object(
          'name', categories.name,
          'slug', categories.slug
        ) as category
        FROM
        weapons
      LEFT JOIN
        categories ON categories.id = weapons.category
      WHERE
        weapons.slug = ${slug}
      GROUP BY
        weapons.name,
        weapons.slug,
        weapons.image,
        weapons.weight,
        weapons.durability,
        weapons.attackType,
        weapons.requirements,
        weapons.damage,
        weapons.bonus,
        categories.name
      ORDER BY
        weapons.name ASC
      LIMIT 1`

    if (!data.rowCount) {
      return nextResponse(NOT_FOUND, { message: 'Weapon not found' })
    }

    return nextResponse(OK, data.rows)
  } catch (error: any) {
    return nextResponse(SERVER_ERROR, { message: error.message })
  }
}

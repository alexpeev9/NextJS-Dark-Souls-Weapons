import { NextRequest,NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

import Weapon from '@/types/Weapon'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json('Slug parameter is not set', {
        status: 400
      })
    }

    const data = await sql<Weapon>`
      SELECT
        weapons.name,
        LOWER(REPLACE(weapons.name, ' ', '-')) as slug,
        weapons.weight,
        weapons.durability,
        weapons.attackType,
        weapons.requirements,
        weapons.damage,
        weapons.bonus,
        jsonb_build_object(
          'name', categories.name,
          'slug', LOWER(REPLACE(categories.name, ' ', '-'))
        ) as category
        FROM
        weapons
      LEFT JOIN
        categories ON categories.id = weapons.category
      WHERE
        LOWER(REPLACE(weapons.name, ' ', '-')) = ${slug}
      GROUP BY
        weapons.name,
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
      return NextResponse.json('Weapon not found', {
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

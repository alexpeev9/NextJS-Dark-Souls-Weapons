import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

import Category from '@/types/Category'

export async function GET() {
  try {
    const data = await sql<Category>`
      SELECT
        categories.name,
        LOWER(REPLACE(categories.name, ' ', '-')) as slug
      FROM
        categories
      ORDER BY
        categories.name ASC`

    if (!data.rowCount) {
      return NextResponse.json('Categories not found', {
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

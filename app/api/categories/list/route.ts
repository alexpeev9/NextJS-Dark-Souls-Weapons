import { sql } from '@vercel/postgres'

import Category from '@/utils/types/entities/Category'
import { nextResponse, NOT_FOUND, OK, SERVER_ERROR } from '@/utils/apiHelper'

export async function GET() {
  try {
    const data = await sql<Category>`
      SELECT
        categories.name,
        categories.slug,
        categories.image
      FROM
        categories
      ORDER BY
        categories.name ASC`

    if (!data.rowCount) {
      return nextResponse(NOT_FOUND, { message: 'Categories not found' })
    }

    return nextResponse(OK, data.rows)
  } catch (error: any) {
    return nextResponse(SERVER_ERROR, { message: error.message })
  }
}

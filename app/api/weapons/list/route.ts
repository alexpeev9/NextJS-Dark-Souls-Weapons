import { sql } from '@vercel/postgres'

import { nextResponse, NOT_FOUND, OK, SERVER_ERROR } from '@/utils/apiHelper'
import WeaponTileVM from '@/utils/types/viewModels/WeaponTileVM'
import { NextRequest } from 'next/server'

const ITEMS_PER_PAGE = 10

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page')
  let offset = 1

  try {
    if (page) {
      const numberPage = Number(page)
      if (isNaN(numberPage) || numberPage <= 0) {
        throw new Error('Please provide a valid number for page')
      }
      offset = (numberPage - 1) * ITEMS_PER_PAGE
    }

    const data = await sql<WeaponTileVM>`
      SELECT
        weapons.name,
        weapons.slug,
        weapons.image
      FROM
        weapons
      ORDER BY
        weapons.name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`

    if (!data.rowCount) {
      return nextResponse(NOT_FOUND, { message: 'Weapons not found' })
    }

    return nextResponse(OK, data.rows)
  } catch (error: any) {
    return nextResponse(SERVER_ERROR, { message: error.message })
  }
}

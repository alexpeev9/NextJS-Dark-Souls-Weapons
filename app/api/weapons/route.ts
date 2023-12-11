import { sql } from '@vercel/postgres'

import { nextResponse, NOT_FOUND, OK, SERVER_ERROR } from '@/utils/apiHelper'
import WeaponTileVM from '@/utils/types/viewModels/WeaponTileVM'
import { NextRequest } from 'next/server'
import WeaponsLengthVM from '@/utils/types/viewModels/WeaponsLengthVM'

const ITEMS_PER_PAGE = 10

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page')
    const count = searchParams.get('count')
    let offset

    // if 'count' is sent in the request, show count of records
    if (count && count === 'true') {
      const data = await sql`
      SELECT 
        COUNT(*) 
      FROM 
        weapons`

      const count = Math.round(Number(data.rows[0].count) / 10)
      const pages = Array.from({ length: count }, (_, index) => ({
        value: index + 1
      }))

      const dataResponse = {
        count: count,
        pages: pages
      }
      return nextResponse(OK, dataResponse)
    }

    // if 'page' is sent in the request, show specified page
    if (page) {
      const numberPage = Number(page)
      if (isNaN(numberPage) || numberPage <= 0) {
        throw new Error('Please provide a valid number for page')
      }
      offset = (numberPage - 1) * ITEMS_PER_PAGE
    } else {
      // if 'page is not sent in the request, show first page
      offset = ITEMS_PER_PAGE
    }

    const data = await sql`
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

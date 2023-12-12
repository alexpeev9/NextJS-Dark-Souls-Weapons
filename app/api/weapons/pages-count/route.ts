import { sql } from '@vercel/postgres'

import { nextResponse, OK, SERVER_ERROR } from '@/utils/apiHelper'
import { NextRequest } from 'next/server'

const ITEMS_PER_PAGE = 10

export async function GET(request: NextRequest) {
  try {
    const data = await sql`
      SELECT 
        COUNT(*) 
      FROM 
        weapons`

    const count = Math.round(Number(data.rows[0].count) / ITEMS_PER_PAGE)

    const dataResponse = {
      count: count
    }
    return nextResponse(OK, dataResponse)
  } catch (error: any) {
    return nextResponse(SERVER_ERROR, { message: error.message })
  }
}

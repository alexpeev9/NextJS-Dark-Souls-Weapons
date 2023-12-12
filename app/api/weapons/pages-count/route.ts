import { sql } from '@vercel/postgres'

import { nextResponse, NOT_FOUND, OK, SERVER_ERROR } from '@/utils/apiHelper'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
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
  } catch (error: any) {
    return nextResponse(SERVER_ERROR, { message: error.message })
  }
}

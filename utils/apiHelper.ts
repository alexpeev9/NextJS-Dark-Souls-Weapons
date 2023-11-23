import { NextResponse } from 'next/server'

export const nextResponse = (status: number, data: any) => {
  return NextResponse.json(data, {
    status
  })
}

export enum networkStatus {
  OK = 200,
  CREATED = 201,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500
}

export const { OK, CREATED, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, SERVER_ERROR } =
  networkStatus

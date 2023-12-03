import { NextResponse } from 'next/server'
import Weapon from './types/entities/Weapon'
import Category from './types/entities/Category'
import WeaponTileVM from './types/viewModels/WeaponTileVM'
import WeaponsLengthVM from './types/viewModels/WeaponsLengthVM'

interface ErrorMessage {
  message: string
}

type AllowedResponseType =
  | Weapon
  | WeaponTileVM[]
  | Category
  | Category[]
  | WeaponsLengthVM
  | ErrorMessage

export const nextResponse = (status: number, data: AllowedResponseType) => {
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

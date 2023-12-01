import Base from '../commons/Base'

export type attackType =
  | 'regular'
  | 'regular / thrust'
  | 'slash'
  | 'strike'
  | 'thrust'
  | 'thrust / slash'
  | 'none'

export type BonusType = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | null

export default interface Weapon extends Base {
  category: string
  attackType: attackType
  image: string
  durability: number
  weight: number
  requirements: Requirements
  damage: Damage
  Bonus: Bonus
}

export interface Requirements {
  faith: number
  strength: number
  intelligence: number
  dexterity: number
}

export interface Damage {
  physical: number
  magic: number
  lightning: number
  fire: number
}

export interface Bonus {
  strength: BonusType
  dexterity: BonusType
  intelligence: BonusType
  faith: BonusType
}

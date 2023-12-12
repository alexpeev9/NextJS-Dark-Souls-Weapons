import Base from '../commons/Base'
import { Bonus, Damage, Requirements, attackType } from '../entities/Weapon'

export default interface WeaponVM extends Base {
  category: { name: string; slug: string }
  attacktype: attackType
  image: string
  durability: number
  weight: number
  requirements: Requirements
  damage: Damage
  bonus: Bonus
}

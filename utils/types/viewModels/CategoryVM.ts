import WeaponTileVM from './WeaponTileVM'
import Base from '../commons/Base'

export default interface CategoryVM extends Base {
  description: string
  image: string
  weapons: WeaponTileVM[]
}

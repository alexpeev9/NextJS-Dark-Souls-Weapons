import Base from './Base'
import NavigationLink from './NavigationLink'

export default interface Category extends Base {
  description: string
  image: string
  weapons: NavigationLink[]
}

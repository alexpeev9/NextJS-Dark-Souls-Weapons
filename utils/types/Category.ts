import Base from './Base'
import NavigationLink from './NavigationLink'

export default interface Category extends Base {
  description: string
  imageUrl: string
  weapons: NavigationLink[]
}

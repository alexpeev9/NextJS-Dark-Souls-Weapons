interface Weapon {
  slug: string
  name: string
}

export default interface Category {
  name: string
  slug: string
  description: string
  imageUrl: string
  weapons: Weapon[]
}

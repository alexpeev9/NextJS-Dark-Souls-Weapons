import NavigationLink from '@/utils/types/NavigationLink'
import Link from 'next/link'

type ListItemData = {
  category: NavigationLink
  activeClass: string
}
export default function ListItem({ category, activeClass }: ListItemData) {
  return (
    <li className={`p-0 md:p-1.5 hover:underline` + activeClass}>
      <Link href={`/categories/${category.slug}`}>{category.name}</Link>
    </li>
  )
}

import NavigationLink from '@/utils/types/NavigationLink'
import Link from 'next/link'

type ListItemData = {
  iterator: number
  category: NavigationLink
  activeClass: string
}
export default function ListItem({
  iterator,
  category,
  activeClass
}: ListItemData) {
  return (
    <li
      key={iterator + 'a'}
      className={`p-0 md:p-1.5 hover:underline` + activeClass}
    >
      <Link href={`/weapons/${category.slug}`}>{category.name}</Link>
    </li>
  )
}

import NavigationLink from '@/utils/types/NavigationLink'
import ListItem from './listItem'

export default function NavigationSkeleton() {
  const mockData: NavigationLink[] = Array(5).fill({
    name: '...................',
    slug: ''
  })

  return mockData.map((m, i) => (
    <ListItem
      iterator={i}
      category={{ name: m.name, slug: m.slug }}
      activeClass={''}
    />
  ))
}

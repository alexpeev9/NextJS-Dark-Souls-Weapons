import NavigationLink from '@/utils/types/NavigationLink'
import ListItem from './listItem'

const ITEM_TO_SHOW = 19
const DOTS_TO_REPEAT = 55
const dot = '.'

export default function NavigationSkeleton() {
  const mockData: NavigationLink[] = Array(ITEM_TO_SHOW).fill({
    name: dot.repeat(DOTS_TO_REPEAT),
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

'use client'

import NavigationLink from '@/utils/types/NavigationLink'
import useFetch from '@/utils/hooks/useFetch'
import NavigationSkeleton from './navigationSkeleton'
import UseGetActiveUrl from '@/utils/hooks/useGetActiveUrl'
import ListItem from './listItem'

export default function CategoryList() {
  const { setActiveClass } = UseGetActiveUrl(2, 'underline')
  const { responseData: categoryNavLinks } = useFetch<NavigationLink[]>({
    method: 'get',
    url: 'categories'
  })

  return categoryNavLinks ? (
    categoryNavLinks.map((category: NavigationLink, key) => (
      <ListItem
        key={key}
        category={category}
        activeClass={setActiveClass(category.slug)}
      />
    ))
  ) : (
    <NavigationSkeleton />
  )
}

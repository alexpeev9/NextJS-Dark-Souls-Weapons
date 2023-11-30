'use client'

import NavigationLink from '@/utils/types/NavigationLink'
import useFetch from '@/utils/hooks/useFetch'
import NavigationSkeleton from './navigationSkeleton'
import UseGetActiveUrl from '@/utils/hooks/useGetActiveUrl'
import ListItem from './listItem'
import DataFetchState from '@/utils/types/commons/DataFetchState'

export default function CategoryList() {
  const { setActiveClass } = UseGetActiveUrl(2, 'underline')

  const {
    data: categories,
    error,
    loading
  }: DataFetchState<any[]> = useFetch<any[]>(`/categories`)

  if (loading || error) {
    return <NavigationSkeleton />
  }

  return (
    categories &&
    categories.map((category: NavigationLink, key: number) => (
      <ListItem
        key={key}
        category={category}
        activeClass={setActiveClass(category.slug)}
      />
    ))
  )
}

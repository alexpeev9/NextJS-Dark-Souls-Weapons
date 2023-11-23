'use client'

import Link from 'next/link'
import './navigation.module.scss'

import NavigationLink from '@/utils/types/NavigationLink'
import useFetch from '@/utils/hooks/useFetch'
import NavigationSkeleton from './navigationSkeleton'

export default function Navigation() {
  const { responseData: categoryNavLinks, loading } = useFetch<
    NavigationLink[]
  >({
    method: 'get',
    url: 'categories/list'
  })

  if (loading) {
    return <NavigationSkeleton />
  }

  return (
    <nav className='navigation'>
      {categoryNavLinks &&
        categoryNavLinks.map((category: NavigationLink, key) => (
          <Link href={`/categories/${category.slug}`} key={key}>
            {category.name}
          </Link>
        ))}
    </nav>
  )
}

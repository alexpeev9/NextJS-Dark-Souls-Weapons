'use client'

import Link from 'next/link'

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
    <nav className='bg-secondary col-span-12 md:col-span-1 h-screen p-3'>
      <ul className='flex flex-col items-center md:items-start h-16 md:h-full overflow-y-auto'>
        {categoryNavLinks &&
          categoryNavLinks.map((category: NavigationLink, key) => (
            <li key={key}>
              <Link href={`/categories/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

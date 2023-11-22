'use client'

import Link from 'next/link'
import './navigation.module.scss'

import useGetCategoryLinks from './hooks/useGetCategoryLinks'
import NavigationLink from '@/utils/types/NavigationLink'
import { redirect } from 'next/navigation'

export default function Navigation() {
  const { isLoading, data: categoryNavLinks } = useGetCategoryLinks()

  if (isLoading) {
    return <>Loading</>
  }

  if (!categoryNavLinks) {
    return <>Not Found</>
  }

  return (
    <nav className='navigation'>
      {categoryNavLinks.map((category: NavigationLink) => (
        <Link href={`/categories/${category.slug}`} key={category.slug}>
          {category.name}
        </Link>
      ))}
    </nav>
  )
}

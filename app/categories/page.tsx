import { Metadata } from 'next'

import CategoryList from '@/components/categories/category-list'

export const metadata: Metadata = {
  title: 'Categories'
}

export default function Page() {
  return <CategoryList />
}

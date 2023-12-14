import { Metadata } from 'next'

import CategoryDetails from '@/components/categories/category-details'

import { convertSlug } from '@/utils/textHelper'

export const metadata: Metadata = {
  title: 'Category'
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  metadata.title = convertSlug(slug)

  return <CategoryDetails slug={slug} />
}

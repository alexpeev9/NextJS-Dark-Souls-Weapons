'use client'

import useAxios from '@/utils/hooks/useFetch'
import { notFound } from 'next/navigation'
import { useErrorContext } from '@/utils/contexts/ErrorContext'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import Loader from '@/components/commons/loader'
import Hero from '@/components/commons/hero'
import Paragraph from '@/components/elements/paragraph'
import CategoryWeaponGrid from '@/components/categories/category-weapon-grid'
import CategoryVM from '@/utils/types/viewModels/CategoryVM'

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const {
    data: category,
    error,
    loading
  }: DataFetchState<CategoryVM> = useAxios<CategoryVM>(`/categories/${slug}`)
  const { setError: setGlobalError } = useErrorContext()

  if (loading) {
    return <Loader />
  }

  if (error) {
    var errorMessage = error
    setGlobalError(
      errorMessage || 'Something went wrong! Please try again later'
    )
    return notFound()
  }

  return (
    category && (
      <>
        <Hero
          name={category.name}
          image={category.image}
          slug={category.slug}
        />
        <Paragraph>{category.description}</Paragraph>
        <CategoryWeaponGrid weapons={category.weapons} />
      </>
    )
  )
}

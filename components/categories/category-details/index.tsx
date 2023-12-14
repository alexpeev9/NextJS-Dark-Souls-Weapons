'use client'

import { notFound } from 'next/navigation'

import Hero from '@/components/commons/hero'
import Loader from '@/components/commons/loader'
import Paragraph from '@/components/elements/paragraph'
import WeaponGrid from '@/components/weapons/weapon-grid'

import CategoryVM from '@/utils/types/viewModels/CategoryVM'
import useAxios from '@/utils/hooks/useFetch'
import { useErrorContext } from '@/utils/contexts/ErrorContext'
import DataFetchState from '@/utils/types/commons/DataFetchState'

export default function CategoryDetails({ slug }: { slug: string }) {
  const {
    data: category,
    error,
    loading
  }: DataFetchState<CategoryVM> = useAxios<CategoryVM>(
    `categories/item/${slug}`
  )
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
        <WeaponGrid weapons={category.weapons} />
      </>
    )
  )
}

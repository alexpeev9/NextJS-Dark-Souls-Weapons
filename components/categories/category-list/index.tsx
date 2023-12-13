'use client'

import { notFound } from 'next/navigation'

import Loader from '@/components/commons/loader'
import Hero from '@/components/commons/hero'
import CategoryGrid from '@/components/categories/category-grid'

import { useErrorContext } from '@/utils/contexts/ErrorContext'
import WeaponTileVM from '@/utils/types/viewModels/WeaponTileVM'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import useAxios from '@/utils/hooks/useFetch'

export default function CategoryList() {
  const {
    data: categories,
    error,
    loading
  }: DataFetchState<WeaponTileVM[]> = useAxios<WeaponTileVM[]>(
    `categories/list`
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
    categories && (
      <>
        <Hero
          name={'Categories'}
          image={'dark_hand.png'}
          slug={'/categories/list'}
        />
        <CategoryGrid weapons={categories} />
      </>
    )
  )
}

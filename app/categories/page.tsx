'use client'

import useAxios from '@/utils/hooks/useFetch'
import { notFound } from 'next/navigation'
import { useErrorContext } from '@/utils/contexts/ErrorContext'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import Loader from '@/components/commons/loader'
import WeaponGrid from '@/components/weapons/weapon-grid'
import WeaponTileVM from '@/utils/types/viewModels/WeaponTileVM'
import Hero from '@/components/commons/hero'

export default function Page() {
  const {
    data: categories,
    error,
    loading
  }: DataFetchState<WeaponTileVM[]> = useAxios<WeaponTileVM[]>(`/categories`)
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
          slug={'/categories'}
        />
        <WeaponGrid weapons={categories} />
      </>
    )
  )
}

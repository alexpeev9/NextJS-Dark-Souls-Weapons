'use client'

import { notFound } from 'next/navigation'

import Loader from '@/components/commons/loader'
import Hero from '@/components/commons/hero'
import RequirementTable from '@/components/weapons/weapon-table/RequirementTable'
import DamageTable from '@/components/weapons/weapon-table/DamageTable'
import BonusTable from '@/components/weapons/weapon-table/BonusTable'
import DescriptionTable from '@/components/weapons/weapon-table/DescriptionTable'

import useFetch from '@/utils/hooks/useFetch'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import { useErrorContext } from '@/utils/contexts/ErrorContext'
import WeaponVM from '@/utils/types/viewModels/WeaponVM'

export default function WeaponDetail({ slug }: { slug: string }) {
  const {
    data: weapon,
    error,
    loading
  }: DataFetchState<WeaponVM> = useFetch<WeaponVM>(`weapons/item/${slug}`)
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
    weapon && (
      <>
        <Hero name={weapon.name} image={weapon.image} slug={weapon.slug} />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-8'>
          <DescriptionTable weapon={weapon} />
          <RequirementTable requirements={weapon.requirements} />
          <DamageTable damage={weapon.damage} />
          <BonusTable bonus={weapon.bonus} />
        </div>
      </>
    )
  )
}

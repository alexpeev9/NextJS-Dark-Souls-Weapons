'use client'

import useAxios from '@/utils/hooks/useFetch'
import { notFound } from 'next/navigation'
import { useErrorContext } from '@/utils/contexts/ErrorContext'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import Loader from '@/components/commons/loader'
import WeaponGrid from '@/components/weapons/weapon-grid'
import WeaponTileVM from '@/utils/types/viewModels/WeaponTileVM'
import Hero from '@/components/commons/hero'
import WeaponsLengthVM from '@/utils/types/viewModels/WeaponsLengthVM'
import Link from 'next/link'

interface pageData {
  pages: any[]
}
export default function Page({
  searchParams
}: {
  searchParams?: {
    page?: string
  }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const { data: weaponsPages }: DataFetchState<pageData> =
    useAxios<any>(`/weapons?count=true`)

  const {
    data: weapons,
    error,
    loading
  }: DataFetchState<WeaponTileVM[]> = useAxios<WeaponTileVM[]>(
    currentPage ? `/weapons?page=${currentPage}` : `/weapons`
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
    weapons && (
      <>
        <Hero
          name={'Weapons'}
          image={'pyromancy_flame.png'}
          slug={'/weapons'}
        />
        <section className='flex justify-center my-3'>
          <div className='bg-secondary text-primary rounded py-3'>
            {weaponsPages &&
              weaponsPages.pages.map((page, i) => (
                <Link
                  href={`/weapons?page=${page.value}`}
                  key={i}
                  className={`p-3 m-3 ${
                    currentPage === page.value ? 'underline' : ''
                  }`}
                >
                  {page.value}
                </Link>
              ))}
          </div>
        </section>
        <WeaponGrid weapons={weapons} />
      </>
    )
  )
}

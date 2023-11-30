'use client'

import Image from 'next/image'
import Link from 'next/link'
import useAxios from '@/utils/hooks/useFetch'
import { notFound } from 'next/navigation'
import Category from '@/utils/types/Category'
import { useErrorContext } from '@/utils/contexts/ErrorContext'
import DataFetchState from '@/utils/types/commons/DataFetchState'

export default function CategoryPage({ slug }: { slug: string }) {
  const {
    data: category,
    error,
    loading
  }: DataFetchState<Category> = useAxios<Category>(`/categories/${slug}`)
  const { setError: setGlobalError } = useErrorContext()

  if (loading) {
    return <p>Loading...</p>
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
        <section className='flex flex-col md:flex-row items-center justify-center pt-2 md:pt-0 pb-4'>
          <Image
            src={`/images/weapons/${category.image}`}
            alt={category.slug}
            width={80}
            height={90}
          />
          <h2 className='text-3xl underline text-center ml-0 md:ml-4 pt-2 md:pt-0'>
            {category.name}
          </h2>
        </section>
        <p className='indent-3 md:indent-10'>{category.description}</p>
        <section className='grid auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6'>
          {category.weapons &&
            category.weapons.map((weapon: any, key: number) => (
              <Link
                key={key}
                href={`/weapons/${weapon.slug}`}
                className='flex flex-col items-center justify-start px-3 py-4'
              >
                <Image
                  src={`/images/weapons/${weapon.image}`}
                  alt={weapon.name}
                  width={80}
                  height={90}
                />
                <h4 className='text-center'>{weapon.name}</h4>
              </Link>
            ))}
        </section>
      </>
    )
  )
}

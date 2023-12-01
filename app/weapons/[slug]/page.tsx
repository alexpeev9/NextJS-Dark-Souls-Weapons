'use client'

import useFetch from '@/utils/hooks/useFetch'
import Link from 'next/link'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import { useErrorContext } from '@/utils/contexts/ErrorContext'
import { notFound } from 'next/navigation'
import Loader from '@/components/commons/loader'
import Hero from '@/components/commons/hero'

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const {
    data: weapon,
    error,
    loading
  }: DataFetchState<any> = useFetch<any>(`/weapons/${slug}`)
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
        <div className='flex flex-col justify-center items-center'>
          <h3 className='font-black'>Description</h3>
          <ul className='list-disc mb-3'>
            <li className='ml-10'>
              <span className='font-black'>Weight</span>: {weapon.weight}
            </li>
            <li className='ml-10'>
              <span className='font-black'>Durability</span>:{' '}
              {weapon.durability}
            </li>
            <li className='ml-10'>
              <span className='font-black'>Attack Type</span>:{' '}
              {weapon.attacktype}
            </li>
            <li className='ml-10'>
              <span className='font-black'>Caetgory</span>:{' '}
              <Link
                href={`/categories/${weapon.category.slug}`}
                className='underline'
              >
                {weapon.category.name}
              </Link>
            </li>
          </ul>
          <div>
            <h3 className='font-black text-center'>Requirements</h3>
            <table className='border-2 border-secondary'>
              <thead>
                <tr>
                  <th className='border-2 px-2'>Requirement</th>
                  <th className='border-2 px-2'>Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border-2 p-1'>Strength</td>
                  <td className='border-2 p-1 pl-3'>
                    {weapon.requirements.strength}
                  </td>
                </tr>
                <tr>
                  <td className='border-2 p-1'>Dexterity</td>
                  <td className='border-2 p-1 pl-3'>
                    {weapon.requirements.dexterity}
                  </td>
                </tr>
                <tr>
                  <td className='border-2 p-1'>Faith</td>
                  <td className='border-2 p-1 pl-3'>
                    {weapon.requirements.faith}
                  </td>
                </tr>
                <tr>
                  <td className='border-2 p-1'>Intelligence</td>
                  <td className='border-2 p-1 pl-3'>
                    {weapon.requirements.intelligence}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  )
}

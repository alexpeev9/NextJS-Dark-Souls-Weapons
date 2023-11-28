'use client'

import Image from 'next/image'
import useFetch from '@/utils/hooks/useFetch'
import Link from 'next/link'

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const { responseData: categoryData } = useFetch<any>({
    method: 'get',
    url: `categories/${slug}`
  })

  return (
    categoryData && (
      <>
        <section className='flex flex-col md:flex-row items-center justify-center pt-2 md:pt-0 pb-4'>
          <Image
            src={`/images/weapons/${categoryData.image}`}
            alt={categoryData.slug}
            width={80}
            height={90}
          />
          <h2 className='text-3xl underline text-center ml-0 md:ml-4 pt-2 md:pt-0'>
            {categoryData.name}
          </h2>
        </section>
        <p className='indent-3 md:indent-10'>{categoryData.description}</p>
        <section className='grid auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6'>
          {categoryData.weapons &&
            categoryData.weapons.map((weapon: any) => (
              <Link
                key={weapon.slug}
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

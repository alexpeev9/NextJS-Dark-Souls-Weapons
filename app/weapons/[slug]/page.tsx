'use client'

import Image from 'next/image'
import useFetch from '@/utils/hooks/useFetch'
import Link from 'next/link'

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const { responseData: weaponData } = useFetch<any>({
    method: 'get',
    url: `weapons/${slug}`
  })
  if (weaponData) {
    console.log(weaponData)
  }
  return (
    weaponData && (
      <>
        <section className='flex flex-col md:flex-row items-center justify-center pt-2 md:pt-0 pb-4'>
          <Image
            src={`/images/weapons/${weaponData.image}`}
            alt={weaponData.slug}
            width={80}
            height={90}
          />
          <h2 className='text-3xl underline text-center ml-0 md:ml-4 pt-2 md:pt-0'>
            {weaponData.name}
          </h2>
        </section>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='font-black'>Description</h3>
          <ul className='list-disc mb-3'>
            <li className='ml-10'>
              <span className='font-black'>Weight</span>: {weaponData.weight}
            </li>
            <li className='ml-10'>
              <span className='font-black'>Durability</span>:{' '}
              {weaponData.durability}
            </li>
            <li className='ml-10'>
              <span className='font-black'>Attack Type</span>:{' '}
              {weaponData.attacktype}
            </li>
            <li className='ml-10'>
              <span className='font-black'>Caetgory</span>:{' '}
              <Link
                href={`/categories/${weaponData.category.slug}`}
                className='underline'
              >
                {weaponData.category.name}
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
                    {weaponData.requirements.strength}
                  </td>
                </tr>
                <tr>
                  <td className='border-2 p-1'>Dexterity</td>
                  <td className='border-2 p-1 pl-3'>
                    {weaponData.requirements.dexterity}
                  </td>
                </tr>
                <tr>
                  <td className='border-2 p-1'>Faith</td>
                  <td className='border-2 p-1 pl-3'>
                    {weaponData.requirements.faith}
                  </td>
                </tr>
                <tr>
                  <td className='border-2 p-1'>Intelligence</td>
                  <td className='border-2 p-1 pl-3'>
                    {weaponData.requirements.intelligence}
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

import Link from 'next/link'

import WeaponVM from '@/utils/types/viewModels/WeaponVM'

export default function WeaponDescription({ weapon }: { weapon: WeaponVM }) {
  return (
    <>
      <h3 className='font-black'>Description</h3>
      <ul className='list-disc'>
        <li className='ml-10'>
          <span className='font-black'>Weight</span>: {weapon.weight}
        </li>
        <li className='ml-10'>
          <span className='font-black'>Durability</span>: {weapon.durability}
        </li>
        <li className='ml-10'>
          <span className='font-black'>Attack Type</span>: {weapon.attacktype}
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
    </>
  )
}

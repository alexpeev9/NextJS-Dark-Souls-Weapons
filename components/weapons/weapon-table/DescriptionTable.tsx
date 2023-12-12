import Link from 'next/link'
import WeaponTable from './index'
import WeaponVM from '@/utils/types/viewModels/WeaponVM'

export default function DescriptionTable({ weapon }: { weapon: WeaponVM }) {
  const data = [
    {
      title: 'Weight',
      path: 'stats/weight.png',
      value: weapon.weight
    },
    {
      title: 'Attack Type',
      path: 'stats/attack-type.png',
      value: weapon.attacktype
    },
    {
      title: 'Durability',
      path: 'stats/durability.png',
      value: weapon.durability
    },
    {
      title: 'Category',
      path: 'stats/category.png',
      value: (
        <Link
          href={`/categories/${weapon.category.slug}`}
          className='underline text-center'
        >
          {weapon.category.name}
        </Link>
      )
    }
  ]

  return <WeaponTable name={'Description'} data={data} />
}

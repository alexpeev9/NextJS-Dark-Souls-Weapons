import Link from 'next/link'
import WeaponTileVM from '@/utils/types/viewModels/WeaponTileVM'
import ImageElement from '@/components/elements/image-element'

interface WeaponTilesVMArray {
  weapons: WeaponTileVM[]
}

export default function CategoryGrid({ weapons }: WeaponTilesVMArray) {
  return (
    weapons && (
      <section className='grid auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6'>
        {weapons.map((weapon: WeaponTileVM, key: number) => (
          <Link
            key={key}
            href={`/categories/${weapon.slug}`}
            className='flex flex-col items-center justify-start hover:underline px-3 py-4'
          >
            <ImageElement
              path={weapon.image}
              priority={false}
              alt={weapon.name}
              width={80}
              height={90}
            />
            <h4 className='text-center'>{weapon.name}</h4>
          </Link>
        ))}
      </section>
    )
  )
}

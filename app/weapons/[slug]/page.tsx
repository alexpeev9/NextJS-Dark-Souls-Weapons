import { Metadata } from 'next'

import WeaponDetail from '@/components/weapons/weapon-detail'

export const metadata: Metadata = {
  title: 'Weapons'
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  return <WeaponDetail slug={slug} />
}

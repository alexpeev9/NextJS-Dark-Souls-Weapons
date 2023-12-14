import { Metadata } from 'next'

import WeaponDetail from '@/components/weapons/weapon-detail'

import { convertSlug } from '@/utils/textHelper'

export const metadata: Metadata = {
  title: 'Weapon'
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  metadata.title = convertSlug(slug)

  return <WeaponDetail slug={slug} />
}

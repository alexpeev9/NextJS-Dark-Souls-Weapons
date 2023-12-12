import { Damage } from '@/utils/types/entities/Weapon'
import WeaponTable from './index'

export default function DamageTable({ damage }: { damage: Damage }) {
  const { physical, magic, fire, lightning } = damage
  const data = [
    {
      title: 'Physical',
      path: 'damage/physical.png',
      value: physical
    },
    {
      title: 'Magic',
      path: 'damage/magic.png',
      value: magic
    },
    {
      title: 'Fire',
      path: 'damage/fire.png',
      value: fire
    },
    {
      title: 'Lightning',
      path: 'damage/lightning.png',
      value: lightning
    }
  ]

  return <WeaponTable name={'Damage'} data={data} />
}

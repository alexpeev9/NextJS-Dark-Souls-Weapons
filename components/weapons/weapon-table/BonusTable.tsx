import WeaponTable from './index'
import { Bonus } from '@/utils/types/entities/Weapon'

export default function BonusTable({ bonus }: { bonus: Bonus }) {
  const { strength, dexterity, intelligence, faith } = bonus

  const data = [
    {
      title: 'Strength',
      path: 'requirements/strength.png',
      value: strength
    },
    {
      title: 'Dexterity',
      path: 'requirements/dexterity.png',
      value: dexterity
    },
    {
      title: 'Intelligence',
      path: 'requirements/intelligence.png',
      value: intelligence
    },
    {
      title: 'Faith',
      path: 'requirements/faith.png',
      value: faith
    }
  ]

  return <WeaponTable name={'Bonus'} data={data} />
}

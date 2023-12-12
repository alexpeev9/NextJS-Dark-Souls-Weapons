import WeaponTable from './index'
import { Requirements } from '@/utils/types/entities/Weapon'

export default function RequirementTable({
  requirements
}: {
  requirements: Requirements
}) {
  const { strength, dexterity, intelligence, faith } = requirements

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

  return <WeaponTable name={'Requirements'} data={data} />
}

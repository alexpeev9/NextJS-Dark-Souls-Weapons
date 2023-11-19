export default function Page() {
  const weaponData = {
    requirements: {
      faith: 18,
      strength: 22,
      intelligence: 18,
      dexterity: 18
    },
    category: 'c1cb376964cee52c66a99510',
    weight: 9,
    damage: {
      physical: 160,
      magic: 0,
      lightning: 0,
      fire: 0
    },
    durability: 300,
    name: 'Abyss Greatsword',
    attackType: 'regular',
    bonus: {
      faith: null,
      strength: 'C',
      intelligence: null,
      dexterity: 'C'
    },
    id: '418d1c93-5e9a-430b-ac33-58bfe541e99d'
  }
  return <div>{weaponData.name}</div>
}

export default function CategoriesLayout({
  children
}: {
  children: React.ReactNode
}) {
  const categoriesData = [
    {
      id: 'a1cb37db64cee52c66f99510',
      name: 'Axes',
      description:
        'Axes are a Weapon Category in Dark Souls and Dark Souls Remastered.',
      imageUrl: 'hand_axe.png',
      weapons: ['9c95ece9-cf7e-4216-9325-fd9b581020da']
    },
    {
      id: 'b1cb37db64cee52c66f99510',
      name: 'Bows',
      description:
        'Bows are a Weapon Category in Dark Souls and Dark Souls Remastered.',
      imageUrl: 'black_bow_of_pharis.png',
      weapons: ['cf60c22b-f9e1-4f84-b8a3-109067c0fee3']
    }
  ]
  return (
    <div>
      {categoriesData.map((category, key) => (
        <p key={key}>{category.name}</p>
      ))}
      {children}
    </div>
  )
}

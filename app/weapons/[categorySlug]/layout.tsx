export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const categoryData = {
    id: 'a1cb37db64cee52c66f99510',
    name: 'Axes',
    description:
      'Axes are a Weapon Category in Dark Souls and Dark Souls Remastered.',
    imageUrl: 'hand_axe.png',
    weapons: ['9c95ece9-cf7e-4216-9325-fd9b581020da']
  }

  return (
    <div>
      <div>
        {categoryData.name} - {categoryData.description}
      </div>
      {children}
    </div>
  )
}

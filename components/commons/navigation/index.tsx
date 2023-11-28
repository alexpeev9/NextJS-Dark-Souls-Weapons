import CategoryList from './categoryList'

export default function Navigation() {
  return (
    <nav className='static md:fixed top-28 h-auto md:h-height w-full md:w-72 bg-secondary text-primary py-2 px-3'>
      <ul className='flex flex-col w-50 items-center md:items-start h-20 md:h-full overflow-y-auto overflow-x-hidden bg-primary text-secondary p-2'>
        <CategoryList />
      </ul>
    </nav>
  )
}

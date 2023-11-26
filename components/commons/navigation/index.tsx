import { Suspense } from 'react'
import CategoryList from './categoryList'
import NavigationSkeleton from './navigationSkeleton'

export default function Navigation() {
  return (
    <nav className='h-auto md:h-content w-screen md:w-72 bg-secondary text-primary p-3'>
      <ul className='flex flex-col w-50 items-center md:items-start h-20 md:h-full overflow-y-auto bg-primary text-secondary p-2'>
        <CategoryList />
      </ul>
    </nav>
  )
}

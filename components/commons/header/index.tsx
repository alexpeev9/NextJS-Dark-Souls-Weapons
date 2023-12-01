import Link from 'next/link'
import Icon from '@/components/elements/icon/Icon'

export default function Header() {
  return (
    <header className='flex flex-col md:flex-row static md:fixed justify-center md:justify-between w-full h-auto md:h-28 bg-secondary text-primary col-span-12 px-3 pt-3 md:pt-0'>
      <Link href='/' className='flex flex-col md:flex-row items-center'>
        <Icon icon={'bg-artorias'} />
        <h1 className='text-center underline hover:no-underline text-2xl lg:text-4xl mt-3 md:mt-0'>
          Dark Souls Weapons
        </h1>
      </Link>
      <nav className='flex justify-around items-center text-2xl lg:text-3xl mr-0 md:mr-10 lg:mr-20'>
        <ul className='flex flex-row justify-around w-full py-3 md:py-0'>
          <li className='hover:underline mr-0 md:mr-10'>
            <Link href='/categories'>Categories</Link>
          </li>
          <li className='hover:underline'>
            <Link href='/weapons'>Weapons</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

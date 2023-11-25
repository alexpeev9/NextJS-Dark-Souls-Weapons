import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex flex-col md:flex-row justify-center md:justify-between bg-secondary text-primary col-span-12 p-3'>
      <Link href='/' className='flex flex-col md:flex-row items-center'>
        <i className='bg-artorias-logo rounded-br w-20 h-20' />
        <h1 className='text-center underline'>Dark Souls Weapons</h1>
      </Link>
      <nav className='flex items-center mr-0 md:mr-20'>
        <ul className=''>
          <li className='flex flex-row mr-0 md:mr-10'>
            <Link href='/categories'>Categories</Link>
          </li>
          <li>
            <Link href='/weapons'>Weapons</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

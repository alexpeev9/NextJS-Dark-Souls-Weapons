import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex flex-col md:flex-row static md:fixed justify-center md:justify-between w-full h-auto md:h-28 bg-secondary text-primary col-span-12 px-3 pt-3 md:pt-0'>
      <Link href='/' className='flex flex-col md:flex-row items-center'>
        <i className='bg-artorias-logo bg-no-repeat bg-center rounded-full border-2 w-24 h-24 mr-0 md:mr-5' />
        <h1 className='text-center underline text-2xl lg:text-4xl mt-3 md:mt-0'>
          Dark Souls Weapons
        </h1>
      </Link>
      <nav className='flex justify-around items-center text-2xl lg:text-3xl mr-0 md:mr-10 lg:mr-20'>
        <ul className='flex flex-row justify-around w-full py-3 md:py-0'>
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

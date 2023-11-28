import Link from 'next/link'

export default function Home() {
  return (
    <section className='flex flex-col items-center p-5'>
      <h2 className='uppercase pb-4'>Under Maintenance</h2>
      <p className='pb-2'>
        The site is currently under development. Please be patient, and soon you
        will be able to fully explore it.
      </p>
      <p className='pb-4'>
        While waiting, explore the{' '}
        <Link
          href='https://github.com/alexpeev9/NextJS-Dark-Souls-Weapons'
          rel='noopener noreferrer'
          target='_blank'
          className='font-black'
        >
          GitHub Repository
        </Link>{' '}
        and unravel the mysteries behind this project.
      </p>
      <i className='bg-artorias-logo bg-black bg-no-repeat bg-center rounded-full border-text border-8 w-48 h-48 mr-0 md:mr-5' />
    </section>
  )
}

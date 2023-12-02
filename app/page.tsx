import Icon from '@/components/elements/icon/Icon'
import Paragraph from '@/components/elements/paragraph'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='flex flex-col items-center p-5'>
      <h2 className='text-2xl md:text-3xl hover:line-through pb-4'>
        Under Development
      </h2>
      <Paragraph classes='pb-2'>
        The site is currently under development. Please be patient, and soon you
        will be able to fully explore it.
      </Paragraph>
      <Paragraph classes='pb-4'>
        While waiting, explore the{' '}
        <Link
          href='https://github.com/alexpeev9/NextJS-Dark-Souls-Weapons'
          rel='noopener noreferrer'
          target='_blank'
          className='font-black hover:underline'
        >
          GitHub Repository
        </Link>{' '}
        and unravel the mysteries behind this project.
      </Paragraph>
      <Icon
        icon={'bg-artorias'}
        classes={'bg-black border-8 w-48 h-48 mr-0 md:mr-5'}
      />
    </section>
  )
}

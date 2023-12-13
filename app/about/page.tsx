import Link from 'next/link'
import { Metadata } from 'next'

import Icon from '@/components/elements/icon/Icon'
import Paragraph from '@/components/elements/paragraph'

export const metadata: Metadata = {
  title: 'About'
}

export default function Page() {
  return (
    <section className='flex flex-col items-center p-5'>
      <h2 className='text-2xl md:text-3xl hover:line-through pb-4'>About</h2>
      <Paragraph classes='pb-2'>
        This is a simple site built using <span>NextJS</span> and{' '}
        <span>Tailwind</span>.
      </Paragraph>
      <Paragraph classes='pb-4'>
        Be sure to check out the{' '}
        <Link
          href='https://github.com/alexpeev9/NextJS-Dark-Souls-Weapons'
          rel='noopener noreferrer'
          target='_blank'
          className='font-black hover:underline'
        >
          Source Code
        </Link>{' '}
        of this project and unravel the mysteries behind it.
      </Paragraph>
      <Icon
        icon={'bg-artorias'}
        classes={'bg-black border-8 w-48 h-48 mr-0 md:mr-5'}
      />
    </section>
  )
}

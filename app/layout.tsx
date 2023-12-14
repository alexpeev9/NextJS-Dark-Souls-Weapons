import { Metadata } from 'next'

import HtmlWrapper, { Main } from '@/components/commons/html-wrapper'
import Header from '@/components/commons/header'
import Navigation from '@/components/commons/navigation'
import ErrorPopup from '@/components/commons/header/error-popup'

import './globals.css'
import { ErrorProvider } from '@/utils/contexts/ErrorContext'

export const metadata: Metadata = {
  title: {
    template: '%s | DSW',
    default: 'Dark Souls Weapons'
  },
  description:
    'Web application built with NextJS featuring a PostgreSQL API and styled with Tailwind CSS.',
  openGraph: {
    images: {
      url: '/logo.png'
    }
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <HtmlWrapper>
      <ErrorProvider>
        <Header />
        <Navigation />
        <ErrorPopup />
        <Main>{children}</Main>
      </ErrorProvider>
    </HtmlWrapper>
  )
}

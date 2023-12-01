import './globals.css'
import { ErrorProvider } from '@/utils/contexts/ErrorContext'

import HtmlWrapper, { Main } from '@/components/commons/html-wrapper'
import Header from '@/components/commons/header'
import Navigation from '@/components/commons/navigation'
import ErrorPopup from '@/components/commons/header/error-popup'

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

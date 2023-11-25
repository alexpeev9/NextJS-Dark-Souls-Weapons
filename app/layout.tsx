import './globals.css'
import { ErrorProvider } from '@/utils/contexts/ErrorContext'

import Header from '@/components/commons/header'
import Navigation from '@/components/commons/navigation'
import ErrorPopup from '@/components/commons/header/error-popup'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='grid'>
        <ErrorProvider>
          <Header />
          <Navigation />
          <ErrorPopup />
          {children}
        </ErrorProvider>
      </body>
    </html>
  )
}

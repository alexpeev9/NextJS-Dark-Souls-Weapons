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
      <body className='flex flex-col bg-primary'>
        <ErrorProvider>
          <Header />
          <Navigation />
          <ErrorPopup />
          <main className='border-t-8 border-secondary py-2 px-4 md:px-8 mt-0 md:mt-28 ml-0 md:ml-72'>
            {children}
          </main>
        </ErrorProvider>
      </body>
    </html>
  )
}

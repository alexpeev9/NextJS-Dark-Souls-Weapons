import Navigation from '@/components/navigation'
import './global.scss'

import { ErrorProvider } from '@/utils/contexts/ErrorContext'
import Header from '@/components/header'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ErrorProvider>
          <Header />
          <Navigation />
          {children}
        </ErrorProvider>
      </body>
    </html>
  )
}

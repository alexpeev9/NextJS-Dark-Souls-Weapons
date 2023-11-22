import './global.scss'

import Navigation from '@/components/navigation'
import Provider from '@/components/provider'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <Navigation />
          {children}
        </Provider>
      </body>
    </html>
  )
}

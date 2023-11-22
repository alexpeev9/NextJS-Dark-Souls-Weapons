import type { Metadata } from 'next'
import './global.scss'
import Navigation from '@/components/navigation'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const metadata: Metadata = {
  title: {
    template: '%s | DS Calculator',
    default: 'Dark Souls Calculator'
  },
  description: 'Simple dark souls weapon calculator, built with Next.js.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={queryClient}>
          <Navigation />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}

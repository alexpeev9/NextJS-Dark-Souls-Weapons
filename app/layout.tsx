import type { Metadata } from 'next'
import './assets/styles/global.scss'

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
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

import Main from './main'

export default function HtmlWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col bg-primary'>{children}</body>
    </html>
  )
}

export { Main }

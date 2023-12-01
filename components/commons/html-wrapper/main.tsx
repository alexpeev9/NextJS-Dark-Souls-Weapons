export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className='border-t-8 border-secondary py-2 px-4 md:px-8 mt-0 md:mt-28 ml-0 md:ml-72'>
      {children}
    </main>
  )
}

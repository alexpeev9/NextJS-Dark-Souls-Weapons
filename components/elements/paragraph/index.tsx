export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className='indent-3 md:indent-10'>{children}</p>
}

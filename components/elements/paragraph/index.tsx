export default function Paragraph({
  children,
  classes
}: {
  children: React.ReactNode
  classes?: string
}) {
  return <p className={`indent-3 md:indent-10 ${classes}`}>{children}</p>
}

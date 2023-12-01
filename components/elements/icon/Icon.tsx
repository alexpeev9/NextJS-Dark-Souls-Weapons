interface IconData {
  icon: string
  classes?: string
}

export default function Icon({ icon, classes }: IconData) {
  return (
    <i
      className={`${icon} bg-no-repeat bg-center rounded-full border-text ${
        classes || 'border-2 w-24 h-24  mr-0 md:mr-5'
      }`}
    />
  )
}

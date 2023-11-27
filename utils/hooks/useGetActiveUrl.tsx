import { usePathname } from 'next/navigation'

export default function UseGetActiveUrl(position: number, classToSet: string) {
  const currentPath = usePathname()
  const pathVariable = currentPath.split('/')[position]
  const setActiveClass = (slug: string) =>
    pathVariable == slug ? ` ${classToSet}` : ''

  return { setActiveClass, pathVariable }
}

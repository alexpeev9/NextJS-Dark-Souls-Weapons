import WeaponList from "@/components/weapons/weapon-list"

export default function Home({
  searchParams
}: {
  searchParams?: {
    page?: string
  }
}) {
  const currentPage = Number(searchParams?.page)

  return <WeaponList currentPage={currentPage} />
}

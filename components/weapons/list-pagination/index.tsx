import Link from 'next/link'
import useAxios from '@/utils/hooks/useFetch'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import PagesVM from '@/utils/types/viewModels/PagesVM'

export default function ListPagination({
  currentPage
}: {
  currentPage: number
}) {
  const { data: weaponsPages }: DataFetchState<PagesVM> =
    useAxios<PagesVM>(`/weapons/pages-count`)

  const buttonLinks =
    weaponsPages &&
    Array.from({ length: weaponsPages.count }).map((_, i: number) => {
      let page = i + 1
      return (
        <Link
          href={`/weapons?page=${page}`}
          key={i}
          className={`p-3 m-3 text-center rounded ${
            currentPage === page ? 'bg-primary text-secondary underline' : ''
          }`}
        >
          {page}
        </Link>
      )
    })

  return (
    <section className='flex justify-center my-3'>
      <div className='grid auto-rows-max grid-cols-4 md:grid-cols-6 bg-secondary text-primary rounded py-3'>
        {buttonLinks}
      </div>
    </section>
  )
}

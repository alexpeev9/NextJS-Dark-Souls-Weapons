import Link from 'next/link'
import useAxios from '@/utils/hooks/useFetch'
import DataFetchState from '@/utils/types/commons/DataFetchState'
import PagesVM, { PageVM } from '@/utils/types/viewModels/PagesVM'

export default function ListPagination({
  currentPage
}: {
  currentPage: number
}) {
  const { data: weaponsPages }: DataFetchState<PagesVM> =
    useAxios<PagesVM>(`/weapons?count=true`)

  return (
    <section className='flex justify-center my-3'>
      <div className='grid auto-rows-max grid-cols-4 md:grid-cols-6 bg-secondary text-primary rounded py-3'>
        {weaponsPages &&
          weaponsPages.pages.map((page: PageVM, i: number) => (
            <Link
              href={`/weapons?page=${page.value}`}
              key={i}
              className={`p-3 m-3 text-center rounded ${
                currentPage === page.value
                  ? 'bg-primary text-secondary underline'
                  : ''
              }`}
            >
              {page.value}
            </Link>
          ))}
      </div>
    </section>
  )
}

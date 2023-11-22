import { useQuery } from '@tanstack/react-query'

import { fetcher } from '@/utils/fetcher'
import NavigationLink from '@/utils/types/NavigationLink'

const fetchCategoryLinks = async () => {
  return await fetcher<NavigationLink[]>('/api/categsories/list', {
    method: 'GET'
  })
}

const useGetCategoryLinks = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategoryLinks
  })

export default useGetCategoryLinks

import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import { useErrorContext } from '../contexts/ErrorContext'

type MethodTypes = 'get' | 'post' | 'put' | 'patch' | 'delete'

// Define a generic type for the useFetch result
type UseFetchResult<T> = {
  setRequestData: React.Dispatch<React.SetStateAction<T | null>>
  responseData: T | null
  loading: boolean
}

const useFetch = <T,>({
  method,
  url
}: {
  method: MethodTypes
  url: string
}): UseFetchResult<T> => {
  const [requestData, setRequestData] = useState<T | null>(null)
  const [responseData, setResponseData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { setError: setGlobalError } = useErrorContext()
  useEffect(() => {
    const fetchData = async () => {
      const isNotGetMethod = method !== 'get'
      if (requestData || isNotGetMethod) {
        return
      }
      try {
        setLoading(true)
        const result = await axios({
          method,
          url: `/api/${url}`,
          data: requestData,
          withCredentials: true
        })
        setResponseData(result.data)
      } catch (error: any) {
        var errorMessage = error.response && error.response.data.message
        setGlobalError(
          errorMessage || 'Something went wrong! Please try again later'
        )
      } finally {
        if (isNotGetMethod) {
          setRequestData(null)
        }
        setLoading(false)
      }
    }
    fetchData()
  }, [requestData, url, method])

  return { setRequestData, responseData, loading }
}

export default useFetch

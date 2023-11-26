import { useEffect, useRef, useState } from 'react'
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
  const [loading, setLoading] = useState<boolean>(false)
  const { setError: setGlobalError } = useErrorContext()
  useEffect(() => {
    const source = axios.CancelToken.source()

    const isNotGetMethod = method !== 'get'
    if (requestData || isNotGetMethod) {
      return
    }

    setLoading(true)

    const config: AxiosRequestConfig = {
      method,
      url: `/api/${url}`,
      data: requestData,
      withCredentials: true,
      cancelToken: source.token
    }

    axios(config)
      .then((res) => {
        setResponseData(res.data)
      })
      .catch((error) => {
        var errorMessage = error.response && error.response.data.message
        setGlobalError(
          errorMessage || 'Something went wrong! Please try again later'
        )
      })
      .finally(() => {
        if (isNotGetMethod) {
          setRequestData(null)
        }
        setLoading(false)
      })

    // Cleanup function
    return () => {
      source.cancel('Request canceled due to component unmount')
    }
  }, [requestData, url, method, setGlobalError])

  return { setRequestData, responseData, loading }
}

export default useFetch

import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig, CancelTokenSource } from 'axios'

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
  let cancelTokenSource: CancelTokenSource | null = null
  const [requestData, setRequestData] = useState<T | null>(null)
  const [responseData, setResponseData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { setError: setGlobalError } = useErrorContext()

  useEffect(() => {
    // Cleanup validation to cancel double request from strict mode
    if (cancelTokenSource) {
      cancelTokenSource.cancel()
    }
    cancelTokenSource = axios.CancelToken.source()

    const isGetMethod = method === 'get'
    const config: AxiosRequestConfig = {
      method,
      url: `http://localhost:3000/api/${url}`,
      data: requestData,
      withCredentials: true,
      cancelToken: cancelTokenSource.token
    }

    if (isGetMethod || requestData) {
      axios(config)
        .then((res) => {
          setResponseData(res.data)
        })
        .catch((error) => {
          setGlobalError(
            error.response
              ? `${error.response.data.message}`
              : 'Something went wrong! Please try again later'
          )
        })
        .finally(() => {
          if (!isGetMethod) {
            setRequestData(null)
          }
          setLoading(false)
        })
    }
  }, [requestData, url, method, setGlobalError])

  return { setRequestData, responseData, loading }
}

export default useFetch

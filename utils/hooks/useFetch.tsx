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
  const isFetchingRef = useRef(false)
  const [requestData, setRequestData] = useState<T | null>(null)
  const [responseData, setResponseData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { setError: setGlobalError } = useErrorContext()
  useEffect(() => {
    const isNotGetMethod = method !== 'get'
    if (isFetchingRef.current || requestData || isNotGetMethod) {
      return
    }

    // Set useRef value to true, and prevent from second render
    isFetchingRef.current = true
    setLoading(true)

    const config: AxiosRequestConfig = {
      method,
      url: `/api/${url}`,
      data: requestData,
      withCredentials: true
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
        isFetchingRef.current = false
        setLoading(false)
      })
  }, [requestData, url, method, setGlobalError])

  return { setRequestData, responseData, loading }
}

export default useFetch

import axios from 'axios'
import { useReducer, useEffect, Reducer } from 'react'
import DataFetchState from '../types/commons/DataFetchState'

// Define action types
const FETCH_INIT = 'FETCH_INIT'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'

// Define the action types
type FetchInitAction = { type: typeof FETCH_INIT }
type FetchSuccessAction<T> = { type: typeof FETCH_SUCCESS; payload: T }
type FetchFailureAction = { type: typeof FETCH_FAILURE; payload: string }

type DataFetchAction<T> =
  | FetchInitAction
  | FetchSuccessAction<T>
  | FetchFailureAction

// Reducer function to handle state transitions
const dataFetchReducer = <T,>(
  state: DataFetchState<T>,
  action: DataFetchAction<T>
): DataFetchState<T> => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null }
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      throw new Error('Unhandled action type')
  }
}

// Custom hook that encapsulates data fetching logic
const useFetch = <T,>(url: string) => {
  const [state, dispatch] = useReducer(
    dataFetchReducer as Reducer<DataFetchState<T>, DataFetchAction<T>>,
    {
      data: null,
      loading: false,
      error: null
    } as DataFetchState<T>
  )

  useEffect(() => {
    let isCanceled = false

    const fetchData = async () => {
      dispatch({ type: FETCH_INIT })

      try {
        const result = await axios({
          method: 'get',
          url: `/api/${url}`,
          withCredentials: true
        })
        const data: T = result.data

        if (!isCanceled) {
          dispatch({ type: FETCH_SUCCESS, payload: data })
        }
      } catch (error: any) {
        if (!isCanceled) {
          dispatch({ type: FETCH_FAILURE, payload: error.message })
        }
      }
    }

    fetchData()

    return () => {
      isCanceled = true
    }
  }, [url])

  return state
}

export default useFetch

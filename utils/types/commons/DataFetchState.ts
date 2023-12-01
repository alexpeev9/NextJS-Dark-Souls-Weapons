export default interface DataFetchState<T> {
  data: T
  loading: boolean
  error: string | null
}

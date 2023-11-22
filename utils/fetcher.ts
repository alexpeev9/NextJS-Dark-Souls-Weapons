import { HTTPMethod } from './types/HTTPMethod'

type FetcherConfig = {
  readonly method: HTTPMethod
  readonly body?: object
  readonly config?: RequestInit
}

export async function fetcher<Schema>(
  path: string,
  { method, body, config }: FetcherConfig
) {
  try {
    const response = await fetch(path, {
      ...config,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method,
      ...(body && { body: JSON.stringify(body) })
    })
    const data: Schema = await response.json()
    return data
  } catch (err) {
    throw new Error('Something went wrong!')
  }
}

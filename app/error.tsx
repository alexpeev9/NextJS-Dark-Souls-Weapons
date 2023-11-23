'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <h2 className='text-center'>An Error Occured!</h2>
      <button className='' onClick={() => reset()}>
        Try again
      </button>
    </main>
  )
}

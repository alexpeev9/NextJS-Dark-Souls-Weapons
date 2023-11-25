'use client'

import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  return (
    <main>
      <h2 className='text-center'>An Error Occured!</h2>
    </main>
  )
}

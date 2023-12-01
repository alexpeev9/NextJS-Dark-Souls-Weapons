'use client'

import { useErrorContext } from '@/utils/contexts/ErrorContext'

const ErrorPopup = () => {
  const { error, setError } = useErrorContext()
  const handleClick = () => {
    setError(null)
  }

  return (
    error && (
      <div className='fixed z-20 w-full h-full flex justify-center items-center'>
        <div className='relative bg-secondary text-primary p-10 rounded'>
          <h5 className='my-2'>An Error Occured!</h5>
          <p className='underline'>{error}</p>
          <button
            onClick={handleClick}
            className='absolute top-0 right-0 mt-2 mr-6'
          >
            X
          </button>
        </div>
      </div>
    )
  )
}

export default ErrorPopup

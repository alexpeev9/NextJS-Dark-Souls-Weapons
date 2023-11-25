'use client'

import { useErrorContext } from '@/utils/contexts/ErrorContext'

const ErrorPopup = () => {
  const { error, setError } = useErrorContext()
  const handleClick = () => {
    setError(null)
  }

  return (
    error && (
      <div>
        <span>{error}</span>
        <button onClick={handleClick}>X</button>
      </div>
    )
  )
}

export default ErrorPopup

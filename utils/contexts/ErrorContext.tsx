'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const milliseconds = 100
const ErrorContext = createContext<any | null>(null)

export const useErrorContext = () => useContext(ErrorContext)

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState(null)
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), milliseconds)
    }
  }, [error])

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  )
}

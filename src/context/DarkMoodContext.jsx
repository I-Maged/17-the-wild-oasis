import { createContext, useEffect } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkMoodContext = createContext()

function DarkMoodProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode')

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.add('light-mode')
      document.documentElement.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  return (
    <DarkMoodContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkMoodContext.Provider>
  )
}

export { DarkMoodProvider, DarkMoodContext }

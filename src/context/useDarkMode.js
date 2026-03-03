import { useContext } from 'react'
import { DarkMoodContext } from './DarkMoodContext'

export function useDarkMode() {
  const context = useContext(DarkMoodContext)

  if (context === undefined) {
    throw new Error('Dark Mood Context was used outside of Dark Mood provider')
  }

  return context
}

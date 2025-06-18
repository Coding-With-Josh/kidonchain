"use client"

import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light'|'dark' || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}   
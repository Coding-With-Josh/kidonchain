"use client"

import { useState, useEffect } from 'react'
import { useAudioManager } from '@/components/sections/hero/audio-manager'

export function useVolumeCheck() {
  const { volume, checkVolume } = useAudioManager()
  const [volumeChecked, setVolumeChecked] = useState(false)

  useEffect(() => {
    const handleUserInteraction = () => {
      checkVolume()
      setVolumeChecked(true)
      window.removeEventListener('click', handleUserInteraction)
    }

    window.addEventListener('click', handleUserInteraction)
    return () => window.removeEventListener('click', handleUserInteraction)
  }, [checkVolume])

  return { volume, volumeChecked }
}
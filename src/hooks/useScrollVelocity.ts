import { useEffect, useRef, useState } from 'react'

export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0)
  const lastScrollY = useRef(0)
  const lastTimestamp = useRef(0)

  useEffect(() => {
    let rafId: number

    const updateVelocity = () => {
      const now = performance.now()
      const currentScrollY = window.scrollY
      
      if (lastTimestamp.current !== 0) {
        const deltaY = currentScrollY - lastScrollY.current
        const deltaTime = now - lastTimestamp.current
        const currentVelocity = Math.abs(deltaY / deltaTime)
        
        setVelocity(currentVelocity)
      }
      
      lastScrollY.current = currentScrollY
      lastTimestamp.current = now
      
      rafId = requestAnimationFrame(updateVelocity)
    }

    rafId = requestAnimationFrame(updateVelocity)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return velocity
}
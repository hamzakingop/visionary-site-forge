import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

interface MagneticCursorProps {
  children: React.ReactNode
}

const MagneticCursor = ({ children }: MagneticCursorProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('magnetic') || target.closest('.magnetic')) {
        setIsHovered(true)
        setCursorVariant('hover')
      }
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setCursorVariant('default')
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [cursorX, cursorY])

  const variants = {
    default: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.5,
      opacity: 0.8,
    }
  }

  return (
    <>
      {children}
      
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Main cursor dot */}
        <motion.div
          className="w-full h-full bg-white rounded-full"
          variants={variants}
          animate={cursorVariant}
        />
        
        {/* Orbiting dot */}
        <motion.div
          className="absolute w-2 h-2 bg-primary rounded-full"
          animate={{
            x: [0, 24, 0, -24, 0],
            y: [0, -24, 0, 24, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </>
  )
}

// Magnetic wrapper component
export const MagneticButton = ({ children, className = '', ...props }: any) => {
  const ref = useRef<HTMLElement>(null)
  const [magneticStrength] = useState(0.4)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * magneticStrength
      const deltaY = (e.clientY - centerY) * magneticStrength
      
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [magneticStrength])

  return (
    <div
      ref={ref}
      className={`magnetic transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default MagneticCursor
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface KineticTextProps {
  text: string
  className?: string
  variant?: 'particle' | 'blur' | 'typewriter'
  delay?: number
}

const KineticText = ({ 
  text, 
  className = '', 
  variant = 'particle',
  delay = 0 
}: KineticTextProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayText, setDisplayText] = useState('')
  
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [0, 300], [0, 5])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  // Typewriter effect
  useEffect(() => {
    if (variant === 'typewriter' && isInView) {
      let index = 0
      const timer = setInterval(() => {
        setDisplayText(text.slice(0, index))
        index++
        if (index > text.length) {
          clearInterval(timer)
        }
      }, 50)
      
      return () => clearInterval(timer)
    }
  }, [isInView, text, variant])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.05,
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.3,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  }

  const particleVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  if (variant === 'typewriter') {
    return (
      <div ref={ref} className={`${className} font-mono`}>
        <span>{displayText}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="text-primary"
        >
          |
        </motion.span>
      </div>
    )
  }

  if (variant === 'blur') {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ 
          filter: `blur(${blur}px)`,
          opacity 
        }}
      >
        {text}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} perspective-1000`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={variant === 'particle' ? particleVariants : letterVariants}
          className="inline-block"
          style={{ transformOrigin: '50% 50%' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default KineticText
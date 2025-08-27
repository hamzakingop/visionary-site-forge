import React from 'react'
import { Button } from "@/components/ui/button"
import { MagneticButton } from "./MagneticCursor"
import { cn } from "@/lib/utils"

interface OptimizedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient' | 'glass'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children: React.ReactNode
  className?: string
  magnetic?: boolean
}

const OptimizedButton = React.forwardRef<HTMLButtonElement, OptimizedButtonProps>(
  ({ className, variant = "default", size = "default", magnetic = true, children, ...props }, ref) => {
    const ButtonComponent = (
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300 group",
          variant === 'gradient' && "bg-gradient-primary text-primary-foreground hover:opacity-90",
          variant === 'glass' && "bg-card/20 backdrop-blur-md border border-glass-border text-foreground hover:bg-card/30",
          className
        )}
        variant={variant === 'gradient' || variant === 'glass' ? 'default' : variant}
        size={size}
        ref={ref}
        {...props}
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        <span className="relative z-10">
          {children}
        </span>
      </Button>
    )

    if (magnetic) {
      return (
        <MagneticButton className="inline-block">
          {ButtonComponent}
        </MagneticButton>
      )
    }

    return ButtonComponent
  }
)

OptimizedButton.displayName = "OptimizedButton"

export { OptimizedButton }
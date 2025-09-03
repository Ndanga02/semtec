import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'glass' | 'border'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: 'div' | 'article' | 'section'
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className,
  variant = 'default',
  padding = 'md',
  as: Component = 'div',
  ...props
}, ref) => {
  const baseClasses = 'rounded-2xl border border-semtex-hairline'
  
  const variantClasses = {
    default: 'bg-semtex-panel/50 shadow-soft',
    hover: 'bg-semtex-panel/50 shadow-soft hover:border-semtex-muted-ink/20 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer',
    glass: 'bg-semtex-panel/80 backdrop-blur-md border-semtex-hairline/50 shadow-soft',
    border: 'bg-transparent border-semtex-hairline hover:border-semtex-muted-ink/40 transition-colors'
  }

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <Component
      ref={ref as any}
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
})

Card.displayName = 'Card'

export default Card
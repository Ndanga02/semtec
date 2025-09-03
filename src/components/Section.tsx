import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div' | 'article' | 'aside'
  container?: boolean
  containerSize?: 'default' | 'narrow' | 'wide'
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className,
  as: Component = 'section',
  container = true,
  containerSize = 'default',
  ...props
}, ref) => {
  const containerClasses = {
    default: 'container-semtex',
    narrow: 'container-narrow',
    wide: 'container-wide'
  }

  return (
    <Component
      ref={ref as any}
      className={className}
      {...props}
    >
      {container ? (
        <div className={containerClasses[containerSize]}>
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  )
})

Section.displayName = 'Section'

export default Section
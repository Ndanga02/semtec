import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

const Loading = ({ size = 'md', text, className }: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const containerSizeClasses = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  }

  return (
    <div className={cn('flex flex-col items-center justify-center', containerSizeClasses[size], className)}>
      <div className="relative">
        <motion.div
          className={cn('border-2 border-gray-200 rounded-full', sizeClasses[size])}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          style={{
            borderTopColor: '#000000'
          }}
        />
      </div>
      
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={cn(
            'text-gray-600 text-center',
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
          )}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

// Full page loading spinner
export const PageLoading = ({ text = 'Loading...' }: { text?: string }) => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <Loading size="lg" text={text} />
  </div>
)

// Button loading state
export const ButtonLoading = ({ className }: { className?: string }) => (
  <Loading size="sm" className={cn('text-current', className)} />
)

export default Loading
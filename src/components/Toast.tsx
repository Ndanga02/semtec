import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react'
import { cn } from '@/lib/cn'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

// Toast Provider Component
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...toast, id }
    
    setToasts(prev => [...prev, newToast])

    // Auto remove toast after duration
    setTimeout(() => {
      removeToast(id)
    }, toast.duration || 5000)
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

// Hook to use toast functionality
export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

// Individual Toast Component
function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 5000)

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove])

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertCircle
  }

  const styles = {
    success: {
      bg: 'bg-green-500/10 border-green-500/20',
      icon: 'text-green-400',
      title: 'text-green-300'
    },
    error: {
      bg: 'bg-red-500/10 border-red-500/20',
      icon: 'text-red-400',
      title: 'text-red-300'
    },
    info: {
      bg: 'bg-semtex-focus/10 border-semtex-focus/20',
      icon: 'text-semtex-focus',
      title: 'text-semtex-focus'
    },
    warning: {
      bg: 'bg-yellow-500/10 border-yellow-500/20',
      icon: 'text-yellow-400',
      title: 'text-yellow-300'
    }
  }

  const Icon = icons[toast.type]
  const style = styles[toast.type]

  const handleRemove = () => {
    setIsVisible(false)
    setTimeout(() => onRemove(toast.id), 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.3 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
          className={cn(
            'relative max-w-sm w-full border rounded-2xl p-4 shadow-soft-lg backdrop-blur-sm',
            style.bg
          )}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Icon className={cn('h-5 w-5', style.icon)} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className={cn('text-sm font-medium', style.title)}>
                {toast.title}
              </h4>
              {toast.description && (
                <p className="text-sm text-semtex-muted-ink mt-1">
                  {toast.description}
                </p>
              )}
            </div>

            <button
              onClick={handleRemove}
              className="flex-shrink-0 p-1 hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
              aria-label="Close notification"
            >
              <X className="h-4 w-4 text-semtex-muted-ink" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Toast Container Component
function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 space-y-2"
      role="region"
      aria-label="Notifications"
    >
      <AnimatePresence>
        {toasts.map(toast => (
          <ToastItem 
            key={toast.id} 
            toast={toast} 
            onRemove={removeToast} 
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Helper functions for common toast types
export const toast = {
  success: (title: string, description?: string) => ({
    type: 'success' as const,
    title,
    description
  }),
  
  error: (title: string, description?: string) => ({
    type: 'error' as const,
    title,
    description
  }),
  
  info: (title: string, description?: string) => ({
    type: 'info' as const,
    title,
    description
  }),
  
  warning: (title: string, description?: string) => ({
    type: 'warning' as const,
    title,
    description
  })
}
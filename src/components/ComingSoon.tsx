import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Mail, CheckCircle, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/cn'
import { useAnalytics } from '@/lib/analytics'
import Card from './Card'

interface ComingSoonProps {
  title: string
  description: string
  features?: string[]
  expectedDate?: string
  className?: string
  showEarlyAccess?: boolean
}

const earlyAccessSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters')
})

type EarlyAccessData = z.infer<typeof earlyAccessSchema>

const ComingSoon = ({
  title,
  description,
  features = [],
  expectedDate,
  className,
  showEarlyAccess = true
}: ComingSoonProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { formSubmit } = useAnalytics()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<EarlyAccessData>({
    resolver: zodResolver(earlyAccessSchema)
  })

  const onSubmit = async (data: EarlyAccessData) => {
    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Early access signup:', data)
      formSubmit('early_access', { product: title, ...data })
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Early access signup failed:', error)
    }
  }

  return (
    <div className={cn("space-y-8", className)}>
      
      {/* Coming Soon Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-semtex-focus/20 via-semtex-focus/10 to-transparent border border-semtex-focus/30 rounded-2xl p-6"
      >
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-semtex-focus/20 rounded-lg">
            <Clock className="h-6 w-6 text-semtex-focus" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-display-md">{title}</h2>
              <span className="px-3 py-1 text-sm font-medium bg-semtex-focus/20 text-semtex-focus rounded-full">
                Coming Soon
              </span>
            </div>
            <p className="text-body text-semtex-muted-ink mb-4">
              {description}
            </p>
            {expectedDate && (
              <p className="text-sm text-semtex-muted-ink">
                Expected launch: <span className="font-medium text-semtex-ink">{expectedDate}</span>
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Features Preview */}
      {features.length > 0 && (
        <Card className="p-6">
          <h3 className="text-display-xs mb-4">What to expect:</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-semtex-focus mt-0.5 flex-shrink-0" />
                <span className="text-body-sm text-semtex-muted-ink">{feature}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      )}

      {/* Early Access Form */}
      {showEarlyAccess && (
        <Card className="p-6">
          {!isSubmitted ? (
            <>
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-5 w-5 text-semtex-ink" />
                <h3 className="text-display-xs">Get Early Access</h3>
              </div>
              <p className="text-body-sm text-semtex-muted-ink mb-6">
                Be the first to know when {title} launches. We'll send you updates on our progress 
                and give you priority access when we're ready.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register('name')}
                      placeholder="Your name"
                      className={cn(
                        'input-base',
                        errors.name && 'border-red-500 focus:ring-red-500'
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="your@email.com"
                      className={cn(
                        'input-base',
                        errors.email && 'border-red-500 focus:ring-red-500'
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Signing up...' : 'Get Early Access'}</span>
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-display-xs mb-2">You're on the list!</h3>
              <p className="text-body-sm text-semtex-muted-ink">
                We'll notify you as soon as {title} is ready for early access.
              </p>
            </motion.div>
          )}
        </Card>
      )}
    </div>
  )
}

export default ComingSoon
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/cn'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  rating?: number
  avatar?: string
  className?: string
}

const Testimonial = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatar,
  className
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative p-6 bg-semtex-panel/50 border border-semtex-hairline rounded-2xl shadow-soft backdrop-blur-sm",
        "hover:border-semtex-muted-ink/20 hover:shadow-soft-lg transition-all duration-300",
        className
      )}
    >
      
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote className="h-8 w-8 text-semtex-ink" />
      </div>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-semtex-hairline'
              )}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-semtex-ink mb-6 relative z-10">
        <p className="text-base leading-relaxed">
          "{quote}"
        </p>
      </blockquote>

      {/* Author info */}
      <div className="flex items-center space-x-3">
        
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={`${author} avatar`}
              className="w-10 h-10 rounded-full object-cover border border-semtex-hairline"
            />
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-semtex-focus/20 to-semtex-muted-ink/20 rounded-full border border-semtex-hairline flex items-center justify-center">
              <span className="text-sm font-medium text-semtex-ink">
                {author.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Author details */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-semtex-ink text-sm truncate">
            {author}
          </h4>
          <p className="text-sm text-semtex-muted-ink truncate">
            {role}
          </p>
          <p className="text-xs text-semtex-muted-ink/70 truncate">
            {company}
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-semtex-focus/5 via-transparent to-semtex-muted-ink/5 rounded-2xl pointer-events-none" />
    </motion.div>
  )
}

export default Testimonial
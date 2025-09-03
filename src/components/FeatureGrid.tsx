import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  className?: string
}

const FeatureGrid = ({ features, className }: FeatureGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8", className)}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon

        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            <div className="card-base p-6 h-full transition-all duration-300 group-hover:border-semtex-muted-ink/20 group-hover:shadow-soft-lg group-hover:-translate-y-1">
              
              {/* Icon */}
              <div className="w-12 h-12 bg-semtex-ink/10 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-semtex-ink/15">
                <Icon className="h-6 w-6 text-semtex-ink" />
              </div>

              {/* Content */}
              <h3 className="text-display-xs mb-3 group-hover:text-semtex-ink transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-body-sm text-semtex-muted-ink group-hover:text-semtex-muted-ink/90 transition-colors">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute inset-0 bg-gradient-to-r from-semtex-focus/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default FeatureGrid
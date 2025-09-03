import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { cn } from '@/lib/cn'

interface HeroProps {
  headline: string
  subheadline: string
  primaryCTA: {
    label: string
    onClick: () => void
  }
  secondaryCTA?: {
    label: string
    onClick: () => void
    icon?: React.ElementType
  }
  showPlayButton?: boolean
  onPlayClick?: () => void
  className?: string
}

const Hero = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  showPlayButton,
  onPlayClick,
  className
}: HeroProps) => {
  return (
    <section className={cn("relative pt-24 pb-16 lg:pt-32 lg:pb-24", className)}>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-semtex-bg via-semtex-panel/50 to-semtex-bg -z-10" />
      
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-10">
        <div className="grid-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-semtex-ink/20 h-full" />
          ))}
        </div>
      </div>

      <div className="container-semtex relative">
        <div className="grid-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-8 xl:col-span-7">
            
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 lg:space-y-8"
            >
              
              {/* Headline */}
              <h1 className="text-display-xl lg:text-display-2xl gradient-text">
                {headline}
              </h1>

              {/* Subheadline */}
              <p className="text-body-lg lg:text-xl text-semtex-muted-ink max-w-2xl leading-relaxed">
                {subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={primaryCTA.onClick}
                  className="btn-primary text-base px-6 py-3 shadow-glow"
                >
                  {primaryCTA.label}
                </motion.button>

                {/* Secondary CTA */}
                {secondaryCTA && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={secondaryCTA.onClick}
                    className="btn-secondary text-base px-6 py-3 inline-flex items-center space-x-2"
                  >
                    <span>{secondaryCTA.label}</span>
                    {secondaryCTA.icon && (
                      <secondaryCTA.icon className="h-4 w-4" />
                    )}
                  </motion.button>
                )}

                {/* Play button */}
                {showPlayButton && onPlayClick && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onPlayClick}
                    className="ml-4 w-12 h-12 bg-semtex-ink/10 hover:bg-semtex-ink/20 rounded-full flex items-center justify-center transition-colors focus-ring"
                    aria-label="Play demo video"
                  >
                    <Play className="h-5 w-5 text-semtex-ink ml-0.5" />
                  </motion.button>
                )}
              </div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center space-x-6 pt-4 text-sm text-semtex-muted-ink"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gradient-to-br from-semtex-focus to-semtex-muted-ink rounded-full border-2 border-semtex-bg"
                      />
                    ))}
                  </div>
                  <span>10,000+ learners</span>
                </div>
                <div className="h-4 w-px bg-semtex-hairline" />
                <span>Made in Johannesburg</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero visual placeholder */}
          <div className="col-span-4 md:col-span-6 lg:col-span-4 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-64 sm:h-80 lg:h-96 mt-8 lg:mt-0"
            >
              
              {/* Placeholder for hero visual */}
              <div className="w-full h-full bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
                
                {/* Mock interface elements */}
                <div className="absolute inset-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500/60 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500/60 rounded-full" />
                    <div className="w-3 h-3 bg-green-500/60 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-semtex-ink/20 rounded-full w-3/4" />
                    <div className="h-3 bg-semtex-ink/10 rounded-full w-1/2" />
                    <div className="h-3 bg-semtex-ink/20 rounded-full w-2/3" />
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="h-8 bg-semtex-ink/10 rounded-lg" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-6 bg-semtex-ink/5 rounded" />
                      <div className="h-6 bg-semtex-ink/5 rounded" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 right-8 w-16 h-16 bg-semtex-focus/10 border border-semtex-focus/20 rounded-xl backdrop-blur-sm"
                />

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-12 left-8 w-12 h-12 bg-semtex-ink/10 border border-semtex-ink/20 rounded-lg backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
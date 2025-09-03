import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
  title?: string
  subtitle?: string
}

const FAQ = ({ 
  items, 
  className,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our platform"
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("space-y-8", className)}>
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-display-lg mb-4">{title}</h2>
        <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="card-base overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-semtex-focus focus:ring-inset"
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-semtex-ink pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-semtex-muted-ink transition-transform duration-200 flex-shrink-0',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-semtex-hairline pt-4">
                      <p className="text-body-sm text-semtex-muted-ink leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
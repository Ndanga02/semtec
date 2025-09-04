import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Workflow, 
  ScanLine, 
  Puzzle, 
  MessageSquare, 
  FileText, 
  BarChart3,
  ArrowRight 
} from 'lucide-react'
import { cn } from '@/lib/cn'
import { useAnalytics } from '@/lib/analytics'

interface MenuSection {
  title: string
  description: string
  icon: React.ElementType
  items: MenuItem[]
}

interface MenuItem {
  label: string
  href: string
  description: string
  isComingSoon?: boolean
}

const MegaMenu = () => {
  const { buttonClick } = useAnalytics()

  const menuSections: MenuSection[] = [
    {
      title: 'LMS',
      description: 'Current flagship product',
      icon: GraduationCap,
      items: [
        {
          label: 'Learning Management System',
          href: '/products/lms',
          description: 'Complete LMS solution with course builder and analytics'
        }
      ]
    },
    {
      title: 'Automation',
      description: 'Streamline your processes',
      icon: Workflow,
      items: [
        {
          label: 'Workflow Automation',
          href: '/products/automation/workflows',
          description: 'Automate repetitive business processes'
        },
        {
          label: 'Data Capture & OCR',
          href: '/products/automation/ocr',
          description: 'Extract data from documents automatically'
        },
        {
          label: 'Integrations',
          href: '/products/automation/integrations',
          description: 'Connect your existing tools and systems'
        }
      ]
    },
    {
      title: 'AI',
      description: 'Coming soon',
      icon: MessageSquare,
      items: [
        {
          label: 'Chatbots',
          href: '/products/ai/chatbots',
          description: 'Intelligent conversational interfaces',
          isComingSoon: true
        },
        {
          label: 'Document AI',
          href: '/products/ai/docai',
          description: 'AI-powered document processing',
          isComingSoon: true
        }
      ]
    },
    {
      title: 'Analytics',
      description: 'Coming soon',
      icon: BarChart3,
      items: [
        {
          label: 'Business Intelligence',
          href: '/products/analytics',
          description: 'Advanced reporting and insights',
          isComingSoon: true
        }
      ]
    }
  ]

  const handleItemClick = (label: string, _href: string) => {
    buttonClick(`megamenu_${label.toLowerCase().replace(/\s+/g, '_')}`, 'megamenu')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
    >
      <div className="bg-semtex-panel/95 backdrop-blur-md border border-semtex-hairline rounded-2xl shadow-soft-lg p-6 min-w-[800px]">
        <div className="grid grid-cols-2 gap-8">
          
          {menuSections.map((section) => {
            const Icon = section.icon
            
            return (
              <div key={section.title} className="space-y-4">
                
                {/* Section Header */}
                <div className="flex items-center space-x-3 pb-2 border-b border-semtex-hairline/30">
                  <div className="p-2 bg-semtex-ink/10 rounded-lg">
                    <Icon className="h-5 w-5 text-semtex-ink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-semtex-ink flex items-center space-x-2">
                      <span>{section.title}</span>
                      {section.description === 'Coming soon' && (
                        <span className="px-2 py-1 text-xs bg-semtex-focus/20 text-semtex-focus rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-semtex-muted-ink">{section.description}</p>
                  </div>
                </div>

                {/* Section Items */}
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => handleItemClick(item.label, item.href)}
                      className={cn(
                        'group flex items-start space-x-3 p-3 rounded-xl transition-colors focus-ring',
                        'hover:bg-semtex-hairline/30',
                        item.isComingSoon && 'cursor-not-allowed opacity-70'
                      )}
                      aria-disabled={item.isComingSoon}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-semtex-ink group-hover:text-semtex-ink transition-colors">
                            {item.label}
                          </h4>
                          {item.isComingSoon && (
                            <span className="px-2 py-0.5 text-xs bg-semtex-focus/20 text-semtex-focus rounded-full">
                              Soon
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-semtex-muted-ink group-hover:text-semtex-muted-ink/80 transition-colors mt-1">
                          {item.description}
                        </p>
                      </div>
                      
                      {!item.isComingSoon && (
                        <ArrowRight className="h-4 w-4 text-semtex-muted-ink group-hover:text-semtex-ink group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 pt-6 border-t border-semtex-hairline/30 text-center">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-sm font-medium text-semtex-ink hover:text-semtex-muted-ink transition-colors focus-ring rounded-lg px-3 py-2"
          >
            <span>View all products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default MegaMenu
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronRight,
  GraduationCap, 
  Workflow, 
  MessageSquare, 
  BarChart3,
  X 
} from 'lucide-react'
import { cn } from '@/lib/cn'
import { useAnalytics } from '@/lib/analytics'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  const handleDemoClick = () => {
    buttonClick('get_demo', 'mobile_nav')
    navigate('/contact?type=demo')
    onClose()
  }

  const handleLinkClick = (href: string, label: string) => {
    buttonClick(`mobile_nav_${label.toLowerCase().replace(/\s+/g, '_')}`, 'mobile_nav')
    onClose()
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const productSections = [
    {
      id: 'lms',
      title: 'LMS',
      icon: GraduationCap,
      items: [
        { label: 'Learning Management System', href: '/products/lms' }
      ]
    },
    {
      id: 'automation',
      title: 'Automation',
      icon: Workflow,
      items: [
        { label: 'Workflow Automation', href: '/products/automation/workflows' },
        { label: 'Data Capture & OCR', href: '/products/automation/ocr' },
        { label: 'Integrations', href: '/products/automation/integrations' }
      ]
    },
    {
      id: 'ai',
      title: 'AI',
      icon: MessageSquare,
      comingSoon: true,
      items: [
        { label: 'Chatbots', href: '/products/ai/chatbots', comingSoon: true },
        { label: 'Document AI', href: '/products/ai/docai', comingSoon: true }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: BarChart3,
      comingSoon: true,
      items: [
        { label: 'Business Intelligence', href: '/products/analytics', comingSoon: true }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-semtex-bg/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Slide-in panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 h-full w-full max-w-sm bg-semtex-panel border-l border-semtex-hairline shadow-soft-lg overflow-y-auto"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-semtex-hairline">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2" role="navigation" aria-label="Mobile navigation">
          
          {/* Products Section */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('products')}
              className="w-full flex items-center justify-between p-3 text-left hover:bg-semtex-hairline/30 rounded-xl transition-colors focus-ring"
              aria-expanded={expandedSection === 'products'}
            >
              <span className="font-medium">Products</span>
              <ChevronDown 
                className={cn(
                  'h-5 w-5 transition-transform',
                  expandedSection === 'products' && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {expandedSection === 'products' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 space-y-1 overflow-hidden"
                >
                  {productSections.map((section) => {
                    const Icon = section.icon
                    const isExpanded = expandedSection === section.id

                    return (
                      <div key={section.id} className="space-y-1">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full flex items-center space-x-3 p-3 text-left hover:bg-semtex-hairline/20 rounded-lg transition-colors focus-ring"
                          aria-expanded={isExpanded}
                        >
                          <Icon className="h-4 w-4 text-semtex-muted-ink flex-shrink-0" />
                          <span className="flex-1 text-sm font-medium flex items-center space-x-2">
                            <span>{section.title}</span>
                            {section.comingSoon && (
                              <span className="px-2 py-0.5 text-xs bg-semtex-focus/20 text-semtex-focus rounded-full">
                                Soon
                              </span>
                            )}
                          </span>
                          <ChevronRight 
                            className={cn(
                              'h-4 w-4 text-semtex-muted-ink transition-transform flex-shrink-0',
                              isExpanded && 'rotate-90'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.15 }}
                              className="ml-8 space-y-1 overflow-hidden"
                            >
                              {section.items.map((item) => (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  onClick={() => handleLinkClick(item.href, item.label)}
                                  className={cn(
                                    'block p-2 text-sm text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/20 rounded-lg transition-colors focus-ring',
                                    item.comingSoon && 'opacity-60 cursor-not-allowed'
                                  )}
                                  aria-disabled={item.comingSoon}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}

                  <Link
                    to="/products"
                    onClick={() => handleLinkClick('/products', 'All Products')}
                    className="block p-3 ml-4 text-sm font-medium text-semtex-ink hover:bg-semtex-hairline/20 rounded-lg transition-colors focus-ring"
                  >
                    View all products →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Navigation Links */}
          <Link
            to="/solutions"
            onClick={() => handleLinkClick('/solutions', 'Solutions')}
            className="block p-3 font-medium hover:bg-semtex-hairline/30 rounded-xl transition-colors focus-ring"
          >
            Solutions
          </Link>

          <Link
            to="/pricing"
            onClick={() => handleLinkClick('/pricing', 'Pricing')}
            className="block p-3 font-medium hover:bg-semtex-hairline/30 rounded-xl transition-colors focus-ring"
          >
            Pricing
          </Link>

          <Link
            to="/about"
            onClick={() => handleLinkClick('/about', 'About')}
            className="block p-3 font-medium hover:bg-semtex-hairline/30 rounded-xl transition-colors focus-ring"
          >
            About
          </Link>

          <Link
            to="/blog"
            onClick={() => handleLinkClick('/blog', 'Blog')}
            className="block p-3 font-medium hover:bg-semtex-hairline/30 rounded-xl transition-colors focus-ring"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            onClick={() => handleLinkClick('/contact', 'Contact')}
            className="block p-3 font-medium hover:bg-semtex-hairline/30 rounded-xl transition-colors focus-ring"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="p-6 border-t border-semtex-hairline">
          <button
            onClick={handleDemoClick}
            className="w-full btn-primary"
          >
            Get a Demo
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MobileNav
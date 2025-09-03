import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useAnalytics } from '@/lib/analytics'
import MegaMenu from './MegaMenu.tsx'
import MobileNav from './MobileNav.tsx'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsHovered, setIsProductsHovered] = useState(false)
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle demo CTA click
  const handleDemoClick = () => {
    buttonClick('get_demo', 'navbar')
    navigate('/contact?type=demo')
  }

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [navigate])

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-semtex-bg/80 backdrop-blur-md border-b border-semtex-hairline' 
            : 'bg-transparent'
        )}
      >
        <nav className="container-semtex" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 focus-ring rounded-lg"
              aria-label="Semtex Technologies home"
            >
              <div className="w-8 h-8 bg-semtex-ink rounded-lg flex items-center justify-center">
                <span className="text-semtex-bg font-bold text-sm">ST</span>
              </div>
              <span className="font-semibold text-lg hidden sm:block">
                Semtex Technologies
              </span>
              <span className="font-semibold text-lg sm:hidden">
                Semtex
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              
              {/* Products with MegaMenu */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsHovered(true)}
                onMouseLeave={() => setIsProductsHovered(false)}
              >
                <Link
                  to="/products"
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-ring',
                    'hover:text-semtex-ink hover:bg-semtex-hairline/50',
                    isProductsHovered ? 'text-semtex-ink bg-semtex-hairline/50' : 'text-semtex-muted-ink'
                  )}
                  aria-expanded={isProductsHovered}
                  aria-haspopup="true"
                >
                  Products
                </Link>
                
                <AnimatePresence>
                  {isProductsHovered && <MegaMenu />}
                </AnimatePresence>
              </div>

              {/* Other Navigation Links */}
              <Link
                to="/solutions"
                className="px-3 py-2 text-sm font-medium text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
              >
                Solutions
              </Link>

              <Link
                to="/pricing"
                className="px-3 py-2 text-sm font-medium text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
              >
                Pricing
              </Link>

              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="px-3 py-2 text-sm font-medium text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
              >
                Blog
              </Link>
            </div>

            {/* CTA Button + Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              
              {/* Demo CTA Button */}
              <button
                onClick={handleDemoClick}
                className="btn-primary hidden sm:inline-flex"
              >
                Get a Demo
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
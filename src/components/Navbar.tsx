import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useAnalytics } from '@/lib/analytics'
import MegaMenu from './MegaMenu'
import MobileNav from './MobileNav'


// Neural Network Logo Component
const SemtexLogo = ({ size = 32, className = "" }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Neural Network SVG Logo */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 130 90" 
        className="mr-2"
        aria-label="Semtex Technologies Neural Network Logo"
      >
        {/* Neural Network Nodes */}
        <g fill="currentColor">
          {/* Input layer */}
          <circle cx="20" cy="30" r="4"/>
          <circle cx="20" cy="50" r="4"/>
          <circle cx="20" cy="70" r="4"/>
          
          {/* Hidden layer 1 */}
          <circle cx="50" cy="25" r="3"/>
          <circle cx="50" cy="45" r="3"/>
          <circle cx="50" cy="65" r="3"/>
          
          {/* Hidden layer 2 */}
          <circle cx="80" cy="35" r="3"/>
          <circle cx="80" cy="55" r="3"/>
          
          {/* Output */}
          <circle cx="110" cy="45" r="4"/>
        </g>
        
        {/* Neural Network Connections */}
        <g stroke="currentColor" fill="none">
          {/* Strong connections (thick lines) */}
          <line x1="24" y1="30" x2="46" y2="25" strokeWidth="3" opacity="0.8"/>
          <line x1="24" y1="50" x2="46" y2="45" strokeWidth="3" opacity="0.8"/>
          <line x1="54" y1="25" x2="76" y2="35" strokeWidth="3" opacity="0.8"/>
          <line x1="84" y1="35" x2="106" y2="45" strokeWidth="3" opacity="0.8"/>
          
          {/* Medium connections */}
          <line x1="24" y1="50" x2="46" y2="25" strokeWidth="2" opacity="0.5"/>
          <line x1="24" y1="70" x2="46" y2="65" strokeWidth="2" opacity="0.5"/>
          <line x1="54" y1="45" x2="76" y2="55" strokeWidth="2" opacity="0.5"/>
          
          {/* Weak connections */}
          <line x1="24" y1="30" x2="46" y2="65" strokeWidth="1" opacity="0.2"/>
          <line x1="54" y1="65" x2="76" y2="35" strokeWidth="1" opacity="0.2"/>
          <line x1="84" y1="55" x2="106" y2="45" strokeWidth="1" opacity="0.3"/>
        </g>
      </svg>
      
      {/* Company Name */}
      <span className="font-semibold text-lg hidden sm:block">
        Semtex Technologies
      </span>
      <span className="font-semibold text-lg sm:hidden">
        Semtex
      </span>
    </div>
  );
};

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
            
        {/* Logo with Neural Network */}
          <a 
            href="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Semtex Technologies home"
          >
            <SemtexLogo size={50} className="text-white hover:text-gray-300 transition-colors" />
          </a>

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
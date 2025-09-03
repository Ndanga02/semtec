import { Link } from 'react-router-dom'
import { Linkedin, Twitter, MapPin, Mail } from 'lucide-react'
import { useAnalytics } from '@/lib/analytics'

const Footer = () => {
  const { buttonClick } = useAnalytics()

  const handleSocialClick = (platform: string) => {
    buttonClick(`social_${platform}`, 'footer')
  }

  const handleLinkClick = (label: string) => {
    buttonClick(`footer_${label.toLowerCase().replace(/\s+/g, '_')}`, 'footer')
  }

  const footerLinks = {
    products: [
      { label: 'Learning Management System', href: '/products/lms' },
      { label: 'Workflow Automation', href: '/products/automation/workflows' },
      { label: 'Data Capture & OCR', href: '/products/automation/ocr' },
      { label: 'All Products', href: '/products' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ],
    solutions: [
      { label: 'Education Providers', href: '/solutions' },
      { label: 'Corporates', href: '/solutions' },
      { label: 'Training Academies', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' }
    ]
  }

  return (
    <footer className="bg-semtex-panel border-t border-semtex-hairline" role="contentinfo">
      <div className="container-semtex py-12 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link 
                to="/" 
                className="flex items-center space-x-2 focus-ring rounded-lg w-fit"
              >
                <div className="w-8 h-8 bg-semtex-ink rounded-lg flex items-center justify-center">
                  <span className="text-semtex-bg font-bold text-sm">ST</span>
                </div>
                <span className="font-semibold text-lg">Semtex Technologies</span>
              </Link>
              <p className="text-semtex-muted-ink text-sm mt-3 max-w-md">
                Building modern learning management systems and educational technology 
                solutions for African businesses and beyond.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-2 text-sm text-semtex-muted-ink">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Johannesburg, South Africa</p>
                <p className="text-xs mt-1 opacity-80">Offices coming soon</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-2 text-sm text-semtex-muted-ink">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <a 
                href="mailto:hello@semtex.co.za" 
                className="hover:text-semtex-ink transition-colors focus-ring rounded"
              >
                hello@semtex.co.za
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/semtex-technologies"
                onClick={() => handleSocialClick('linkedin')}
                className="p-2 text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
                aria-label="Follow us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/semtextech"
                onClick={() => handleSocialClick('twitter')}
                className="p-2 text-semtex-muted-ink hover:text-semtex-ink hover:bg-semtex-hairline/50 rounded-lg transition-colors focus-ring"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-semtex-ink">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.label)}
                    className="text-sm text-semtex-muted-ink hover:text-semtex-ink transition-colors focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-semtex-ink">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.label)}
                    className="text-sm text-semtex-muted-ink hover:text-semtex-ink transition-colors focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-semtex-ink">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.label)}
                    className="text-sm text-semtex-muted-ink hover:text-semtex-ink transition-colors focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-8 lg:my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-semtex-muted-ink">
            <p>&copy; 2025 Semtex Technologies. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="hover:text-semtex-ink transition-colors focus-ring rounded"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-semtex-ink transition-colors focus-ring rounded"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="text-sm text-semtex-muted-ink">
            Made with ❤️ in Johannesburg
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
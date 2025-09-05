import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import Card from '@/components/Card'

const NotFound = () => {
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  // SEO
  useSEO({
    title: 'Page Not Found - Semtex Technologies',
    description: 'The page you are looking for could not be found.',
    canonical: 'https://semtex.co.za/404',
    noindex: true
  })

  const handleGoHome = () => {
    buttonClick('404_go_home', '404_page')
    navigate('/')
  }

  const handleGoBack = () => {
    buttonClick('404_go_back', '404_page')
    window.history.back()
  }

  const popularPages = [
    { name: 'Products', path: '/products', description: 'Explore our LMS and automation tools' },
    { name: 'Pricing', path: '/pricing', description: 'View our transparent pricing plans' },
    { name: 'About Us', path: '/about', description: 'Learn about our team and mission' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with our team' }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <Section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-8xl lg:text-9xl font-bold text-gray-200 mb-4 select-none">
              404
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-display-lg text-black">Page not found</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sorry, we couldn't find the page you're looking for. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <button
              onClick={handleGoHome}
              className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-900 transition-colors inline-flex items-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>Go to Homepage</span>
            </button>
            
            <button
              onClick={handleGoBack}
              className="border border-gray-200 text-black px-6 py-3 rounded-2xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-display-sm mb-8 text-black">Popular pages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularPages.map((page, index) => (
                <motion.div
                  key={page.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Card 
                    className="p-6 hover:border-gray-300 transition-colors cursor-pointer text-left"
                    onClick={() => {
                      buttonClick(`404_popular_${page.name.toLowerCase()}`, '404_page')
                      navigate(page.path)
                    }}
                  >
                    <h3 className="font-semibold text-black mb-2">{page.name}</h3>
                    <p className="text-gray-600 text-sm">{page.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <Card className="p-8 bg-gray-50 border-gray-200 max-w-md mx-auto">
              <Search className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-black mb-2">Looking for something specific?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Try searching from our homepage or contact us for help.
              </p>
              <button
                onClick={() => {
                  buttonClick('404_contact_help', '404_page')
                  navigate('/contact')
                }}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center space-x-1"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Contact Support</span>
              </button>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default NotFound
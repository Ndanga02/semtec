import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Calendar, Mail, Phone } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import Card from '@/components/Card'

const ThankYou = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  const type = searchParams.get('type') || 'contact'
  
  // SEO
  useSEO({
    title: 'Thank You - Semtex Technologies',
    description: 'Thank you for your interest in Semtex Technologies. We\'ll be in touch soon.',
    canonical: 'https://semtex.co.za/thank-you',
    noindex: true
  })

  // Track successful conversion
  useEffect(() => {
    buttonClick(`thank_you_${type}`, 'thank_you_page')
  }, [type, buttonClick])

  const getContent = () => {
    switch (type) {
      case 'demo':
        return {
          title: 'Demo Request Received!',
          subtitle: 'We\'ll schedule your personalized demo within 24 hours.',
          description: 'Our team will contact you shortly to schedule a demo that fits your calendar. We\'ll show you exactly how Semtex LMS can transform your learning programs.',
          nextSteps: [
            'Check your email for confirmation',
            'Our team will contact you within 24 hours',
            'We\'ll schedule a 30-minute personalized demo',
            'Explore how our LMS fits your specific needs'
          ]
        }
      case 'application':
        return {
          title: 'Application Received!',
          subtitle: 'Thank you for your interest in joining our team.',
          description: 'We\'ve received your application and our hiring team will review it carefully. We\'ll be in touch within 5 business days if your background matches our current openings.',
          nextSteps: [
            'Your application is being reviewed',
            'We\'ll contact you within 5 business days',
            'Follow us on LinkedIn for company updates',
            'Feel free to reach out with any questions'
          ]
        }
      default:
        return {
          title: 'Message Sent Successfully!',
          subtitle: 'We\'ll get back to you within 24 hours.',
          description: 'Thank you for reaching out to Semtex Technologies. Our team has received your message and will respond promptly with the information you need.',
          nextSteps: [
            'We\'ve received your message',
            'Our team will respond within 24 hours',
            'Check your email for our reply',
            'Explore our products while you wait'
          ]
        }
    }
  }

  const content = getContent()

  const handleExploreProducts = () => {
    buttonClick('thank_you_explore_products', 'thank_you_page')
    navigate('/products')
  }

  const handleGoHome = () => {
    buttonClick('thank_you_go_home', 'thank_you_page')
    navigate('/')
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <Section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-display-lg text-black mb-4">{content.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{content.subtitle}</p>
            <p className="text-gray-600 leading-relaxed">{content.description}</p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Card className="p-8 text-left">
              <h2 className="text-display-sm text-black mb-6 text-center">What happens next?</h2>
              <div className="space-y-4">
                {content.nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-600">{step}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <Card className="p-6 bg-gray-50 border-gray-200">
              <h3 className="font-semibold text-black mb-4">Need immediate assistance?</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@semtexagency.co.za" className="text-blue-600 hover:text-blue-800">
                    info@semtexagency.co.za
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+27766108815" className="text-blue-600 hover:text-blue-800">
                    +27 76 610 8815
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              onClick={handleExploreProducts}
              className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-900 transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <button
              onClick={handleGoHome}
              className="border border-gray-200 text-black px-6 py-3 rounded-2xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Back to Homepage
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default ThankYou
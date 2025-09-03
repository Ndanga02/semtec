import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import Card from '@/components/Card'
import FeatureGrid from '@/components/FeatureGrid'

const Products = () => {
  const navigate = useNavigate()
  const { buttonClick, productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'Products - Semtex Technologies Learning Management & Automation Tools',
    description: 'Explore Semtex Technologies products: LMS, workflow automation, AI tools, and analytics. Modern solutions built for South African businesses.',
    canonical: 'https://semtex.co.za/products'
  })

  const handleProductClick = (productName: string, href: string) => {
    buttonClick(`product_${productName.toLowerCase().replace(/\s+/g, '_')}`, 'products_overview')
    productView(productName)
    navigate(href)
  }

  const products = [
    {
      name: 'Learning Management System',
      description: 'Complete course builder, assessments, progress tracking, and analytics. Launch your LMS in days, not months.',
      icon: GraduationCap,
      status: 'available',
      href: '/products/lms',
      features: [
        'Drag-and-drop course builder',
        'Advanced assessments & quizzes',
        'Real-time progress tracking',
        'Comprehensive analytics dashboard',
        'SSO & user management',
        'SCORM & xAPI support'
      ]
    },
    {
      name: 'Workflow Automation',
      description: 'Streamline repetitive processes and automate data workflows across your organization.',
      icon: Workflow,
      status: 'coming-soon',
      href: '/products/automation/workflows',
      features: [
        'Visual workflow builder',
        'API integrations',
        'Automated notifications',
        'Process optimization',
        'Custom triggers & actions',
        'Performance monitoring'
      ]
    },
    {
      name: 'Data Capture & OCR',
      description: 'Extract and process data from documents automatically with advanced OCR technology.',
      icon: Zap,
      status: 'coming-soon',
      href: '/products/automation/ocr',
      features: [
        'Document scanning & OCR',
        'Form recognition',
        'Data validation',
        'Export to multiple formats',
        'Batch processing',
        'Quality assurance checks'
      ]
    },
    {
      name: 'AI Chatbots',
      description: 'Intelligent conversational interfaces to enhance learner support and engagement.',
      icon: MessageSquare,
      status: 'coming-soon',
      href: '/products/ai/chatbots',
      features: [
        '24/7 learner support',
        'Natural language processing',
        'Course recommendations',
        'Progress inquiries',
        'Custom knowledge base',
        'Multi-language support'
      ]
    },
    {
      name: 'Document AI',
      description: 'AI-powered document processing and analysis for enhanced learning materials.',
      icon: MessageSquare,
      status: 'coming-soon',
      href: '/products/ai/docai',
      features: [
        'Automatic content tagging',
        'Document summarization',
        'Knowledge extraction',
        'Content recommendations',
        'Plagiarism detection',
        'Quality scoring'
      ]
    },
    {
      name: 'Analytics & Insights',
      description: 'Advanced reporting and business intelligence to optimize your learning programs.',
      icon: BarChart3,
      status: 'coming-soon',
      href: '/products/analytics',
      features: [
        'Advanced reporting dashboards',
        'Learning analytics',
        'Performance metrics',
        'Custom reports',
        'Data visualization',
        'Predictive insights'
      ]
    }
  ]

  const coreFeatures = [
    {
      icon: CheckCircle,
      title: 'Built for South Africa',
      description: 'Designed with local business needs in mind, from compliance to connectivity.'
    },
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Get up and running in days, not months, with our streamlined setup process.'
    },
    {
      icon: Zap,
      title: 'Scalable Platform',
      description: 'Start with one product and expand as your needs grow, all on a unified platform.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Hero Section */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-lg mb-4"
          >
            A complete platform for modern learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-semtex-muted-ink max-w-3xl mx-auto"
          >
            Start with our flagship LMS and expand into automation, AI tools, and analytics. 
            Everything you need to build, manage, and optimize your learning programs.
          </motion.p>
        </div>

        {/* Core Features */}
        <FeatureGrid features={coreFeatures} className="mb-16" />
      </Section>

      {/* Products Grid */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Our Product Suite</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Comprehensive tools designed to work together seamlessly, giving you everything 
            you need for successful learning and development programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card 
                  className="p-6 h-full cursor-pointer transition-all duration-300 hover:border-semtex-muted-ink/20 hover:shadow-soft-lg hover:-translate-y-1"
                  onClick={() => handleProductClick(product.name, product.href)}
                >
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-semtex-ink/10 rounded-xl flex items-center justify-center group-hover:bg-semtex-ink/15 transition-colors">
                      <Icon className="h-6 w-6 text-semtex-ink" />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {product.status === 'available' ? (
                        <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                          Available
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-medium bg-semtex-focus/20 text-semtex-focus rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-display-xs mb-3 group-hover:text-semtex-ink transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-body-sm text-semtex-muted-ink mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-semtex-muted-ink">
                        <CheckCircle className="h-4 w-4 text-semtex-focus flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <div className="text-sm text-semtex-muted-ink/70">
                        +{product.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-semtex-ink group-hover:text-semtex-focus transition-colors">
                      {product.status === 'available' ? 'Learn more' : 'View details'}
                    </span>
                    <ArrowRight className="h-4 w-4 text-semtex-muted-ink group-hover:text-semtex-ink group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Built to work together</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our products are designed as an integrated platform, not isolated tools. 
            Start with what you need today and expand seamlessly as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Integration Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-display-md">One platform, endless possibilities</h3>
              <p className="text-body text-semtex-muted-ink">
                Whether you're launching your first course or automating complex learning workflows, 
                our integrated platform grows with your organization's needs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Unified user management across all products',
                'Seamless data flow between LMS and analytics',
                'Consistent design and user experience',
                'Single sign-on for all your tools',
                'Comprehensive support and training'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-semtex-focus mt-0.5 flex-shrink-0" />
                  <span className="text-body-sm text-semtex-muted-ink">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
              
              {/* Mock integration diagram */}
              <div className="absolute inset-8 space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-semtex-ink/20 rounded-xl mx-auto mb-2" />
                  <div className="text-xs text-semtex-muted-ink">LMS Core</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-semtex-focus/20 rounded-lg mx-auto mb-1" />
                    <div className="text-xs text-semtex-muted-ink">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-semtex-focus/20 rounded-lg mx-auto mb-1" />
                    <div className="text-xs text-semtex-muted-ink">AI Tools</div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <div className="w-14 h-8 bg-semtex-muted-ink/20 rounded-lg mx-auto mb-1" />
                  <div className="text-xs text-semtex-muted-ink">Analytics</div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-semtex-ink/10"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to get started?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Begin with our LMS and discover how Semtex Technologies can transform 
            your learning and development programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => {
                buttonClick('get_demo', 'products_cta')
                navigate('/contact?type=demo')
              }}
              className="btn-primary text-base px-6 py-3"
            >
              Get a Demo
            </button>
            <button
              onClick={() => {
                buttonClick('view_pricing', 'products_cta')
                navigate('/pricing')
              }}
              className="btn-secondary text-base px-6 py-3"
            >
              View Pricing
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Products
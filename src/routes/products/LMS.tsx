import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Play,
  Clock,
  Globe,
  Zap,
  Award,
  Settings
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import { injectSchema, getLMSProductSchema } from '@/lib/schema'
import Section from '@/components/Section'
import Card from '@/components/Card'
import FeatureGrid from '@/components/FeatureGrid'
import FAQ from '@/components/FAQ'

const LMS = () => {
  const navigate = useNavigate()
  const { buttonClick, productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'Semtex LMS - Modern Learning Management System Built in Johannesburg',
    description: 'Launch a beautiful LMS in days with Semtex Technologies. Course builder, assessments, analytics, SSO, and more. Built for South African businesses.',
    canonical: 'https://semtex.co.za/products/lms'
  })

  // Schema.org
  useEffect(() => {
    injectSchema(getLMSProductSchema(), 'lms-product-schema')
    productView('LMS')
    return () => {
      // Cleanup handled by navigation
    }
  }, [productView])

  const handleDemoClick = () => {
    buttonClick('get_demo', 'lms_hero')
    navigate('/contact?type=demo')
  }

  const features = [
    {
      icon: BookOpen,
      title: 'Intuitive Course Builder',
      description: 'Create engaging courses with our drag-and-drop builder. Add videos, documents, quizzes, and interactive content effortlessly.'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Organize learners into groups, assign roles, and manage access with enterprise-grade user management and SSO integration.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track learner progress, course completion rates, and engagement metrics with comprehensive reporting and insights.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, role-based access control, and compliance features to keep your data safe.'
    },
    {
      icon: Globe,
      title: 'Mobile Responsive',
      description: 'Perfect learning experience on any device. Your learners can access courses anywhere, anytime.'
    },
    {
      icon: Award,
      title: 'Certifications & Badges',
      description: 'Motivate learners with automated certificates, digital badges, and gamification elements.'
    }
  ]

  const capabilities = [
    {
      category: 'Content Creation',
      items: [
        'Drag-and-drop course builder',
        'Video hosting and streaming',
        'Interactive presentations',
        'Document library management',
        'SCORM and xAPI support',
        'Mobile-first design'
      ]
    },
    {
      category: 'Assessment Tools',
      items: [
        'Multiple question types',
        'Timed assessments',
        'Instant feedback',
        'Proctoring integration',
        'Grade book management',
        'Custom rubrics'
      ]
    },
    {
      category: 'User Experience',
      items: [
        'Personalized dashboards',
        'Progress tracking',
        'Social learning features',
        'Discussion forums',
        'Messaging system',
        'Notification center'
      ]
    },
    {
      category: 'Administration',
      items: [
        'Bulk user import',
        'Advanced reporting',
        'Integration APIs',
        'White-label branding',
        'Multi-language support',
        'Backup and recovery'
      ]
    }
  ]

  const comparison = [
    {
      feature: 'Setup Time',
      semtex: 'Days',
      typical: 'Months',
      highlight: true
    },
    {
      feature: 'Modern Interface',
      semtex: '✓',
      typical: 'Often outdated'
    },
    {
      feature: 'Mobile Responsive',
      semtex: '✓',
      typical: 'Limited'
    },
    {
      feature: 'Local Support',
      semtex: '✓ (Johannesburg)',
      typical: 'Overseas',
      highlight: true
    },
    {
      feature: 'Custom Branding',
      semtex: '✓',
      typical: 'Extra cost'
    },
    {
      feature: 'API Access',
      semtex: '✓',
      typical: 'Enterprise only'
    },
    {
      feature: 'Pricing Model',
      semtex: 'Transparent',
      typical: 'Complex tiers',
      highlight: true
    }
  ]

  const faqs = [
    {
      question: 'How quickly can we get our LMS up and running?',
      answer: 'Most organizations are up and running within 3-5 business days. We handle the technical setup while you focus on creating your first courses.'
    },
    {
      question: 'Do you support SCORM and xAPI content?',
      answer: 'Yes, our LMS fully supports SCORM 1.2, SCORM 2004, and xAPI (Tin Can API) content. You can upload existing e-learning content seamlessly.'
    },
    {
      question: 'Can we integrate with our existing systems?',
      answer: 'Absolutely. We offer SSO integration, API access, and can connect with your HR systems, CRM, or other business applications.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including setup assistance, training, technical support, and ongoing consultation. As a Johannesburg-based company, we understand local business needs.'
    },
    {
      question: 'Is there a limit on the number of courses or users?',
      answer: 'Our plans are designed to scale with your organization. We offer flexible pricing based on active users, not course limits.'
    },
    {
      question: 'Can we customize the look and feel?',
      answer: 'Yes, we offer white-label branding options so you can customize colors, logos, and domain to match your brand identity.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Hero Section */}
      <Section className="py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                <CheckCircle className="h-4 w-4" />
                <span>Available Now</span>
              </span>
              <h1 className="text-display-xl mb-4">
                Launch a beautiful LMS in days, not months
              </h1>
              <p className="text-body-lg text-semtex-muted-ink">
                Semtex LMS combines powerful features with intuitive design. 
                Create engaging learning experiences that your team will actually enjoy using.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleDemoClick}
                className="btn-primary text-base px-6 py-3 inline-flex items-center space-x-2"
              >
                <span>Get a Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => {
                  buttonClick('watch_overview', 'lms_hero')
                }}
                className="btn-ghost text-base px-6 py-3 inline-flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Watch Overview</span>
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-semtex-hairline">
              <div>
                <div className="text-2xl font-bold text-semtex-ink">3-5</div>
                <div className="text-sm text-semtex-muted-ink">Days to launch</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-semtex-ink">10k+</div>
                <div className="text-sm text-semtex-muted-ink">Active learners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-semtex-ink">98%</div>
                <div className="text-sm text-semtex-muted-ink">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
              
              {/* Mock LMS interface */}
              <div className="absolute inset-4 space-y-3">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500/60 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500/60 rounded-full" />
                    <div className="w-3 h-3 bg-green-500/60 rounded-full" />
                  </div>
                  <div className="text-xs text-semtex-muted-ink">LMS Dashboard</div>
                </div>
                
                {/* Content area */}
                <div className="space-y-3">
                  <div className="h-4 bg-semtex-ink/20 rounded w-2/3" />
                  <div className="h-2 bg-semtex-ink/10 rounded w-1/2" />
                  
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-16 bg-semtex-focus/20 rounded-lg p-2">
                      <div className="h-2 bg-semtex-focus/40 rounded w-3/4 mb-1" />
                      <div className="h-1 bg-semtex-focus/30 rounded w-1/2" />
                    </div>
                    <div className="h-16 bg-semtex-ink/10 rounded-lg p-2">
                      <div className="h-2 bg-semtex-ink/30 rounded w-2/3 mb-1" />
                      <div className="h-1 bg-semtex-ink/20 rounded w-1/3" />
                    </div>
                  </div>
                  
                  <div className="h-8 bg-semtex-ink/5 rounded mt-4" />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 w-12 h-12 bg-semtex-focus/20 border border-semtex-focus/30 rounded-lg backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Everything you need in one platform</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            From course creation to learner analytics, Semtex LMS provides all the tools 
            you need to deliver exceptional learning experiences.
          </p>
        </div>

        <FeatureGrid features={features} />
      </Section>

      {/* Capabilities */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Comprehensive LMS capabilities</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Explore the full range of features designed to support every aspect of your learning programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-display-xs mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2 text-sm text-semtex-muted-ink">
                      <CheckCircle className="h-4 w-4 text-semtex-focus mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">How we compare</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            See why organizations choose Semtex LMS over traditional learning management systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-semtex-hairline bg-semtex-hairline/30">
                    <th className="text-left p-4 font-semibold text-semtex-ink">Feature</th>
                    <th className="text-left p-4 font-semibold text-semtex-ink">Semtex LMS</th>
                    <th className="text-left p-4 font-semibold text-semtex-muted-ink">Typical LMS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-semtex-hairline/50 ${
                        row.highlight ? 'bg-semtex-focus/5' : ''
                      }`}
                    >
                      <td className="p-4 font-medium text-semtex-ink">{row.feature}</td>
                      <td className="p-4 text-semtex-ink font-medium">{row.semtex}</td>
                      <td className="p-4 text-semtex-muted-ink">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16 lg:py-24">
        <FAQ 
          items={faqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Semtex LMS"
        />
      </Section>

      {/* CTA */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to transform your learning?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join hundreds of organizations who've chosen Semtex LMS to power their learning programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleDemoClick}
              className="btn-primary text-base px-6 py-3"
            >
              Get a Demo
            </button>
            <button
              onClick={() => {
                buttonClick('view_pricing', 'lms_cta')
                navigate('/pricing')
              }}
              className="btn-secondary text-base px-6 py-3"
            >
              View Pricing
            </button>
          </div>
          <p className="text-sm text-semtex-muted-ink mt-6">
            No setup fees • 30-day trial • Local support included
          </p>
        </div>
      </Section>
    </div>
  )
}

export default LMS
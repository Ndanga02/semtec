import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Puzzle, 
  Zap, 
  Shield, 
  RefreshCw, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  Settings
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import ComingSoon from '@/components/ComingSoon'
import FeatureGrid from '@/components/FeatureGrid'
import Card from '@/components/Card'

const Integrations = () => {
  const { productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'System Integrations - Coming Soon | Semtex Technologies',
    description: 'Connect your existing tools and systems seamlessly. API integrations, webhooks, and data synchronization coming soon.',
    canonical: 'https://semtex.co.za/products/automation/integrations'
  })

  useEffect(() => {
    productView('System Integrations')
  }, [productView])

  const features = [
    {
      icon: Puzzle,
      title: 'Pre-built Connectors',
      description: 'Connect instantly with popular business applications through our library of ready-to-use integrations.'
    },
    {
      icon: Zap,
      title: 'Real-time Synchronization',
      description: 'Keep your data in sync across all platforms with real-time updates and bi-directional data flow.'
    },
    {
      icon: Shield,
      title: 'Secure Data Transfer',
      description: 'Enterprise-grade security with encryption, authentication, and compliance standards for all integrations.'
    },
    {
      icon: RefreshCw,
      title: 'Automated Workflows',
      description: 'Trigger actions across different systems automatically based on events and business rules.'
    },
    {
      icon: Settings,
      title: 'Custom Configuration',
      description: 'Tailor each integration to your specific needs with flexible mapping and transformation options.'
    },
    {
      icon: BarChart3,
      title: 'Integration Analytics',
      description: 'Monitor data flow, track performance, and identify issues with comprehensive integration insights.'
    }
  ]

  const plannedFeatures = [
    'Pre-built connectors for 100+ popular applications',
    'Custom API development and integration services',
    'Real-time data synchronization and updates',
    'Webhook support for event-driven integrations',
    'Data transformation and mapping tools',
    'Error handling and retry mechanisms',
    'Integration monitoring and analytics',
    'Secure authentication and authorization',
    'Bulk data import and export capabilities',
    'Integration testing and validation tools',
    'Documentation and developer resources',
    'Priority support for integration setup'
  ]

  const integrationCategories = [
    {
      name: 'Learning & HR Systems',
      description: 'Connect with existing learning platforms, HR systems, and employee databases.',
      integrations: ['SAP SuccessFactors', 'Workday', 'BambooHR', 'Azure AD', 'Cornerstone OnDemand', 'More...'],
      icon: Globe
    },
    {
      name: 'Communication Tools',
      description: 'Integrate with messaging and communication platforms for notifications and updates.',
      integrations: ['Slack', 'Microsoft Teams', 'WhatsApp Business', 'Email Services', 'SMS Gateways', 'More...'],
      icon: Zap
    },
    {
      name: 'Business Applications',
      description: 'Sync with CRM, ERP, and other business-critical applications and databases.',
      integrations: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'SAP', 'Oracle', 'More...'],
      icon: Settings
    },
    {
      name: 'Cloud Storage & Files',
      description: 'Access and manage content from various cloud storage and file management systems.',
      integrations: ['Google Drive', 'OneDrive', 'Dropbox', 'SharePoint', 'Box', 'More...'],
      icon: Shield
    }
  ]

  const useCases = [
    {
      title: 'Single Sign-On (SSO)',
      description: 'Enable seamless login experiences by connecting with your existing identity providers and user directories.',
      benefits: ['Improved user experience', 'Enhanced security', 'Reduced IT overhead'],
      icon: Shield
    },
    {
      title: 'Automated User Provisioning',
      description: 'Automatically create and manage user accounts based on changes in your HR or directory systems.',
      benefits: ['Faster onboarding', 'Consistent access control', 'Reduced manual work'],
      icon: RefreshCw
    },
    {
      title: 'Progress Reporting',
      description: 'Sync learning progress and completion data with your existing reporting and analytics platforms.',
      benefits: ['Unified reporting', 'Real-time insights', 'Better decision making'],
      icon: BarChart3
    },
    {
      title: 'Content Synchronization',
      description: 'Keep training materials and documents synchronized across multiple platforms and storage systems.',
      benefits: ['Always up-to-date content', 'Single source of truth', 'Reduced duplication'],
      icon: RefreshCw
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Coming Soon Banner */}
      <Section className="py-16 lg:py-24">
        <ComingSoon
          title="System Integrations"
          description="Connect your existing tools and systems with seamless integrations. Eliminate data silos and create unified workflows across your entire tech stack."
          expectedDate="Q3 2025"
          features={plannedFeatures}
        />
      </Section>

      {/* Features Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Powerful integration capabilities</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our integration platform will provide everything you need to connect your systems, 
            sync your data, and automate your workflows seamlessly.
          </p>
        </div>

        <FeatureGrid features={features} />
      </Section>

      {/* Integration Categories */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Connect with your favorite tools</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            We'll provide pre-built connectors for the most popular business applications, 
            plus custom integration services for your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {integrationCategories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-semtex-focus" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-display-xs mb-2">{category.name}</h3>
                      <p className="text-body-sm text-semtex-muted-ink mb-4">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-semtex-ink mb-2">Popular integrations:</div>
                    <div className="flex flex-wrap gap-2">
                      {category.integrations.map((integration, integrationIndex) => (
                        <span
                          key={integrationIndex}
                          className="px-2 py-1 bg-semtex-hairline/30 text-semtex-muted-ink text-xs rounded-full"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Common integration scenarios</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Discover how our integration platform will solve common business challenges 
            and streamline your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-semtex-ink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-semtex-ink" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-display-xs mb-2">{useCase.title}</h3>
                      <p className="text-body-sm text-semtex-muted-ink mb-4">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-semtex-ink mb-2">Key benefits:</div>
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-semtex-muted-ink">
                        <CheckCircle className="h-4 w-4 text-semtex-focus flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Integration Architecture */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Enterprise-grade architecture</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our integration platform will be built on enterprise-grade infrastructure 
            with security, scalability, and reliability at its core.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
            
            {/* Mock architecture diagram */}
            <div className="absolute inset-8 flex items-center justify-between">
              
              {/* Left side - External systems */}
              <div className="space-y-4">
                <div className="text-xs text-semtex-muted-ink mb-2">External Systems</div>
                {['HR System', 'CRM', 'Email', 'Cloud Storage'].map((system, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="w-24 h-8 bg-semtex-muted-ink/20 rounded text-xs flex items-center justify-center text-semtex-muted-ink"
                  >
                    {system}
                  </motion.div>
                ))}
              </div>

              {/* Center - Integration Hub */}
              <div className="relative">
                <div className="w-32 h-32 bg-semtex-focus/20 border-2 border-semtex-focus/40 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Puzzle className="h-8 w-8 text-semtex-focus mx-auto mb-2" />
                    <div className="text-xs text-semtex-focus font-medium">Integration Hub</div>
                  </div>
                </div>
                
                {/* Connection lines */}
                <div className="absolute inset-0 opacity-30">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`absolute w-1 h-8 bg-semtex-focus/40 ${
                        i < 4 ? 'left-0 top-1/2 -translate-x-12' : 'right-0 top-1/2 translate-x-12'
                      }`}
                      style={{
                        transform: `rotate(${(i * 45)}deg) translateY(-50%)`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right side - Semtex Platform */}
              <div className="space-y-4">
                <div className="text-xs text-semtex-muted-ink mb-2">Semtex Platform</div>
                {['LMS', 'Automation', 'Analytics', 'AI Tools'].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="w-24 h-8 bg-semtex-ink/20 rounded text-xs flex items-center justify-center text-semtex-ink"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data flow indicators */}
            <motion.div
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-semtex-focus/20 px-3 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-semtex-focus rounded-full" />
              <span className="text-xs text-semtex-focus font-medium">Data Flow</span>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* API & Developer Resources */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-display-lg mb-4">Built for developers</h2>
              <p className="text-body text-semtex-muted-ink mb-6">
                Our integration platform will provide comprehensive APIs, SDKs, and developer 
                resources to build custom integrations and extend functionality.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'RESTful APIs with comprehensive documentation',
                'SDKs for popular programming languages',
                'Webhook support for real-time notifications',
                'GraphQL endpoints for flexible data queries',
                'Interactive API explorer and testing tools',
                'Developer community and support forums'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-semtex-focus mt-0.5 flex-shrink-0" />
                  <span className="text-body-sm text-semtex-muted-ink">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mock API documentation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
              
              {/* Mock code/API docs */}
              <div className="absolute inset-4 space-y-2">
                <div className="text-xs text-semtex-muted-ink mb-3">API Documentation</div>
                <div className="font-mono text-xs space-y-1">
                  <div className="text-semtex-focus">POST /api/v1/integrations</div>
                  <div className="text-semtex-muted-ink ml-2">{"{"}</div>
                  <div className="text-semtex-muted-ink ml-4">"type": "sso",</div>
                  <div className="text-semtex-muted-ink ml-4">"provider": "azure_ad",</div>
                  <div className="text-semtex-muted-ink ml-4">"config": {"{"}</div>
                  <div className="text-semtex-muted-ink ml-6">"tenant_id": "...",</div>
                  <div className="text-semtex-muted-ink ml-6">"client_id": "..."</div>
                  <div className="text-semtex-muted-ink ml-4">{"}"}</div>
                  <div className="text-semtex-muted-ink ml-2">{"}"}</div>
                </div>
                <div className="h-px bg-semtex-hairline my-3" />
                <div className="text-xs text-green-400">✓ 200 OK - Integration created</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to connect your systems?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join our early access program to be among the first to experience seamless 
            system integrations when we launch our platform.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">100+</div>
              <div className="text-sm text-semtex-muted-ink">Pre-built connectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">99.9%</div>
              <div className="text-sm text-semtex-muted-ink">Integration uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">24/7</div>
              <div className="text-sm text-semtex-muted-ink">Data synchronization</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Integrations
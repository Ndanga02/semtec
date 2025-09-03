import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Workflow, 
  ArrowRight, 
  Zap, 
  Clock, 
  Users, 
  BarChart,
  CheckCircle,
  Settings,
  RefreshCw,
  Bell
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import ComingSoon from '@/components/ComingSoon'
import FeatureGrid from '@/components/FeatureGrid'

const Workflows = () => {
  const { productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'Workflow Automation - Coming Soon | Semtex Technologies',
    description: 'Streamline repetitive processes with Semtex workflow automation. Visual builder, API integrations, and intelligent triggers coming soon.',
    canonical: 'https://semtex.co.za/products/automation/workflows'
  })

  useEffect(() => {
    productView('Workflow Automation')
  }, [productView])

  const features = [
    {
      icon: Zap,
      title: 'Visual Workflow Builder',
      description: 'Create complex automation workflows with our intuitive drag-and-drop interface. No coding required.'
    },
    {
      icon: Settings,
      title: 'Smart Integrations',
      description: 'Connect with your existing tools and systems through our extensive library of pre-built integrations.'
    },
    {
      icon: Clock,
      title: 'Intelligent Triggers',
      description: 'Set up time-based, event-driven, or condition-based triggers to automate processes exactly when needed.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share workflows across teams with role-based permissions and collaborative editing features.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Monitor workflow performance, identify bottlenecks, and optimize processes with detailed analytics.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay informed with intelligent alerts and notifications when workflows need attention.'
    }
  ]

  const plannedFeatures = [
    'Visual workflow designer with drag-and-drop interface',
    'Pre-built templates for common business processes',
    'API integrations with popular business tools',
    'Conditional logic and decision trees',
    'Scheduled and event-triggered automation',
    'Real-time monitoring and error handling',
    'Team collaboration and workflow sharing',
    'Performance analytics and optimization insights',
    'Mobile notifications and approvals',
    'Audit trails and compliance reporting'
  ]

  const useCases = [
    {
      title: 'Employee Onboarding',
      description: 'Automatically create accounts, assign courses, send welcome emails, and track completion progress for new hires.',
      icon: Users
    },
    {
      title: 'Course Enrollment',
      description: 'Streamline course registration, prerequisite checking, payment processing, and learner notifications.',
      icon: CheckCircle
    },
    {
      title: 'Certification Management',
      description: 'Automate certificate generation, expiry tracking, renewal reminders, and compliance reporting.',
      icon: RefreshCw
    },
    {
      title: 'Report Generation',
      description: 'Schedule automated reports, data aggregation, and distribution to stakeholders on a regular basis.',
      icon: BarChart
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Coming Soon Banner */}
      <Section className="py-16 lg:py-24">
        <ComingSoon
          title="Workflow Automation"
          description="Streamline repetitive processes and automate data workflows across your organization with our powerful automation platform."
          expectedDate="Q2 2025"
          features={plannedFeatures}
        />
      </Section>

      {/* Features Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Powerful automation features</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our workflow automation platform will provide everything you need to eliminate 
            manual processes and focus on what matters most.
          </p>
        </div>

        <FeatureGrid features={features} />
      </Section>

      {/* Use Cases */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Transform your processes</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            See how workflow automation can streamline common business processes 
            and eliminate time-consuming manual tasks.
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
                className="card-base p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-semtex-focus" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-display-xs mb-3">{useCase.title}</h3>
                    <p className="text-body-sm text-semtex-muted-ink">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Visual Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Intuitive workflow design</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our visual workflow builder will make it easy to create complex automation 
            processes without any technical expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
            
            {/* Mock workflow interface */}
            <div className="absolute inset-8 space-y-6">
              
              {/* Workflow steps visualization */}
              <div className="flex items-center justify-between">
                
                {/* Start node */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-green-500/20 border-2 border-green-500/40 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-400" />
                  </div>
                  <span className="text-xs text-semtex-muted-ink">Trigger</span>
                </div>

                <ArrowRight className="h-5 w-5 text-semtex-muted-ink" />

                {/* Process node */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-semtex-focus/20 border-2 border-semtex-focus/40 rounded-xl flex items-center justify-center">
                    <Settings className="h-6 w-6 text-semtex-focus" />
                  </div>
                  <span className="text-xs text-semtex-muted-ink">Process</span>
                </div>

                <ArrowRight className="h-5 w-5 text-semtex-muted-ink" />

                {/* Decision node */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-yellow-500/20 border-2 border-yellow-500/40 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span className="text-xs text-semtex-muted-ink">Decision</span>
                </div>

                <ArrowRight className="h-5 w-5 text-semtex-muted-ink" />

                {/* End node */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-purple-500/20 border-2 border-purple-500/40 rounded-xl flex items-center justify-center">
                    <Bell className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs text-semtex-muted-ink">Action</span>
                </div>
              </div>

              {/* Configuration panel mock */}
              <div className="bg-semtex-ink/5 rounded-xl p-4 space-y-2">
                <div className="h-3 bg-semtex-ink/10 rounded w-1/3" />
                <div className="h-2 bg-semtex-ink/5 rounded w-2/3" />
                <div className="h-2 bg-semtex-ink/5 rounded w-1/2" />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 right-8 w-8 h-8 bg-semtex-focus/20 border border-semtex-focus/30 rounded-lg"
            />

            <motion.div
              animate={{ 
                x: [0, -8, 0],
                y: [0, 8, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-8 left-8 w-6 h-6 bg-semtex-muted-ink/20 border border-semtex-muted-ink/30 rounded"
            />
          </div>
        </div>
      </Section>

      {/* Integration Preview */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Seamless integrations</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Connect with the tools you already use. Our automation platform will integrate 
            with popular business applications and services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-60">
          {[
            'Slack', 'Teams', 'Gmail', 'Outlook', 'Dropbox', 'OneDrive',
            'Salesforce', 'HubSpot', 'Zapier', 'API', 'Webhooks', 'More...'
          ].map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-semtex-hairline/30 rounded-xl mx-auto mb-2" />
              <span className="text-sm text-semtex-muted-ink">{integration}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to automate your workflows?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join our early access program to be among the first to experience the power of 
            intelligent workflow automation when we launch.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">80%</div>
              <div className="text-sm text-semtex-muted-ink">Time saved on manual tasks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">50%</div>
              <div className="text-sm text-semtex-muted-ink">Reduction in errors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">24/7</div>
              <div className="text-sm text-semtex-muted-ink">Automated operations</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Workflows

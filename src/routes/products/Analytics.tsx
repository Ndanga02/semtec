import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Brain,
  Clock,
  CheckCircle,
  Eye,
  Zap,
  Filter,
  Download,
  PieChart
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import ComingSoon from '@/components/ComingSoon'
import FeatureGrid from '@/components/FeatureGrid'
import Card from '@/components/Card'

const Analytics = () => {
  const { productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'Analytics & Business Intelligence - Coming Soon | Semtex Technologies',
    description: 'Advanced reporting and business intelligence to optimize your learning programs. Custom dashboards, predictive insights, and data visualization coming soon.',
    canonical: 'https://semtex.co.za/products/analytics'
  })

  useEffect(() => {
    productView('Analytics & Business Intelligence')
  }, [productView])

  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create custom dashboards with drag-and-drop widgets to visualize your most important metrics and KPIs.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict learner outcomes, identify at-risk students, and optimize programs.'
    },
    {
      icon: Users,
      title: 'Learner Journey Mapping',
      description: 'Track and analyze complete learner journeys from enrollment through completion and beyond.'
    },
    {
      icon: Target,
      title: 'Performance Benchmarking',
      description: 'Compare performance against industry standards and track progress toward organizational goals.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Discover hidden patterns and receive intelligent recommendations to improve learning outcomes.'
    },
    {
      icon: Download,
      title: 'Automated Reporting',
      description: 'Schedule and deliver customized reports to stakeholders automatically via email or integrated systems.'
    }
  ]

  const plannedFeatures = [
    'Real-time analytics dashboards and visualizations',
    'Custom report builder with drag-and-drop interface',
    'Predictive analytics and machine learning insights',
    'Learner behavior and engagement tracking',
    'Course effectiveness and completion analysis',
    'ROI and business impact measurement',
    'Automated alert system for key metrics',
    'Data export and API integration capabilities',
    'Multi-tenant reporting and role-based access',
    'Mobile-responsive analytics interface',
    'Advanced filtering and segmentation tools',
    'Integration with external BI tools and data warehouses'
  ]

  const analyticsCategories = [
    {
      name: 'Learning Analytics',
      description: 'Deep insights into how learners engage with content and progress through courses.',
      metrics: ['Completion rates', 'Engagement scores', 'Time-to-completion', 'Knowledge retention'],
      icon: Users
    },
    {
      name: 'Content Performance',
      description: 'Analyze which content performs best and identify areas for improvement.',
      metrics: ['Content popularity', 'Effectiveness scores', 'User feedback', 'Update frequency'],
      icon: Eye
    },
    {
      name: 'Business Intelligence',
      description: 'Connect learning data to business outcomes and organizational goals.',
      metrics: ['ROI calculations', 'Skills gap analysis', 'Productivity impact', 'Cost per learner'],
      icon: BarChart3
    },
    {
      name: 'Operational Insights',
      description: 'Monitor system performance, usage patterns, and resource utilization.',
      metrics: ['System usage', 'Peak hours', 'Resource allocation', 'Technical performance'],
      icon: Zap
    }
  ]

  const dashboardFeatures = [
    {
      title: 'Real-time Data',
      description: 'Live updates ensure you always have the latest information at your fingertips.',
      icon: Clock
    },
    {
      title: 'Interactive Filters',
      description: 'Drill down into specific segments, time periods, and demographic groups.',
      icon: Filter
    },
    {
      title: 'Custom Visualizations',
      description: 'Choose from charts, graphs, heatmaps, and other visualization types.',
      icon: PieChart
    },
    {
      title: 'Collaborative Features',
      description: 'Share dashboards, add comments, and collaborate with team members.',
      icon: Users
    }
  ]

  const reportTypes = [
    {
      name: 'Executive Summary',
      description: 'High-level overview of learning program performance and business impact.',
      frequency: 'Monthly',
      stakeholder: 'C-Suite, Board'
    },
    {
      name: 'Learning Effectiveness',
      description: 'Detailed analysis of course performance, learner outcomes, and content quality.',
      frequency: 'Weekly',
      stakeholder: 'L&D Teams, Instructors'
    },
    {
      name: 'Compliance Tracking',
      description: 'Monitor certification status, renewal dates, and regulatory requirements.',
      frequency: 'Real-time',
      stakeholder: 'Compliance, HR'
    },
    {
      name: 'ROI Analysis',
      description: 'Financial impact assessment of learning programs on business outcomes.',
      frequency: 'Quarterly',
      stakeholder: 'Finance, Leadership'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Coming Soon Banner */}
      <Section className="py-16 lg:py-24">
        <ComingSoon
          title="Analytics & Business Intelligence"
          description="Transform your learning data into actionable insights with advanced analytics and reporting. Make data-driven decisions to optimize learning outcomes and business impact."
          expectedDate="Q1 2026"
          features={plannedFeatures}
        />
      </Section>

      {/* Features Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Powerful analytics capabilities</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our analytics platform will provide comprehensive insights into your learning 
            programs, helping you optimize outcomes and demonstrate business impact.
          </p>
        </div>

        <FeatureGrid features={features} />
      </Section>

      {/* Analytics Categories */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Comprehensive analytics coverage</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            From learner behavior to business impact, our platform will provide insights 
            across all aspects of your learning and development programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {analyticsCategories.map((category, index) => {
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
                    <div className="text-sm font-medium text-semtex-ink mb-2">Key metrics:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="px-2 py-1 bg-semtex-hairline/20 text-semtex-muted-ink text-xs rounded text-center"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Interactive dashboards</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Create stunning, interactive dashboards that provide real-time insights 
            into your learning programs and business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
              
              {/* Mock dashboard interface */}
              <div className="absolute inset-4 space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-semtex-ink">Learning Analytics Dashboard</div>
                  <div className="text-xs text-semtex-muted-ink">Last updated: 2 min ago</div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-semtex-ink/5 rounded-lg p-3">
                    <div className="text-xs text-semtex-muted-ink">Active Learners</div>
                    <div className="text-lg font-bold text-semtex-ink">2,847</div>
                    <div className="text-xs text-green-400">↑ 12.3%</div>
                  </div>
                  <div className="bg-semtex-ink/5 rounded-lg p-3">
                    <div className="text-xs text-semtex-muted-ink">Completion Rate</div>
                    <div className="text-lg font-bold text-semtex-ink">87%</div>
                    <div className="text-xs text-green-400">↑ 5.2%</div>
                  </div>
                  <div className="bg-semtex-ink/5 rounded-lg p-3">
                    <div className="text-xs text-semtex-muted-ink">Avg. Score</div>
                    <div className="text-lg font-bold text-semtex-ink">92.1</div>
                    <div className="text-xs text-red-400">↓ 1.1%</div>
                  </div>
                </div>

                {/* Chart areas */}
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <div className="bg-semtex-ink/5 rounded-lg p-3">
                    <div className="text-xs text-semtex-muted-ink mb-2">Engagement Trend</div>
                    <div className="h-16 bg-gradient-to-r from-semtex-focus/20 to-semtex-focus/5 rounded relative">
                      <svg className="absolute inset-0 w-full h-full">
                        <polyline
                          points="4,12 12,8 20,10 28,6 36,9 44,4"
                          fill="none"
                          stroke="hsl(var(--focus-ring))"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-semtex-ink/5 rounded-lg p-3">
                    <div className="text-xs text-semtex-muted-ink mb-2">Top Courses</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-semtex-muted-ink">JavaScript Basics</span>
                        <span className="text-semtex-ink">342</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-semtex-muted-ink">Data Analysis</span>
                        <span className="text-semtex-ink">289</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-semtex-muted-ink">Project Management</span>
                        <span className="text-semtex-ink">156</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live data indicator */}
              <motion.div
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 flex items-center space-x-1 bg-green-500/20 px-2 py-1 rounded-full"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs text-green-400 font-medium">Live</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <h3 className="text-display-md mb-4">Designed for decision makers</h3>
              <p className="text-body text-semtex-muted-ink mb-6">
                Our dashboards will provide the right level of detail for every stakeholder, 
                from executives who need high-level insights to program managers who need 
                detailed operational data.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {dashboardFeatures.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-semtex-focus" />
                      <span className="text-sm font-medium text-semtex-ink">{feature.title}</span>
                    </div>
                    <p className="text-sm text-semtex-muted-ink">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Report Types */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Automated reporting suite</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Generate and deliver customized reports automatically to keep all stakeholders 
            informed about learning program performance and business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reportTypes.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-display-xs">{report.name}</h3>
                  <span className="px-2 py-1 bg-semtex-focus/20 text-semtex-focus text-xs rounded-full">
                    {report.frequency}
                  </span>
                </div>
                
                <p className="text-body-sm text-semtex-muted-ink mb-4">
                  {report.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-semtex-muted-ink">Target audience:</div>
                    <div className="text-sm font-medium text-semtex-ink">{report.stakeholder}</div>
                  </div>
                  <Download className="h-5 w-5 text-semtex-muted-ink" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Predictive Analytics */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-display-lg mb-4">AI-powered predictions</h2>
              <p className="text-body text-semtex-muted-ink mb-6">
                Go beyond descriptive analytics with predictive insights that help you 
                anticipate challenges, identify opportunities, and optimize outcomes before 
                problems occur.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Predict which learners are at risk of not completing courses',
                'Identify optimal learning paths for different learner profiles',
                'Forecast resource needs and capacity planning',
                'Anticipate skill gaps before they impact business outcomes',
                'Recommend content improvements based on performance data',
                'Optimize training schedules for maximum engagement'
              ].map((prediction, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-semtex-focus mt-0.5 flex-shrink-0" />
                  <span className="text-body-sm text-semtex-muted-ink">{prediction}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Prediction visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-display-xs">Learner Success Prediction</h3>
                
                {/* Mock prediction chart */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-semtex-muted-ink">High Risk (15%)</span>
                    <span className="text-red-400 font-medium">Intervention needed</span>
                  </div>
                  <div className="w-full bg-semtex-hairline/30 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '15%' }} />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-semtex-muted-ink">Medium Risk (25%)</span>
                    <span className="text-yellow-400 font-medium">Monitor closely</span>
                  </div>
                  <div className="w-full bg-semtex-hairline/30 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '25%' }} />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-semtex-muted-ink">Low Risk (60%)</span>
                    <span className="text-green-400 font-medium">On track</span>
                  </div>
                  <div className="w-full bg-semtex-hairline/30 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>

                <div className="pt-4 border-t border-semtex-hairline">
                  <div className="flex items-center space-x-2 text-sm text-semtex-focus">
                    <TrendingUp className="h-4 w-4" />
                    <span>87% prediction accuracy</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to unlock your data's potential?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join our early access program to be among the first to experience advanced 
            learning analytics and business intelligence capabilities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">500+</div>
              <div className="text-sm text-semtex-muted-ink">Available metrics and KPIs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">Real-time</div>
              <div className="text-sm text-semtex-muted-ink">Data updates and insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">95%</div>
              <div className="text-sm text-semtex-muted-ink">Prediction accuracy rate</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Analytics
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart,
  Zap,
  BookOpen,
  Coffee,
  Wifi,
  ArrowRight,
  Code,
  Palette,
  BarChart3,
  MessageSquare,
  Globe,
  CheckCircle
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { cn } from '@/lib/cn'

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  // SEO
  useSEO({
    title: 'Careers - Join Semtex Technologies in Johannesburg',
    description: 'Join our team building the future of education technology in South Africa. Remote-friendly positions available for developers, designers, and more.',
    canonical: 'https://semtex.co.za/careers'
  })

  const handleApply = (position: string) => {
    buttonClick(`apply_${position.toLowerCase().replace(/\s+/g, '_')}`, 'careers')
    navigate(`/contact?type=application&position=${encodeURIComponent(position)}`)
  }

  const benefits = [
    {
      icon: MapPin,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in South Africa with occasional team meetups in Johannesburg.'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Core collaboration hours with flexibility to work when you\'re most productive.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical aid contribution and wellness program support.'
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: 'R15,000 annual budget for courses, conferences, and professional development.'
    },
    {
      icon: Coffee,
      title: 'Team Retreats',
      description: 'Quarterly team gatherings and annual company retreats for collaboration and fun.'
    },
    {
      icon: Zap,
      title: 'Equity Participation',
      description: 'Share in our success with employee stock options for all full-time team members.'
    }
  ]

  const values = [
    {
      title: 'Excellence First',
      description: 'We build products that meet global standards while understanding local needs.',
      icon: CheckCircle
    },
    {
      title: 'Transparency',
      description: 'Open communication, honest feedback, and shared decision-making processes.',
      icon: Globe
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and improvement, both personally and professionally.',
      icon: BookOpen
    },
    {
      title: 'Impact Focus',
      description: 'Every feature we build aims to genuinely improve how people learn and grow.',
      icon: Heart
    }
  ]

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote (South Africa)',
      type: 'Full-time',
      salary: 'R650k - R850k',
      icon: Code,
      description: 'Join our core engineering team building scalable LMS and automation platforms using React, TypeScript, and Node.js.',
      requirements: [
        '5+ years of full-stack development experience',
        'Expert knowledge of React, TypeScript, and modern web technologies',
        'Experience with Node.js, databases, and cloud platforms',
        'Strong understanding of software architecture and design patterns',
        'Experience with testing frameworks and CI/CD processes'
      ],
      responsibilities: [
        'Architect and implement new product features',
        'Collaborate with product and design teams on user experiences',
        'Mentor junior developers and contribute to technical decisions',
        'Optimize application performance and scalability',
        'Participate in code reviews and maintain high code quality standards'
      ]
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote (South Africa)',
      type: 'Full-time',
      salary: 'R450k - R650k',
      icon: Palette,
      description: 'Shape the user experience of our learning management platform and help define the future of educational technology design.',
      requirements: [
        '3+ years of product design experience, preferably in SaaS or EdTech',
        'Proficiency in Figma, design systems, and prototyping tools',
        'Strong understanding of UX research and user-centered design principles',
        'Experience designing for complex workflows and data-heavy applications',
        'Portfolio demonstrating end-to-end design process and impact'
      ],
      responsibilities: [
        'Design intuitive user experiences for learning management features',
        'Conduct user research and usability testing',
        'Collaborate closely with engineering and product teams',
        'Maintain and evolve our design system',
        'Create prototypes and design specifications for development'
      ]
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Johannesburg / Remote',
      type: 'Full-time',
      salary: 'R350k - R500k',
      icon: Users,
      description: 'Help our clients achieve success with our platform while building long-term relationships and driving product adoption.',
      requirements: [
        '2+ years of customer success or account management experience',
        'Strong communication skills in English and at least one other SA language',
        'Experience with SaaS platforms and customer onboarding',
        'Understanding of learning and development or educational technology',
        'Analytical mindset with ability to interpret customer data and metrics'
      ],
      responsibilities: [
        'Guide new customers through onboarding and implementation',
        'Monitor customer health and proactively address potential issues',
        'Conduct regular check-ins and success reviews with key accounts',
        'Gather customer feedback and relay insights to product team',
        'Support renewal processes and identify expansion opportunities'
      ]
    },
    {
      id: 4,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote (South Africa)',
      type: 'Full-time',
      salary: 'R400k - R600k',
      icon: MessageSquare,
      description: 'Drive growth through strategic marketing initiatives, content creation, and community building in the South African EdTech space.',
      requirements: [
        '3+ years of marketing experience, preferably in B2B SaaS or technology',
        'Strong content creation and copywriting skills',
        'Experience with digital marketing channels and marketing automation',
        'Understanding of the South African education and corporate training markets',
        'Data-driven approach to marketing with experience in analytics tools'
      ],
      responsibilities: [
        'Develop and execute marketing strategies to drive lead generation',
        'Create compelling content for blog, social media, and marketing campaigns',
        'Manage marketing campaigns across multiple channels',
        'Organize webinars, events, and thought leadership initiatives',
        'Track and analyze marketing performance and ROI'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote (South Africa)',
      type: 'Full-time',
      salary: 'R550k - R750k',
      icon: BarChart3,
      description: 'Build and maintain the infrastructure that powers our platform, ensuring high availability and performance for our users.',
      requirements: [
        '3+ years of DevOps or infrastructure engineering experience',
        'Strong knowledge of AWS/Azure, Docker, and Kubernetes',
        'Experience with CI/CD pipelines, monitoring, and alerting systems',
        'Understanding of security best practices and compliance requirements',
        'Scripting skills in Python, Bash, or similar languages'
      ],
      responsibilities: [
        'Design and maintain scalable cloud infrastructure',
        'Implement and improve CI/CD pipelines and deployment processes',
        'Monitor system performance and ensure high availability',
        'Implement security measures and compliance requirements',
        'Collaborate with development teams on architecture and deployment strategies'
      ]
    }
  ]

  const departments = [...new Set(openPositions.map(p => p.department))]

  const filteredPositions = selectedDepartment 
    ? openPositions.filter(p => p.department === selectedDepartment)
    : openPositions

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
            Build the future of learning in Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-semtex-muted-ink max-w-3xl mx-auto"
          >
            Join our remote-first team in creating world-class educational technology. 
            We're building the tools that will shape how people learn and grow across South Africa and beyond.
          </motion.p>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Team Members', value: '15+', desc: 'Talented individuals' },
            { label: 'Remote-First', value: '100%', desc: 'Work from anywhere' },
            { label: 'Learning Budget', value: 'R15k', desc: 'Per person annually' },
            { label: 'Founded', value: '2024', desc: 'Growing rapidly' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-semtex-ink mb-1">{stat.value}</div>
              <div className="font-semibold text-semtex-ink mb-1">{stat.label}</div>
              <div className="text-sm text-semtex-muted-ink">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Why you'll love working here</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            We believe in taking care of our team so they can do their best work and enjoy the journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-semtex-focus" />
                  </div>
                  <h3 className="text-display-xs mb-3">{benefit.title}</h3>
                  <p className="text-body-sm text-semtex-muted-ink">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Values */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Our values</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            These principles guide how we work, make decisions, and treat each other every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-semtex-ink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-semtex-ink" />
                </div>
                <h3 className="text-display-xs mb-3">{value.title}</h3>
                <p className="text-body-sm text-semtex-muted-ink">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Open positions</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            We're looking for talented people who are passionate about education technology 
            and want to make a real impact in South Africa.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedDepartment(null)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              selectedDepartment === null
                ? 'bg-semtex-focus text-semtex-bg'
                : 'bg-semtex-hairline/30 text-semtex-muted-ink hover:text-semtex-ink'
            )}
          >
            All Departments
          </button>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={
                selectedDepartment === dept
                  ? 'px-4 py-2 rounded-full text-sm font-medium bg-semtex-focus text-semtex-bg'
                  : 'px-4 py-2 rounded-full text-sm font-medium bg-semtex-hairline/30 text-semtex-muted-ink hover:text-semtex-ink transition-colors'
              }
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Positions List */}
        <div className="space-y-6">
          {filteredPositions.map((position, index) => {
            const Icon = position.icon

            return (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:border-semtex-muted-ink/20 transition-colors">
                  
                  {/* Position Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-semtex-focus" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-display-sm mb-2">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-semtex-muted-ink">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{position.salary}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleApply(position.title)}
                      className="btn-primary mt-4 lg:mt-0 inline-flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Position Details */}
                  <div className="grid lg:grid-cols-3 gap-6">
                    
                    {/* Description */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-semtex-ink mb-3">Role Overview</h4>
                      <p className="text-body-sm text-semtex-muted-ink">
                        {position.description}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-semtex-ink mb-3">Requirements</h4>
                      <div className="space-y-2">
                        {position.requirements.slice(0, 3).map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start space-x-2 text-sm text-semtex-muted-ink">
                            <CheckCircle className="h-4 w-4 text-semtex-focus mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </div>
                        ))}
                        {position.requirements.length > 3 && (
                          <div className="text-sm text-semtex-muted-ink/70">
                            +{position.requirements.length - 3} more requirements
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-semtex-ink mb-3">Key Responsibilities</h4>
                      <div className="space-y-2">
                        {position.responsibilities.slice(0, 3).map((resp, respIndex) => (
                          <div key={respIndex} className="flex items-start space-x-2 text-sm text-semtex-muted-ink">
                            <ArrowRight className="h-4 w-4 text-semtex-muted-ink mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </div>
                        ))}
                        {position.responsibilities.length > 3 && (
                          <div className="text-sm text-semtex-muted-ink/70">
                            +{position.responsibilities.length - 3} more responsibilities
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-semtex-muted-ink mx-auto mb-4" />
            <h3 className="text-display-xs mb-2">No positions in this department</h3>
            <p className="text-body-sm text-semtex-muted-ink">
              Check back soon or view all departments for current openings.
            </p>
          </div>
        )}
      </Section>

      {/* Application Process */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Our hiring process</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            We've designed our process to be transparent, respectful of your time, 
            and focused on finding the right mutual fit.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              step: 1,
              title: 'Application Review',
              description: 'We review your application and portfolio within 3-5 business days.',
              duration: '3-5 days'
            },
            {
              step: 2,
              title: 'Initial Call',
              description: '30-minute video call to discuss your experience and learn about your interests.',
              duration: '30 mins'
            },
            {
              step: 3,
              title: 'Technical Assessment',
              description: 'Role-specific assessment or portfolio review with our team leads.',
              duration: '1-2 hours'
            },
            {
              step: 4,
              title: 'Final Interview',
              description: 'Meet the team and founders to discuss culture fit and next steps.',
              duration: '45 mins'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-semtex-focus/10 border-2 border-semtex-focus/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-semtex-focus">{step.step}</span>
              </div>
              <h3 className="text-display-xs mb-2">{step.title}</h3>
              <p className="text-body-sm text-semtex-muted-ink mb-2">
                {step.description}
              </p>
              <div className="text-xs text-semtex-focus font-medium">
                {step.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Don't see the right role?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            We're always interested in meeting talented people who share our passion for 
            education technology. Send us your resume and let's start a conversation.
          </p>
          <button
            onClick={() => {
              buttonClick('general_application', 'careers_cta')
              navigate('/contact?type=application&position=general')
            }}
            className="btn-primary text-base px-6 py-3 inline-flex items-center space-x-2"
          >
            <span>Send General Application</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-sm text-semtex-muted-ink mt-6">
            We'll keep your information on file and reach out when relevant opportunities arise.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default Careers
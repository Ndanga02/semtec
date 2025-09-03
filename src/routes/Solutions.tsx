import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Building2, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  Briefcase,
  Zap,
  Shield
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import Card from '@/components/Card'
import FeatureGrid from '@/components/FeatureGrid'
import Testimonial from '@/components/Testimonial'

const Solutions = () => {
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  // SEO
  useSEO({
    title: 'Solutions - Semtex Technologies Learning Management for Every Organization',
    description: 'Tailored LMS solutions for education providers, corporates, and training academies. Discover how Semtex Technologies can transform your learning programs.',
    canonical: 'https://semtex.co.za/solutions'
  })

  const handleDemoClick = (solution: string) => {
    buttonClick(`get_demo_${solution}`, 'solutions')
    navigate(`/contact?type=demo&solution=${solution}`)
  }

  const solutions = [
    {
      id: 'education',
      title: 'Education Providers',
      description: 'Universities, colleges, and schools delivering world-class online and blended learning experiences.',
      icon: GraduationCap,
      color: 'blue',
      features: [
        'Student information system integration',
        'Advanced grading and assessment tools',
        'Plagiarism detection and academic integrity',
        'Parent and student portals',
        'Accreditation and compliance reporting',
        'Virtual classroom integration'
      ],
      benefits: [
        'Improve student engagement and outcomes',
        'Streamline administrative processes',
        'Support hybrid learning models',
        'Meet accreditation requirements'
      ],
      stats: {
        users: '50,000+',
        institutions: '25+',
        satisfaction: '96%'
      }
    },
    {
      id: 'corporate',
      title: 'Corporate Training',
      description: 'Enterprises and organizations building skills, ensuring compliance, and driving performance.',
      icon: Building2,
      color: 'purple',
      features: [
        'HR system integration and SSO',
        'Competency management and skills tracking',
        'Compliance training and certification',
        'Performance analytics and ROI tracking',
        'Mobile learning for field teams',
        'Multi-language support'
      ],
      benefits: [
        'Accelerate employee onboarding',
        'Ensure regulatory compliance',
        'Measure training ROI and impact',
        'Reduce training costs and time'
      ],
      stats: {
        users: '25,000+',
        companies: '50+',
        satisfaction: '94%'
      }
    },
    {
      id: 'academies',
      title: 'Training Academies',
      description: 'Professional training organizations and certification bodies monetizing their expertise.',
      icon: Award,
      color: 'green',
      features: [
        'Course marketplace and e-commerce',
        'Instructor management and tools',
        'Certificate and badge issuance',
        'Payment processing and subscriptions',
        'White-label branding options',
        'Affiliate and partner programs'
      ],
      benefits: [
        'Launch new revenue streams',
        'Scale training delivery globally',
        'Automate certification processes',
        'Build brand recognition'
      ],
      stats: {
        users: '15,000+',
        academies: '30+',
        satisfaction: '98%'
      }
    }
  ]

  const commonFeatures = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months, with our streamlined setup process and migration tools.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, encryption, and compliance features to protect your data.'
    },
    {
      icon: Users,
      title: 'Scalable Platform',
      description: 'Start small and grow big. Our platform scales seamlessly from hundreds to hundreds of thousands of users.'
    },
    {
      icon: Target,
      title: 'Local Support',
      description: 'Johannesburg-based team providing personalized support and understanding of local market needs.'
    }
  ]

  const caseStudies = [
    {
      company: 'University of Excellence',
      sector: 'Higher Education',
      challenge: 'Needed to rapidly shift to online learning while maintaining academic quality.',
      solution: 'Deployed Semtex LMS with virtual classroom integration and advanced assessment tools.',
      results: [
        '95% student satisfaction with online learning',
        '40% reduction in administrative overhead',
        '100% course completion tracking accuracy'
      ],
      quote: "Semtex LMS enabled us to deliver world-class online education without compromising on quality. The transition was seamless.",
      author: "Dr. Sarah Johnson",
      role: "Dean of Digital Learning"
    },
    {
      company: 'TechCorp Industries',
      sector: 'Corporate',
      challenge: 'Struggled with compliance training across multiple locations and languages.',
      solution: 'Implemented automated compliance tracking with multi-language support and mobile access.',
      results: [
        '99% compliance certification rate',
        '60% reduction in training administration time',
        '85% improvement in employee engagement'
      ],
      quote: "Our compliance training went from a major headache to a smooth, automated process. Game-changing for our global operations.",
      author: "Michael Chen",
      role: "Head of Learning & Development"
    },
    {
      company: 'Skills Academy SA',
      sector: 'Training Provider',
      challenge: 'Wanted to digitize and scale their professional development programs.',
      solution: 'Built a custom-branded learning portal with e-commerce and certification features.',
      results: [
        '300% increase in course enrollment',
        '50% reduction in operational costs',
        'R2M+ in new digital revenue streams'
      ],
      quote: "Semtex helped us transform from a traditional training company to a modern digital education provider.",
      author: "Thandiwe Mthembu",
      role: "CEO & Founder"
    }
  ]

  const implementationProcess = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We understand your needs, goals, and current systems to create a tailored implementation plan.',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Setup & Configuration',
      description: 'Our team configures the platform, imports your data, and sets up integrations.',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Training & Testing',
      description: 'Comprehensive training for your team and thorough testing to ensure everything works perfectly.',
      duration: '1-2 weeks'
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'Go live with confidence, backed by ongoing support and optimization assistance.',
      duration: 'Ongoing'
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
            Solutions for every learning need
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-semtex-muted-ink max-w-3xl mx-auto"
          >
            Whether you're an educational institution, corporate organization, or training provider, 
            we have the right solution to transform your learning programs and achieve your goals.
          </motion.p>
        </div>

        {/* Common Features */}
        <FeatureGrid features={commonFeatures} className="mb-16" />
      </Section>

      {/* Solutions Grid */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Tailored for your industry</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Each solution is specifically designed to address the unique challenges 
            and requirements of different learning environments.
          </p>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-semtex-focus/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-semtex-focus" />
                    </div>
                    <div>
                      <h3 className="text-display-md">{solution.title}</h3>
                      <p className="text-body text-semtex-muted-ink">{solution.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-display-xs mb-4">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 text-sm text-semtex-muted-ink">
                          <CheckCircle className="h-4 w-4 text-semtex-focus mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-display-xs mb-4">Business Benefits</h4>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-2 text-sm text-semtex-muted-ink">
                          <TrendingUp className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDemoClick(solution.id)}
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Get Demo for {solution.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Stats Card */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="p-8">
                    <div className="text-center mb-6">
                      <Icon className="h-12 w-12 text-semtex-focus mx-auto mb-4" />
                      <h4 className="text-display-sm mb-2">{solution.title}</h4>
                      <p className="text-body-sm text-semtex-muted-ink">Success metrics</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-semtex-ink">{solution.stats.users}</div>
                        <div className="text-sm text-semtex-muted-ink">Active learners</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-semtex-ink">{solution.stats.institutions || solution.stats.companies || solution.stats.academies}</div>
                        <div className="text-sm text-semtex-muted-ink">
                          {solution.id === 'education' && 'Institutions served'}
                          {solution.id === 'corporate' && 'Companies partnered'}
                          {solution.id === 'academies' && 'Training providers'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-semtex-ink">{solution.stats.satisfaction}</div>
                        <div className="text-sm text-semtex-muted-ink">Satisfaction rate</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Success stories</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            See how organizations across South Africa are transforming their learning 
            programs with Semtex Technologies.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid lg:grid-cols-3 gap-8 lg:gap-12"
            >
              
              {/* Challenge & Solution */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-semtex-focus" />
                  </div>
                  <div>
                    <h3 className="text-display-sm">{caseStudy.company}</h3>
                    <p className="text-semtex-focus font-medium">{caseStudy.sector}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-display-xs mb-2">Challenge</h4>
                    <p className="text-body-sm text-semtex-muted-ink">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-display-xs mb-2">Solution</h4>
                    <p className="text-body-sm text-semtex-muted-ink">{caseStudy.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-display-xs mb-3">Results</h4>
                  <div className="space-y-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-body-sm text-semtex-muted-ink">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div>
                <Testimonial
                  quote={caseStudy.quote}
                  author={caseStudy.author}
                  role={caseStudy.role}
                  company={caseStudy.company}
                  rating={5}
                  className="h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Implementation Process */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Your success is our process</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our proven implementation methodology ensures you get maximum value 
            from day one, with ongoing support for continued success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {implementationProcess.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <Card className="p-6 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-semtex-focus/10 border-2 border-semtex-focus/20 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-semtex-focus">{step.step}</span>
                  </div>
                  
                  {/* Connection line */}
                  {index < implementationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-0.5 bg-semtex-focus/30" />
                        <div className="w-0 h-0 border-l-4 border-l-semtex-focus/30 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-display-xs mb-3">{step.title}</h3>
                <p className="text-body-sm text-semtex-muted-ink mb-4">
                  {step.description}
                </p>
                <div className="text-xs text-semtex-focus font-medium">
                  Timeline: {step.duration}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to transform your learning programs?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join hundreds of organizations who've chosen Semtex Technologies to power 
            their learning and development initiatives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => {
                buttonClick('get_demo', 'solutions_cta')
                navigate('/contact?type=demo')
              }}
              className="btn-primary text-base px-6 py-3"
            >
              Get a Custom Demo
            </button>
            <button
              onClick={() => {
                buttonClick('view_pricing', 'solutions_cta')
                navigate('/pricing')
              }}
              className="btn-secondary text-base px-6 py-3"
            >
              View Pricing Plans
            </button>
          </div>
          <p className="text-sm text-semtex-muted-ink mt-6">
            Implementation typically takes 4-6 weeks • Local support included • No long-term contracts
          </p>
        </div>
      </Section>
    </div>
  )
}

export default Solutions
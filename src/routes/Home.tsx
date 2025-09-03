import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import { injectSchema, getOrganizationSchema } from '@/lib/schema'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import Testimonial from '../components/Testimonial'
import Section from '../components/Section'
import Card from '../components/Card'

const Home = () => {
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  // SEO
  useSEO({
    title: 'Semtex Technologies - Modern Learning Management Systems Built in Johannesburg',
    description: 'Launch a beautiful LMS in days, not months. Semtex Technologies builds modern learning management systems and educational technology for South African businesses.',
    canonical: 'https://semtex.co.za',
    keywords: 'LMS, learning management system, South Africa, Johannesburg, e-learning, education technology, course management'
  })

  // Schema.org
  useEffect(() => {
    injectSchema(getOrganizationSchema(), 'organization-schema')
    return () => {
      // Cleanup on unmount if needed
    }
  }, [])

  const handleDemoClick = () => {
    buttonClick('get_demo', 'hero')
    navigate('/contact?type=demo')
  }

  const handleExploreClick = () => {
    buttonClick('explore_products', 'hero')
    navigate('/products')
  }

  const features = [
    {
      icon: Clock,
      title: 'Launch in Days',
      description: 'Get your LMS running quickly with our streamlined setup process and pre-built templates.'
    },
    {
      icon: Users,
      title: 'Built for Scale',
      description: 'From small teams to enterprise organizations, our platform grows with your needs.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, role-based access, and compliance-ready features.'
    }
  ]

  const stats = [
    { label: 'Active Learners', value: '10,000+' },
    { label: 'Courses Created', value: '500+' },
    { label: 'Hours Learned', value: '25,000+' },
    { label: 'Client Satisfaction', value: '98%' }
  ]

  const testimonials = [
    {
      quote: "Semtex LMS transformed how we deliver training. The setup was incredibly smooth and our team was productive from day one.",
      author: "Sarah Johnson",
      role: "Learning & Development Manager",
      company: "TechCorp SA",
      rating: 5
    },
    {
      quote: "Finally, an LMS that doesn't feel outdated. The interface is clean, intuitive, and our learners actually enjoy using it.",
      author: "Michael Chen",
      role: "Training Director",
      company: "EduSolutions",
      rating: 5
    },
    {
      quote: "The local support from Johannesburg made all the difference. They understand our market and our needs.",
      author: "Thandiwe Mthembu",
      role: "CEO",
      company: "Skills Academy",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <Hero
        headline="Modern learning, built in Johannesburg"
        subheadline="Semtex Technologies helps teams launch a clean, powerful LMS in days—then scale into automation and AI."
        primaryCTA={{
          label: "Get a Demo",
          onClick: handleDemoClick
        }}
        secondaryCTA={{
          label: "Explore Products",
          onClick: handleExploreClick,
          icon: ArrowRight
        }}
        showPlayButton={true}
        onPlayClick={() => buttonClick('play_demo_video', 'hero')}
      />

      {/* Trust Indicators */}
      <Section className="py-12 lg:py-16 bg-semtex-panel/30">
        <div className="text-center mb-8">
          <p className="text-semtex-muted-ink text-sm font-medium mb-6">
            Trusted by forward-thinking organizations across South Africa
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-semtex-ink mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-semtex-muted-ink">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">
            Why choose Semtex LMS?
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            We've reimagined the learning management system for the modern workplace. 
            Fast, beautiful, and built for the way teams actually work.
          </p>
        </div>

        <FeatureGrid features={features} />

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              buttonClick('learn_more_features', 'features')
              navigate('/products/lms')
            }}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>Learn more about our LMS</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Section>

      {/* Product Highlights */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">
            More than just an LMS
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Start with our learning management system, then expand into automation, 
            AI tools, and analytics as your needs grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* LMS Card */}
          <Card 
            className="card-hover p-6"
            onClick={() => {
              buttonClick('product_lms', 'product_highlights')
              navigate('/products/lms')
            }}
          >
            <div className="w-12 h-12 bg-semtex-ink/10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-semtex-ink" />
            </div>
            <h3 className="text-display-xs mb-3">Learning Management System</h3>
            <p className="text-body-sm mb-4">
              Complete course builder, assessments, progress tracking, and analytics. 
              Ready to use today.
            </p>
            <div className="flex items-center text-sm font-medium text-semtex-ink">
              <span>Available now</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </Card>

          {/* Automation Card */}
          <Card 
            className="card-hover p-6"
            onClick={() => {
              buttonClick('product_automation', 'product_highlights')
              navigate('/products')
            }}
          >
            <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-semtex-focus" />
            </div>
            <h3 className="text-display-xs mb-3">Workflow Automation</h3>
            <p className="text-body-sm mb-4">
              Streamline repetitive processes, capture data automatically, 
              and integrate with your existing tools.
            </p>
            <div className="flex items-center text-sm font-medium text-semtex-focus">
              <span>Coming soon</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </Card>

          {/* AI Tools Card */}
          <Card 
            className="card-hover p-6 md:col-span-2 lg:col-span-1"
            onClick={() => {
              buttonClick('product_ai', 'product_highlights')
              navigate('/products')
            }}
          >
            <div className="w-12 h-12 bg-semtex-muted-ink/10 rounded-xl flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-semtex-muted-ink" />
            </div>
            <h3 className="text-display-xs mb-3">AI & Analytics</h3>
            <p className="text-body-sm mb-4">
              Intelligent chatbots, document processing, and advanced analytics 
              to supercharge your learning programs.
            </p>
            <div className="flex items-center text-sm font-medium text-semtex-muted-ink">
              <span>Coming soon</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">
            Loved by teams across South Africa
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            working with Semtex Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              className="card-base p-6"
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">
            Ready to transform your learning?
          </h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            Join forward-thinking organizations who've chosen Semtex Technologies 
            to power their learning and development programs.
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
                buttonClick('contact_sales', 'cta')
                navigate('/contact')
              }}
              className="btn-secondary text-base px-6 py-3"
            >
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-semtex-muted-ink mt-6">
            No commitment required • Setup in minutes • Local support
          </p>
        </div>
      </Section>
    </div>
  )
}

export default Home
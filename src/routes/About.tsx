import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, MapPin, GraduationCap, Users, Target, Heart } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import { injectSchema, getOrganizationSchema } from '@/lib/schema'
import Section from '@/components/Section'
import Card from '@/components/Card'
import ManagementImage from '../assets/20240102_20283.jpg';

const About = () => {
  const { buttonClick } = useAnalytics()

  // SEO
  useSEO({
    title: 'About Semtex Technologies - Modern Learning Management Systems from Johannesburg',
    description: 'Learn about Semtex Technologies, our mission to build world-class learning management systems in South Africa, and meet our founders.',
    canonical: 'https://semtex.co.za/about'
  })

  // Schema.org
  useEffect(() => {
    injectSchema(getOrganizationSchema(), 'organization-schema')
    return () => {
      // Cleanup handled by navigation
    }
  }, [])

  const founders = [
    {
      name: 'Ndanganeni Nedzamba',
      title: 'Co-founder & CTO',
      education: 'BCom in Economics & Econometrics (University of Johannesburg)',
      image: ManagementImage,
      linkedin: 'https://linkedin.com/in/ndanganeni-nedzamba',
      bio: 'Ndanganeni brings deep technical expertise and a passion for building scalable educational technology. His background in economics and econometrics informs his data-driven approach to product development.'
    },
    {
      name: 'Prince Makhesha',
      title: 'Co-founder & CEO',
      education: 'BCom in Economics + BCom Hons in Economics (University of Limpopo)',
      image: ManagementImage,
      linkedin: 'https://linkedin.com/in/prince-makhesha',
      bio: 'Prince leads Semtex with a vision to democratize access to quality learning management systems across Africa. His economics background drives the company\'s focus on sustainable growth and market expansion.'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence First',
      description: 'We build products that meet global quality standards while understanding local needs and contexts.'
    },
    {
      icon: Users,
      title: 'African Innovation',
      description: 'Proudly building for African businesses first, then scaling globally with solutions that work everywhere.'
    },
    {
      icon: Heart,
      title: 'Impact Focused',
      description: 'Every feature we build aims to genuinely improve how people learn and organizations grow.'
    }
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Semtex Technologies established in Johannesburg with a mission to modernize learning management systems.'
    },
    {
      year: '2024',
      title: 'LMS Launch',
      description: 'Released our flagship Learning Management System, helping organizations launch beautiful learning programs in days.'
    },
    {
      year: '2025',
      title: 'Automation Suite',
      description: 'Expanding into workflow automation and data capture tools to complement our learning platform.'
    },
    {
      year: '2025',
      title: 'AI Integration',
      description: 'Developing AI-powered features including chatbots and document processing to enhance the learning experience.'
    }
  ]

  const handleLinkedInClick = (name: string) => {
    buttonClick(`founder_linkedin_${name.toLowerCase().replace(/\s+/g, '_')}`, 'founders')
  }

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
            Building the future of learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-semtex-muted-ink max-w-3xl mx-auto"
          >
            Semtex Technologies is on a mission to democratize access to world-class learning 
            management systems, starting from Johannesburg and scaling globally.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-display-md">Our Story</h2>
            <div className="prose prose-lg max-w-none text-semtex-muted-ink space-y-4">
              <p>
                Founded in 2024 by two economics graduates from South African universities, 
                Semtex Technologies emerged from a simple observation: most learning management 
                systems were either too complex, too expensive, or too outdated for modern organizations.
              </p>
              <p>
                We saw an opportunity to build something different—a platform that combines 
                the sophistication of global enterprise software with the accessibility and 
                understanding of local market needs.
              </p>
              <p>
                Today, we're proud to serve organizations across South Africa with our modern 
                LMS platform, and we're just getting started. Our roadmap includes automation 
                tools, AI features, and analytics that will transform how organizations approach 
                learning and development.
              </p>
            </div>
          </motion.div>

          {/* Stats & Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-semtex-ink" />
                <h3 className="text-display-xs">Based in Johannesburg</h3>
              </div>
              <p className="text-body-sm text-semtex-muted-ink mb-4">
                We're proudly South African, building for African businesses first with a global mindset.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-semtex-hairline">
                <div>
                  <div className="text-2xl font-bold text-semtex-ink">10,000+</div>
                  <div className="text-sm text-semtex-muted-ink">Active learners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-semtex-ink">500+</div>
                  <div className="text-sm text-semtex-muted-ink">Courses created</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-semtex-focus/10 to-transparent border-semtex-focus/20">
              <h3 className="text-display-xs mb-3">We're Hiring!</h3>
              <p className="text-body-sm text-semtex-muted-ink mb-4">
                Join us in building the future of educational technology. We're looking for 
                passionate developers and designers who share our vision.
              </p>
              <a 
                href="/careers"
                className="btn-secondary text-sm"
              >
                View Open Positions
              </a>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Our Values</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            The principles that guide everything we build and every decision we make.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-semtex-ink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-semtex-ink" />
                  </div>
                  <h3 className="text-display-xs mb-3">{value.title}</h3>
                  <p className="text-body-sm text-semtex-muted-ink">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Founders */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Meet Our Founders</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Economics graduates turned entrepreneurs, building the future of educational technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex flex-col items-center text-center">
                  
                  {/* Photo */}
                  <div className="w-90 h-90 overflow-hidden mb-4 border-2 border-semtex-hairline">
                    <img
                      src={founder.image}
                      alt={`${founder.name} - ${founder.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="text-display-xs mb-1">{founder.name}</h3>
                  <p className="text-semtex-focus font-medium mb-2">{founder.title}</p>
                  
                  {/* Education */}
                  <div className="flex items-center space-x-2 mb-4">
                    <GraduationCap className="h-4 w-4 text-semtex-muted-ink" />
                    <p className="text-sm text-semtex-muted-ink">{founder.education}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-body-sm text-semtex-muted-ink mb-6">
                    {founder.bio}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={founder.linkedin}
                    onClick={() => handleLinkedInClick(founder.name)}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-semtex-ink hover:text-semtex-focus transition-colors focus-ring rounded-lg px-3 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Our Journey</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            From founding to the future—here's how we're building Semtex Technologies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-16 h-16 bg-semtex-focus/10 border-2 border-semtex-focus/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-semtex-focus font-bold">{item.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-display-xs mb-2">{item.title}</h3>
                  <p className="text-body-sm text-semtex-muted-ink">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About
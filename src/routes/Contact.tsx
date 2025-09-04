import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import { useToast, toast } from '@/components/Toast'
import { Input, TextArea, Select } from '@/components/FormFields'
import Section from '@/components/Section'
import Card from '@/components/Card'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  interest: z.string().min(1, 'Please select your area of interest'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type ContactData = z.infer<typeof contactSchema>

const Contact = () => {
  const [searchParams] = useSearchParams()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { addToast } = useToast()
  const { contactSubmit } = useAnalytics()

  // SEO
  useSEO({
    title: 'Contact Semtex Technologies - Get in Touch',
    description: 'Get in touch with Semtex Technologies. Request a demo, ask questions, or discuss your learning management system needs.',
    canonical: 'https://semtex.co.za/contact'
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema)
  })

  // Set default interest based on URL params
  useEffect(() => {
    const type = searchParams.get('type')
    if (type === 'demo') {
      setValue('interest', 'demo')
    }
  }, [searchParams, setValue])

  const interestOptions = [
    { value: 'demo', label: 'Request a Demo' },
    { value: 'lms', label: 'Learning Management System' },
    { value: 'automation', label: 'Workflow Automation' },
    { value: 'ai', label: 'AI & Analytics' },
    { value: 'pricing', label: 'Pricing Information' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' }
  ]

  const onSubmit = async (data: ContactData) => {
    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Contact form submission:', data)
      contactSubmit(data.interest)
      
  addToast({
  ...toast.success(
    'Message sent successfully!',
    'We\'ll get back to you within 24 hours.'
  ),
  description: 'We\'ll get back to you within 24 hours.' 
})
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Contact form submission failed:', error)
      addToast({
        type: 'error',
        title: 'Failed to send message',
        description: 'Please try again or contact us directly at hello@semtex.co.za'
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email us',
      description: 'Get in touch via email',
      content: 'hello@semtex.co.za',
      link: 'mailto:hello@semtex.co.za'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Based in Johannesburg',
      content: 'Johannesburg, South Africa',
      subtitle: 'Offices coming soon'
    },
    {
      icon: Clock,
      title: 'Response time',
      description: 'We aim to respond quickly',
      content: 'Within 24 hours',
      subtitle: 'Business days: Mon-Fri'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section className="py-16 lg:py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-lg mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto"
          >
            Ready to transform your learning programs? Let's discuss how Semtex Technologies 
            can help you launch a powerful LMS in days, not months.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-display-sm mb-6">Send us a message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      {...register('name')}
                      label="Full Name"
                      placeholder="John Doe"
                      error={errors.name}
                    />
                    
                    <Input
                      {...register('email')}
                      type="email"
                      label="Email Address"
                      placeholder="john@company.com"
                      error={errors.email}
                    />
                  </div>

                  <Input
                    {...register('company')}
                    label="Company Name"
                    placeholder="Your company or organization"
                    error={errors.company}
                  />

                  <Select
                    {...register('interest')}
                    label="What are you interested in?"
                    options={interestOptions}
                    error={errors.interest}
                  />

                  <TextArea
                    {...register('message')}
                    label="Message"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={5}
                    error={errors.message}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-display-xs mb-2">Message sent!</h3>
                  <p className="text-body text-semtex-muted-ink mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-display-sm mb-6">Contact Information</h2>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-semtex-ink/10 rounded-xl">
                      <Icon className="h-6 w-6 text-semtex-ink" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-semtex-ink mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm text-semtex-muted-ink mb-2">
                        {info.description}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium text-semtex-ink hover:text-semtex-muted-ink transition-colors focus-ring rounded"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="font-medium text-semtex-ink">
                          {info.content}
                        </p>
                      )}
                      {info.subtitle && (
                        <p className="text-sm text-semtex-muted-ink/70 mt-1">
                          {info.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}

            {/* Map Placeholder */}
            <Card className="p-6">
              <h3 className="font-semibold text-semtex-ink mb-4">Location</h3>
              <div className="aspect-video bg-semtex-hairline/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-semtex-muted-ink mx-auto mb-2" />
                  <p className="text-sm text-semtex-muted-ink">
                    Johannesburg, South Africa
                  </p>
                  <p className="text-xs text-semtex-muted-ink/70 mt-1">
                    Physical offices coming soon
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
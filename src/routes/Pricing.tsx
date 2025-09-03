import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Check, 
  X, 
  ArrowRight, 
  Zap, 
  Building2, 
  Rocket,
  Users,
  Shield,
  Headphones,
  Globe,
  CheckCircle,
  HelpCircle
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import Card from '@/components/Card'
import FAQ from '@/components/FAQ'
import { cn } from '@/lib/cn'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const navigate = useNavigate()
  const { buttonClick } = useAnalytics()

  // SEO
  useSEO({
    title: 'Pricing - Semtex Technologies LMS Plans Starting from R299/month',
    description: 'Transparent pricing for Semtex LMS. Choose from Starter, Growth, or Enterprise plans. All plans include setup assistance and local South African support.',
    canonical: 'https://semtex.co.za/pricing'
  })

  const handlePlanSelect = (planName: string) => {
    buttonClick(`select_plan_${planName.toLowerCase()}`, 'pricing')
    navigate(`/contact?type=demo&plan=${planName.toLowerCase()}`)
  }

  const handleContactSales = () => {
    buttonClick('contact_sales', 'pricing')
    navigate('/contact?type=enterprise')
  }

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and organizations getting started with online learning.',
      icon: Zap,
      price: {
        monthly: 299,
        annual: 249
      },
      maxUsers: '50',
      popular: false,
      features: [
        { name: 'Up to 50 active learners', included: true },
        { name: 'Unlimited courses and content', included: true },
        { name: 'Basic assessments and quizzes', included: true },
        { name: 'Progress tracking and reporting', included: true },
        { name: 'Mobile-responsive design', included: true },
        { name: 'Email support', included: true },
        { name: 'Basic branding customization', included: true },
        { name: 'SCORM content support', included: true },
        { name: 'SSO integration', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'API access', included: false },
        { name: 'Priority support', included: false },
        { name: 'Custom integrations', included: false },
        { name: 'White-label branding', included: false }
      ]
    },
    {
      name: 'Growth',
      description: 'Ideal for growing organizations that need advanced features and better support.',
      icon: Building2,
      price: {
        monthly: 799,
        annual: 699
      },
      maxUsers: '250',
      popular: true,
      features: [
        { name: 'Up to 250 active learners', included: true },
        { name: 'Unlimited courses and content', included: true },
        { name: 'Advanced assessments and analytics', included: true },
        { name: 'Progress tracking and reporting', included: true },
        { name: 'Mobile-responsive design', included: true },
        { name: 'Priority email & phone support', included: true },
        { name: 'Custom branding and themes', included: true },
        { name: 'SCORM and xAPI support', included: true },
        { name: 'SSO integration', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Basic API access', included: true },
        { name: 'Integration with HR systems', included: true },
        { name: 'Custom integrations', included: false },
        { name: 'White-label branding', included: false }
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring maximum customization and dedicated support.',
      icon: Rocket,
      price: {
        monthly: null,
        annual: null
      },
      maxUsers: 'Unlimited',
      popular: false,
      features: [
        { name: 'Unlimited active learners', included: true },
        { name: 'Unlimited courses and content', included: true },
        { name: 'Enterprise assessments and analytics', included: true },
        { name: 'Advanced reporting and insights', included: true },
        { name: 'Mobile apps and offline access', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Complete white-label branding', included: true },
        { name: 'All content format support', included: true },
        { name: 'Advanced SSO and security', included: true },
        { name: 'Custom analytics and reporting', included: true },
        { name: 'Full API access and webhooks', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'SLA guarantees', included: true }
      ]
    }
  ]

  const addOns = [
    {
      name: 'Professional Services',
      description: 'Custom development, integrations, and consultation',
      price: 'From R1,500/hour'
    },
    {
      name: 'Content Creation',
      description: 'Professional course and assessment development',
      price: 'From R5,000/course'
    },
    {
      name: 'Training & Onboarding',
      description: 'Comprehensive team training and change management',
      price: 'From R15,000/session'
    },
    {
      name: 'Premium Support',
      description: '24/7 phone support and dedicated account manager',
      price: 'R2,500/month'
    }
  ]

  const faqs = [
    {
      question: 'What counts as an "active learner"?',
      answer: 'An active learner is someone who has logged into the platform within the last 30 days. Inactive users don\'t count toward your limit, so you only pay for engaged users.'
    },
    {
      question: 'Can I change plans or cancel anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. For cancellations, we require 30 days notice. There are no long-term contracts or hidden fees.'
    },
    {
      question: 'Do you offer discounts for educational institutions?',
      answer: 'Yes, we offer special pricing for registered educational institutions, NGOs, and qualifying organizations. Contact our sales team for custom pricing.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, EFT, and can accommodate purchase orders for enterprise clients. All pricing is in South African Rand (ZAR).'
    },
    {
      question: 'Is there a setup fee or implementation cost?',
      answer: 'No setup fees for Starter and Growth plans. Enterprise implementations may include professional services depending on complexity and customization requirements.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include setup assistance and ongoing support. Starter gets email support, Growth adds phone support, and Enterprise includes dedicated account management.'
    },
    {
      question: 'Can I integrate with our existing systems?',
      answer: 'Yes, we offer integrations with popular HR systems, SSO providers, and business applications. Advanced custom integrations are available with Growth and Enterprise plans.'
    },
    {
      question: 'Do you provide data migration assistance?',
      answer: 'Absolutely. We help migrate your existing courses, user data, and progress records from other LMS platforms at no additional cost for all plans.'
    }
  ]

  const savings = billingCycle === 'annual' ? Math.round(((plans[1].price.monthly! - plans[1].price.annual!) / plans[1].price.monthly!) * 100) : 0

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
            Transparent pricing that scales with you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-semtex-muted-ink max-w-3xl mx-auto"
          >
            Choose the plan that fits your organization's needs. All plans include setup assistance, 
            local support, and the flexibility to grow without limits.
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-semtex-panel rounded-2xl p-1 border border-semtex-hairline">
            <div className="flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  'px-6 py-3 rounded-xl text-sm font-medium transition-all',
                  billingCycle === 'monthly'
                    ? 'bg-semtex-ink text-semtex-bg shadow-soft'
                    : 'text-semtex-muted-ink hover:text-semtex-ink'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  'px-6 py-3 rounded-xl text-sm font-medium transition-all relative',
                  billingCycle === 'annual'
                    ? 'bg-semtex-ink text-semtex-bg shadow-soft'
                    : 'text-semtex-muted-ink hover:text-semtex-ink'
                )}
              >
                Annual
                {savings > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save {savings}%
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = plan.price[billingCycle]

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-semtex-focus text-semtex-bg px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  className={cn(
                    'p-8 h-full',
                    plan.popular ? 'border-semtex-focus/50 bg-semtex-focus/5' : ''
                  )}
                >
                  
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-semtex-ink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-semtex-ink" />
                    </div>
                    <h3 className="text-display-md mb-2">{plan.name}</h3>
                    <p className="text-body-sm text-semtex-muted-ink mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      {price ? (
                        <>
                          <div className="text-4xl font-bold text-semtex-ink mb-1">
                            R{price.toLocaleString()}
                          </div>
                          <div className="text-semtex-muted-ink text-sm">
                            per month, up to {plan.maxUsers} users
                          </div>
                          {billingCycle === 'annual' && (
                            <div className="text-xs text-green-400 mt-1">
                              Billed annually (R{(price * 12).toLocaleString()}/year)
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="text-4xl font-bold text-semtex-ink mb-1">
                            Custom
                          </div>
                          <div className="text-semtex-muted-ink text-sm">
                            {plan.maxUsers} users, tailored pricing
                          </div>
                        </>
                      )}
                    </div>

                    {/* CTA Button */}
                    {price ? (
                      <button
                        onClick={() => handlePlanSelect(plan.name)}
                        className={cn(
                          'w-full btn-base text-base px-6 py-3',
                          plan.popular 
                            ? 'bg-semtex-focus text-semtex-bg hover:bg-semtex-focus/90' 
                            : 'btn-secondary'
                        )}
                      >
                        Start with {plan.name}
                      </button>
                    ) : (
                      <button
                        onClick={handleContactSales}
                        className="w-full btn-secondary text-base px-6 py-3"
                      >
                        Contact Sales
                      </button>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-semtex-ink">What's included:</h4>
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-semtex-muted-ink/50 flex-shrink-0 mt-0.5" />
                          )}
                          <span 
                            className={cn(
                              'text-sm',
                              feature.included 
                                ? 'text-semtex-muted-ink' 
                                : 'text-semtex-muted-ink/50 line-through'
                            )}
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-semtex-muted-ink">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-green-400" />
              <span>Free data migration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Headphones className="h-4 w-4 text-green-400" />
              <span>Local SA support</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Add-ons */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Professional services & add-ons</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Need extra help getting started or want to accelerate your implementation? 
            Our professional services team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addOn, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full text-center">
                <h3 className="text-display-xs mb-3">{addOn.name}</h3>
                <p className="text-body-sm text-semtex-muted-ink mb-4">
                  {addOn.description}
                </p>
                <div className="font-semibold text-semtex-ink">
                  {addOn.price}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Comparison Section */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Why choose Semtex?</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            See how we compare to other LMS providers in the South African market.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-semtex-hairline bg-semtex-hairline/30">
                    <th className="text-left p-4 font-semibold text-semtex-ink">Feature</th>
                    <th className="text-center p-4 font-semibold text-semtex-ink">Semtex</th>
                    <th className="text-center p-4 font-semibold text-semtex-muted-ink">Competitor A</th>
                    <th className="text-center p-4 font-semibold text-semtex-muted-ink">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Setup Time', 'Days', 'Weeks', 'Months'],
                    ['Local Support', '✓', '✗', 'Limited'],
                    ['No Setup Fees', '✓', '✗', '✗'],
                    ['Custom Branding', 'All Plans', 'Premium Only', 'Enterprise Only'],
                    ['Mobile Responsive', '✓', '✓', 'Additional Cost'],
                    ['SCORM Support', '✓', '✓', 'Limited'],
                    ['API Access', 'Growth+', 'Enterprise Only', 'Enterprise Only'],
                    ['Data Migration', 'Free', 'Paid Service', 'Paid Service']
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-semtex-hairline/50">
                      <td className="p-4 font-medium text-semtex-ink">{row[0]}</td>
                      <td className="p-4 text-center font-medium text-semtex-ink bg-semtex-focus/5">
                        {row[1]}
                      </td>
                      <td className="p-4 text-center text-semtex-muted-ink">{row[2]}</td>
                      <td className="p-4 text-center text-semtex-muted-ink">{row[3]}</td>
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
          title="Pricing FAQ"
          subtitle="Common questions about our pricing and plans"
        />
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to get started?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join hundreds of South African organizations who trust Semtex Technologies 
            for their learning management needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => {
                buttonClick('start_trial', 'pricing_cta')
                handlePlanSelect('Growth')
              }}
              className="btn-primary text-base px-6 py-3 inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleContactSales}
              className="btn-secondary text-base px-6 py-3"
            >
              Talk to Sales
            </button>
          </div>
          <p className="text-sm text-semtex-muted-ink mt-6">
            30-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </Section>
    </div>
  )
}

export default Pricing
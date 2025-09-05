import { motion } from 'framer-motion'
import { Shield, Mail, Phone } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import Section from '@/components/Section'
import Card from '@/components/Card'

const Privacy = () => {
  // SEO
  useSEO({
    title: 'Privacy Policy - Semtex Technologies',
    description: 'Our privacy policy explains how Semtex Technologies collects, uses, and protects your personal information.',
    canonical: 'https://semtex.co.za/privacy'
  })

  const lastUpdated = 'January 1, 2025'

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-display-lg mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-2">
              Last updated: {lastUpdated}
            </p>
            <p className="text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            
            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out forms on our website</li>
                  <li>Request a demo or contact us</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Use our learning management system</li>
                </ul>
                <p>This may include your name, email address, phone number, company information, and any other information you choose to provide.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates about our products and services</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Information Sharing</h2>
              <div className="space-y-4 text-gray-600">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in operating our website and services</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Data Security</h2>
              <div className="space-y-4 text-gray-600">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure hosting infrastructure</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p>Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict our processing of your information</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. These help us:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide personalized content</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">International Data Transfers</h2>
              <div className="space-y-4 text-gray-600">
                <p>Your information may be transferred to and processed in countries other than South Africa. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Changes to This Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-blue border-blue-200">
              <h2 className="text-display-sm mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@semtexagency.co.za" className="text-blue-600 hover:text-blue-800">
                      info@semtexagency.co.za
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+27766108815" className="text-blue-600 hover:text-blue-800">
                      +27 76 610 8815
                    </a>
                  </div>
                </div>
                <p className="text-sm">
                  <strong>Semtex Technologies</strong><br />
                  Johannesburg, South Africa
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Privacy
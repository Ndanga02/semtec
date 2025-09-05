import { motion } from 'framer-motion'
import { FileText, Mail, Phone } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import Section from '@/components/Section'
import Card from '@/components/Card'

const Terms = () => {
  // SEO
  useSEO({
    title: 'Terms of Service - Semtex Technologies',
    description: 'Terms and conditions for using Semtex Technologies services and learning management system.',
    canonical: 'https://semtex.co.za/terms'
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
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-display-lg mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-2">
              Last updated: {lastUpdated}
            </p>
            <p className="text-gray-600">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            
            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>By accessing and using Semtex Technologies' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Description of Service</h2>
              <div className="space-y-4 text-gray-600">
                <p>Semtex Technologies provides learning management system (LMS) software and related services including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Course creation and management tools</li>
                  <li>Student progress tracking and analytics</li>
                  <li>Assessment and certification features</li>
                  <li>Integration capabilities with third-party systems</li>
                  <li>Technical support and maintenance</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">User Accounts and Responsibilities</h2>
              <div className="space-y-4 text-gray-600">
                <p>When creating an account with us, you must provide accurate and complete information. You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring compliance with applicable laws and regulations</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Acceptable Use Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p>You agree not to use our services to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Upload, post, or transmit harmful, illegal, or infringing content</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for any unlawful purpose</li>
                  <li>Violate intellectual property rights</li>
                  <li>Share account credentials with unauthorized users</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Payment Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>For paid services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fees are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>Failure to pay fees may result in service suspension</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                  <li>Taxes are your responsibility unless otherwise stated</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-gray-600">
                <p>The service and its original content, features, and functionality are owned by Semtex Technologies and are protected by copyright, trademark, and other laws. You retain ownership of content you upload, but grant us necessary rights to provide our services.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Data and Privacy</h2>
              <div className="space-y-4 text-gray-600">
                <p>We are committed to protecting your data and privacy. Our data practices are governed by our Privacy Policy. We implement appropriate technical and organizational measures to protect your information.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Service Availability</h2>
              <div className="space-y-4 text-gray-600">
                <p>While we strive to maintain high availability, we do not guarantee uninterrupted service. We may:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Perform scheduled maintenance with advance notice</li>
                  <li>Experience occasional downtime for updates or repairs</li>
                  <li>Temporarily restrict access to prevent security threats</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Termination</h2>
              <div className="space-y-4 text-gray-600">
                <p>Either party may terminate this agreement with 30 days written notice. We may terminate immediately if you breach these terms. Upon termination:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your access to the service will be revoked</li>
                  <li>You may export your data within 30 days</li>
                  <li>We may delete your data after the export period</li>
                  <li>Outstanding fees remain due and payable</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p>To the maximum extent permitted by law, Semtex Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability is limited to the amount paid by you in the 12 months preceding the claim.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Governing Law</h2>
              <div className="space-y-4 text-gray-600">
                <p>These terms are governed by the laws of South Africa. Any disputes will be resolved in the courts of Johannesburg, South Africa.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-display-sm mb-4">Changes to Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Continued use of our services after changes constitutes acceptance of the new terms.</p>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-blue border-blue-200">
              <h2 className="text-display-sm mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about these terms, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@semtexagency.co.za" className="text-green-600 hover:text-green-800">
                      info@semtexagency.co.za
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+27766108815" className="text-green-600 hover:text-green-800">
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

export default Terms
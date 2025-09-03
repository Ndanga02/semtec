import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ScanLine, 
  FileText, 
  CheckCircle, 
  Download, 
  Eye,
  Zap,
  Shield,
  BarChart3,
  Clock,
  ArrowRight
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import ComingSoon from '@/components/ComingSoon'
import FeatureGrid from '@/components/FeatureGrid'
import Card from '@/components/Card'

const OCR = () => {
  const { productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'Data Capture & OCR - Coming Soon | Semtex Technologies',
    description: 'Extract and process data from documents automatically with advanced OCR technology. Form recognition, validation, and export features coming soon.',
    canonical: 'https://semtex.co.za/products/automation/ocr'
  })

  useEffect(() => {
    productView('Data Capture & OCR')
  }, [productView])

  const features = [
    {
      icon: ScanLine,
      title: 'Advanced OCR Technology',
      description: 'State-of-the-art optical character recognition that accurately extracts text from any document type.'
    },
    {
      icon: FileText,
      title: 'Smart Form Recognition',
      description: 'Automatically identify and extract data from structured forms, invoices, and standardized documents.'
    },
    {
      icon: CheckCircle,
      title: 'Data Validation',
      description: 'Built-in validation rules ensure extracted data meets your quality standards and business requirements.'
    },
    {
      icon: Download,
      title: 'Multiple Export Formats',
      description: 'Export processed data to Excel, CSV, JSON, or integrate directly with your existing systems via API.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with encryption, audit trails, and compliance with data protection regulations.'
    },
    {
      icon: Zap,
      title: 'Batch Processing',
      description: 'Process hundreds of documents simultaneously with intelligent queuing and progress tracking.'
    }
  ]

  const plannedFeatures = [
    'Advanced OCR with 99%+ accuracy rates',
    'Intelligent form and table recognition',
    'Multi-language document support',
    'Handwriting recognition capabilities',
    'Automated data validation and verification',
    'Custom extraction templates and rules',
    'Batch processing for high-volume operations',
    'Real-time processing status and notifications',
    'Quality assurance and confidence scoring',
    'Seamless integration with existing workflows',
    'Audit trails and processing history',
    'Export to multiple formats (Excel, CSV, JSON, XML)'
  ]

  const documentTypes = [
    {
      name: 'Invoices & Receipts',
      description: 'Extract vendor details, amounts, dates, and line items from financial documents.',
      accuracy: '99.2%',
      icon: FileText
    },
    {
      name: 'Forms & Applications',
      description: 'Process structured forms including applications, surveys, and registration documents.',
      accuracy: '98.8%',
      icon: CheckCircle
    },
    {
      name: 'Identity Documents',
      description: 'Capture data from IDs, passports, licenses, and other identity verification documents.',
      accuracy: '99.5%',
      icon: Shield
    },
    {
      name: 'Contracts & Legal',
      description: 'Extract key terms, dates, parties, and clauses from legal documents and contracts.',
      accuracy: '97.9%',
      icon: Eye
    }
  ]

  const workflow = [
    {
      step: 1,
      title: 'Upload Documents',
      description: 'Drag and drop or bulk upload documents in various formats (PDF, JPG, PNG, TIFF).',
      icon: ScanLine
    },
    {
      step: 2,
      title: 'Intelligent Processing',
      description: 'Our AI analyzes document structure and extracts relevant data automatically.',
      icon: Zap
    },
    {
      step: 3,
      title: 'Quality Review',
      description: 'Review extracted data with confidence scores and make corrections if needed.',
      icon: Eye
    },
    {
      step: 4,
      title: 'Export & Integrate',
      description: 'Export processed data or integrate directly with your business systems.',
      icon: Download
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Coming Soon Banner */}
      <Section className="py-16 lg:py-24">
        <ComingSoon
          title="Data Capture & OCR"
          description="Transform paper documents into actionable data with our advanced OCR technology. Eliminate manual data entry and reduce processing time by up to 90%."
          expectedDate="Q3 2025"
          features={plannedFeatures}
        />
      </Section>

      {/* Features Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Powerful OCR capabilities</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our data capture platform will provide enterprise-grade OCR technology with 
            intelligent document processing and seamless workflow integration.
          </p>
        </div>

        <FeatureGrid features={features} />
      </Section>

      {/* Document Types */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Handle any document type</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            From invoices to contracts, our OCR technology will accurately extract data 
            from a wide variety of document types and formats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {documentTypes.map((docType, index) => {
            const Icon = docType.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-semtex-focus" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-semtex-ink">{docType.accuracy}</div>
                      <div className="text-sm text-semtex-muted-ink">Accuracy</div>
                    </div>
                  </div>
                  
                  <h3 className="text-display-xs mb-3">{docType.name}</h3>
                  <p className="text-body-sm text-semtex-muted-ink">
                    {docType.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Workflow */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Simple 4-step process</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our streamlined workflow makes it easy to transform your documents into 
            structured data in just a few simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {workflow.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-semtex-focus/10 border-2 border-semtex-focus/20 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-semtex-focus" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-semtex-focus/20 text-semtex-focus rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-display-xs mb-3">{step.title}</h3>
                <p className="text-body-sm text-semtex-muted-ink">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Transform your business processes</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            See how intelligent document processing can eliminate manual data entry 
            and accelerate your business workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: 'Finance & Accounting',
              description: 'Automate invoice processing, expense reports, and financial document digitization.',
              metrics: '90% time reduction'
            },
            {
              title: 'Human Resources',
              description: 'Process job applications, employee onboarding forms, and personnel documents.',
              metrics: '95% accuracy rate'
            },
            {
              title: 'Legal & Compliance',
              description: 'Extract key information from contracts, legal filings, and compliance documents.',
              metrics: '99% data integrity'
            }
          ].map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full text-center">
                <div className="w-12 h-12 bg-semtex-ink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-semtex-ink" />
                </div>
                <h3 className="text-display-xs mb-3">{useCase.title}</h3>
                <p className="text-body-sm text-semtex-muted-ink mb-4">
                  {useCase.description}
                </p>
                <div className="text-sm font-medium text-semtex-focus">
                  {useCase.metrics}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Visual Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Intelligent document processing</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Watch as our AI technology accurately identifies, extracts, and structures 
            data from your documents in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-semtex-panel to-semtex-hairline rounded-2xl border border-semtex-hairline/50 shadow-soft-lg relative overflow-hidden">
            
            {/* Mock OCR interface */}
            <div className="absolute inset-8 flex space-x-6">
              
              {/* Document preview */}
              <div className="flex-1 bg-semtex-ink/5 rounded-xl p-4 space-y-3">
                <div className="text-xs text-semtex-muted-ink mb-2">Document Preview</div>
                <div className="space-y-2">
                  <div className="h-4 bg-semtex-ink/10 rounded w-3/4" />
                  <div className="h-3 bg-semtex-ink/5 rounded w-1/2" />
                  <div className="h-3 bg-semtex-focus/20 rounded w-2/3" />
                  <div className="h-3 bg-semtex-ink/5 rounded w-5/6" />
                  <div className="h-8 bg-semtex-ink/5 rounded mt-4" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-3 bg-semtex-focus/20 rounded" />
                    <div className="h-3 bg-semtex-focus/20 rounded" />
                  </div>
                </div>
              </div>

              {/* Extracted data */}
              <div className="flex-1 bg-semtex-ink/5 rounded-xl p-4 space-y-3">
                <div className="text-xs text-semtex-muted-ink mb-2">Extracted Data</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-semtex-muted-ink">Amount:</span>
                    <span className="text-xs text-semtex-ink font-medium">R 2,450.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-semtex-muted-ink">Date:</span>
                    <span className="text-xs text-semtex-ink font-medium">2025-03-15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-semtex-muted-ink">Vendor:</span>
                    <span className="text-xs text-semtex-ink font-medium">Acme Corp</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-semtex-muted-ink">Confidence:</span>
                    <span className="text-xs text-green-400 font-medium">99.2%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing indicator */}
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-6 right-6 flex items-center space-x-2 bg-semtex-focus/20 px-3 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-semtex-focus rounded-full" />
              <span className="text-xs text-semtex-focus font-medium">Processing...</span>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to eliminate manual data entry?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join our early access program to be among the first to experience intelligent 
            document processing when we launch our OCR platform.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">99%</div>
              <div className="text-sm text-semtex-muted-ink">OCR accuracy rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">90%</div>
              <div className="text-sm text-semtex-muted-ink">Time saved on data entry</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">1000+</div>
              <div className="text-sm text-semtex-muted-ink">Documents per hour</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default OCR
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Brain, 
  Search, 
  Tag, 
  Zap,
  CheckCircle,
  BarChart3,
  Shield,
  Clock,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import ComingSoon from '@/components/ComingSoon'
import FeatureGrid from '@/components/FeatureGrid'
import Card from '@/components/Card'

const DocAI = () => {
  const { productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'Document AI - Coming Soon | Semtex Technologies',
    description: 'AI-powered document processing and analysis for enhanced learning materials. Automatic content tagging, summarization, and knowledge extraction coming soon.',
    canonical: 'https://semtex.co.za/products/ai/docai'
  })

  useEffect(() => {
    productView('Document AI')
  }, [productView])

  const features = [
    {
      icon: Tag,
      title: 'Intelligent Content Tagging',
      description: 'Automatically categorize and tag learning materials with relevant topics, skills, and difficulty levels.'
    },
    {
      icon: FileText,
      title: 'Document Summarization',
      description: 'Generate concise summaries of long documents, research papers, and course materials.'
    },
    {
      icon: Search,
      title: 'Knowledge Extraction',
      description: 'Extract key concepts, definitions, and insights from documents to create searchable knowledge bases.'
    },
    {
      icon: Lightbulb,
      title: 'Content Recommendations',
      description: 'Suggest related materials and resources based on document content and learner preferences.'
    },
    {
      icon: Shield,
      title: 'Plagiarism Detection',
      description: 'Identify potential plagiarism and ensure content originality with advanced text analysis.'
    },
    {
      icon: BarChart3,
      title: 'Quality Assessment',
      description: 'Evaluate document quality, readability, and educational value with AI-powered scoring.'
    }
  ]

  const plannedFeatures = [
    'Advanced natural language processing',
    'Multi-format document support (PDF, Word, PowerPoint, etc.)',
    'Automatic content categorization and tagging',
    'Intelligent document summarization',
    'Key concept and knowledge extraction',
    'Content recommendation engine',
    'Plagiarism and similarity detection',
    'Document quality and readability scoring',
    'Multi-language document processing',
    'Custom taxonomy and classification systems',
    'Integration with learning management systems',
    'Bulk document processing capabilities'
  ]

  const capabilities = [
    {
      title: 'Content Analysis',
      description: 'Deep understanding of document structure, topics, and educational value.',
      features: [
        'Topic modeling and classification',
        'Difficulty level assessment',
        'Learning objective identification',
        'Content gap analysis'
      ],
      icon: Brain
    },
    {
      title: 'Knowledge Mining',
      description: 'Extract valuable insights and create structured knowledge from unstructured documents.',
      features: [
        'Key concept extraction',
        'Definition and terminology mining',
        'Relationship mapping',
        'FAQ generation'
      ],
      icon: Search
    },
    {
      title: 'Quality Assurance',
      description: 'Ensure high-quality content with comprehensive analysis and validation.',
      features: [
        'Readability scoring',
        'Content completeness check',
        'Accuracy verification',
        'Bias detection'
      ],
      icon: CheckCircle
    }
  ]

  const useCases = [
    {
      title: 'Course Content Curation',
      description: 'Automatically organize and categorize learning materials for easy discovery and navigation.',
      icon: BookOpen,
      workflow: [
        'Upload course documents and materials',
        'AI analyzes content and extracts topics',
        'Automatic tagging and categorization',
        'Generate content recommendations'
      ]
    },
    {
      title: 'Assessment Creation',
      description: 'Generate quiz questions, summaries, and study materials from existing content.',
      icon: Target,
      workflow: [
        'Process textbooks and lecture materials',
        'Extract key concepts and facts',
        'Generate question banks',
        'Create study guides and summaries'
      ]
    },
    {
      title: 'Research Analysis',
      description: 'Analyze research papers and academic content for insights and knowledge discovery.',
      icon: BarChart3,
      workflow: [
        'Ingest research documents',
        'Extract methodologies and findings',
        'Identify trends and patterns',
        'Generate comprehensive reports'
      ]
    }
  ]

  const processingSteps = [
    {
      step: 1,
      title: 'Document Ingestion',
      description: 'Upload documents in various formats (PDF, Word, PowerPoint, etc.)',
      icon: FileText
    },
    {
      step: 2,
      title: 'Content Analysis',
      description: 'AI analyzes structure, extracts text, and identifies key elements',
      icon: Brain
    },
    {
      step: 3,
      title: 'Knowledge Extraction',
      description: 'Extract concepts, definitions, topics, and relationships',
      icon: Search
    },
    {
      step: 4,
      title: 'Enhancement & Output',
      description: 'Generate tags, summaries, recommendations, and structured data',
      icon: Zap
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Coming Soon Banner */}
      <Section className="py-16 lg:py-24">
        <ComingSoon
          title="Document AI"
          description="Transform your learning materials with AI-powered document processing. Automatically analyze, categorize, and enhance your content to create more effective learning experiences."
          expectedDate="Q4 2025"
          features={plannedFeatures}
        />
      </Section>

      {/* Features Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Intelligent document processing</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our Document AI platform will provide advanced natural language processing 
            capabilities designed specifically for educational content and learning materials.
          </p>
        </div>

        <FeatureGrid features={features} />
      </Section>

      {/* Capabilities */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Advanced AI capabilities</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Discover the comprehensive document analysis and processing features that will 
            transform how you work with learning materials and educational content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon

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
                  
                  <h3 className="text-display-xs mb-3">{capability.title}</h3>
                  <p className="text-body-sm text-semtex-muted-ink mb-4">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-semtex-muted-ink">
                        <CheckCircle className="h-4 w-4 text-semtex-focus flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Processing Flow */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">How document AI works</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our intelligent processing pipeline transforms raw documents into structured, 
            searchable, and enhanced learning materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processingSteps.map((step, index) => {
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
                  
                  {/* Connection arrow */}
                  {index < processingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-0.5 bg-semtex-focus/30" />
                        <div className="w-0 h-0 border-l-4 border-l-semtex-focus/30 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
                      </div>
                    </div>
                  )}
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
          <h2 className="text-display-lg mb-4">Transform your content workflow</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            See how Document AI will streamline content creation, curation, and enhancement 
            across different educational and training scenarios.
          </p>
        </div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-semtex-focus/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-semtex-focus" />
                    </div>
                    <h3 className="text-display-md">{useCase.title}</h3>
                  </div>
                  <p className="text-body text-semtex-muted-ink mb-6">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-semtex-ink">Workflow:</div>
                    {useCase.workflow.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-semtex-focus/10 text-semtex-focus text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <span className="text-body-sm text-semtex-muted-ink">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual mockup */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="p-6">
                    <div className="aspect-[4/3] bg-gradient-to-br from-semtex-ink/5 to-semtex-focus/5 rounded-xl relative overflow-hidden">
                      
                      {/* Document visualization based on use case */}
                      <div className="absolute inset-4 space-y-3">
                        {index === 0 && (
                          <>
                            {/* Content curation mockup */}
                            <div className="text-xs text-semtex-muted-ink">Course Materials</div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-semtex-ink/10 rounded p-2 space-y-1">
                                <div className="h-2 bg-semtex-focus/30 rounded w-3/4" />
                                <div className="text-xs text-semtex-focus">#JavaScript #Functions</div>
                              </div>
                              <div className="bg-semtex-ink/10 rounded p-2 space-y-1">
                                <div className="h-2 bg-semtex-focus/30 rounded w-2/3" />
                                <div className="text-xs text-semtex-focus">#Variables #Scope</div>
                              </div>
                            </div>
                            <div className="h-1 bg-semtex-hairline rounded" />
                            <div className="text-xs text-semtex-muted-ink">Auto-generated tags and categories</div>
                          </>
                        )}
                        
                        {index === 1 && (
                          <>
                            {/* Assessment creation mockup */}
                            <div className="text-xs text-semtex-muted-ink">Generated Questions</div>
                            <div className="space-y-2">
                              <div className="bg-semtex-ink/10 rounded p-2">
                                <div className="text-xs font-medium text-semtex-ink">Q: What is a function?</div>
                                <div className="text-xs text-semtex-muted-ink mt-1">A) A block of reusable code</div>
                              </div>
                              <div className="bg-semtex-ink/10 rounded p-2">
                                <div className="text-xs font-medium text-semtex-ink">Q: Explain variable scope</div>
                                <div className="text-xs text-semtex-muted-ink mt-1">Short answer question</div>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {index === 2 && (
                          <>
                            {/* Research analysis mockup */}
                            <div className="text-xs text-semtex-muted-ink">Research Summary</div>
                            <div className="space-y-2">
                              <div className="h-2 bg-semtex-ink/10 rounded w-full" />
                              <div className="h-2 bg-semtex-ink/10 rounded w-4/5" />
                              <div className="h-2 bg-semtex-ink/10 rounded w-3/5" />
                            </div>
                            <div className="text-xs text-semtex-focus">Key findings extracted</div>
                            <div className="grid grid-cols-2 gap-1">
                              <div className="h-4 bg-semtex-focus/20 rounded text-xs flex items-center justify-center">
                                Trend A
                              </div>
                              <div className="h-4 bg-semtex-focus/20 rounded text-xs flex items-center justify-center">
                                Pattern B
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Benefits Comparison */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Transform your content workflow</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            See how Document AI will revolutionize the way you create, organize, 
            and enhance your learning materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          
          {/* Before */}
          <Card className="p-6">
            <h3 className="text-display-sm mb-4 text-center">Manual Process</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-red-400">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Hours spent reading and categorizing</span>
              </div>
              <div className="flex items-center space-x-3 text-red-400">
                <FileText className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Inconsistent tagging and organization</span>
              </div>
              <div className="flex items-center space-x-3 text-red-400">
                <Search className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Difficult to find relevant content</span>
              </div>
              <div className="flex items-center space-x-3 text-red-400">
                <BarChart3 className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Limited insights into content quality</span>
              </div>
            </div>
          </Card>

          {/* After */}
          <Card className="p-6 border-green-500/20 bg-green-500/5">
            <h3 className="text-display-sm mb-4 text-center">With Document AI</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-green-400">
                <Zap className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Automated processing in minutes</span>
              </div>
              <div className="flex items-center space-x-3 text-green-400">
                <Tag className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Consistent, intelligent categorization</span>
              </div>
              <div className="flex items-center space-x-3 text-green-400">
                <Search className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Enhanced discoverability and search</span>
              </div>
              <div className="flex items-center space-x-3 text-green-400">
                <BarChart3 className="h-5 w-5 flex-shrink-0" />
                <span className="text-body-sm">Comprehensive quality and readability scores</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to supercharge your content?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join our early access program to be among the first to experience AI-powered 
            document processing designed specifically for educational content.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">95%</div>
              <div className="text-sm text-semtex-muted-ink">Time saved on content organization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">98%</div>
              <div className="text-sm text-semtex-muted-ink">Content classification accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">50+</div>
              <div className="text-sm text-semtex-muted-ink">Supported file formats</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default DocAI
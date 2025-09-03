import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Brain, 
  Globe, 
  Clock, 
  Users,
  Zap,
  BarChart3,
  CheckCircle,
  MessageCircle,
  Book,
  HelpCircle,
  Lightbulb
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import ComingSoon from '@/components/ComingSoon'
import FeatureGrid from '@/components/FeatureGrid'
import Card from '@/components/Card'

const Chatbots = () => {
  const { productView } = useAnalytics()

  // SEO
  useSEO({
    title: 'AI Chatbots - Coming Soon | Semtex Technologies',
    description: 'Intelligent conversational interfaces to enhance learner support and engagement. 24/7 support, course recommendations, and natural language processing coming soon.',
    canonical: 'https://semtex.co.za/products/ai/chatbots'
  })

  useEffect(() => {
    productView('AI Chatbots')
  }, [productView])

  const features = [
    {
      icon: MessageSquare,
      title: '24/7 Learner Support',
      description: 'Provide instant answers to learner questions anytime, anywhere with intelligent conversational AI.'
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP understands context, intent, and sentiment for more natural conversations.'
    },
    {
      icon: Book,
      title: 'Course Recommendations',
      description: 'Suggest personalized learning paths and courses based on learner goals and progress.'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Communicate with learners in their preferred language with built-in translation capabilities.'
    },
    {
      icon: BarChart3,
      title: 'Learning Analytics',
      description: 'Track engagement, identify knowledge gaps, and provide insights to improve learning outcomes.'
    },
    {
      icon: Zap,
      title: 'Smart Integration',
      description: 'Seamlessly integrate with your LMS and other systems for contextual, data-driven conversations.'
    }
  ]

  const plannedFeatures = [
    'Natural language processing and understanding',
    'Contextual conversation management',
    'Integration with course content and progress data',
    'Personalized learning path recommendations',
    'Multi-language support and translation',
    '24/7 automated learner support',
    'Escalation to human support when needed',
    'Custom knowledge base integration',
    'Learning analytics and engagement tracking',
    'Sentiment analysis and feedback collection',
    'Voice interface capabilities',
    'Mobile and web platform support'
  ]

  const useCases = [
    {
      title: 'Instant Q&A Support',
      description: 'Learners can ask questions about course content, assignments, or technical issues and get immediate responses.',
      icon: HelpCircle,
      capabilities: [
        'Course content explanations',
        'Technical troubleshooting',
        'Assignment clarifications',
        'Platform navigation help'
      ]
    },
    {
      title: 'Personalized Learning Guide',
      description: 'Guide learners through their educational journey with personalized recommendations and progress tracking.',
      icon: Lightbulb,
      capabilities: [
        'Learning path suggestions',
        'Progress tracking and motivation',
        'Skill gap identification',
        'Career guidance and advice'
      ]
    },
    {
      title: 'Administrative Assistant',
      description: 'Handle routine administrative tasks and inquiries, freeing up staff time for more complex issues.',
      icon: Users,
      capabilities: [
        'Course enrollment assistance',
        'Schedule information',
        'Certification status updates',
        'Policy and procedure queries'
      ]
    }
  ]

  const conversationFlow = [
    {
      step: 1,
      title: 'Intent Recognition',
      description: 'AI analyzes the learner\'s message to understand what they need help with.',
      icon: Brain
    },
    {
      step: 2,
      title: 'Context Gathering',
      description: 'System retrieves relevant information from LMS, course data, and knowledge base.',
      icon: Book
    },
    {
      step: 3,
      title: 'Response Generation',
      description: 'AI crafts a personalized, contextual response using natural language generation.',
      icon: MessageSquare
    },
    {
      step: 4,
      title: 'Learning & Improvement',
      description: 'System learns from interactions to provide better responses over time.',
      icon: BarChart3
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* Coming Soon Banner */}
      <Section className="py-16 lg:py-24">
        <ComingSoon
          title="AI Chatbots"
          description="Enhance learner engagement and support with intelligent conversational AI. Provide 24/7 assistance, personalized recommendations, and instant answers to common questions."
          expectedDate="Q4 2025"
          features={plannedFeatures}
        />
      </Section>

      {/* Features Preview */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Intelligent conversation features</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our AI chatbot platform will provide advanced conversational capabilities 
            designed specifically for educational and training environments.
          </p>
        </div>

        <FeatureGrid features={features} />
      </Section>

      {/* Use Cases */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Transform learner support</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Discover how AI chatbots will enhance every aspect of the learning experience, 
            from instant support to personalized guidance.
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
                  <p className="text-body text-semtex-muted-ink">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-semtex-ink">Key capabilities:</div>
                    {useCase.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2 text-sm text-semtex-muted-ink">
                        <CheckCircle className="h-4 w-4 text-semtex-focus flex-shrink-0" />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="p-6">
                    <div className="space-y-4">
                      {/* Mock conversation */}
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="max-w-xs bg-semtex-focus/20 rounded-2xl rounded-br-md px-4 py-2">
                            <p className="text-sm text-semtex-ink">
                              {index === 0 && "How do I submit my assignment?"}
                              {index === 1 && "What courses should I take next?"}
                              {index === 2 && "How do I check my certification status?"}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="max-w-xs bg-semtex-ink/10 rounded-2xl rounded-bl-md px-4 py-2">
                            <p className="text-sm text-semtex-muted-ink">
                              {index === 0 && "To submit your assignment, go to the course page and click 'Submit Assignment'. I can guide you through the steps!"}
                              {index === 1 && "Based on your progress in Data Analysis, I recommend the Advanced Analytics course. Would you like me to enroll you?"}
                              {index === 2 && "Your Project Management certification is 85% complete. You need to finish the final exam to get certified."}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Typing indicator */}
                      <div className="flex justify-start">
                        <div className="bg-semtex-ink/5 rounded-2xl rounded-bl-md px-4 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-semtex-muted-ink/50 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-semtex-muted-ink/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-semtex-muted-ink/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Conversation Flow */}
      <Section className="py-16 lg:py-24 bg-semtex-panel/30">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">How our AI works</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Behind every conversation is sophisticated AI technology that understands 
            context, learns from interactions, and provides increasingly helpful responses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {conversationFlow.map((step, index) => {
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
                  
                  {/* Connection line (except for last item) */}
                  {index < conversationFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-semtex-focus/20" 
                         style={{ transform: 'translateX(-50%)' }} />
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

      {/* Interactive Demo Preview */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Experience natural conversation</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Our chatbots will understand context, maintain conversation history, 
            and provide responses that feel genuinely helpful and human-like.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            {/* Chat interface mockup */}
            <div className="space-y-4 h-80 overflow-y-auto">
              
              {/* Welcome message */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-semtex-focus/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-4 w-4 text-semtex-focus" />
                  </div>
                  <div className="max-w-xs bg-semtex-ink/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <p className="text-sm text-semtex-ink font-medium mb-1">Learning Assistant</p>
                    <p className="text-sm text-semtex-muted-ink">
                      Hi! I'm here to help with your learning journey. What can I assist you with today?
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample conversation */}
              <div className="flex justify-end">
                <div className="max-w-xs bg-semtex-focus/20 rounded-2xl rounded-br-md px-4 py-2">
                  <p className="text-sm text-semtex-ink">
                    I'm struggling with the JavaScript module. Can you help?
                  </p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-semtex-focus/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-4 w-4 text-semtex-focus" />
                  </div>
                  <div className="max-w-xs bg-semtex-ink/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <p className="text-sm text-semtex-muted-ink">
                      I'd be happy to help! I see you're currently on Lesson 3: Functions. What specific concept are you finding challenging?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-xs bg-semtex-focus/20 rounded-2xl rounded-br-md px-4 py-2">
                  <p className="text-sm text-semtex-ink">
                    I don't understand arrow functions
                  </p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-semtex-focus/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-4 w-4 text-semtex-focus" />
                  </div>
                  <div className="max-w-xs bg-semtex-ink/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <p className="text-sm text-semtex-muted-ink">
                      Arrow functions are a shorter way to write functions in JavaScript. Let me show you a simple example and then we can practice together. Would you like me to create a quick exercise for you?
                    </p>
                  </div>
                </div>
              </div>

              {/* Suggested actions */}
              <div className="flex justify-start">
                <div className="space-y-2">
                  <p className="text-xs text-semtex-muted-ink px-3">Suggested actions:</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-semtex-focus/10 text-semtex-focus text-xs rounded-full hover:bg-semtex-focus/20 transition-colors">
                      Show examples
                    </button>
                    <button className="px-3 py-1 bg-semtex-focus/10 text-semtex-focus text-xs rounded-full hover:bg-semtex-focus/20 transition-colors">
                      Practice exercises
                    </button>
                    <button className="px-3 py-1 bg-semtex-focus/10 text-semtex-focus text-xs rounded-full hover:bg-semtex-focus/20 transition-colors">
                      Related resources
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="border-t border-semtex-hairline pt-4 mt-4">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Ask me anything about your learning..."
                  className="flex-1 input-base"
                  disabled
                />
                <button className="btn-primary px-4 py-2" disabled>
                  Send
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center">
          <h2 className="text-display-lg mb-4">Ready to enhance learner engagement?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto text-semtex-muted-ink">
            Join our early access program to be among the first to experience intelligent 
            conversational AI designed specifically for learning environments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">24/7</div>
              <div className="text-sm text-semtex-muted-ink">Learner support availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">90%</div>
              <div className="text-sm text-semtex-muted-ink">Query resolution rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semtex-ink mb-2">50+</div>
              <div className="text-sm text-semtex-muted-ink">Supported languages</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Chatbots
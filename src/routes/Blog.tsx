import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  BookOpen,
  TrendingUp,
  Users,
  Lightbulb
} from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { useAnalytics } from '@/lib/analytics'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { cn } from '@/lib/cn'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { buttonClick } = useAnalytics()

  // SEO
  useSEO({
    title: 'Blog - Semtex Technologies Insights on Education Technology',
    description: 'Discover the latest insights on learning management systems, education technology trends, and best practices from the Semtex Technologies team.',
    canonical: 'https://semtex.co.za/blog'
  })

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Learning Management Systems in South Africa',
      excerpt: 'Exploring how LMS technology is evolving to meet the unique needs of South African educational institutions and businesses.',
      content: 'In this comprehensive analysis, we examine the current state of learning management systems across South Africa and discuss emerging trends that will shape the future of education technology in the region...',
      author: 'Prince Makhesha',
      role: 'CEO & Co-founder',
      date: '2024-12-15',
      category: 'Industry Insights',
      readTime: '8 min read',
      image: '/blog/future-lms-sa.jpg',
      tags: ['LMS', 'South Africa', 'EdTech', 'Future Trends'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Effective Online Learning Programs: A Complete Guide',
      excerpt: 'Step-by-step guide to creating engaging online learning experiences that drive real results for your organization.',
      content: 'Creating effective online learning programs requires more than just uploading content to a platform. In this guide, we share proven strategies for designing, developing, and delivering learning experiences that truly engage learners and drive measurable outcomes...',
      author: 'Ndanganeni Nedzamba',
      role: 'CTO & Co-founder',
      date: '2024-12-08',
      category: 'Best Practices',
      readTime: '12 min read',
      image: '/blog/online-learning-guide.jpg',
      tags: ['Online Learning', 'Instructional Design', 'Best Practices'],
      featured: false
    },
    {
      id: 3,
      title: 'Why South African Businesses Are Switching to Modern LMS Platforms',
      excerpt: 'Case studies and insights into the migration from legacy learning systems to modern, cloud-based LMS solutions.',
      content: 'Traditional learning management systems are no longer meeting the needs of modern South African businesses. In this article, we explore the key drivers behind the shift to modern LMS platforms and share real-world case studies from organizations that have made the transition...',
      author: 'Sarah Johnson',
      role: 'Head of Customer Success',
      date: '2024-11-28',
      category: 'Case Studies',
      readTime: '6 min read',
      image: '/blog/sa-businesses-lms.jpg',
      tags: ['Business', 'Migration', 'Case Studies', 'ROI'],
      featured: false
    },
    {
      id: 4,
      title: 'Mobile Learning: The Key to Reaching Remote Workforces',
      excerpt: 'How mobile-first learning design is revolutionizing training delivery for distributed teams across South Africa.',
      content: 'With remote and hybrid work becoming the norm, organizations need learning solutions that work seamlessly across all devices. This article explores the principles of mobile-first learning design and shares practical tips for creating effective mobile learning experiences...',
      author: 'Michael Chen',
      role: 'Product Manager',
      date: '2024-11-20',
      category: 'Technology',
      readTime: '7 min read',
      image: '/blog/mobile-learning.jpg',
      tags: ['Mobile Learning', 'Remote Work', 'UX Design'],
      featured: false
    },
    {
      id: 5,
      title: 'Measuring Learning ROI: Metrics That Matter for South African Organizations',
      excerpt: 'A practical framework for measuring the return on investment of your learning and development programs.',
      content: 'Demonstrating the value of learning programs has never been more important. In this comprehensive guide, we break down the key metrics and methodologies for measuring learning ROI in the South African context, with practical examples and templates you can use...',
      author: 'Thandiwe Mthembu',
      role: 'Learning Analytics Specialist',
      date: '2024-11-15',
      category: 'Analytics',
      readTime: '10 min read',
      image: '/blog/learning-roi.jpg',
      tags: ['Analytics', 'ROI', 'Metrics', 'Business Value'],
      featured: false
    },
    {
      id: 6,
      title: 'Creating Inclusive Learning Experiences for Diverse Teams',
      excerpt: 'Best practices for designing learning programs that work for South Africa\'s diverse workforce and student population.',
      content: 'South Africa\'s rich cultural and linguistic diversity presents unique opportunities and challenges for learning program design. This article explores evidence-based strategies for creating inclusive learning experiences that resonate with learners from all backgrounds...',
      author: 'Amara Okafor',
      role: 'Learning Experience Designer',
      date: '2024-11-08',
      category: 'Diversity & Inclusion',
      readTime: '9 min read',
      image: '/blog/inclusive-learning.jpg',
      tags: ['Inclusion', 'Diversity', 'Learning Design', 'Accessibility'],
      featured: false
    }
  ]

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === null || selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== null || searchQuery !== '')

  const handlePostClick = (postId: number, title: string) => {
    buttonClick(`blog_post_${postId}`, 'blog')
    // In a real app, this would navigate to the individual blog post
    console.log(`Navigate to blog post: ${title}`)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
            Insights & Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-semtex-muted-ink max-w-3xl mx-auto"
          >
            Discover the latest trends in education technology, best practices for learning program design, 
            and insights from our journey building modern LMS solutions in South Africa.
          </motion.p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-semtex-muted-ink" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 input-base"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                className={cn(
                  'px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-colors',
                  (selectedCategory === category || (selectedCategory === null && category === 'All'))
                    ? 'bg-semtex-focus text-semtex-bg'
                    : 'bg-semtex-hairline/30 text-semtex-muted-ink hover:text-semtex-ink'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === null && searchQuery === '' && (
        <Section className="py-16 lg:py-24 bg-semtex-panel/30">
          <div className="text-center mb-8">
            <h2 className="text-display-md mb-2">Featured Article</h2>
            <p className="text-body text-semtex-muted-ink">Our latest insights and analysis</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card 
              className="overflow-hidden cursor-pointer hover:border-semtex-muted-ink/20 transition-all duration-300 hover:-translate-y-1"
              onClick={() => handlePostClick(featuredPost.id, featuredPost.title)}
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                
                {/* Image */}
                <div className="aspect-[16/10] lg:aspect-square bg-gradient-to-br from-semtex-focus/20 to-semtex-muted-ink/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-semtex-focus/60" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-semtex-focus/20 text-semtex-focus text-xs font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-semtex-muted-ink">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-display-sm mb-4 hover:text-semtex-focus transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-body text-semtex-muted-ink mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-semtex-focus/20 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-semtex-focus" />
                      </div>
                      <div>
                        <div className="font-medium text-semtex-ink text-sm">{featuredPost.author}</div>
                        <div className="text-xs text-semtex-muted-ink">{featuredPost.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-sm text-semtex-muted-ink">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Section>
      )}

      {/* Blog Posts Grid */}
      <Section className="py-16 lg:py-24">
        {filteredPosts.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-display-md">
                {searchQuery || selectedCategory ? 'Search Results' : 'Latest Articles'}
              </h2>
              <div className="text-sm text-semtex-muted-ink">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="h-full cursor-pointer hover:border-semtex-muted-ink/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    onClick={() => handlePostClick(post.id, post.title)}
                  >
                    
                    {/* Image */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-semtex-focus/20 to-semtex-muted-ink/20 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-semtex-focus/60" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-2 py-1 bg-semtex-hairline/30 text-semtex-muted-ink text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1 text-xs text-semtex-muted-ink">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-display-xs mb-3 hover:text-semtex-focus transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-body-sm text-semtex-muted-ink mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-semtex-ink/5 text-semtex-muted-ink text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-semtex-hairline">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-semtex-focus/20 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-semtex-focus" />
                          </div>
                          <div>
                            <div className="font-medium text-semtex-ink text-sm">{post.author}</div>
                            <div className="text-xs text-semtex-muted-ink">{formatDate(post.date)}</div>
                          </div>
                        </div>
                        
                        <ArrowRight className="h-4 w-4 text-semtex-muted-ink group-hover:text-semtex-ink group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-semtex-muted-ink mx-auto mb-4" />
            <h3 className="text-display-xs mb-2">No articles found</h3>
            <p className="text-body-sm text-semtex-muted-ink mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory(null)
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </Section>

      {/* Newsletter Signup */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-semtex-panel to-semtex-bg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-display-lg mb-4">Stay updated</h2>
          <p className="text-body-lg mb-8 text-semtex-muted-ink">
            Get the latest insights on education technology, product updates, and industry trends 
            delivered to your inbox monthly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 input-base"
            />
            <button 
              onClick={() => buttonClick('newsletter_signup', 'blog')}
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-semtex-muted-ink mt-4">
            No spam, just valuable insights. Unsubscribe anytime.
          </p>
        </div>
      </Section>

      {/* Categories Overview */}
      <Section className="py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg mb-4">Explore by topic</h2>
          <p className="text-body-lg text-semtex-muted-ink max-w-2xl mx-auto">
            Dive deeper into the topics that matter most to your learning and development goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Industry Insights',
              description: 'Analysis and trends in the EdTech and LMS space',
              icon: TrendingUp,
              count: blogPosts.filter(p => p.category === 'Industry Insights').length
            },
            {
              name: 'Best Practices',
              description: 'Proven strategies for effective learning programs',
              icon: Lightbulb,
              count: blogPosts.filter(p => p.category === 'Best Practices').length
            },
            {
              name: 'Case Studies',
              description: 'Real-world examples and success stories',
              icon: Users,
              count: blogPosts.filter(p => p.category === 'Case Studies').length
            },
            {
              name: 'Technology',
              description: 'Technical insights and product developments',
              icon: BookOpen,
              count: blogPosts.filter(p => p.category === 'Technology').length
            }
          ].map((category, index) => {
            const Icon = category.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 h-full cursor-pointer hover:border-semtex-muted-ink/20 transition-colors"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="w-12 h-12 bg-semtex-focus/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-semtex-focus" />
                  </div>
                  
                  <h3 className="text-display-xs mb-2">{category.name}</h3>
                  <p className="text-body-sm text-semtex-muted-ink mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-semtex-muted-ink">
                      {category.count} {category.count === 1 ? 'article' : 'articles'}
                    </span>
                    <ArrowRight className="h-4 w-4 text-semtex-muted-ink" />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>
    </div>
  )
}

export default Blog
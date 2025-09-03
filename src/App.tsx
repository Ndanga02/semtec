import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnalytics } from './lib/analytics'

// Layout components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Route components
import Home from './routes/Home'
import Products from './routes/Products'
import LMS from './routes/products/LMS'
import Workflows from './routes/products/automation/Workflows'
import OCR from './routes/products/automation/OCR'
import Integrations from './routes/products/automation/Integrations'
import Chatbots from './routes/products/ai/Chatbots'
import DocAI from './routes/products/ai/DocAI'
import Analytics from './routes/products/Analytics'
import Solutions from './routes/Solutions'
import Pricing from './routes/Pricing'
import About from './routes/About'
import Careers from './routes/Careers'
import Blog from './routes/Blog'
import Contact from './routes/Contact'

function App() {
  const location = useLocation()
  const { page } = useAnalytics()

  // Track page views
  useEffect(() => {
    page(location.pathname, document.title, document.referrer)
  }, [location.pathname, page])

  return (
    <div className="min-h-screen bg-semtex-bg text-semtex-ink">
      <Navbar />
      
      <main id="main-content" className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/lms" element={<LMS />} />
              <Route path="/products/automation/workflows" element={<Workflows />} />
              <Route path="/products/automation/ocr" element={<OCR />} />
              <Route path="/products/automation/integrations" element={<Integrations />} />
              <Route path="/products/ai/chatbots" element={<Chatbots />} />
              <Route path="/products/ai/docai" element={<DocAI />} />
              <Route path="/products/analytics" element={<Analytics />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* 404 fallback */}
              <Route 
                path="*" 
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-display-lg mb-4">404</h1>
                      <p className="text-body-lg mb-8">Page not found</p>
                      <a 
                        href="/" 
                        className="btn-primary"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
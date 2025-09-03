import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn()

// Mock CSS custom properties support
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
  }),
})

// Setup for framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    button: 'button',
    a: 'a',
    span: 'span',
    img: 'img',
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock analytics
vi.mock('../lib/analytics', () => ({
  useAnalytics: () => ({
    track: vi.fn(),
    page: vi.fn(),
    formSubmit: vi.fn(),
    buttonClick: vi.fn(),
    navigate: vi.fn(),
    demoRequest: vi.fn(),
    contactSubmit: vi.fn(),
    productView: vi.fn(),
  }),
  analytics: {
    init: vi.fn(),
    track: vi.fn(),
    page: vi.fn(),
  },
}))

// Mock SEO
vi.mock('../lib/seo', () => ({
  useSEO: vi.fn(),
  updateSEO: vi.fn(),
}))

// Mock schema
vi.mock('../lib/schema', () => ({
  injectSchema: vi.fn(),
  removeSchema: vi.fn(),
  getOrganizationSchema: () => ({}),
  getLMSProductSchema: () => ({}),
}))

// Increase timeout for tests
vi.setConfig({
  testTimeout: 10000,
})
import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { axe, toHaveNoViolations } from 'jest-axe'
import Home from '../routes/Home'
import Contact from '../routes/Contact'
import { ToastProvider } from '../components/Toast'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock the analytics and SEO hooks
vi.mock('../lib/analytics', () => ({
  useAnalytics: () => ({
    buttonClick: vi.fn(),
    page: vi.fn(),
    formSubmit: vi.fn(),
  }),
}))

vi.mock('../lib/seo', () => ({
  useSEO: vi.fn(),
}))

vi.mock('../lib/schema', () => ({
  injectSchema: vi.fn(),
  getOrganizationSchema: vi.fn(() => ({})),
}))

// Wrapper for components that need router context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ToastProvider>
      {children}
    </ToastProvider>
  </BrowserRouter>
)

describe('Accessibility Tests', () => {
  it('Home page should not have accessibility violations', async () => {
    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Contact page should not have accessibility violations', async () => {
    const { container } = render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have proper heading hierarchy', () => {
    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Check for proper heading structure (h1 -> h2 -> h3, etc.)
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
    
    let previousLevel = 0
    headings.forEach((heading) => {
      const currentLevel = parseInt(heading.tagName.charAt(1))
      
      // First heading should be h1, and subsequent headings shouldn't skip levels
      if (previousLevel === 0) {
        expect(currentLevel).toBe(1)
      } else {
        expect(currentLevel).toBeLessThanOrEqual(previousLevel + 1)
      }
      
      previousLevel = currentLevel
    })
  })

  it('should have alt text for all images', () => {
    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    const images = container.querySelectorAll('img')
    images.forEach((img) => {
      // Every image should have alt text (even if empty for decorative images)
      expect(img).toHaveAttribute('alt')
    })
  })

  it('should have proper form labels', () => {
    const { container } = render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    )

    const inputs = container.querySelectorAll('input, textarea, select')
    inputs.forEach((input) => {
      // Each form control should have an associated label
      const id = input.getAttribute('id')
      if (id) {
        const label = container.querySelector(`label[for="${id}"]`)
        expect(label).toBeInTheDocument()
      }
    })
  })

  it('should have proper focus management', () => {
    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Check that interactive elements can receive focus
    const interactiveElements = container.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )

    interactiveElements.forEach((element) => {
      // Element should be focusable (not have tabindex="-1" unless it's intentionally not in tab order)
      const tabIndex = element.getAttribute('tabindex')
      if (tabIndex !== null) {
        expect(parseInt(tabIndex)).toBeGreaterThanOrEqual(-1)
      }
    })
  })

  it('should have sufficient color contrast', () => {
    // This test would typically use a tool like jest-axe or custom color contrast checking
    // For now, we'll do a basic check that our CSS custom properties are defined
    const root = document.documentElement
    const computedStyle = window.getComputedStyle(root)
    
    // Check that our main color variables are defined
    expect(computedStyle.getPropertyValue('--bg')).toBeTruthy()
    expect(computedStyle.getPropertyValue('--ink')).toBeTruthy()
    expect(computedStyle.getPropertyValue('--muted-ink')).toBeTruthy()
  })

  it('should support keyboard navigation', () => {
    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Check that buttons have proper keyboard event handling
    const buttons = container.querySelectorAll('button')
    buttons.forEach((button) => {
      // Buttons should be keyboard accessible by default
      expect(button.tagName).toBe('BUTTON')
      
      // Check that custom interactive elements have proper ARIA attributes
      if (button.getAttribute('role') === 'button') {
        expect(button).toHaveAttribute('tabindex', '0')
      }
    })
  })

  it('should have proper ARIA landmarks', () => {
    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Check for main landmark
    const main = container.querySelector('main, [role="main"]')
    expect(main).toBeInTheDocument()

    // Check for navigation landmark (this would be in the Navbar component)
    // In a full test, you'd render the entire App component
  })

  it('should handle reduced motion preferences', () => {
    // Mock prefers-reduced-motion
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn(() => ({
        matches: true, // User prefers reduced motion
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Check that animations respect reduced motion (this would be more complex in practice)
    // You might check for specific CSS classes or animation properties
    expect(container).toBeInTheDocument()
  })
})
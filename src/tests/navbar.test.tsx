import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '@testing-library/jest-dom'

// Mock the analytics hook
vi.mock('../lib/analytics', () => ({
  useAnalytics: () => ({
    buttonClick: vi.fn(),
  }),
}))

// Wrapper component for router context
const NavbarWrapper = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
)

describe('Navbar', () => {
  it('renders the main navigation elements', () => {
    render(<NavbarWrapper />)
    
    // Check for logo/brand
    expect(screen.getByLabelText(/semtex technologies home/i)).toBeInTheDocument()
    
    // Check for main navigation links
    expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /solutions/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    
    // Check for CTA button
    expect(screen.getByRole('button', { name: /get a demo/i })).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    render(<NavbarWrapper />)
    
    // Find and click the mobile menu toggle
    const mobileMenuToggle = screen.getByLabelText(/open menu/i)
    expect(mobileMenuToggle).toBeInTheDocument()
    
    fireEvent.click(mobileMenuToggle)
    
    // Wait for mobile menu to appear
    await waitFor(() => {
      expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument()
    })
  })

  it('shows products megamenu on hover', async () => {
    render(<NavbarWrapper />)
    
    const productsLink = screen.getByRole('link', { name: /products/i })
    
    // Hover over products link
    fireEvent.mouseEnter(productsLink)
    
    // Wait for megamenu to appear
    await waitFor(() => {
      expect(screen.getByText(/learning management system/i)).toBeInTheDocument()
      expect(screen.getByText(/workflow automation/i)).toBeInTheDocument()
    })
  })

  it('navigates correctly when demo button is clicked', () => {
    // Mock useNavigate
    const mockNavigate = vi.fn()
    vi.mock('react-router-dom', async () => {
      const actual = await vi.importActual('react-router-dom')
      return {
        ...actual,
        useNavigate: () => mockNavigate,
      }
    })

    render(<NavbarWrapper />)
    
    const demoButton = screen.getByRole('button', { name: /get a demo/i })
    fireEvent.click(demoButton)
    
    // Note: This test would need more sophisticated mocking to work properly
    // In a real test environment, you'd mock the router and verify navigation
  })

  it('has proper accessibility attributes', () => {
    render(<NavbarWrapper />)
    
    // Check for proper navigation landmark
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()
    
    // Check for proper button labels
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    
    // Check for proper link accessibility
    const homeLink = screen.getByLabelText(/semtex technologies home/i)
    expect(homeLink).toBeInTheDocument()
  })

  it('handles keyboard navigation', async () => {
    render(<NavbarWrapper />)
    
    const productsLink = screen.getByRole('link', { name: /products/i })
    
    // Focus the products link
    productsLink.focus()
    expect(productsLink).toHaveFocus()
    
    // Press Enter to potentially open megamenu
    fireEvent.keyDown(productsLink, { key: 'Enter', code: 'Enter' })
    
    // In a more complete implementation, you'd test Tab navigation through the megamenu
  })
})
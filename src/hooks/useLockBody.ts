import { useLayoutEffect } from 'react'

/**
 * Hook to lock/unlock body scroll
 * Useful for modals, mobile menus, and other overlay components
 */
export function useLockBody(locked = true) {
  useLayoutEffect(() => {
    if (!locked) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    
    // Lock the body scroll
    document.body.style.overflow = 'hidden'

    // Cleanup function to restore original overflow
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [locked])
}
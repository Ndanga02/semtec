import React from 'react';

// Neural Network Logo Component
const SemtexLogo = ({ size = 32, className = "" }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Neural Network SVG Logo */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 130 90" 
        className="mr-2"
        aria-label="Semtex Technologies Neural Network Logo"
      >
        {/* Neural Network Nodes */}
        <g fill="currentColor">
          {/* Input layer */}
          <circle cx="20" cy="30" r="4"/>
          <circle cx="20" cy="50" r="4"/>
          <circle cx="20" cy="70" r="4"/>
          
          {/* Hidden layer 1 */}
          <circle cx="50" cy="25" r="3"/>
          <circle cx="50" cy="45" r="3"/>
          <circle cx="50" cy="65" r="3"/>
          
          {/* Hidden layer 2 */}
          <circle cx="80" cy="35" r="3"/>
          <circle cx="80" cy="55" r="3"/>
          
          {/* Output */}
          <circle cx="110" cy="45" r="4"/>
        </g>
        
        {/* Neural Network Connections */}
        <g stroke="currentColor" fill="none">
          {/* Strong connections (thick lines) */}
          <line x1="24" y1="30" x2="46" y2="25" strokeWidth="3" opacity="0.8"/>
          <line x1="24" y1="50" x2="46" y2="45" strokeWidth="3" opacity="0.8"/>
          <line x1="54" y1="25" x2="76" y2="35" strokeWidth="3" opacity="0.8"/>
          <line x1="84" y1="35" x2="106" y2="45" strokeWidth="3" opacity="0.8"/>
          
          {/* Medium connections */}
          <line x1="24" y1="50" x2="46" y2="25" strokeWidth="2" opacity="0.5"/>
          <line x1="24" y1="70" x2="46" y2="65" strokeWidth="2" opacity="0.5"/>
          <line x1="54" y1="45" x2="76" y2="55" strokeWidth="2" opacity="0.5"/>
          
          {/* Weak connections */}
          <line x1="24" y1="30" x2="46" y2="65" strokeWidth="1" opacity="0.2"/>
          <line x1="54" y1="65" x2="76" y2="35" strokeWidth="1" opacity="0.2"/>
          <line x1="84" y1="55" x2="106" y2="45" strokeWidth="1" opacity="0.3"/>
        </g>
      </svg>
      
      {/* Company Name */}
      <span className="font-semibold text-xl hidden sm:block">
        S E M T E C H
      </span>
      <span className="font-semibold text-lg sm:hidden">
        Semtex
      </span>
    </div>
  );
};

// Updated Navbar Component with Neural Network Logo
const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isProductsHovered, setIsProductsHovered] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo with Neural Network */}
          <a 
            href="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Semtex Technologies home"
          >
            <SemtexLogo size={100} className="text-white hover:text-gray-300 transition-colors" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Products */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <a
                href="/products"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isProductsHovered ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                Products
              </a>
            </div>

            {/* Other Navigation Links */}
            <a
              href="/solutions"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Solutions
            </a>

            <a
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Pricing
            </a>

            <a
              href="/about"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              About
            </a>

            <a
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Blog
            </a>
          </div>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            
            {/* Demo CTA Button */}
            <button
              className="hidden sm:inline-flex px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get a Demo
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
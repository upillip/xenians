import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'ABOUT', 
      href: '/about',
      subLinks: [
        { name: 'Company Intro', href: '/about' },
        { name: 'CEO Greeting', href: '/about#ceo-greeting' },
        { name: 'Organization', href: '/about#organization' },
      ]
    },
    { 
      name: 'BUSINESS', 
      href: '/advisory',
      subLinks: [
        { name: 'Advisory', href: '/advisory' },
        { name: 'Strategy Planning', href: '/strategy' },
        { name: 'Hospitality', href: '/hospitality' },
      ]
    },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'CLIENT PORTAL', href: '/client-portal' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-midnight/90 backdrop-blur-md shadow-lg py-4 text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 z-50">
          <img src={logoImage} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain bg-white rounded-full p-1" />
          <span className="font-brand font-medium text-2xl md:text-3xl tracking-tight text-gold">XENIANS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center text-sm font-medium tracking-wider space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.href}
                className={`hover:text-gold transition-colors duration-200 flex items-center h-full py-2 ${location.pathname === link.href ? 'text-gold underline underline-offset-8 decoration-gold' : ''}`}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-midnight shadow-lg border-t-2 border-gold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {link.subLinks.map(subLink => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      className="block px-4 py-3 hover:bg-gray-50 hover:text-gold transition-colors duration-200 text-sm font-sans"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Menu */}
        <div 
          className={`fixed inset-0 bg-midnight flex flex-col items-center justify-center space-y-8 text-white transition-opacity duration-300 md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto overflow-y-auto pt-20 pb-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center space-y-4">
              <Link 
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-geometric text-2xl tracking-widest hover:text-gold transition-colors duration-200 ${location.pathname === link.href ? 'text-gold' : ''}`}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="flex flex-col items-center space-y-3 mt-2">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-sans text-lg text-gray-300 hover:text-gold transition-colors duration-200"
                    >
                      - {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>

  );
}

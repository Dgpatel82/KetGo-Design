import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from './Button';
import Dropdown from './Dropdown';
import Image from 'components/AppImage';

const Logo = ({ variant = 'default' }) => {
  const textColor = variant === 'transparent' ? 'text-white' : 'text-primary';
  
  return (
    <Link to="/homepage" className="flex items-center">
      <Image
        src="/assets/images/logo.webp" // Replace with actual path
        alt="KetGo Logo"
        className="w-8 h-8 mr-2"
      />
      <span className={`font-heading font-bold text-xl ${textColor}`}>
        KetGo Design
      </span>
    </Link>
  );
};

const Header = ({ 
  variant = 'navigation',
  className = '',
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Navigation items
  const navItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Projects', path: '/projects-gallery' },
    { label: 'Estimation', path: '/estimation-page' },
    { label: 'Contact', path: '/contact-page' },
  ];
  
  // Services dropdown options
  const servicesOptions = [
    { label: 'Residential Construction', value: 'residential' },
    { label: 'Commercial Construction', value: 'commercial' },
    { label: 'Renovation', value: 'renovation' },
    { label: 'Interior Design', value: 'interior' },
  ];
  
  // Handle scroll event for transparent header
  useEffect(() => {
    if (variant === 'transparent') {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [variant]);
  
  // Determine header background and text colors based on variant and scroll state
  const getHeaderClasses = () => {
    let classes = 'fixed w-full z-50 transition-all duration-300 ';
    
    if (variant === 'transparent') {
      if (scrolled) {
        classes += 'bg-white text-black shadow-md py-2';
      } else {
        classes += 'bg-transparent py-4';
      }
    } else {
      classes += 'bg-white shadow-md py-3';
    }
    
    return `${classes} ${className}`;
  };
  
  // Determine text color based on variant and scroll state
  const getTextColorClass = () => {
    if (variant === 'transparent' && !scrolled) {
      return 'text-white';
    }
    return 'text-black';
  };
  
  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <header className={getHeaderClasses()} {...props}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant={variant === 'transparent' && !scrolled ? 'transparent' : 'default'} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`
                  font-medium transition-colors duration-200 hover:text-accent
                  ${getTextColorClass()}
                  ${isActive(item.path) ? 'text-accent' : ''}
                `}
              >
                {item.label}
              </Link>
            ))}
            
            <Dropdown
              variant="navigation"
              label="Services"
              options={servicesOptions}
              scrolled={scrolled}
              className={`${getTextColorClass()}`}
              
              onChange={(option) => console.log('Selected service:', option)}
            />
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="primary"
              onClick={() => console.log('Get a quote clicked')}
            >
              Get a Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in-right">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`
                    font-medium py-2 transition-colors duration-200
                    ${isActive(item.path) ? 'text-accent' : 'text-primary'}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="py-2">
                <Dropdown
                  variant="transparent"
                  label="Services"
                  options={servicesOptions}
                  labelClassName={scrolled ? 'text-white' : 'text-black'}
                  onChange={(option) => {
                    console.log('Selected service:', option);
                    setIsMenuOpen(false);
                  }}
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    console.log('Get a quote clicked');
                    setIsMenuOpen(false);
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
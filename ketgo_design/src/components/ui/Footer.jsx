import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from 'components/AppImage';

const Footer = ({
  variant = 'full',
  className = '',
  ...props
}) => {
  // Footer navigation groups
  const footerNavigation = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
    ],
    services: [
      { name: 'Residential Construction', href: '#' },
      { name: 'Commercial Construction', href: '#' },
      { name: 'Renovation', href: '#' },
      { name: 'Interior Design', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Support', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };
  
  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' },
  ];
  
  // Contact information
  const contactInfo = {
    address: 'Victoria Prime, Near, Kaliyabid Water Tank Cir, Kaliyabid, Bhavnagar, Gujarat 364002',
    phone: '+91 9979463602',
    email: 'kgvasani02@gmail.com',
  };
  
  // Render the logo
  const renderLogo = () => (
    <Link to="/homepage" className="flex items-center">
      <Image
        src="/assets/images/logo.webp" // Replace with actual path
        alt="KetGo Logo"
        className="w-8 h-8 mr-2"
      />
      <span className="font-heading font-bold text-xl text-white">
        KetGo Design
      </span>
    </Link>
  );
  
  // Render full footer with all sections
  const renderFullFooter = () => (
    <footer className={`bg-primary-dark text-white ${className}`} {...props}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            {renderLogo()}
            <p className="mt-4 text-medium-gray max-w-md">
              KetGo Design is your trusted partner for construction and renovation projects. 
              With over 10 years of experience, we deliver quality craftsmanship and exceptional service.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-medium-gray hover:text-accent transition-colors duration-200"
                  aria-label={item.name}
                >
                  <Icon name={item.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-medium-gray hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-medium-gray hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" size={20} className="mr-2 mt-1 text-accent" />
                <span className="text-medium-gray">{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" size={20} className="mr-2 text-accent" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-medium-gray hover:text-accent transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={20} className="mr-2 text-accent" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-medium-gray hover:text-accent transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-medium-gray text-sm">
              &copy; {new Date().getFullYear()} KetGo Design Association. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-6">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-sm text-medium-gray hover:text-accent transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  
  // Render simple footer with essential links only
  const renderSimpleFooter = () => (
    <footer className={`bg-primary-dark text-white py-6 ${className}`} {...props}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {renderLogo()}
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-6">
              <li>
                <Link 
                  to="/homepage"
                  className="text-medium-gray hover:text-accent transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects-gallery"
                  className="text-medium-gray hover:text-accent transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/estimation-page"
                  className="text-medium-gray hover:text-accent transition-colors duration-200"
                >
                  Estimation
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-page"
                  className="text-medium-gray hover:text-accent transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-medium-gray text-sm">
            &copy; {new Date().getFullYear()} KetGo Design Association. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            {socialLinks.slice(0, 4).map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-medium-gray hover:text-accent transition-colors duration-200"
                aria-label={item.name}
              >
                <Icon name={item.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
  
  return variant === 'full' ? renderFullFooter() : renderSimpleFooter();
};

export default Footer;
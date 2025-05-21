import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from './Button';

const Sidebar = ({
  variant = 'expanded',
  title = 'Navigation',
  items = [],
  onClose,
  className = '',
  ...props
}) => {
  const [isCollapsed, setIsCollapsed] = useState(variant === 'collapsed');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);
  
  // Default sidebar items if none provided
  const defaultItems = [
    { 
      label: 'Dashboard', 
      icon: 'LayoutDashboard', 
      path: '/dashboard' 
    },
    { 
      label: 'Projects', 
      icon: 'Briefcase', 
      path: '/projects-gallery',
      active: true
    },
    { 
      label: 'Estimation', 
      icon: 'Calculator', 
      path: '/estimation-page' 
    },
    { 
      label: 'Calendar', 
      icon: 'Calendar', 
      path: '/calendar' 
    },
    { 
      label: 'Messages', 
      icon: 'MessageSquare', 
      path: '/messages',
      badge: '5'
    },
    { 
      label: 'Documents', 
      icon: 'FileText', 
      path: '/documents' 
    },
    { 
      label: 'Settings', 
      icon: 'Settings', 
      path: '/settings' 
    },
    { 
      label: 'Contact', 
      icon: 'Phone', 
      path: '/contact-page' 
    },
  ];
  
  const navigationItems = items.length > 0 ? items : defaultItems;
  
  // Close mobile drawer when clicking outside
  useEffect(() => {
    if (variant === 'mobile drawer') {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setIsMobileOpen(false);
          if (onClose) onClose();
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [variant, onClose]);
  
  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Toggle sidebar collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  // Toggle mobile drawer
  const toggleMobileDrawer = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  
  // Render the sidebar logo
  const renderLogo = () => (
    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-4`}>
      {!isCollapsed ? (
        <Link to="/homepage" className="flex items-center">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <rect width="40" height="40" rx="8" fill="#1e293b" />
            <path d="M12 20L20 12L28 20L20 28L12 20Z" fill="#f59e0b" />
            <path d="M20 12V28M12 20H28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-heading font-bold text-lg text-primary">
            KetGo Design
          </span>
        </Link>
      ) : (
        <Link to="/homepage" aria-label="KetGo Design">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#1e293b" />
            <path d="M12 20L20 12L28 20L20 28L12 20Z" fill="#f59e0b" />
            <path d="M20 12V28M12 20H28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
      )}
    </div>
  );
  
  // Render expanded sidebar
  const renderExpandedSidebar = () => (
    <aside 
      className={`
        bg-white border-r border-medium-gray h-screen flex flex-col
        ${isCollapsed ? 'w-16' : 'w-64'}
        transition-all duration-300 ease-in-out
        ${className}
      `}
      ref={sidebarRef}
      {...props}
    >
      {/* Logo */}
      {renderLogo()}
      
      {/* Collapse Toggle Button */}
      <button
        className="absolute top-4 right-2 p-1 rounded-full hover:bg-light-gray"
        onClick={toggleCollapse}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <Icon 
          name={isCollapsed ? 'ChevronRight' : 'ChevronLeft'} 
          size={16} 
          className="text-dark-gray"
        />
      </button>
      
      {/* Navigation Title */}
      {!isCollapsed && (
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-dark-gray uppercase tracking-wider">
            {title}
          </h2>
        </div>
      )}
      
      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`
                  flex items-center rounded-md px-2 py-2 text-sm font-medium
                  ${isActive(item.path) ? 'bg-light-gray text-primary' : 'text-dark-gray hover:bg-light-gray hover:text-primary'}
                  transition-colors duration-200
                `}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                <Icon 
                  name={item.icon} 
                  size={20} 
                  className={isActive(item.path) ? 'text-accent' : ''}
                />
                
                {!isCollapsed && (
                  <span className="ml-3 flex-1">{item.label}</span>
                )}
                
                {!isCollapsed && item.badge && (
                  <span className="ml-auto bg-accent text-black text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-medium-gray">
          <Button 
            variant="primary"
            fullWidth
            icon="Plus"
            onClick={() => console.log('New project clicked')}
          >
            New Project
          </Button>
        </div>
      )}
    </aside>
  );
  
  // Render mobile drawer
  const renderMobileDrawer = () => (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md"
        onClick={toggleMobileDrawer}
        aria-label={isMobileOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <Icon name={isMobileOpen ? 'X' : 'Menu'} size={24} className="text-primary" />
      </button>
      
      {/* Mobile Drawer */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
          
          {/* Drawer */}
          <aside 
            className={`
              fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl
              transform transition-transform duration-300 ease-in-out
              ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
              ${className}
            `}
            ref={sidebarRef}
            {...props}
          >
            {/* Logo */}
            {renderLogo()}
            
            {/* Close Button */}
            <button
              className="absolute top-4 right-2 p-1 rounded-full hover:bg-light-gray"
              onClick={() => {
                setIsMobileOpen(false);
                if (onClose) onClose();
              }}
              aria-label="Close sidebar"
            >
              <Icon name="X" size={20} className="text-dark-gray" />
            </button>
            
            {/* Navigation Title */}
            <div className="px-4 py-2">
              <h2 className="text-xs font-semibold text-dark-gray uppercase tracking-wider">
                {title}
              </h2>
            </div>
            
            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-2">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`
                        flex items-center rounded-md px-2 py-2 text-sm font-medium
                        ${isActive(item.path) ? 'bg-light-gray text-primary' : 'text-dark-gray hover:bg-light-gray hover:text-primary'}
                        transition-colors duration-200
                      `}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                      onClick={() => {
                        setIsMobileOpen(false);
                        if (onClose) onClose();
                      }}
                    >
                      <Icon 
                        name={item.icon} 
                        size={20} 
                        className={isActive(item.path) ? 'text-accent' : ''}
                      />
                      <span className="ml-3 flex-1">{item.label}</span>
                      
                      {item.badge && (
                        <span className="ml-auto bg-accent text-black text-xs font-medium px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Footer */}
            <div className="p-4 border-t border-medium-gray">
              <Button 
                variant="primary"
                fullWidth
                icon="Plus"
                onClick={() => {
                  console.log('New project clicked');
                  setIsMobileOpen(false);
                  if (onClose) onClose();
                }}
              >
                New Project
              </Button>
            </div>
          </aside>
        </>
      )}
    </>
  );
  
  // Render the appropriate sidebar variant
  if (variant === 'mobile drawer') {
    return renderMobileDrawer();
  }
  
  return renderExpandedSidebar();
};

export default Sidebar;
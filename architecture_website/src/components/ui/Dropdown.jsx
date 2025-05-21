import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../components/AppIcon';

const Dropdown = ({
  variant = 'default',
  label,
  scrolled,
  options = [],
  value,
  onChange,
  labelClassName = '',
  placeholder = 'Select an option',
  icon,
  disabled = false,
  error,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return;
    
    switch (e.key) {
      case 'Enter': case' ':
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'ArrowDown':
        if (!isOpen) {
          e.preventDefault();
          setIsOpen(true);
        }
        break;
      default:
        break;
    }
  };
  
  // Handle option selection
  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  
  // Find the selected option label
  const selectedOption = options.find(option => 
    option.value === value || option === value
  );
  
  const selectedLabel = selectedOption 
    ? (selectedOption.label || selectedOption.value || selectedOption) 
    : placeholder;
  
  // Determine classes based on variant and state
  const getDropdownClasses = () => {
    const baseClasses = 'relative w-full';
    return `${baseClasses} ${className}`;
  };
  
  const getButtonClasses = () => {
    let classes = 'flex items-center justify-between w-full px-3 py-2 text-left border rounded';
    
    if (disabled) {
      classes += ' bg-light-gray text-dark-gray border-medium-gray cursor-not-allowed';
    } else if (error) {
      classes += ' border-error text-black focus:outline-none focus:ring-1 focus:ring-error';
    } else {
      classes += ' bg-white text-black border-medium-gray hover:border-dark-gray focus:outline-none focus:ring-1 focus:ring-accent';
    }
    
    return classes;
  };
  
  // Render different dropdown variants
  const renderDropdown = () => {
    switch (variant) {
      case 'navigation':
        return (
          <div className={getDropdownClasses()} ref={dropdownRef}>
            <button
              type="button"
              className={`
                flex items-center  font-bold hover:text-accent focus:outline-none
                
                ${labelClassName}
                

              `}
              onClick={() => !disabled && setIsOpen(!isOpen)}
              onKeyDown={handleKeyDown}
              aria-haspopup="true"
              aria-expanded={isOpen}
              disabled={disabled}
            >
              <span>{label}</span>
              <Icon 
                name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
                size={44} 
                className="ml-1" 
              />
            </button>

            
            {isOpen && (
              <div className="dropdown-menu animate-fade-in">
                {options.map((option, index) => {
                  const optionValue = option.value || option;
                  const optionLabel = option.label || option;
                  
                  return (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSelect(option)}
                    >
                      {optionLabel}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
        
      case 'user-menu':
        return (
          <div className={getDropdownClasses()} ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center focus:outline-none"
              onClick={() => !disabled && setIsOpen(!isOpen)}
              onKeyDown={handleKeyDown}
              aria-haspopup="true"
              aria-expanded={isOpen}
              disabled={disabled}
            >
              {icon && <Icon name={icon} size={20} className="mr-1" />}
              <span>{label}</span>
              <Icon 
                name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
                size={20} 
                className="ml-1" 
              />
            </button>
            
            {isOpen && (
              <div className="dropdown-menu right-0 left-auto w-48 animate-fade-in">
                {options.map((option, index) => {
                  const optionValue = option.value || option;
                  const optionLabel = option.label || option;
                  const optionIcon = option.icon;
                  
                  return (
                    <button
                      key={index}
                      className="dropdown-item flex items-center"
                      onClick={() => handleSelect(option)}
                    >
                      {optionIcon && <Icon name={optionIcon} size={28} className="mr-2" />}
                      {optionLabel}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
        
      case 'filter':
        return (
          <div className={getDropdownClasses()} ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center px-3 py-1.5 border border-medium-gray rounded bg-white hover:border-dark-gray focus:outline-none focus:ring-1 focus:ring-accent"
              onClick={() => !disabled && setIsOpen(!isOpen)}
              onKeyDown={handleKeyDown}
              aria-haspopup="true"
              aria-expanded={isOpen}
              disabled={disabled}
            >
              {label && <span className="mr-1">{label}:</span>}
              <span className="font-medium">{selectedLabel}</span>
              <Icon 
                name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
                size={28} 
                className="ml-1" 
              />
            </button>
            
            {isOpen && (
              <div className="dropdown-menu animate-fade-in">
                {options.map((option, index) => {
                  const optionValue = option.value || option;
                  const optionLabel = option.label || option;
                  const isSelected = optionValue === value;
                  
                  return (
                    <button
                      key={index}
                      className={`dropdown-item ${isSelected ? 'bg-light-gray font-medium' : ''}`}
                      onClick={() => handleSelect(option)}
                    >
                      {optionLabel}
                      {isSelected && <Icon name="Check" size={20} className="ml-2" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
        
      default: // Form select
        return (
          <div className={getDropdownClasses()} ref={dropdownRef}>
            {label && (
              <label className="block text-sm font-medium text-dark-gray mb-1">
                {label}
                {props.required && <span className="text-error ml-1">*</span>}
              </label>
            )}
            
            <button
              type="button"
              className={getButtonClasses()}
              onClick={() => !disabled && setIsOpen(!isOpen)}
              onKeyDown={handleKeyDown}
              aria-haspopup="true"
              aria-expanded={isOpen}
              disabled={disabled}
            >
              <span className={!selectedOption ? 'text-dark-gray' : ''}>
                {selectedLabel}
              </span>
              <Icon 
                name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
                size={20} 
                className="ml-1" 
              />
            </button>
            
            {isOpen && (
              <div className="dropdown-menu animate-fade-in">
                {options.map((option, index) => {
                  const optionValue = option.value || option;
                  const optionLabel = option.label || option;
                  const isSelected = optionValue === value;
                  
                  return (
                    <button
                      key={index}
                      className={`dropdown-item ${isSelected ? 'bg-light-gray font-medium' : ''}`}
                      onClick={() => handleSelect(option)}
                    >
                      {optionLabel}
                    </button>
                  );
                })}
              </div>
            )}
            
            {error && <p className="text-sm text-error mt-1">{error}</p>}
          </div>
        );
    }
  };
  
  return renderDropdown();
};

export default Dropdown;
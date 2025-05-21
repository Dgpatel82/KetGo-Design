import React, { useState } from 'react';
import Icon from '../../components/AppIcon';

const Input = ({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  success,
  disabled = false,
  required = false,
  icon,
  iconPosition = 'left',
  className = '',
  helpText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };
  
  // Determine border color based on state
  const getBorderClasses = () => {
    if (error) return 'border-error focus:border-error focus:ring-error';
    if (success) return 'border-success focus:border-success focus:ring-success';
    return 'border-medium-gray focus:border-accent focus:ring-accent';
  };
  
  // Determine if we need to render a textarea
  const isTextarea = type === 'textarea';
  
  // Classes for the input element
  const inputClasses = `
    form-input
    ${getBorderClasses()}
    ${icon && iconPosition === 'left' ? 'pl-10' : ''}
    ${icon && iconPosition === 'right' ? 'pr-10' : ''}
    ${className}
  `;
  
  // Render the appropriate input element
  const renderInputElement = () => {
    if (isTextarea) {
      return (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClasses}
          rows={props.rows || 4}
          {...props}
        />
      );
    }
    
    if (type === 'password') {
      return (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClasses}
          autoComplete="current-password"
          {...props}
        />
      );
    }
    
    return (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputClasses}
        {...props}
      />
    );
  };
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon name={icon} size={20} className="text-dark-gray" />
          </div>
        )}
        
        {renderInputElement()}
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Icon name={icon} size={20} className="text-dark-gray" />
          </div>
        )}
        
        {error && type === 'password' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Icon name="AlertCircle" size={20} className="text-error" />
          </div>
        )}
        
        {success && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Icon name="CheckCircle" size={20} className="text-success" />
          </div>
        )}
      </div>
      
      {error && <p className="form-error">{error}</p>}
      {!error && helpText && <p className="text-sm text-dark-gray mt-1">{helpText}</p>}
    </div>
  );
};

export default Input;
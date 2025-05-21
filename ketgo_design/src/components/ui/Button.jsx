import React from 'react';
import Icon from '../../components/AppIcon';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    icon: 'p-2 rounded-full hover:bg-light-gray',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    variant !== 'icon' ? sizeClasses[size] : '',
    widthClass,
    className,
  ].join(' ');
  
  // Only render icon if provided
  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <Icon 
        name={icon} 
        size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} 
        className={children ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : ''}
      />
    );
  };

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </button>
  );
};

export default Button;
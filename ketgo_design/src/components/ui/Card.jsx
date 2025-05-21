import React from 'react';
import Image from '../../components/AppImage';
import Icon from '../../components/AppIcon';

const Card = ({
  variant = 'default',
  title,
  subtitle,
  content,
  image,
  icon,
  iconColor,
  footer,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'card';
  
  const variantClasses = {
    default: '',
    project: 'overflow-hidden',
    service: 'p-6 text-center',
    team: 'text-center',
    testimonial: 'p-6',
    feature: 'p-6',
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    onClick ? 'cursor-pointer' : '',
    className,
  ].join(' ');
  
  // Render different card layouts based on variant
  const renderCardContent = () => {
    switch (variant) {
      case 'project':
        return (
          <>
            {image && (
              <div className="aspect-w-16 aspect-h-9">
                <Image 
                  src={image} 
                  alt={title || 'Project image'} 
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="p-4">
              {title && <h3 className="text-xl font-heading font-semibold text-black">{title}</h3>}
              {subtitle && <p className="text-dark-gray mt-1">{subtitle}</p>}
              {content && <div className="mt-3">{content}</div>}
              {footer && <div className="mt-4">{footer}</div>}
            </div>
          </>
        );
        
      case 'service':
        return (
          <>
            {icon && (
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${iconColor || 'bg-light-gray'}`}>
                  <Icon name={icon} size={24} className="text-primary" />
                </div>
              </div>
            )}
            {title && <h3 className="text-xl font-heading font-semibold text-black">{title}</h3>}
            {subtitle && <p className="text-dark-gray mt-1">{subtitle}</p>}
            {content && <div className="mt-3">{content}</div>}
            {footer && <div className="mt-4">{footer}</div>}
          </>
        );
        
      case 'team':
        return (
          <>
            {image && (
              <div className="mb-4">
                <Image 
                  src={image} 
                  alt={title || 'Team member'} 
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              </div>
            )}
            <div className="p-4">
              {title && <h3 className="text-xl font-heading font-semibold text-black">{title}</h3>}
              {subtitle && <p className="text-accent font-medium">{subtitle}</p>}
              {content && <div className="mt-3">{content}</div>}
              {footer && <div className="mt-4">{footer}</div>}
            </div>
          </>
        );
        
      case 'testimonial':
        return (
          <>
            <Icon name="Quote" size={36} className="text-accent opacity-20 mb-4" />
            {content && <div className="italic text-black">{content}</div>}
            <div className="mt-4 flex items-center">
              {image && (
                <Image 
                  src={image} 
                  alt={title || 'Testimonial author'} 
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
              )}
              <div>
                {title && <h4 className="font-heading font-semibold text-black">{title}</h4>}
                {subtitle && <p className="text-dark-gray text-sm">{subtitle}</p>}
              </div>
            </div>
          </>
        );
        
      case 'feature':
        return (
          <>
            {icon && (
              <div className="mb-4">
                <Icon name={icon} size={24} className="text-accent" />
              </div>
            )}
            {title && <h3 className="text-xl font-heading font-semibold text-black">{title}</h3>}
            {content && <div className="mt-3 text-dark-gray">{content}</div>}
            {footer && <div className="mt-4">{footer}</div>}
          </>
        );
        
      default:
        return (
          <div className="p-4">
            {title && <h3 className="text-xl font-heading font-semibold text-black">{title}</h3>}
            {subtitle && <p className="text-dark-gray mt-1">{subtitle}</p>}
            {content && <div className="mt-3">{content}</div>}
            {footer && <div className="mt-4">{footer}</div>}
          </div>
        );
    }
  };

  return (
    <div 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {renderCardContent()}
    </div>
  );
};

export default Card;
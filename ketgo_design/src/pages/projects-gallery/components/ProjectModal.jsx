import React, { useState, useEffect, useCallback } from "react";
import Icon from "../../../components/AppIcon";
import ImageGallery from "./ImageGallery";

const ProjectModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  const {
    title,
    category,
    year,
    location,
    description,
    client,
    architect,
    area,
    status,
    images
  } = project;

  // Map category ID to display name
  const getCategoryName = (categoryId) => {
    const categoryMap = {
      residential: "Residential",
      commercial: "Commercial",
      interior: "Interior Design",
      landscape: "Landscape"
    };
    
    return categoryMap[categoryId] || categoryId;
  };

  // Handle escape key press to close modal
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  }, []);

  // Add event listener for keyboard navigation
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Handle modal close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isClosing ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className={`relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform ${isClosing ? 'scale-95' : 'scale-100'} transition-transform duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white bg-opacity-80 text-primary hover:text-accent transition-colors duration-200"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <Icon name="X" size={24} />
        </button>
        
        {/* Image Gallery */}
        <div className="w-full">
          <ImageGallery images={images} title={title} />
        </div>
        
        {/* Project Details */}
        <div className="p-6">
          <div className="mb-6">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">{title}</h2>
              <span className="text-accent font-medium">{year}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-light-gray text-primary">
                {getCategoryName(category)}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-light-gray text-primary">
                <Icon name="MapPin" size={16} className="mr-1" />
                {location}
              </span>
            </div>
            
            <p className="text-dark-gray">{description}</p>
          </div>
          
          {/* Project Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-medium-gray pt-4">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-sm font-medium text-dark-gray">Client</h3>
                <p className="text-primary">{client}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-dark-gray">Architect</h3>
                <p className="text-primary">{architect}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-sm font-medium text-dark-gray">Area</h3>
                <p className="text-primary">{area}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-dark-gray">Status</h3>
                <p className="text-primary">{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
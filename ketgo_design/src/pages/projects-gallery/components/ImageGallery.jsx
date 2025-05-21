import React, { useState, useEffect, useCallback } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  }, []);

  // Add event listener for keyboard navigation
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Navigate to previous image
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsLoading(true);
  };

  // Navigate to next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoading(true);
  };

  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative aspect-w-16 aspect-h-9 bg-light-gray">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        )}
        <Image 
          src={images[currentIndex]} 
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          onLoad={handleImageLoad}
        />
      </div>
      
      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-80 text-primary hover:text-accent transition-colors duration-200 focus:outline-none"
        onClick={handlePrevious}
        aria-label="Previous image"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-80 text-primary hover:text-accent transition-colors duration-200 focus:outline-none"
        onClick={handleNext}
        aria-label="Next image"
      >
        <Icon name="ChevronRight" size={24} />
      </button>
      
      {/* Image Counter */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
      
      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-4 px-4 pb-4 gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsLoading(true);
            }}
            className={`
              w-16 h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-200
              ${currentIndex === index ? 'border-accent' : 'border-transparent hover:border-medium-gray'}
            `}
            aria-label={`View image ${index + 1}`}
          >
            <Image 
              src={image} 
              alt={`${title} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
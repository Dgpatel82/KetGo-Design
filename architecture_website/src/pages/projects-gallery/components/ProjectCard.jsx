import React from "react";
import Image from "../../../components/AppImage";


const ProjectCard = ({ project, onClick }) => {
  const { title, category, year, thumbnail } = project;

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

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-w-16 aspect-h-10">
        <Image 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white font-medium px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-heading font-semibold text-primary group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          <span className="text-sm text-dark-gray">{year}</span>
        </div>
        
        <div className="flex items-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-light-gray text-primary">
            {getCategoryName(category)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
import React from "react";

const ProjectsSkeletonLoader = () => {
  // Create an array of 6 items for skeleton loading
  const skeletonItems = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skeletonItems.map((item) => (
        <div 
          key={item} 
          className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse"
        >
          {/* Thumbnail skeleton */}
          <div className="aspect-w-16 aspect-h-10 bg-light-gray"></div>
          
          {/* Content skeleton */}
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="h-6 bg-light-gray rounded w-3/4"></div>
              <div className="h-4 bg-light-gray rounded w-1/6"></div>
            </div>
            
            <div className="h-5 bg-light-gray rounded w-1/3 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSkeletonLoader;
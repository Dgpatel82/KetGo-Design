import React, { useState, useEffect } from "react";

import Dropdown from "../../../components/ui/Dropdown";

const FilterTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Render dropdown for mobile view
  const renderMobileFilter = () => {
    const options = categories.map(category => ({
      value: category.id,
      label: category.name
    }));

    return (
      <div className="w-full max-w-xs mx-auto">
        <Dropdown
          variant="filter"
          label="Category"
          options={options}
          value={activeCategory}
          onChange={(option) => onCategoryChange(option.value)}
        />
      </div>
    );
  };

  // Render tabs for desktop view
  const renderDesktopTabs = () => {
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-4 py-2 rounded-md transition-colors duration-200
              ${activeCategory === category.id 
                ? 'bg-accent text-black font-medium' :'bg-light-gray text-dark-gray hover:bg-medium-gray hover:text-black'}
            `}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {isMobile ? renderMobileFilter() : renderDesktopTabs()}
    </div>
  );
};

export default FilterTabs;
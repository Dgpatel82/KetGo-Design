import React from "react";
import Icon from "../../../../components/AppIcon";

const ProjectTypeStep = ({ value, onChange, error }) => {
  const projectTypes = [
    { id: "residential", label: "Residential Building", icon: "Home" },
    { id: "commercial", label: "Commercial Building", icon: "Building2" },
    { id: "interior", label: "Interior Design", icon: "Sofa" },
    { id: "renovation", label: "Renovation", icon: "Hammer" },
    { id: "landscape", label: "Landscape Design", icon: "Palmtree" },
    { id: "industrial", label: "Industrial Facility", icon: "Factory" },
    { id: "custom", label: "Custom Project", icon: "Puzzle" }
  ];

  return (
    <div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-4">
        What type of project are you planning?
      </h3>
      <p className="text-dark-gray mb-6">
        Select the category that best describes your architectural project.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectTypes.map((type) => (
          <div
            key={type.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all duration-200
              ${value === type.id 
                ? 'border-accent bg-accent bg-opacity-5' :'border-medium-gray hover:border-dark-gray'}
            `}
            onClick={() => onChange(type.id)}
          >
            <div className="flex items-center">
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center mr-3
                  ${value === type.id ? 'bg-accent text-white' : 'bg-light-gray text-dark-gray'}
                `}
              >
                <Icon name={type.icon} size={20} />
              </div>
              <span className="font-medium">{type.label}</span>
              
              {value === type.id && (
                <Icon name="Check" size={20} className="ml-auto text-accent" />
              )}
            </div>
          </div>
        ))}
      </div>
      
      {error && (
        <p className="text-error text-sm mt-2">
          <Icon name="AlertCircle" size={16} className="inline mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

export default ProjectTypeStep;
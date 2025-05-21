import React from "react";
import Icon from "../../../../components/AppIcon";

const RequirementsStep = ({ value, onChange, error }) => {
  const requirements = [
    { id: "foundation", label: "Foundation Work", icon: "Layers" },
    { id: "structural", label: "Structural Engineering", icon: "Columns" },
    { id: "electrical", label: "Electrical Systems", icon: "Zap" },
    { id: "plumbing", label: "Plumbing Systems", icon: "Droplets" },
    { id: "hvac", label: "HVAC Systems", icon: "Wind" },
    { id: "interior", label: "Interior Finishes", icon: "Paintbrush" },
    { id: "exterior", label: "Exterior Finishes", icon: "PanelTop" }
  ];

  const handleToggleRequirement = (reqId) => {
    if (value.includes(reqId)) {
      onChange(value.filter(id => id !== reqId));
    } else {
      onChange([...value, reqId]);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-4">
        What are your project requirements?
      </h3>
      <p className="text-dark-gray mb-6">
        Select all the components that will be part of your project. This helps us provide a more accurate estimate.
      </p>
      
      <div className="space-y-3">
        {requirements.map((req) => (
          <div
            key={req.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all duration-200
              ${value.includes(req.id) 
                ? 'border-accent bg-accent bg-opacity-5' :'border-medium-gray hover:border-dark-gray'}
            `}
            onClick={() => handleToggleRequirement(req.id)}
          >
            <div className="flex items-center">
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center mr-3
                  ${value.includes(req.id) ? 'bg-accent text-white' : 'bg-light-gray text-dark-gray'}
                `}
              >
                <Icon name={req.icon} size={20} />
              </div>
              <span className="font-medium">{req.label}</span>
              
              <div className="ml-auto">
                <div 
                  className={`
                    w-6 h-6 rounded border flex items-center justify-center
                    ${value.includes(req.id) 
                      ? 'bg-accent border-accent text-white' :'border-medium-gray'}
                  `}
                >
                  {value.includes(req.id) && <Icon name="Check" size={16} />}
                </div>
              </div>
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
      
      <div className="mt-6 bg-light-gray p-4 rounded-lg">
        <p className="text-dark-gray text-sm flex items-start">
          <Icon name="Info" size={18} className="text-info mr-2 flex-shrink-0 mt-0.5" />
          Selecting specific requirements helps us provide a more accurate estimate. You can discuss additional details with our team during the follow-up.
        </p>
      </div>
    </div>
  );
};

export default RequirementsStep;
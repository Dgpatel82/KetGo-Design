import React from "react";
import Icon from "../../../../components/AppIcon";
import Input from "../../../../components/ui/Input";

const SquareFootageStep = ({ value, onChange, error }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const squareFootageRanges = [
    { range: "Under 1,000 sq ft", value: "500" },
    { range: "1,000 - 2,500 sq ft", value: "1750" },
    { range: "2,500 - 5,000 sq ft", value: "3750" },
    { range: "5,000 - 10,000 sq ft", value: "7500" },
    { range: "Over 10,000 sq ft", value: "15000" }
  ];

  return (
    <div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-4">
        What is the approximate square footage?
      </h3>
      <p className="text-dark-gray mb-6">
        Enter the estimated square footage of your project. This helps us calculate material and labor costs.
      </p>
      
      <div className="mb-6">
        <Input
          id="squareFootage"
          name="squareFootage"
          type="number"
          label="Square Footage"
          placeholder="Enter square footage"
          value={value}
          onChange={handleChange}
          error={error}
          icon="SquareFootage"
          required
          min="1"
          helpText="Please enter a positive number"
        />
      </div>
      
      <div className="bg-light-gray p-4 rounded-lg">
        <h4 className="font-medium text-primary mb-3 flex items-center">
          <Icon name="HelpCircle" size={18} className="mr-2" />
          Quick Selection
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {squareFootageRanges.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`
                py-2 px-3 rounded border text-sm transition-colors
                ${value === item.value 
                  ? 'bg-accent text-black border-accent' :'bg-white border-medium-gray hover:border-dark-gray'}
              `}
              onClick={() => onChange(item.value)}
            >
              {item.range}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SquareFootageStep;
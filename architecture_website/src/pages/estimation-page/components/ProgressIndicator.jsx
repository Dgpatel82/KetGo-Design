import React from "react";
import Icon from "../../../components/AppIcon";

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, label: "Project Type" },
    { number: 2, label: "Square Footage" },
    { number: 3, label: "Requirements" },
    { number: 4, label: "Contact Info" }
  ];

  return (
    <div className="mb-8">
      {/* Mobile Progress Bar */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm font-medium text-primary">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-light-gray rounded-full h-2.5">
          <div 
            className="bg-accent h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <p className="text-center mt-2 text-dark-gray font-medium">
          {steps[currentStep - 1].label}
        </p>
      </div>
      
      {/* Desktop Steps */}
      <div className="hidden md:block">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div 
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 
                    ${currentStep >= step.number 
                      ? 'border-accent bg-accent text-white' :'border-medium-gray text-dark-gray'}
                    transition-colors duration-300
                  `}
                >
                  {currentStep > step.number ? (
                    <Icon name="Check" size={20} />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                <span 
                  className={`
                    mt-2 text-xs font-medium
                    ${currentStep >= step.number ? 'text-primary' : 'text-dark-gray'}
                  `}
                >
                  {step.label}
                </span>
              </div>
              
              {index < steps.length - 1 && (
                <div 
                  className={`
                    flex-1 h-0.5 mx-2
                    ${currentStep > index + 1 ? 'bg-accent' : 'bg-medium-gray'}
                    transition-colors duration-300
                  `}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
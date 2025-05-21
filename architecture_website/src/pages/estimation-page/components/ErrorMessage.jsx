import React from "react";
import Icon from "../../../components/AppIcon";

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="bg-error bg-opacity-10 border-l-4 border-error rounded-md p-4 mb-6 flex items-start">
      <Icon name="AlertTriangle" size={24} className="text-error mr-3 flex-shrink-0 mt-0.5" />
      <div className="flex-grow">
        <h3 className="font-medium text-error">Error Submitting Form</h3>
        <p className="text-dark-gray">{message || "There was an error processing your request. Please try again."}</p>
      </div>
      <button 
        onClick={onClose}
        className="text-dark-gray hover:text-black ml-2"
        aria-label="Close error message"
      >
        <Icon name="X" size={20} />
      </button>
    </div>
  );
};

export default ErrorMessage;
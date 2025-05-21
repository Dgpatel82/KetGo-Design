import React from "react";

const FormStep = ({ isActive, children }) => {
  if (!isActive) return null;
  
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

export default FormStep;
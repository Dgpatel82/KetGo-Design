import React from "react";
import Icon from "../../../components/AppIcon";

const SuccessMessage = ({ onReset }) => {
  return (
    <div className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 text-center">
            <div className="w-20 h-20 bg-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-4">
              Estimation Request Received!
            </h2>
            
            <p className="text-dark-gray mb-6">
              Thank you for submitting your project details. Our team will review your information and provide you with a detailed estimate within 2-3 business days. You will receive a confirmation email shortly.
            </p>
            
            <div className="bg-light-gray p-4 rounded-lg mb-6">
              <h3 className="font-medium text-primary mb-2">What happens next?</h3>
              <ol className="text-left text-dark-gray space-y-2">
                <li className="flex items-start">
                  <span className="bg-accent text-black rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                  <span>Our team reviews your project requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent text-black rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                  <span>We prepare a detailed cost estimate based on your inputs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent text-black rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                  <span>You'll receive the estimate via email within 2-3 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent text-black rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                  <span>A team member will follow up to discuss your project in detail</span>
                </li>
              </ol>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onReset}
                className="btn btn-secondary px-6 py-3 flex items-center justify-center"
              >
                <Icon name="RefreshCw" size={20} className="mr-2" />
                Start New Estimate
              </button>
              
              <a 
                href="/contact-page" 
                className="btn btn-primary px-6 py-3 flex items-center justify-center"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
import React from "react";
import Icon from "../../../components/AppIcon";

const EstimationHero = () => {
  return (
    <section className="bg-primary-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mt-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Get an Estimate for Your Project
          </h1>
          <p className="text-lg md:text-xl text-medium-gray mb-8">
            Fill out our simple form to receive a preliminary cost estimate for your architectural project. Our experts will review your requirements and provide you with a detailed breakdown.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#estimation-form" 
              className="btn btn-primary px-6 py-3 flex items-center"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Start Estimation
            </a>
            <a 
              href="#estimation-faq" 
              className="btn btn-secondary px-6 py-3 flex items-center bg-gray-300 hover:bg-gray-400 hover:text-black"
            >
              <Icon name="HelpCircle" size={20} className="mr-2" />
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimationHero;
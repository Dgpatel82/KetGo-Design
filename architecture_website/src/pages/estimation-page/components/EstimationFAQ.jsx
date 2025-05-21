import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const EstimationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How accurate is the initial estimate?",
      answer: "Our initial estimates are typically within 15-20% of the final project cost. The accuracy depends on the complexity of your project and how detailed the information you provide is. For more precise estimates, we recommend scheduling an on-site consultation with our team."
    },
    {
      question: "How long does it take to receive my estimate?",
      answer: "You will receive your preliminary estimate within 2-3 business days after submitting the form. For more complex projects, it may take up to 5 business days. If you need an urgent estimate, please mention this in the additional information section."
    },
    {
      question: "What factors can affect the final cost of my project?",
      answer: "Several factors can influence the final cost, including material selections, site conditions, structural requirements, timeline changes, and any modifications to the original scope. Our detailed estimate will break down these potential variables."
    },
    {
      question: "Do I need to pay for the estimate?",
      answer: "No, our preliminary estimates are completely free of charge. We only charge for detailed cost analysis that requires significant time investment or on-site visits, which would be discussed with you in advance."
    },
    {
      question: "What happens after I receive my estimate?",
      answer: "One of our project consultants will contact you to discuss the estimate and answer any questions you might have. If you decide to proceed, we\'ll schedule an in-person meeting to refine the project details and prepare a formal proposal."
    },
    {
      question: "Can I modify my project requirements after receiving an estimate?",
      answer: "Absolutely. The initial estimate is just the starting point. We can adjust the scope, materials, and other aspects of your project as needed. Any changes will be reflected in an updated estimate."
    }
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section id="estimation-faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-dark-gray text-center mb-10">
            Find answers to common questions about our estimation process
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-medium-gray rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-primary">{faq.question}</span>
                  <Icon 
                    name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-dark-gray"
                  />
                </button>
                
                {openIndex === index && (
                  <div className="p-4 pt-0 border-t border-medium-gray animate-fade-in">
                    <p className="text-dark-gray mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-light-gray p-6 rounded-lg text-center">
            <h3 className="font-heading font-semibold text-primary mb-2">
              Still have questions?
            </h3>
            <p className="text-dark-gray mb-4">
              Our team is ready to help you with any additional questions you might have.
            </p>
            <a 
              href="/contact-page" 
              className="btn btn-primary px-6 py-2 inline-flex items-center"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimationFAQ;
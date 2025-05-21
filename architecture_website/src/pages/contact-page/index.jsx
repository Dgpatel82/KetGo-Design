import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ContactForm from "./components/ContactForm";
import MapEmbed from "./components/MapEmbed";
import ContactCard from "./components/ContactCard";
import SocialLinks from "./components/SocialLinks";
import Icon from "../../components/AppIcon";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    // In a real application, this would send data to the backend
    console.log("Form submitted with data:", formData);
    setFormSubmitted(true);
    
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Architecture Website</title>
        <meta name="description" content="Get in touch with our team of architects and civil engineers. We're here to help with your construction and design needs." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header  variant="navigation"/>
        
        
        <main className="flex-grow">
          
          {/* Hero Section */}
          <section className="bg-primary py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 mt-14">
                  Get In Touch
                </h1>
                <p className="text-medium-gray text-lg md:text-xl">
                  We'd love to hear from you. Reach out to us for inquiries, collaborations, or to discuss your next project.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-16 bg-light">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Contact Form */}
                <div className="order-2 lg:order-1">
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-semibold text-primary mb-6">
                      Send Us a Message
                    </h2>
                    
                    {formSubmitted ? (
                      <div className="bg-success bg-opacity-10 border border-success rounded-md p-4 mb-6 animate-fade-in">
                        <div className="flex items-start">
                          <Icon name="CheckCircle" className="text-success mr-3 mt-0.5" size={20} />
                          <div>
                            <h3 className="font-medium text-success">Message Sent Successfully!</h3>
                            <p className="text-dark-gray mt-1">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <ContactForm onSubmit={handleFormSubmit} />
                    )}
                  </div>
                </div>

                {/* Map and Contact Info */}
                <div className="order-1 lg:order-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <div className="h-64 md:h-80">
                      <MapEmbed 
                        latitude={21.746687} 
                        longitude={72.142186} 
                        title="KetGo Design Association Office" 
                      />
                    </div>
                    
                    <div className="p-6 md:p-8 flex-grow">
                      <ContactCard />
                      
                      <div className="mt-8">
                        <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                          Connect With Us
                        </h3>
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-medium-gray rounded-lg p-6">
                      <h3 className="text-lg font-heading font-semibold text-primary mb-2 flex items-start">
                        <Icon name="HelpCircle" size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-dark-gray ml-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

// Mock data for FAQs
const faqs = [
  {
    question: "What information should I prepare before contacting you about a project?",
    answer: "It\'s helpful to have a general idea of your project scope, budget range, timeline expectations, and any specific requirements or inspirations. The more details you can provide, the better we can understand your vision."
  },
  {
    question: "How long does it typically take to get a response?",
    answer: "We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your message or consider calling our office directly."
  },
  {
    question: "Do you work on international projects?",
    answer: "Yes, we have experience working on projects across different countries. We can accommodate virtual meetings and collaborate remotely when necessary."
  },
  {
    question: "What is your typical process for new projects?",
    answer: "Our process typically begins with an initial consultation, followed by concept development, detailed design, documentation, and construction administration. We tailor this process to meet the specific needs of each project."
  }
];

export default ContactPage;
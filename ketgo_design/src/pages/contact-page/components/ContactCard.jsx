import React from "react";
import Icon from "../../../components/AppIcon";

const ContactCard = () => {
  const contactInfo = {
    address: "Victoria Prime, Near, Kaliyabid Water Tank Cir, Kaliyabid, Bhavnagar, Gujarat 364002",
    phone: "+91 9979463602",
    email: "kgvasani02@gmail.com",
    hours: "Monday - Saturday: 10:00 AM - 7:30 PM"
  };

  return (
    <div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-6">
        Contact Information
      </h3>
      
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="bg-light-gray p-2 rounded-full mr-4 mt-1">
            <Icon name="MapPin" size={20} className="text-accent" />
          </div>
          <div>
            <h4 className="font-medium text-black">Office Address</h4>
            <p className="text-dark-gray">{contactInfo.address}</p>
          </div>
        </li>
        
        <li className="flex items-start">
          <div className="bg-light-gray p-2 rounded-full mr-4 mt-1">
            <Icon name="Phone" size={20} className="text-accent" />
          </div>
          <div>
            <h4 className="font-medium text-black">Phone Number</h4>
            <p className="text-dark-gray">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="hover:text-accent transition-colors duration-200"
              >
                {contactInfo.phone}
              </a>
            </p>
          </div>
        </li>
        
        <li className="flex items-start">
          <div className="bg-light-gray p-2 rounded-full mr-4 mt-1">
            <Icon name="Mail" size={20} className="text-accent" />
          </div>
          <div>
            <h4 className="font-medium text-black">Email Address</h4>
            <p className="text-dark-gray">
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="hover:text-accent transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
        </li>
        
        <li className="flex items-start">
          <div className="bg-light-gray p-2 rounded-full mr-4 mt-1">
            <Icon name="Clock" size={20} className="text-accent" />
          </div>
          <div>
            <h4 className="font-medium text-black">Business Hours</h4>
            <p className="text-dark-gray">{contactInfo.hours}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
import React from "react";
import Input from "../../../../components/ui/Input";

const ContactInfoStep = ({ values, onChange, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-4">
        Your Contact Information
      </h3>
      <p className="text-dark-gray mb-6">
        Please provide your contact details so we can send you the estimate and follow up with any questions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Input
            id="name"
            name="name"
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            icon="User"
            required
          />
        </div>
        
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            icon="Mail"
            required
          />
        </div>
        
        <div>
          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            icon="Phone"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <Input
            id="message"
            name="message"
            type="textarea"
            label="Additional Information (Optional)"
            placeholder="Please share any additional details about your project that might help us provide a more accurate estimate."
            value={values.message}
            onChange={handleChange}
            rows={4}
          />
        </div>
      </div>
      
      <div className="mt-6 bg-light-gray p-4 rounded-lg">
        <p className="text-dark-gray text-sm">
          By submitting this form, you agree to our <a href="#" className="text-accent hover:underline">Privacy Policy</a> and consent to being contacted regarding your project estimate.
        </p>
      </div>
    </div>
  );
};

export default ContactInfoStep;
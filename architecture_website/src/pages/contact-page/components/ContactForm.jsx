import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "" // Honeypot field for basic spam prevention
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if honeypot field is filled (likely a bot)
    if (formData.honeypot) {
      console.log("Spam submission detected");
      return;
    }
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be an API call
      // await axios.post('/api/contact', formData);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Call the onSubmit callback with form data
      onSubmit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        honeypot: ""
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        submit: "There was an error submitting your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field - hidden from users but can be filled by bots */}
      <div className="hidden">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>
      
      {/* Name field */}
      <Input
        id="name"
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        icon="User"
      />
      
      {/* Email field */}
      <Input
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        icon="Mail"
      />
      
      {/* Phone field */}
      <Input
        id="phone"
        name="phone"
        label="Phone Number"
        placeholder="Enter your phone number (optional)"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        icon="Phone"
      />
      
      {/* Subject field */}
      <Input
        id="subject"
        name="subject"
        label="Subject"
        placeholder="What is this regarding?"
        value={formData.subject}
        onChange={handleChange}
        icon="FileText"
      />
      
      {/* Message field */}
      <Input
        id="message"
        name="message"
        type="textarea"
        label="Message"
        placeholder="How can we help you?"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        rows={5}
      />
      
      {/* Error message */}
      {errors.submit && (
        <div className="bg-error bg-opacity-10 border border-error rounded-md p-4">
          <div className="flex">
            <Icon name="AlertTriangle" className="text-error mr-3" size={20} />
            <p className="text-error">{errors.submit}</p>
          </div>
        </div>
      )}
      
      {/* Submit button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting}
          className="py-3"
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader" className="animate-spin mr-2" size={20} />
              Sending...
            </>
          ) : (
            <>
              <Icon name="Send" className="mr-2" size={20} />
              Send Message
            </>
          )}
        </Button>
      </div>
      
      <p className="text-sm text-dark-gray text-center mt-4">
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
};

export default ContactForm;
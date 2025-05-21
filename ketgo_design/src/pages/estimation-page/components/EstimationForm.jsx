import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import FormStep from "./FormStep";
import ProjectTypeStep from "./steps/ProjectTypeStep";
import SquareFootageStep from "./steps/SquareFootageStep";
import RequirementsStep from "./steps/RequirementsStep";
import ContactInfoStep from "./steps/ContactInfoStep";
import ProgressIndicator from "./ProgressIndicator";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

const EstimationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    squareFootage: "",
    requirements: [],
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [apiError, setApiError] = useState("");

  const totalSteps = 4;

  const updateFormData = (stepData) => {
    setFormData(prevData => ({
      ...prevData,
      ...stepData
    }));
    setErrors({});
  };

  const validateStep = (step) => {
    let stepErrors = {};
    let isValid = true;

    switch (step) {
      case 1:
        if (!formData.projectType) {
          stepErrors.projectType = "Please select a project type";
          isValid = false;
        }
        break;
      case 2:
        if (!formData.squareFootage) {
          stepErrors.squareFootage = "Please enter square footage";
          isValid = false;
        } else if (isNaN(formData.squareFootage) || Number(formData.squareFootage) <= 0) {
          stepErrors.squareFootage = "Please enter a valid positive number";
          isValid = false;
        }
        break;
      case 3:
        if (formData.requirements.length === 0) {
          stepErrors.requirements = "Please select at least one requirement";
          isValid = false;
        }
        break;
      case 4:
        if (!formData.name.trim()) {
          stepErrors.name = "Name is required";
          isValid = false;
        }
        if (!formData.email.trim()) {
          stepErrors.email = "Email is required";
          isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          stepErrors.email = "Please enter a valid email address";
          isValid = false;
        }
        if (!formData.phone.trim()) {
          stepErrors.phone = "Phone number is required";
          isValid = false;
        } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
          stepErrors.phone = "Please enter a valid phone number";
          isValid = false;
        }
        break;
      default:
        break;
    }

    setErrors(stepErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful API response
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setApiError("There was an error submitting your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      projectType: "",
      squareFootage: "",
      requirements: [],
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    setCurrentStep(1);
    setSubmitStatus(null);
    setApiError("");
    setErrors({});
  };

  if (submitStatus === "success") {
    return <SuccessMessage onReset={resetForm} />;
  }

  return (
    <section id="estimation-form" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-6 text-center">
              Project Estimation Form
            </h2>
            
            <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
            
            {submitStatus === "error" && (
              <ErrorMessage message={apiError} onClose={() => setApiError("")} />
            )}
            
            <form onSubmit={handleSubmit} className="mt-8">
              <FormStep isActive={currentStep === 1}>
                <ProjectTypeStep 
                  value={formData.projectType}
                  onChange={(value) => updateFormData({ projectType: value })}
                  error={errors.projectType}
                />
              </FormStep>
              
              <FormStep isActive={currentStep === 2}>
                <SquareFootageStep 
                  value={formData.squareFootage}
                  onChange={(value) => updateFormData({ squareFootage: value })}
                  error={errors.squareFootage}
                />
              </FormStep>
              
              <FormStep isActive={currentStep === 3}>
                <RequirementsStep 
                  value={formData.requirements}
                  onChange={(value) => updateFormData({ requirements: value })}
                  error={errors.requirements}
                />
              </FormStep>
              
              <FormStep isActive={currentStep === 4}>
                <ContactInfoStep 
                  values={{
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                  }}
                  onChange={(values) => updateFormData(values)}
                  errors={{
                    name: errors.name,
                    email: errors.email,
                    phone: errors.phone
                  }}
                />
              </FormStep>
              
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="btn btn-secondary px-6 py-2 flex items-center"
                    disabled={isSubmitting}
                  >
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Previous
                  </button>
                )}
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className={`btn btn-primary px-6 py-2 flex items-center ${currentStep === 1 ? 'ml-auto' : ''}`}
                  >
                    Next
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary px-6 py-2 flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader" size={20} className="animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Icon name="Send" size={20} className="ml-2" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimationForm;
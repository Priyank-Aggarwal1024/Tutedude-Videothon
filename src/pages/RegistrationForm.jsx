import React, { useState } from "react";
import "../styles/RegistrationForm.css";
import logo from "../assets/logo.svg";
import hiredude from "../assets/hiredude.svg";
function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    email: "",
    portfolioLink: "",
    experience: "",
    currentStatus: "",
    futureRoles: [],
    tools: [],
  });

  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^\d{10,}$/.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = "Please enter a valid WhatsApp number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.currentStatus) {
      newErrors.currentStatus = "Please select your current status";
    }

    if (formData.futureRoles.length === 0) {
      newErrors.futureRoles = "Please select at least one future role";
    }

    if (formData.tools.length === 0) {
      newErrors.tools = "Please select at least one tool";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setErrors({});
    if (type === "checkbox") {
      const fieldName = e.target.getAttribute("data-field");
      setFormData((prev) => {
        const currentArray = [...prev[fieldName]];
        if (checked) {
          return { ...prev, [fieldName]: [...currentArray, value] };
        } else {
          return {
            ...prev,
            [fieldName]: currentArray.filter((item) => item !== value),
          };
        }
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      console.log("Form submitted:", formData);
      alert("Registration successful!");
    }
  };

  return (
    <div className="tutedude-registration">
      <div className="tutedude-registration-nav">
        <div className="navbar-logo-div">
          <img src={logo} alt="Logo" className="tutedude-logo" />
          <div className="navbar-logo-divider">|</div>
          <img src={hiredude} alt="Hiredude Logo" className="hiredude-logo" />
        </div>
      </div>
      <div className="tutedude-registration-main">
        {step === 1 ? (
          <RegistrationStep1
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        ) : (
          <RegistrationStep2
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

const RegistrationStep1 = ({ formData, errors, handleChange, handleNext }) => {
  return (
    <div className="tvr-step1-container">
      <div className="tvr-step1-header">
        <h1 className="tvr-step1-title">Registration Form</h1>
      </div>

      <div className="tvr-step1-progress-bar">
        <div className="tvr-step1-progress-step tvr-step1-progress-active"></div>
        <div className="tvr-step1-progress-step"></div>
      </div>

      <div className="tvr-step1-form-container">
        <div className="tvr-step1-form-group">
          <label className="tvr-step1-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className={`tvr-step1-input ${
              errors.fullName ? "tvr-step1-input-error" : ""
            }`}
            placeholder="Enter name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <span className="tvr-step1-error">{errors.fullName}</span>
          )}
        </div>

        <div className="tvr-step1-row">
          <div className="tvr-step1-form-group tvr-step1-half-width">
            <label className="tvr-step1-label">WhatsApp number</label>
            <input
              type="text"
              name="whatsappNumber"
              className={`tvr-step1-input ${
                errors.whatsappNumber ? "tvr-step1-input-error" : ""
              }`}
              placeholder="Enter your number"
              value={formData.whatsappNumber}
              onChange={handleChange}
            />
            {errors.whatsappNumber && (
              <span className="tvr-step1-error">{errors.whatsappNumber}</span>
            )}
          </div>

          <div className="tvr-step1-form-group tvr-step1-half-width">
            <label className="tvr-step1-label">Email</label>
            <input
              type="email"
              name="email"
              className={`tvr-step1-input ${
                errors.email ? "tvr-step1-input-error" : ""
              }`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="tvr-step1-error">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="tvr-step1-form-group">
          <label className="tvr-step1-label">Portfolio/ Previous Works</label>
          <input
            type="text"
            name="portfolioLink"
            className="tvr-step1-input"
            placeholder="Enter your portfolio link"
            value={formData.portfolioLink}
            onChange={handleChange}
          />
        </div>

        <div className="tvr-step1-dropdown">
          <div className="tvr-step1-dropdown-header">
            <span>Years of Experience in Video Editing</span>
          </div>
          <div className="tvr-step1-dropdown-options">
            {["fresher", "1-2", "3-5"].map((option) => (
              <label key={option} className="tvr-step1-option">
                <input
                  type="radio"
                  name="experience"
                  value={option}
                  checked={formData.experience === option}
                  onChange={handleChange}
                />
                <span>
                  {option === "fresher"
                    ? "Fresher"
                    : option === "1-2"
                    ? "1-2 Years"
                    : "3-5 Years"}
                </span>
              </label>
            ))}
          </div>
          {errors.experience && (
            <span className="tvr-step1-error">{errors.experience}</span>
          )}
        </div>
        <div className="tvr-step1-next-button-outer">
          <button className="tvr-step1-next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const RegistrationStep2 = ({
  formData,
  errors,
  handleChange,
  handlePrevious,
  handleSubmit,
}) => {
  return (
    <div className="tvr-step2-container">
      <div className="tvr-step2-header">
        <h1 className="tvr-step2-title">Registration Form</h1>
      </div>

      <div className="tvr-step2-progress-bar">
        <div className="tvr-step2-progress-step tvr-step2-progress-completed"></div>
        <div className="tvr-step2-progress-step tvr-step2-progress-completed"></div>
      </div>

      <div className="tvr-step2-form-container">
        <div className="tvr-step2-question-group">
          <div className="tvr-step2-question-header">
            1. What best describes your current status?
          </div>
          <div className="tvr-step2-options">
            {["student", "freelancer", "intern", "full-time"].map((status) => (
              <label key={status} className="tvr-step2-option">
                <input
                  type="radio"
                  name="currentStatus"
                  value={status}
                  checked={formData.currentStatus === status}
                  onChange={handleChange}
                />
                <span>
                  {status === "student"
                    ? "Student"
                    : status === "freelancer"
                    ? "Freelancer"
                    : status === "intern"
                    ? "Intern(paid/unpaid)"
                    : "Full-time Job"}
                </span>
              </label>
            ))}
          </div>
          {errors.currentStatus && (
            <span className="tvr-step2-error">{errors.currentStatus}</span>
          )}
        </div>

        <div className="tvr-step2-question-group">
          <div className="tvr-step2-question-header">
            2. What type of role are you looking for in future? (Select all that
            apply)
          </div>
          <div className="tvr-step2-options">
            {[
              "remote-internship",
              "wfh-full-time",
              "wfo-internship",
              "wfo-full-time",
              "freelance",
            ].map((role) => (
              <label key={role} className="tvr-step2-option">
                <input
                  type="checkbox"
                  data-field="futureRoles"
                  value={role}
                  checked={formData.futureRoles.includes(role)}
                  onChange={handleChange}
                />
                <span>
                  {role === "remote-internship"
                    ? "Remote Internship"
                    : role === "wfh-full-time"
                    ? "WFH Full time Job"
                    : role === "wfo-internship"
                    ? "WFO internship"
                    : role === "wfo-full-time"
                    ? "WFO Full time Job"
                    : "Freelance Video Editing"}
                </span>
              </label>
            ))}
          </div>
          {errors.futureRoles && (
            <span className="tvr-step2-error">{errors.futureRoles}</span>
          )}
        </div>

        <div className="tvr-step2-question-group">
          <div className="tvr-step2-question-header">
            3. Tools and Softwares you are most confident as Video Editing?
          </div>
          <div className="tvr-step2-options">
            {[
              "premiere-pro",
              "after-effects",
              "capcut",
              "davinci-resolve",
              "filmora",
            ].map((tool) => (
              <label key={tool} className="tvr-step2-option">
                <input
                  type="checkbox"
                  data-field="tools"
                  value={tool}
                  checked={formData.tools.includes(tool)}
                  onChange={handleChange}
                />
                <span>
                  {tool === "premiere-pro"
                    ? "Premiere Pro"
                    : tool === "after-effects"
                    ? "After Effects"
                    : tool === "capcut"
                    ? "CapCut"
                    : tool === "davinci-resolve"
                    ? "DaVinci Resolve"
                    : "Filmora"}
                </span>
              </label>
            ))}
          </div>
          {errors.tools && (
            <span className="tvr-step2-error">{errors.tools}</span>
          )}
        </div>

        <div className="tvr-step2-button-group">
          <button
            className="tvr-step2-button tvr-step2-button-previous"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="tvr-step2-button tvr-step2-button-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

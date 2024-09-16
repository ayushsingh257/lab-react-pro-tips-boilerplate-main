import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { firstName: '', lastName: '', email: '', contacts: '' };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.contacts.trim()) {
      newErrors.contacts = 'Please enter your contacts';
    }

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every(error => !error)) {
      alert('Registration successful!');
      // Handle form submission logic here
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input type="text" name="contacts" value={formData.contacts} onChange={handleInputChange} placeholder="Contacts" />
          {errors.contacts && <span className="error">{errors.contacts}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

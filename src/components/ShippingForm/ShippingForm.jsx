// ShippingForm.js
import React, { useState } from 'react';
import './ShippingForm.css';

const ShippingForm = ({setShipping}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    aptSuiteOther: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log(formData);
    setShipping(formData);
  };

  return (
    <div className="shipping-form-container">
      <h2>Your Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
          placeholder='Full Name'
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
          placeholder='Street Address'
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
          <input
          placeholder='Apt #'
            type="text"
            id="aptSuiteOther"
            name="aptSuiteOther"
            value={formData.aptSuiteOther}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
          placeholder='City'
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        <input
          placeholder='State'
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        <input
          placeholder='ZIP Code'
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
          placeholder='Phone #'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;

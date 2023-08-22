import React, { useState } from 'react';

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    address: '',
    photo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddDoctor = () => {
    setDoctors((prevDoctors) => [...prevDoctors, formData]);
    setFormData({
      name: '',
      type: '',
      address: '',
      photo: '',
    });
  };

  return (
    <div>
      <h2>Add Doctor</h2>
      {/* ... Form inputs and doctor cards as in the previous example ... */}
    </div>
  );
};

export default DoctorManagement;

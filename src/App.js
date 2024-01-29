import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const dob = event.target.dob.value;

    if (!username || !email || !phone || !dob) {
      alert("Please fill out all the fields.");
    } else if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
    } else if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      console.log(username, email, phone, dob);
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
    }
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <Modal
        show={isOpen}
        handleClose={closeModal}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;

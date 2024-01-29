
import React from "react";
import "./Modal.css";

function Modal({ show, handleClose, handleSubmit, formData, setFormData }) {
    // const modalRef = useRef(null);
  
    // const handleFormSubmit = (event) => {
    //   handleSubmit(event);
    //   // Close the modal (optional, depends on your use case)
    //   handleClose();
    // };
  return (
    <div className={show ? "display-block" : "display-none"}>
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={(e) => handleSubmit(e, setFormData)}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {/* <button onClick={handleClose}>Close</button> */}
      </div>
    </div>
  );
  }

export default Modal;

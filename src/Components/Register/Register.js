// PACKAGES
import React from "react";

// CSS
import "./Register.css";

const Register = () => {
  return (
    <div className="main_container">
      <form className="form">
        <h3 className="form_heading">Registration Form</h3>
        <div className="form_container">
          <div className="register_inputs">
            <input
              className="register_input"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
            />
            <input
              className="register_input"
              type="text"
              name="lastName"
              id="Lastname"
              placeholder="Enter Lase Name"
            />
            <input
              className="register_input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <input
              className="register_input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <button className="register_btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

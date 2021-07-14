// PACKAGES
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// CSS
import "./Register.css";

const Register = () => {
  const history = useHistory();
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputState = (e) => {
    const newSignup = { ...signup };
    newSignup[e.target.id] = e.target.value;
    setSignup(newSignup);
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    if (signup.email && signup.password) {
      const newUser = { email: signup.email, password: signup.password };
      localStorage.setItem("users", JSON.stringify(newUser));
      history.push("/login");
    } else {
      alert("Please Fill the form correctly");
    }
  };

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
              value={signup.firstName}
              onChange={(e) => {
                handleInputState(e);
              }}
            />
            <input
              className="register_input"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Lase Name"
              value={signup.lastName}
              onChange={(e) => {
                handleInputState(e);
              }}
            />
            <input
              className="register_input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={signup.email}
              onChange={(e) => {
                handleInputState(e);
              }}
            />
            <input
              className="register_input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={signup.password}
              onChange={(e) => {
                handleInputState(e);
              }}
            />
          </div>
          <button
            onClick={(e) => {
              handleRegisterForm(e);
            }}
            className="register_btn"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

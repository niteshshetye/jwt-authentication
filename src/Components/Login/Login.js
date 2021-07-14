import React, { useState } from "react";

import "./Login.css";

const url = "http://localhost:5000/login";

const Login = () => {
  // const [isAuthorize, setIsAuthorize] = useState(false);
  const [authEmail, setauthEmail] = useState("");
  const [authPassword, setauthPassword] = useState("");

  const getUserFromLocalStorage = () => {
    const users = localStorage.getItem("users");
    const user = JSON.parse(users);
    return user;
  };

  const loginValidation = async (data) => {
    const responce = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const token = await responce.json();
    return token;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let { email, password } = getUserFromLocalStorage();
    if (authEmail && authPassword) {
      if (email === authEmail && password === authPassword) {
        const authenticateUser = {
          authEmail,
          authPassword,
          id: new Date().getTime().toString(),
        };
        // const token = loginValidation(authenticateUser);
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: authenticateUser,
        })
          .then((res) => res.json())
          .then((token) => console.log(token))
          .catch((err) => console.log(err));
      } else {
        console.log("User is not Registered");
      }
    } else {
      alert("Please fill the inputs");
    }
  };
  return (
    <div className="main_container">
      <form
        className="form"
        onSubmit={(e) => {
          handleLoginSubmit(e);
        }}
      >
        <h3 className="form_heading">Login Form</h3>
        <div className="form_container">
          <div className="login_inputs">
            <input
              className="login_input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={authEmail}
              onChange={(e) => setauthEmail(e.target.value)}
            />
            <input
              className="login_input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={authPassword}
              onChange={(e) => setauthPassword(e.target.value)}
            />
          </div>
          <button className="login_btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

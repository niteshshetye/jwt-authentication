import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const url = "http://localhost:3001/login";

const Login = () => {
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [authEmail, setauthEmail] = useState("");
  const [authPassword, setauthPassword] = useState("");

  const getUserFromLocalStorage = () => {
    const users = localStorage.getItem("users");
    const user = JSON.parse(users);
    return user;
  };

  const setLocalStorageAuthorizeUser = (token) => {
    const authorizeUser = {
      isAuthorize,
      token,
    };
    localStorage.setItem("authorizeUser", JSON.stringify(authorizeUser));
  };

  const loginValidation = async (data) => {
    const responce = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const token = await responce.json();
    setIsAuthorize(true);
    return token;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = getUserFromLocalStorage();
    if (authEmail && authPassword) {
      if (email === authEmail && password === authPassword) {
        const authenticateUser = {
          authEmail,
          authPassword,
          id: new Date().getTime().toString(),
        };
        const { token } = await loginValidation(authenticateUser);
        setLocalStorageAuthorizeUser(token);
        // console.log(token);
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
          <div className="goToRegister">
            <p>
              Don't have account?{" "}
              <Link to="/register">
                <span>Register here</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

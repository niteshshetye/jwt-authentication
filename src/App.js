// PACKAGES
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

// ROUTES

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/login" component={() => <Login />} />
      <Route exact path="/register" component={() => <Register />} />
    </Switch>
  );
};

export default App;

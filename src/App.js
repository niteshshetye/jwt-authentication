// PACKAGES
import React from "react";
import { Route } from "react-router-dom";

// ROUTES
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <Route>
      <Register />
    </Route>
  );
};

export default App;

import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { Component } from "react";

const ProtectedRoute = ({
  isAuthenticatedUser,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticatedUser) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;

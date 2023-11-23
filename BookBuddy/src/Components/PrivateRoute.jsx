import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? (
    // Render the BookList component if the user is logged in
    <Route element={element} />
  ) : (
    // Redirect to the login page if the user is not logged in
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

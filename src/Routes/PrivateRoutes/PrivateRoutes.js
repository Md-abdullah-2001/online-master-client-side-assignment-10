import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../../Context/ContextData";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(ContextProvider);
  const location = useLocation();

  if (loading) {
    return <Spinner animation="grow" />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoutes;

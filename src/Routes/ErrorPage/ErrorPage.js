import React from "react";
import { Button } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page" className="text-center">
      <h1> 404 </h1>
      <h2>NOT FOUND</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <Button vibrant="primary">Back To Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;

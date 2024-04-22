import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page-container">
      <h2>Oops! Something went wrong.</h2>
      <h3>{error.error}</h3>
      <p>
        We're sorry, but it seems like there was an error processing your
        request.
      </p>
      <p>Please try again later or contact support for assistance.</p>
    </div>
  );
};

export default ErrorPage;

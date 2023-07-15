import React from "react";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error Occured!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
};

export default ErrorPage;

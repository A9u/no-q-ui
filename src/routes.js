import React from "react";
import { Route } from "react-router-dom";

import RegisterFormContainer from "./store/RegisterFormContainer";

const NqRoute = () => {
  return (
    <>
      <Route exact path="/register">
        {" "}
        <RegisterFormContainer />
      </Route>
    </>
  );
};

export default NqRoute;

import React from "react";
import { Route } from "react-router-dom";

import RegisterForm from './store/RegisterForm';
import { StoreOwnerSignUpForm } from './store/StoreOwnerSignUpForm';
import RegisterFormContainer from "./store/RegisterFormContainer";

const NqRoute = () => {
  return (
    <>
      <Route exact path="/signUp"> <StoreOwnerSignUpForm/></Route>
      <Route exact path="/register">
        {" "}
        <RegisterFormContainer />
      </Route>
    </>
  );
};

export default NqRoute;

import React from "react";
import { Route } from "react-router-dom";

import SignUpFormContainer from './store/StoreOwnerSignUpFormContainer';
import RegisterFormContainer from "./store/RegisterFormContainer";

const NqRoute = () => {
  return (
    <>
      <Route exact path="/signUp"> <SignUpFormContainer/></Route>
      <Route exact path="/register">
        <RegisterFormContainer />
      </Route>
    </>
  );
};

export default NqRoute;

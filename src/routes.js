import React from "react";
import { Route } from "react-router-dom";
import SignUpFormContainer from './store/StoreOwnerSignUpFormContainer';
import RegisterFormContainer from "./store/RegisterFormContainer";
import LogInFormContainer from "store/LogInFormContainer";

const NqRoute = () => {
  return (
    <>
      <Route exact path="/login"> <LogInFormContainer/></Route>
      <Route exact path="/signUp"> <SignUpFormContainer/></Route>
      <Route exact path="/register">
        {" "}
        <RegisterFormContainer />
      </Route>
    </>
  );
};

export default NqRoute;

import React from "react";
import { Route } from "react-router-dom";

import SignUpFormContainer from './store/StoreOwnerSignUpFormContainer';
import RegisterFormContainer from "./store/RegisterFormContainer";
import SlotFormContainter from "store/SlotFormContainer";

const NqRoute = () => {
  return (
    <>
      <Route exact path="/signUp"> <SignUpFormContainer/></Route>
      <Route exact path="/register">
        <RegisterFormContainer />
      </Route>
      <Route exact path="/slots">
        <SlotFormContainter />
      </Route>
    </>
  );
};

export default NqRoute;

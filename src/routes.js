import React from "react";
import { Route } from "react-router-dom";
import SignUpFormContainer from "./store/StoreOwnerSignUpFormContainer";
import RegisterFormContainer from "./store/RegisterFormContainer";
import LogInFormContainer from "store/LogInFormContainer";
import SlotFormContainter from "store/SlotFormContainer";
import NqNavBar from "store/NavBar";
import StoreListContainer from "store/StoreListContainer";

const NqRoute = () => {
  return (
    <>
      <Route exact path="/"> <NqNavBar/></Route> 
      <Route exact path="/login">
        <LogInFormContainer />
      </Route>
      <Route exact path="/signUp">
        <SignUpFormContainer />
      </Route>
      <Route exact path="/register">
        <RegisterFormContainer />
      </Route>
      <Route exact path="/slots">
        <SlotFormContainter />
      </Route>
      <Route exact path="/stores">
        <StoreListContainer />
      </Route>
    </>
  );
};

export default NqRoute;

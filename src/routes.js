import React from "react";
import { Route } from "react-router-dom";

import RegisterForm from './store/RegisterForm';
import { StoreOwnerSignUpForm } from './store/StoreOwnerSignUpForm';

const NqRoute = () => {
  return (
    <>
      <Route exact path="/register"> <RegisterForm submitHandler={() => alert('form submmit')} /> </Route>
      <Route exact path="/signUp"> <StoreOwnerSignUpForm/></Route>
    </>
  )
}

export default NqRoute;

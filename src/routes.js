import React from "react";
import { Route } from "react-router-dom";

import RegisterForm from './store/RegisterForm';

const NqRoute = () => {
  return (
    <>
      <Route exact path="/register"> <RegisterForm submitHandler={() => alert('form submmit')} /> </Route>
    </>
  )
}

export default NqRoute;

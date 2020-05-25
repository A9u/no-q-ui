import React from "react";
import { Route } from "react-router-dom";
import SignUpFormContainer from './store/StoreOwnerSignUpFormContainer';
import RegisterFormContainer from "./store/RegisterFormContainer";
import LogInFormContainer from "store/LogInFormContainer";
import SlotFormContainter from "store/SlotFormContainer";
import { Form, Card, CardBody, CardHeader, Navbar, Nav, Button, InputGroup, Label } from "reactstrap";
import NqNavBar from "store/NavBar";

const NqRoute = () => {
  return (
    <>
      <Route exact path="/"> <NqNavBar/></Route> 
      <Route exact path="/login"> <LogInFormContainer/></Route>
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

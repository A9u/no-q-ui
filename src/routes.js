import React from "react";
import { Route } from "react-router-dom";
import SignUpFormContainer from "./store/StoreOwnerSignUpFormContainer";
import RegisterFormContainer from "./store/RegisterFormContainer";
import LogInFormContainer from "store/LogInFormContainer";
import SlotFormContainter from "store/SlotFormContainer";
import StoreListContainer from "store/StoreListContainer";
import AdminStoresContainer from "store/AdminStoresContainer";
import SlotBookingContainer from "store/SlotBookingContainer";

const NqRoute = () => {
  return (
    <>
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
      <Route exact path="/admin/stores">
        <AdminStoresContainer />
      </Route>
      <Route exact path="/book_slots">
        <SlotBookingContainer />
      </Route>
    </>
  );
};

export default NqRoute;

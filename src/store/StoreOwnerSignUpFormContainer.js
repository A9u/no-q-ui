import React from "react";
import { connect } from "react-redux";

import { StoreOwnerSignUpForm } from "./StoreOwnerSignUpForm";
import { addStoreOwner } from "../actions";
import { Redirect } from "react-router-dom";


const storeOwnerSignUpForm = ({error, authToken, authenticated, newStoreOwnerHandler }) => {
  if (authenticated) {
    return <Redirect to = {"/register"}/>;
  } else {
    console.log('Error', error)
    return <StoreOwnerSignUpForm submitHandler={ newStoreOwnerHandler } error={error} />
  }
};

const mapStateToProps = (state) => ({
    error: state.error && state.error.authError,
    authToken: state.authToken,
    authenticated : state.authenticated
});

const mapDispatchToProps = (dispatch) => {
    return {
      newStoreOwnerHandler: (body) => {
        debugger
        body["role_id"] = 1;
        dispatch(addStoreOwner(body));
      },
    };
};

const SignUpFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(storeOwnerSignUpForm);

export default SignUpFormContainer;
  
import React from "react";
import { connect } from "react-redux";

import { SignInForm } from "./SignInForm";
import { addStoreOwner, logInUser } from "../actions";
import { Redirect } from "react-router-dom";


const signInForm = ({error, authToken, authenticated, signInHandler }) => {
  if (authenticated) {
    return <Redirect to = {"/register"}/>;
  } else {
    return <SignInForm submitHandler={ signInHandler } error={error} />
  }
};

const mapStateToProps = (state) => ({
    error: state.error && state.error.authError,
    authToken: state.authToken,
    authenticated : state.authenticated
});

const mapDispatchToProps = (dispatch) => {
    return {
      signInHandler: (body) => {
        dispatch(logInUser(body));
      },
    };
};

const SignInFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(signInForm);

export default SignInFormContainer;
  
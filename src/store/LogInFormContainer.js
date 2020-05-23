import React from "react";
import { connect } from "react-redux";

import { LogInForm } from "./LogInForm";
import { logInUser } from "../actions";
import { Redirect } from "react-router-dom";


const logInForm = ({error, authenticated, logInHandler }) => {
  if (authenticated) {
    return <Redirect to = {"/register"}/>;
  } else {
    return <LogInForm submitHandler={ logInHandler } error={error} />
  }
};

const mapStateToProps = (state) => ({
    error: state.error && state.error.authError,
    authToken: state.authToken,
    authenticated : state.authenticated
});

const mapDispatchToProps = (dispatch) => {
    return {
      logInHandler: (body) => {
        dispatch(logInUser(body));
      },
    };
};

const LogInFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(logInForm);

export default LogInFormContainer;
  
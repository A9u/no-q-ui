import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import RegisterForm from "./RegisterForm";
import { registerStore } from "../actions";

const registerForm = ({ store, error, createStoreHandler }) => {
  if (store) {
    return <h1> Store created successfully </h1>;
  } else {
    return <RegisterForm submitHandler={createStoreHandler} error={error} />;
  }
};

const mapStateToProps = (state) => ({
  error: state.error && state.error.StoreError,
  store: state.store,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createStoreHandler: (body) => {
      dispatch(registerStore(body));
    },
  };
};

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(registerForm);

export default RegisterFormContainer;

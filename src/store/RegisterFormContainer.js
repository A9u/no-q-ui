import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import RegisterForm from "./RegisterForm";
import { registerStore } from "../actions";

const registerForm = ({ error, createStoreHandler }) => (
  <RegisterForm submitHandler={createStoreHandler} error={error} />
);

const mapStateToProps = (state) => ({
  error: state.error && state.error.StoreError,
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

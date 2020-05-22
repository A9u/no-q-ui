import React from "react";
import { connect } from "react-redux";

import { StoreOwnerSignUpForm } from "./StoreOwnerSignUpForm";
import { addStoreOwner } from "../actions";


const storeOwnerSignUpForm = ({ error, newStoreOwnerHandler }) => (
    <StoreOwnerSignUpForm submitHandler={ newStoreOwnerHandler } error={error} />
);

const mapStateToProps = (state) => ({
    error: state.error && state.error.UserError,
});

const mapDispatchToProps = (dispatch) => {
    return {
      newStoreOwnerHandler: (body) => {
        dispatch(addStoreOwner(body));
      },
    };
};

const SignUpFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(storeOwnerSignUpForm);

export default SignUpFormContainer;
  
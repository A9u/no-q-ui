import {
  REGISTER_STORE,
  SET_STORE_ERROR,
  SET_SLOTS,
  ADD_STORE_OWNER,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE
} from "../constants/actionConstants";

export const registerStore = (store) => ({
  type: REGISTER_STORE,
  store: store,
});

export const setSlots = (slots) => ({
  type: SET_SLOTS,
  slots: slots,
});

export const setStoreError = (error) => ({
  type: SET_STORE_ERROR,
  error: error,
});

export const addStoreOwner = (owner) => ({
  type: ADD_STORE_OWNER,
  user: owner,
});

export const setAuthSuccess = ( authToken) => ({
  type: AUTHENTICATION_SUCCESS,
  authToken: authToken
});

export const setAuthFailure = (error) => ({
  type: AUTHENTICATION_FAILURE,
  error: error,
});

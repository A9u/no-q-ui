import {
  REGISTER_STORE,
  SET_STORE_ERROR,
  SET_SLOTS,
  ADD_STORE_OWNER,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  SET_STORE,
  FETCH_CATEGORIES,
  SET_CATEGORIES,
  LOG_IN_USER,
} from "../constants/actionConstants";

export const registerStore = (store) => ({
  type: REGISTER_STORE,
  store: store,
});

export const setStore = (store) => ({
  type: SET_STORE,
  store: store,
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
  error: error
})

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories: categories,
});

export const logInUser = (user) => ({
  type: LOG_IN_USER,
  user: user,
});

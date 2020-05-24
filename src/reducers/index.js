import {
  REGISTER_STORE,
  SET_STORE_ERROR,
  SET_SLOTS,
  ADD_STORE_OWNER,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  SET_STORE,
  SET_CATEGORIES,
  LOG_IN_USER,
  SET_INACTIVE_SLOTS,
} from "../constants/actionConstants";

const reducer = (state = {}, action) => {
  console.log("inside reducer");
  console.log(action);

  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        store: action.store,
        loading: false,
      };
    case SET_STORE_ERROR:
      return {
        ...state,
        error: { ...state.error, storeError: action.error },
        loading: false,
      };
    case REGISTER_STORE:
      return {
        ...state,
        loading: true,
      };

    case ADD_STORE_OWNER:
    case LOG_IN_USER:
      return {
        ...state,
        loading: true,
      };

    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        authToken: action.authToken,
      };

    case AUTHENTICATION_FAILURE:
      
      return {
        ...state,
        loading: false,
        authenticated: false,
        isSubmitting: false,
        error: { ...state.error, authError: action.error },
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };
    case SET_INACTIVE_SLOTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;

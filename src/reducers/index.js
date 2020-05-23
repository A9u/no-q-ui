import {
  REGISTER_STORE,
  SET_STORE_ERROR,
  SET_STORE,
  SET_CATEGORIES,
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

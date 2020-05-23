import {
  REGISTER_STORE,
  SET_STORE_ERROR,
  SET_SLOTS,
  ADD_STORE_OWNER,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  SET_STORE,
  SET_CATEGORIES,
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
      return {
        ...state,
        loading: true
      }

    case AUTHENTICATION_SUCCESS:
      console.log('set success', action)
      return {
        ...state,
        loading:false,
        authenticated: true,
        authToken : action.authToken,
      }
    
      case AUTHENTICATION_FAILURE:
        console.log('set failure', action)
        return {
          ...state,
          loading:false,
          authenticated: false,
          isSubmitting: false,
          error: { ...state.error, authError: action.error }
        }  
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;

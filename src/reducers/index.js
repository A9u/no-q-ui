import {
  REGISTER_STORE,
  SET_STORE_ERROR,
  SET_SLOTS,
  ADD_STORE_OWNER
} from "../constants/actionConstants";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SLOTS:
      return {
        ...state,
        slots: action.payload.slots,
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
      console.log('adding store owner')
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
};
export default reducer;

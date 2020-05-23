import {
  REGISTER_STORE,
  SET_STORE_ERROR,
  SET_STORE,
  FETCH_CATEGORIES,
  SET_CATEGORIES,
  SET_INACTIVE_SLOTS,
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

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const setInactiveSlots = (slots) => ({
  type: SET_INACTIVE_SLOTS,
  slots,
});

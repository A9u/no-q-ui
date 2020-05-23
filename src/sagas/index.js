import { put, takeLatest, all, call } from "redux-saga/effects";
import { setStore, setStoreError, setCategories } from "actions";
import {
  REGISTER_STORE,
  FETCH_CATEGORIES,
  SET_INACTIVE_SLOTS,
} from "constants/actionConstants";
import { PostApiCall, GetApiCall } from "apis";
import {
  NqSuccessNotification,
  NqErrorNotification,
} from "core-components/NqNotification";

function* registerStore(store) {
  try {
    console.log(store);
    const json = yield PostApiCall("/stores", store).then((response) =>
      response.json()
    );
    if (json.data) {
      console.log("response received");
      console.log(json.data);
      yield put(setStore(json.data));
      yield call(NqSuccessNotification, json.message);
    } else {
      yield put(setStoreError(json.error));
      yield call(NqErrorNotification, json.message);
    }
  } catch (error) {
    yield put(setStoreError(error));
  }
}

function* fetchCategories() {
  try {
    const json = yield GetApiCall("/categories").then((response) =>
      response.json()
    );
    if (json.data) {
      console.log("categories fetched");
      console.log(json.data);
      yield put(setCategories(json.data));
    }
  } catch (error) {
    console.log("fetching categories");
    console.log(error);
  }
}

function* setInactiveSlots(slots) {
  try {
    const json = yield PostApiCall("/slots/mark", slots).then((response) =>
      response.json()
    );
    if (json.data) {
      console.log("successfully set inactive");
      console.log(json.data);
      yield call(NqSuccessNotification, json.message);
    }
  } catch (error) {
    console.log("error while setting ");
  }
}

function* watcher() {
  yield takeLatest(REGISTER_STORE, registerStore);
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(SET_INACTIVE_SLOTS, setInactiveSlots);
}

export default function* rootSaga() {
  yield all([watcher()]);
}

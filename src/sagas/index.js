import { put, takeLatest, all, call, select } from "redux-saga/effects";
import { setAuthSuccess, setAuthFailure } from "actions";
import { USERS_URL, SESSIONS_URL } from "constants/apiConstants";
import { setStore, setStoreError, setCategories } from "actions";
import {
  REGISTER_STORE,
  FETCH_CATEGORIES,
  SET_INACTIVE_SLOTS,
  ADD_STORE_OWNER,
  LOG_IN_USER,
} from "constants/actionConstants";
import {
  NqSuccessNotification,
  NqErrorNotification,
} from "core-components/NqNotification";
import { PostApiCall, GetApiCall, getJSON } from "apis";
import { getToken } from "../selectors";

function* authorizedPostApiCall(url, body) {
  const token = yield select(getToken);

  const json = yield call(PostApiCall, url, body, { Authorization: token });

  const response = yield call(getJSON, json);

  return response;
}

function* registerStore(store) {
  try {
    const json = yield call(authorizedPostApiCall, "/stores", store);
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
    const response = yield call(GetApiCall, "/categories");
    const json = yield call(getJSON, response);

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
    const json = yield call(authorizedPostApiCall, "/slots/mark", slots);
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
  yield takeLatest(ADD_STORE_OWNER, addShopOwner);
  yield takeLatest(LOG_IN_USER, logInUser);
}

export default function* rootSaga() {
  yield all([watcher()]);
}

function* addShopOwner(body) {
  try {
    const json = yield PostApiCall(USERS_URL, body).then((response) => {
      return response.json();
    });

    if (json.data.auth_token) {
      yield put(setAuthSuccess(json.data.auth_token));
    } else {
      yield put(setAuthFailure(json.message));
      yield call(NqErrorNotification, json.message.join("."));
    }
  } catch (error) {
    yield put(setAuthFailure(error));
  }
}

function* logInUser(data) {
  try {
    var body = { user: data.user };
    const json = yield PostApiCall(SESSIONS_URL, body).then((response) => {
      return response.json();
    });

    if (json.data.auth_token) {
      yield put(setAuthSuccess(json.data.auth_token));
    } else {
      yield put(setAuthFailure(json.message));
      yield call(NqErrorNotification, json.message);
    }
  } catch (error) {
    yield put(setAuthFailure(error));
  }
}

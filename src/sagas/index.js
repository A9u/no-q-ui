import { put, takeLatest, all, call, select } from "redux-saga/effects";
import { setAuthSuccess, setAuthFailure } from "actions";
import { USERS_URL } from "constants/apiConstants";
import { setStore, setStoreError, setCategories } from "actions";
import {
  REGISTER_STORE,
  FETCH_CATEGORIES,
  ADD_STORE_OWNER,
} from "constants/actionConstants";
import { PostApiCall, GetApiCall, getJSON } from "apis";
import { getToken } from "../selectors";
import { NqErrorNotification } from "core-components/NqNotification";

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
    } else {
      yield put(setStoreError(json.error));
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

function* watcher() {
  yield takeLatest(REGISTER_STORE, registerStore);
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(ADD_STORE_OWNER, addShopOwner);
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

import { put, takeLatest, all } from "redux-saga/effects";
import { setAuthSuccess, setAuthFailure } from "actions";
import { USERS_URL, SESSIONS_URL } from "constants/apiConstants";
import { setStore, setStoreError, setCategories } from "actions";
import { REGISTER_STORE, FETCH_CATEGORIES, ADD_STORE_OWNER, LOG_IN_USER } from "constants/actionConstants";
import { PostApiCall, GetApiCall } from "apis";

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
  yield takeLatest(LOG_IN_USER, logInUser);
}

export default function* rootSaga() {

  yield all([watcher()]);
}

function* addShopOwner(data) {
  try {
   
    var body = {user: data.user}
    const json = yield PostApiCall(USERS_URL, body).then((response) => {
      return response.json()
    });   
    
    if (json.data.auth_token) {
      yield put(setAuthSuccess(json.data.auth_token))
    } else {
      yield put(setAuthFailure(json.message))
    }
    
  } catch (error) {
    yield put(setAuthFailure(error));
  }
}

function* logInUser(data) {
  try {
    debugger
    var body = {user: data.user}
    const json = yield PostApiCall(SESSIONS_URL, body).then((response) => {
      return response.json()
    });   
    
    if (json.data.auth_token) {
      yield put(setAuthSuccess(json.data.auth_token))
    } else {
      yield put(setAuthFailure(json.message))
    }
    
  } catch (error) {
    yield put(setAuthFailure(error));
  }
}

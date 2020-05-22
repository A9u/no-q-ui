import { put, takeLatest, all } from "redux-saga/effects";
import { setStore, setStoreError, setCategories } from "actions";
import { REGISTER_STORE, FETCH_CATEGORIES } from "constants/actionConstants";
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
}

export default function* rootSaga() {
  yield all([watcher()]);
}

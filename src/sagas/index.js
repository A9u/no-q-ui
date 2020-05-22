import { put, takeLatest, all } from "redux-saga/effects";
import { setSlots, setStoreError } from "actions";
import { REGISTER_STORE } from "../constants/actionConstants";
import { PostApiCall } from "apis";

function* registerStore(store) {
  try {
    console.log(store);
    // const json = yield PostApiCall("/store", store).then((response) =>
    //   response.json()
    // );
    // if (json.data) {
    //   yield put(setSlots(json.data));
    // } else {
    //   yield put(setStoreError(json.error));
    // }
  } catch (error) {
    yield put(setStoreError(error));
  }
}

function* watcher() {
  yield takeLatest(REGISTER_STORE, registerStore);
}

export default function* rootSaga() {
  yield all([watcher()]);
}

import { put, takeLatest, all } from "redux-saga/effects";
import { setSlots, setStoreError } from "actions";
import { REGISTER_STORE, ADD_STORE_OWNER } from "../constants/actionConstants";
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

function* watcher(action, saga) {
  yield takeLatest(action, saga);
}

export default function* rootSaga() {
  yield all([watcher(REGISTER_STORE, registerStore),
     watcher(ADD_STORE_OWNER, addShopOwner)]);
}

function* addShopOwner(user) {
  try {
    debugger
    console.log(user);

    // const json = yield PostApiCall("/store", store).then((response) =>
    //   response.json()
    // );
    // if (json.data) {
    //   yield put(setSlots(json.data));
    // } else {
    //   yield put(setStoreError(json.error));
    // }
  } catch (error) {
    console.log(error)
    yield put(setStoreError(error));
  }
}

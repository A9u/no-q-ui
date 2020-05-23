import { put, takeLatest, all } from "redux-saga/effects";
import { setSlots, setStoreError, setAuthSuccess, setAuthFailure } from "actions";
import { REGISTER_STORE, ADD_STORE_OWNER, AUTHENTICATION_SUCCESS } from "../constants/actionConstants";
import { PostApiCall } from "apis";
import { USERS_URL } from "constants/apiConstants";

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

function* addShopOwner(data) {
  try {
    debugger
    
    var body = {user: data.user}
    // const json = yield PostApiCall(USERS_URL, body).then((response) => {
    //     let responseBody = response.json()
    //     if (responseBody.data) {
    //        return setAuthSuccess(responseBody.data.auth_token)
    //     } else {
    //        return setAuthFailure(responseBody.message)
    //     }
    // }).catch((error) => {
    //   console.log('error ',error)
    //     return setAuthFailure(error)
    // });
    const json = yield PostApiCall(USERS_URL, body).then((response) => {
      return response.json()
    });   
    
    if (json.data.auth_token) {
      yield put(setAuthSuccess(json.data.auth_token))
    } else {
      yield put(setAuthFailure(json.message))
    }
    
  } catch (error) {
    debugger
    yield put(setAuthFailure(error));
  }
}

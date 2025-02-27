import { all, fork } from "redux-saga/effects";
import { watchPostSagas } from "../features/posts/postSagas";
// import { watchPostSagas } from "../features/posts/postSagas";

export function* rootSaga() {
  yield all([fork(watchPostSagas)]);
}

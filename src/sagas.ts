import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPostsRequestasd,
  fetchPostsSuccess,
  fetchPostsFailure,
  Post,
} from "./slice";

function* fetchPostsSaga(): Generator<any, void, { data: Post[] }> {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(fetchPostsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* rootSaga() {
  yield takeLatest(fetchPostsRequestasd.type, fetchPostsSaga);
}

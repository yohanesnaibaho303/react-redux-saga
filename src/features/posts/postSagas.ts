import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  deletePostRequest,
  deletePostSuccess,
  updatePostRequest,
  updatePostSuccess,
  Post,
} from "./postSlice";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// GET Posts
function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(fetchPostsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

// DELETE Post
function* deletePostSaga(action: { type: string; payload: number }) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deletePostSuccess(action.payload));
  } catch (error: any) {
    console.error("Delete failed:", error.message);
  }
}

// UPDATE Post
function* updatePostSaga(action: { type: string; payload: Post }) {
  try {
    const response = yield call(
      axios.put,
      `${API_URL}/${action.payload.id}`,
      action.payload
    );
    yield put(updatePostSuccess(response.data));
  } catch (error: any) {
    console.error("Update failed:", error.message);
  }
}

export function* watchPostSagas() {
  yield takeLatest(fetchPostsRequest.type, fetchPostsSaga);
  yield takeLatest(deletePostRequest.type, deletePostSaga);
  yield takeLatest(updatePostRequest.type, updatePostSaga);
}

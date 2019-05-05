const { put, takeEvery, all, call } = require("redux-saga/effects");

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log("Hello Saga!");
}

export function* byeSaga() {
  yield console.log("Goodbye Saga!");
}

// worker Saga: will perform async increment task
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), byeSaga(), watchIncrementAsync()]);
}

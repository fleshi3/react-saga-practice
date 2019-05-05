// import saga functions
const test = require("tape");
const { put, call } = require("redux-saga/effects");
const { incrementAsync, delay } = require("./sagas");

test("incrementAsync Saga test", assert => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsync Saga must call delay(1000)"
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: "INCREMENT" }),
    "incrementAsync Saga must dispatch an INCREMENT action"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "incrementAsync Saga must be completed"
  );

  assert.end();
  // gen.next(); // => { done: false, value: <result of calling delay(1000) }
  // gen.next(); // => { done: false, value: <result of calling put({type: "INCREMENT"}) }
  // gen.next(); // => { done: true, value: undefined }
});

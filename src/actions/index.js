const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_ASYNC = "INCREMENT_ASYNC";

export function incrementValue() {
  return { type: INCREMENT };
}

export function decrementValue() {
  return { type: DECREMENT };
}

export function incrementAsync() {
  return { type: INCREMENT_ASYNC };
}

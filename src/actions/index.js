const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function incrementValue() {
  return { type: INCREMENT };
}

export function decrementValue() {
  return { type: DECREMENT };
}

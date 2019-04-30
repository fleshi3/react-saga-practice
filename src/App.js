import React from "react";
import { connect } from "react-redux";
import { incrementValue, decrementValue } from "./actions/index";
import "./App.css";

const mapStateToProps = state => {
  const { test } = state;
  return {
    value: test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementValue()),
    decrement: () => dispatch(decrementValue())
  };
};

function App(props) {
  const { value, increment, decrement } = props;
  return (
    <div className="App">
      <div>{value}</div>
      <div>
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
      <div>
        <button type="button">async +</button>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

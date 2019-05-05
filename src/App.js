import React from "react";
import { connect } from "react-redux";
import {
  incrementValue,
  decrementValue,
  incrementAsync
} from "./actions/index";
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
    decrement: () => dispatch(decrementValue()),
    incrementAsync: () => dispatch(incrementAsync())
  };
};

function App(props) {
  const { value, increment, decrement, incrementAsync } = props;
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
        <button type="button" onClick={incrementAsync}>
          async +
        </button>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

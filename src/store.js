import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

// import saga middleware
import { helloSaga, byeSaga } from "./middleware/sagas";

// define saga middleware
const sagaMiddleware = createSagaMiddleware();

// define redux devtools
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer /* preLoadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run middleware
sagaMiddleware.run(helloSaga);
sagaMiddleware.run(byeSaga);

export default store;

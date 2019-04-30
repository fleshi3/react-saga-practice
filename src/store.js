import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

// import saga middleware
import { helloSaga, byeSaga } from "./middleware/sagas";

// define saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// run middleware
sagaMiddleware.run(helloSaga);
sagaMiddleware.run(byeSaga);

export default store;

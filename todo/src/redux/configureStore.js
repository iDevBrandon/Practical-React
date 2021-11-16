// import { combineReducers, createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
// import counterReducer from "./ducks/counter";
// import userReducer from "./ducks/user";
// import { watcherSaga } from "./sagas/rootSaga";

// const reducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer,
// });

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

// const store = createStore(reducer, {}, applyMiddleware(...middleware));

// // run a watcher-saga
// // listen for redux actions constantly
// sagaMiddleware.run(watcherSaga);

// export default store;

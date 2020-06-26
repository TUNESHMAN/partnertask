// Thunk is a middleware
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import weatherReducer from "../state/reducers/weatherReducer";

// This houses the other reducers
const mainReducer = combineReducers({ weather: weatherReducer });

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (n) => n;

const store = createStore(
  mainReducer,
  {},
  compose(applyMiddleware(thunk), devTools)
);

export default store;

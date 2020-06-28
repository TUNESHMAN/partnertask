import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Bring in the redux store
import store from "./state/store";
// Bring in the provider from react-redux
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { BrowserRouter as Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Route>
      <App />
    </Route>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

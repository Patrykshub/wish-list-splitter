import React from "react";

import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

import ReactDOM from "react-dom";
import "./index.css";

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById("root"));

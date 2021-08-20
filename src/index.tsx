import React from "react";

import App from "./App";

import ReactDOM from "react-dom";
import "./index.css";
import { AuthContextProvider } from "./store/store";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);

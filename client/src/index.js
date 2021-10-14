import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import StateProvider from "./context/StateContext";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);

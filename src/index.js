import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalContextProvider from "./context/context";

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,

  document.getElementById("root")
);

// <React.StrictMode>
{
  /* </React.StrictMode>, */
}

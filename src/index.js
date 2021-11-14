import "./index.css";

import App from "./pages/App/index";
import React from "react";
import ReactDOM from "react-dom";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

const getLibrary = (provider: string) => new Web3(provider);

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

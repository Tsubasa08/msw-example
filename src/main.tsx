import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers";

const worker = setupWorker(...handlers);
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

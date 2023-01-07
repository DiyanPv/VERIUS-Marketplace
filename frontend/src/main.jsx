import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TransactionContext } from "../context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </TransactionContext>
);

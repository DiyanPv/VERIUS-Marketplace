import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";
import "./index.css";
import { TransactionProvider } from "../context/context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </React.StrictMode>
  </TransactionProvider>
);

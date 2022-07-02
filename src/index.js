import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Version 17 (also remove "/client" from import): ReactDOM.createRoot(<App />, document.getElementById("root"));
const el = document.getElementById("root");
if (el === null) throw new Error("Root container missing in index.html");

const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

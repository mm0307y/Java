import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import CardApp1210 from "./CardApp1210";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <BrowserRouter>
      <CardApp1210 />
    </BrowserRouter>
  </>
);

import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";
import "./index.scss";

// import reportWebVitals from "./reportWebVitals";
//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// reportWebVitals();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

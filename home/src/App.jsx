import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import MainLayout from "./MainLayout";

ReactDOM.render(
  <Router>
    <MainLayout />
  </Router>,
  document.getElementById("app")
);

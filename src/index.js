import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./modules/bootstrap-5.0.2-dist/css/bootstrap.min.css";
import "./components/css/Univarcal.css";
import { HashRouter as Router } from "react-router-dom";
import AuthContextProvider from "./AuthContext/AuthContextProvider";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Router>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ConfigureStore from "./store/ConfigureStore";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ConfigureStore>
      <App />
    </ConfigureStore>
  </React.StrictMode>
);

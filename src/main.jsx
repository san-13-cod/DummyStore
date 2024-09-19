import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./components/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <StrictMode>
      <App />
    </StrictMode>
  </Context>
);

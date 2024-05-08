import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/usersContext.jsx";
import { ProductsProvider } from "./context/protuctsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </UserProvider>
);

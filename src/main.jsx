import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../store.js";
import { TodoProvider } from "./context/todoContext.jsx";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </TodoProvider>
);
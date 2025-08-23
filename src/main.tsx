import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { store } from "./redux/store";
import { router } from "./routes/index";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

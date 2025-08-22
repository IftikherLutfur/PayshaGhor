import App from "@/App";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children:[

    ]
  },
  {
    Component: Register,
    path: "register"
  }
]);

import App from "@/App";
import {RootLayout} from "@/components/Layout/RootLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import CashinForm from "@/pages/UserDashboardPage.tsx/CashinForm";
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
  },
  {
    Component: Login,
    path: "login"
  },
  {
      Component: RootLayout,
      path:"dashboard",
      children:[
        {
          Component: CashinForm,
          path:"/dashboard/cashin"
        }
      ]
     }
]);

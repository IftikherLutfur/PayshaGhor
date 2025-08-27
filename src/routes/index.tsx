import App from "@/App";
import {RootLayout} from "@/components/Layout/RootLayout";
import AgentActionPage from "@/pages/AgentDashboardPage/AgentActionPage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import TransactionHistory from "@/pages/UserDashboardPage.tsx/TransactionPage";
import UserOperation from "@/pages/UserDashboardPage.tsx/UserOperation";

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
        Component: UserOperation,
        path:"userOperation"
       },
       {
        Component: TransactionHistory,
        path:"transactions"
       },
       {
        Component: AgentActionPage,
        path:"agentAction"
       },
      ]
     }
]);

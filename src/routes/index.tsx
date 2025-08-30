import App from "@/App";
import {RootLayout} from "@/components/Layout/RootLayout";
import About from "@/pages/AboutPage";
import AdminOverview from "@/pages/Admin/AdminOverview";
import AllAgents from "@/pages/Admin/AllAgent";
import AllTransactions from "@/pages/Admin/AllTransaction";
import AllUsers from "@/pages/Admin/AllUser";
import AllWallets from "@/pages/Admin/AllWallet";
import AgentActionPage from "@/pages/AgentDashboardPage/AgentActionPage";
import { Contact } from "@/pages/Contact";
import HomeHero from "@/pages/HomeHero";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import TransactionHistory from "@/pages/UserDashboardPage.tsx/TransactionPage";
import UserOperation from "@/pages/UserDashboardPage.tsx/UserOperation";
import UserProfileUpdate from "@/pages/userPorfileUpdate";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children:[
      {
        Component: HomeHero,
        path:"/"
      },
      {
        Component:About,
        path:"/about"
      },
      {
        Component:Contact,
        path:"/contact"
      }
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
        Component: AdminOverview,
        path:"adminOverview"
       },
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
       {
        Component: UserProfileUpdate,
        path:"edit-profile"
       },
       {
         Component: AllAgents,
         path:"all-agents"
       },
      {
        Component: AllUsers,
        path:"all-users"
       },
      {
        Component: AllWallets,
        path:"all-wallets"
       },
        {
        Component: AllTransactions,
        path:"all-transactions"
       },
      ]
     }
]);

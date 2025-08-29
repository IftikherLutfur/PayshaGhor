import { useUserInfoQuery } from "@/redux/features/authentication/auth.api";
import { DashboardForAdmin } from "../modules/AdminDashboard";
import { Dashboard } from "../modules/DashboardLayout";
import { DashboardForAgent } from "../modules/DashboardLayout copy";
import { SidebarProvider } from "../ui/sidebar";
import { Outlet } from "react-router";

export function RootLayout() {
  const { data } = useUserInfoQuery(undefined);

  return (
    <SidebarProvider>
      <div className="flex content-wrapper min-h-screen">
        {/* Sidebar */}
        {data?.data.role === "USER" && <Dashboard />}
        {data?.data.role === "AGENT" && <DashboardForAgent />}
        {data?.data.role === "ADMIN" && <DashboardForAdmin />}

        {/* Main content */}
        <div className="flex-1 p-2">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}

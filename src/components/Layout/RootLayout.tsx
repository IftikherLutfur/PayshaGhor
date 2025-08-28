import { SidebarProvider } from "@/components/ui/sidebar"
import { Dashboard } from "../modules/DashboardLayout"
import { Outlet } from "react-router"
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api"
import { DashboardForAgent } from "../modules/DashboardLayout copy"
import { DashboardForAdmin } from "../modules/AdminDashboard"

type RootLayoutProps = {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  const {data} = useUserInfoQuery(undefined)
  console.log(data?.data.role)
  return (
    <SidebarProvider>
      <div className="flex content-wrapper min-h-screen">
        {/* Sidebar */}
        {data?.data.role === "USER" && <Dashboard />}
        {data?.data.role === "AGENT" && <DashboardForAgent/>}
        {data?.data.role=== "ADMIN" && <DashboardForAdmin/>}

        {/* Main content */}
        <div className="flex-1 p-2">
          {children}
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Dashboard } from "../modules/DashboardLayout"
import { Outlet } from "react-router"

type RootLayoutProps = {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Dashboard />

        {/* Main content */}
        <div className="flex-1 p-2">
          <SidebarTrigger />
          {children}
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}

import { Home, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Link } from "react-router"


const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Overview", url: "", icon: Settings },
  { title: "All Agents", url: "all-agents", icon: Settings },
  { title: "All Users", url: "all-users", icon: Settings },
  { title: "All Transactions", url: "all-transactions", icon: Settings },
  { title: "Edit Profile", url: "edit-profile", icon: Settings },
]

export function DashboardForAdmin() {

  return (
    <Sidebar className="border-r bg-white shadow-md">
      {/* Header with balance */}
    

      {/* Sidebar Menu */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 uppercase text-xs">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <item.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800 font-medium">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

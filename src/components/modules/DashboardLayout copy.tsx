import { Home, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { useGetWalletQuery } from "@/redux/features/wallet/wallet.api"
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api"

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Cashin", url: "agentAction", icon: Settings },
  { title: "Transaction History", url: "transactions", icon: Settings },
]

export function DashboardForAgent() {
  const { data: userInfo } = useUserInfoQuery(undefined)
  const { data: wallet } = useGetWalletQuery(userInfo?.data._id)

  return (
    <Sidebar className="border-r bg-white shadow-md">
      {/* Header with balance */}
      <SidebarHeader>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-4 shadow-lg">
          <h1 className="text-lg font-semibold">My Balance</h1>
          <p className="text-2xl font-bold mt-1">
            {wallet?.data?.balance ?? 0} ৳
          </p>
        </div>
      </SidebarHeader>

      {/* Sidebar Menu */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 uppercase text-xs tracking-wide">
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


import { Home, Inbox, Calendar, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { useGetWalletQuery } from "@/redux/features/wallet/wallet.api"
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api"

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Popup", url: "/popup", icon: Settings },
  { title: "Send Money", url: "cashin", icon: Inbox },
  { title: "Cashout", url: "/cashout", icon: Calendar },
  { title: "SendMoney", url: "/sendmoney", icon: Inbox },
  { title: "Transaction History", url: "/transaction-history", icon: Settings },
]

export function Dashboard() {
  const { data: userInfo} = useUserInfoQuery(undefined)
  const {data:wallet} = useGetWalletQuery(userInfo?.data._id)

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="bg-gray-300 font-bold">My Balance: {wallet?.data?.balance}</h1>
        </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  )
}

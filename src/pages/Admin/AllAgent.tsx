/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import {
  useApproveAgentMutation,
  useGetAllUserQuery
} from "@/redux/features/authentication/auth.api"
import { toast } from "sonner"

export default function AllAgents() {
  const { data, isLoading } = useGetAllUserQuery(undefined)
  const [approveAgent] = useApproveAgentMutation()
  const [agents, setAgents] = useState<any[]>([])

  useEffect(() => {
    if (data?.data) {
      const formatted = data.data
        .filter((user: any) => user.role === "AGENT")
        .map((user: any) => ({
          ...user,
          
userStatus: user.userStatus || "PENDING",
        }))
      setAgents(formatted)
    }
  }, [data])

const handleStatusChange = async (
  id: string,
  status: "APPROVED" | "SUSPEND" | "PENDING"
) => {
  setAgents((prev) =>
    prev.map((user) =>
      user._id === id ? { ...user, userStatus: status } : user
    )
  )

  try {
    await approveAgent({ agentId: id, userStatus: status }).unwrap() // ✅
    toast.success(`Agent is ${status.toLowerCase()}`)
    console.log("Agent updated successfully")
  } catch (err) {
    console.error("Failed to update agent:", err)
  }
}

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">All Agents</h1>

      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Role</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Created At</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition">
                <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-600 font-medium">
                  {user.role}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-gray-500">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">
                  {user.userStatus}
                </td>
                <td className="border border-gray-200 px-4 py-2 flex gap-2 items-center">
                  {/* Dropdown Option */}
                  <select
                    value={user.userStatus}
                    onChange={(e) =>
                      handleStatusChange(
                        user._id,
                        e.target.value as "APPROVED" | "SUSPEND" | "PENDING"
                      )
                    }
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="APPROVED">Approved</option>
                    <option value="SUSPEND">Suspend</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

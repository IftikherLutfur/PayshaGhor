/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllTransactionQuery, useGetAllUserQuery } from "@/redux/features/authentication/auth.api"

export default function AdminOverview() {
  const { data: allUser, isLoading: isUserLoading } = useGetAllUserQuery(undefined)
  const { data: allTransaction, isLoading: isTransactionLoading } = useGetAllTransactionQuery(undefined)

  if (isUserLoading || isTransactionLoading) {
    return <p className="text-center text-gray-500">Loading...</p>
  }

  // User & Agent counts
  const userCount = allUser?.data?.filter((user: any) => user.role === "USER")?.length || 0
  const agentCount = allUser?.data?.filter((user: any) => user.role === "AGENT")?.length || 0

  // Transaction count & total volume
  const transactionCount = allTransaction?.data?.length || 0
  const totalVolume = allTransaction?.data
    ?.map((transaction: any) => transaction.amount || 0)
    .reduce((a: number, b: number) => a + b, 0) || 0

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Overview</h1>
      <p className="text-center text-gray-600 mb-6">
        This is the overview page for admin users.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border-2 rounded-md p-4 bg-white shadow">
          <p className="text-gray-500">Total Users</p>
          <p className="text-xl font-bold">{userCount}</p>
        </div>

        <div className="border-2 rounded-md p-4 bg-white shadow">
          <p className="text-gray-500">Total Agents</p>
          <p className="text-xl font-bold">{agentCount}</p>
        </div>

        <div className="border-2 rounded-md p-4 bg-white shadow">
          <p className="text-gray-500">Total Transactions</p>
          <p className="text-xl font-bold">{transactionCount}</p>
        </div>

        <div className="border-2 rounded-md p-4 bg-white shadow">
          <p className="text-gray-500">Total Volume</p>
          <p className="text-xl font-bold">{totalVolume}</p>
        </div>
      </div>
    </div>
  )
}

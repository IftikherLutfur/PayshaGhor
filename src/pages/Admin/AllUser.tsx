/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useGetAllUserQuery
} from "@/redux/features/authentication/auth.api"

export default function AllUsers() {
  const { data, isLoading } = useGetAllUserQuery(undefined)

const onlyUser = data?.data.filter((user:any)=>user.role === "USER")

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
            </tr>
          </thead>
          <tbody>
            {onlyUser?.map((user: any) => (
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
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

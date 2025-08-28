/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api"
import { useGetOwnTransactionQuery } from "@/redux/features/wallet/wallet.api"
import { useState } from "react"

export default function TransactionHistory() {
  const { data: userInfo } = useUserInfoQuery(undefined)
  const { data: getOwnTransactions, isLoading } = useGetOwnTransactionQuery(
    userInfo?.data._id
  )

  const transactions = getOwnTransactions?.data || []

  // pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // calculate pages
  const totalPages = Math.ceil(transactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Transaction History
        </h1>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">
              All Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-center text-gray-500 py-6">Loading...</p>
            ) : (
              <>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">Date</th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">Type</th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">Amount</th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentTransactions.map((txn: any) => (
                        <tr
                          key={txn._id}
                          className="hover:bg-gray-50 transition"
                        >
                          <td className="border border-gray-200 px-4 py-2 text-gray-700">
                            {new Date(txn.createdAt).toLocaleDateString()}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 font-medium">
                            {(() => {
                              // normalize type to uppercase to match keys
                              const typeKey = txn.type?.toUpperCase() || "";

                              const typeMap: Record<string, { label: string; color: string }> = {
                                AGENT_CASHOUT: { label: "Cashout", color: "text-red-600" },
                                AGENT_CASHIN: { label: "Cashin", color: "text-green-600" },
                                WITHDRAW: { label: "Withdraw", color: "text-red-600" },
                                SENDMONEY: { label: "Send Money", color: "text-blue-600" },
                                POPUP: { label: "Popup", color: "text-green-600" },
                              };

                              const txnType = typeMap[typeKey] || { label: "Undefined", color: "text-gray-500" };

                              return <span className={txnType.color}>{txnType.label}</span>;
                            })()}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-gray-800">
                            {txn.amount} ৳
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${txn.status === "success"
                                ? "bg-green-100 text-green-700"
                                : txn.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                                }`}
                            >
                              {txn.status || "N/A"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-4">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => goToPage(i + 1)}
                      className={`px-3 py-1 border rounded ${currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

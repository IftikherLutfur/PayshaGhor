/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { useGetAllTransactionQuery } from "@/redux/features/authentication/auth.api"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function AllTransactions() {
  const { data: AllTransaction, isLoading } = useGetAllTransactionQuery(undefined)
  const [page, setPage] = useState(1)
  const pageSize = 5

  if (isLoading) {
    return <p className="text-center py-5">Loading...</p>
  }

  const transactions = AllTransaction?.data || []
  const totalPages = Math.ceil(transactions.length / pageSize)

  const paginatedData = transactions.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Transactions</h1>
      <Table>
        <TableCaption>A list of all recent transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Transaction ID</TableHead>
            <TableHead>From</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Initiated By</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((tx: any) => (
            <TableRow key={tx._id}>
              <TableCell className="font-medium">{tx._id}</TableCell>
              <TableCell>{tx.from}</TableCell>
              <TableCell>৳{tx.amount}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    tx.type === "DEPOSIT" || tx.type === "POPUP"
                      ? "bg-green-100 text-green-700"
                      : tx.type === "SENDMONEY"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {tx.type}
                </span>
              </TableCell>
              <TableCell>{tx.initiate}</TableCell>
              <TableCell>{new Date(tx.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

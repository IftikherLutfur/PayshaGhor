/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  useChangeWalletStatusMutation,
  useGetAllWalletQuery,
} from "@/redux/features/wallet/wallet.api";
import { useState } from "react";

export default function AllWallets() {
  const { data: getAllWallet, refetch } = useGetAllWalletQuery(undefined);
  const [changeWalletStatus] = useChangeWalletStatusMutation();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleStatusChange = async (walletId: string, currentStatus: string) => {
    const newStatus = currentStatus === "ACTIVE" ? "BLOCK" : "ACTIVE";
    try {
      await changeWalletStatus({
        walletId,
        walletStatus: newStatus,
      }).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to change wallet status", error);
    }
  };

  // Pagination logic
  const wallets = getAllWallet?.data || [];
  const totalPages = Math.ceil(wallets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWallets = wallets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">All Wallets</h1>

      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">User ID</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Created At</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Wallet Type</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentWallets.map((wallet: any) => (
              <tr key={wallet._id} className="hover:bg-gray-50 transition">
                <td className="border border-gray-200 px-4 py-2 text-blue-600 font-medium">
                  {wallet.userId}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-gray-500">
                  {new Date(wallet.createdAt).toLocaleString()}
                </td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">
                  {wallet.walletType}
                </td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">
                  {wallet.walletStatus}
                </td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">
                  <Button
                    onClick={() => handleStatusChange(wallet._id, wallet.walletStatus)}
                    className={`${
                      wallet.walletStatus === "ACTIVE"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {wallet.walletStatus === "ACTIVE" ? "BLOCK" : "UNBLOCK"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="secondary"
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          variant="secondary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

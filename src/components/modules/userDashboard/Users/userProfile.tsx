/* eslint-disable react-hooks/rules-of-hooks */
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api";
import {
  useGetWalletQuery,
} from "@/redux/features/wallet/wallet.api";
import { useState } from "react";
import SendMoneyForm from "../SendMoneyFrom";
import WithdrawForm from "../withdrawForm";
import PopupForm from "../PopupForm";
import TransactionHistory from "@/pages/UserDashboardPage.tsx/TransactionPage";

const UserProfile = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const userId = userInfo?.data?._id;
  const [sendPopup, setSendPopup] = useState(false);
  const [cashPopup, setCashPopup] = useState(false);
  const [withdrawPopup, setWithdrawPopup] = useState(false);
  const [transactionPageOpen, setTransactionPageOpen] = useState(false);

  const { data: wallet } = useGetWalletQuery(userId);

  const handleForSendMoney = () => setSendPopup(true);
  const handleForCashIn = () => setCashPopup(true);
  const handleForWithdraw = () => setWithdrawPopup(true);
  const handleForTransaction = () => setTransactionPageOpen(true);

  const handleForCross = () => {
    setSendPopup(false);
    setCashPopup(false);
    setWithdrawPopup(false);
    setTransactionPageOpen(false);
  };

  return (
    <div className="py-20 min-h-screen bg-gray-200 relative">
      <div>
        {/* Profile Section */}
        <div className="flex justify-center">
          <img
            src={userInfo?.data?.profilePhoto}
            alt="User profile photo"
            className="w-36 h-36 rounded-full border-4 border-amber-400 shadow-md"
          />
        </div>

        <h1 className="text-center text-2xl font-bold mt-4">
          {userInfo?.data?.name}
        </h1>
        <h2 className="text-center text-lg font-medium text-gray-600">
          {userInfo?.data?.phone}
        </h2>
        <h3 className="text-center text-xl font-semibold mt-2">
          Balance: {wallet?.data?.balance ?? "0"} BDT
        </h3>

        {/* Action Buttons */}
        <div className="mx-auto w-11/12 sm:w-2/3 lg:w-1/3 mt-6 space-y-3">
          <button
            onClick={handleForSendMoney}
            className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 px-4 font-semibold flex justify-between items-center text-lg rounded-md shadow"
          >
            SEND MONEY {"->"}
          </button>

          <button
            onClick={handleForCashIn}
            className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 px-4 font-semibold flex justify-between items-center text-lg rounded-md shadow"
          >
            CASH-IN {"->"}
          </button>

          <button
            onClick={handleForWithdraw}
            className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 px-4 font-semibold flex justify-between items-center text-lg rounded-md shadow"
          >
            WITHDRAW {"->"}
          </button>

          <button
            onClick={handleForTransaction}
            className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 px-4 font-semibold flex justify-between items-center text-lg rounded-md shadow"
          >
            TRANSACTION HISTORY {"->"}
          </button>
        </div>
      </div>

      {/* POPUPS (Centered + Overlay) */}
      {(sendPopup || cashPopup || withdrawPopup || transactionPageOpen) && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="backdrop-blur-2xl rounded-2xl p-6 shadow-xl w-[90%] sm:w-[500px] relative">
            <button
              onClick={handleForCross}
              className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-red-600"
            >
              ×
            </button>

            {sendPopup && <SendMoneyForm />}
            {cashPopup && <PopupForm />}
            {withdrawPopup && <WithdrawForm />}
            {transactionPageOpen && <TransactionHistory />}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

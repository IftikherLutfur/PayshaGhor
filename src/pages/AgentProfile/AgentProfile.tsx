/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api";
import { useGetWalletQuery } from "@/redux/features/wallet/wallet.api";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TransactionHistory from "../UserDashboardPage.tsx/TransactionPage";

export default function AgentProfile() {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const userId = userInfo?.data?._id;

  const { data: wallet } = useGetWalletQuery(userId, {
    skip: !userId,
  });

  return (
    <div className="max-w-md mx-auto px-4 py-6">

      {/* ✅ Profile Section */}
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <img
          src={userInfo?.data?.profilePhoto || "/default-avatar.png"}
          alt="User profile"
          className="w-40 h-40 rounded-full border-4 border-amber-500 shadow-md object-cover"
        />

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          {userInfo?.data?.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          📞 {userInfo?.data?.phone}
        </p>
      </div>

      {/* ✅ Tabs */}
      <Tabs className="mt-8">
        <TabList className="flex justify-center gap-4 bg-gray-800 text-white py-3 rounded-lg shadow-md">
          <Tab className="px-5 py-2 rounded-md font-bold text-lg hover:bg-amber-600 cursor-pointer">
            Wallet
          </Tab>
          <Tab className="px-5 py-2 rounded-md font-bold text-lg hover:bg-amber-600 cursor-pointer">
            Transaction History
          </Tab>
        </TabList>

        {/* ✅ Wallet Details */}
        <TabPanel>
          <div className="border-2 border-amber-500 rounded-lg p-6 mt-8 bg-white shadow-md">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              💰 Wallet Details
            </h2>

            <div className="space-y-4 text-left">
              <p className="text-xl font-semibold text-gray-700">
                Balance:
                <span className="font-bold text-amber-600">
                  {" "} {wallet?.data?.balance} BDT
                </span>
              </p>

              <p className="text-xl font-semibold text-gray-700">
                Profit:
                <span className="font-bold text-green-600">
                  {" "} {wallet?.data?.profit} BDT
                </span>
              </p>

              <p className="text-xl font-semibold text-gray-700">
                Wallet Status:
                <span className="font-bold text-blue-600">
                  {" "} {wallet?.data?.walletStatus}
                </span>
              </p>

              <p className="text-xl font-semibold text-gray-700">
                Wallet Type:
                <span className="font-bold text-purple-600">
                  {" "} {wallet?.data?.walletType}
                </span>
              </p>

              <p className="text-xl font-semibold text-gray-700">
                User Status:
                <span className="font-bold text-orange-600">
                  {" "} {userInfo?.data?.userStatus}
                </span>
              </p>

              <p className="text-xl font-semibold text-gray-700">
                Phone:
                <span className="font-bold">
                  {" "} {userInfo?.data?.phone}
                </span>
              </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-8">
            <TransactionHistory />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

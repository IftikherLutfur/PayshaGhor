import { useUserInfoQuery } from "@/redux/features/authentication/auth.api";
import { useGetWalletQuery } from "@/redux/features/wallet/wallet.api";
import sendMoney from "../../assets/images/il_send_money.svg";

export default function Banner() {
  const { data: userInfo } = useUserInfoQuery(undefined);
  
  const { data: wallet } = useGetWalletQuery(userInfo?.data?._id);

  return (
    <div className="bg-gradient-to-b mt-4 from-blue-600 to-blue-400 rounded-3xl p-6 sm:p-8 shadow-xl max-w-6xl mx-auto">

      {/* User Info and Card */}
      <div className="flex md:flex-row justify-between items-start md:items-center gap-6 mb-6">
        {/* User Details */}
        <div className="text-white space-y-1">
          <p className="font-semibold text-lg sm:text-xl text-start">{userInfo?.data?.name}</p>
          <p className="font-medium text-md sm:text-lg text-start">{userInfo?.data?.phone}</p>
        </div>

        {/* Card Info */}
        <div className="text-amber-200 text-right">
          <p className="text-2xl sm:text-3xl font-semibold">PAYSHAGHOR</p>
          <p className="text-2xl sm:text-3xl font-bold tracking-widest">***********</p>
        </div>
      </div>

      {/* Balance */}
      <div className="text-white mb-6">
        <p className="text-lg sm:text-xl font-semibold">Your Balance</p>
        <h1 className="text-3xl sm:text-4xl font-bold">৳ {wallet?.data?.balance}</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 bg-white/90 p-2 rounded-3xl shadow-md flex-wrap">
          {["Send", "Pop up", "Withdraw"].map((action) => (
            <button
              key={action}
              className="flex flex-col items-center sm:p-5 transition-transform transform hover:scale-105 w-24 sm:w-28"
            >
              <img
                src={sendMoney}
                alt={`${action} Icon`}
                className="w-14  bg-blue-300 rounded-full p-2 mb-1"
              />
              <span className=" font-semibold text-sm sm:text-base text-blue-500">{action}</span>
            </button>
          ))}
        </div>
      </div>


    </div>
  );
}

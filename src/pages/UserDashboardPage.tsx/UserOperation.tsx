import PopupForm from "@/components/modules/userDashboard/PopupForm";
import SendMoneyForm from "@/components/modules/userDashboard/SendMoneyFrom";
import WithdrawForm from "@/components/modules/userDashboard/withdrawForm";

const UserOperation = () => {
  return (
    <div className=" bg-gray-50 flex items-center justify-center p-6">
      <div className="">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Cash In / Out & Send Money
        </h1>

        {/* 2 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Send Money */}

          {/* Withdraw */}
          <div className="bg-white rounded-2xl shadow-md p-6">
           
            <WithdrawForm />
          </div>

          {/* Cash In */}
          <div className="bg-white rounded-2xl shadow-md p-6">
           
            <PopupForm />
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
           
            <SendMoneyForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOperation;

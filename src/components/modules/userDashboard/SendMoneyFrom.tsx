/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useGetWalletQuery, useSendMoneyMutation } from "@/redux/features/wallet/wallet.api"
import { toast } from "sonner"
import { useGetAgentUserQuery, useUserInfoQuery } from "@/redux/features/authentication/auth.api"
import { useState } from "react"

const formSchema = z.object({
  to: z.string().min(2, "At least 2 characters required").max(50),
  amount: z.number().min(1, "Amount must be positive"),
})

export default function SendMoneyForm() {
  const [sendMoney] = useSendMoneyMutation()
  const { data: userInfo } = useGetAgentUserQuery(undefined)
  const { data: selfProfile } = useUserInfoQuery(undefined)
  const { data: wallet } = useGetWalletQuery(selfProfile?.data?._id)
  const [showForm, setShowForm] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [show, setShow] = useState(false)
  const [selectedUser, setSelectedUser] = useState<string | null>(null)

  const removeSelfProfile = userInfo?.data?.filter((user: any) => user._id !== selfProfile?.data?._id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
      amount: undefined,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await sendMoney(values).unwrap()
      if (res.success) {
        toast.success(res.message)
        setShowForm(false)
        form.reset()
        setSuccessMessage(true)
      }
    } catch (err: any) {
      console.error(err)
    }
  }

  const handleSendClick = (_id: string) => {
    setSelectedUser(_id)
    form.setValue("to", _id)
    setShowForm(true)
  }


  return (
    <div className="px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">Send Money</h2>

      {/* Search bar */}
      <div className="flex justify-center mt-4">
        <input
          className="border-2 p-2 w-2/3 sm:w-1/2 rounded-l-lg"
          type="text"
          placeholder="Search user..."
        />
        <button className="bg-blue-600 text-white rounded-r-lg p-3 font-bold cursor-pointer">
          Search
        </button>
      </div>

      {/* User list */}


      <div className="my-10 grid gap-4">
        <div className="flex items-center gap-4 bg-blue-100 rounded-xl shadow-md w-max">
          <input
            type="text"
            value={wallet?.data?.balance?.toLocaleString()}
            readOnly
            className="absolute text-blue-900 font-semibold text-lg bg-transparent border-none w-32 text-right focus:outline-none"
          />
          <button
            onClick={() => setShow(!show)}
            className={show ? "text-sm relative px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-transform duration-1000 ease-in-out" : "text-sm relative px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition translate-x-40 duration-1000"}
          >
            {show ? "Tapto see your balance" : "Tap to hide your balance"}
          </button>
        </div>
        {removeSelfProfile?.map((user: any) => (
          <div
            key={user._id}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-blue-100 rounded-xl shadow"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 rounded-full border-2 border-amber-100 object-cover"
                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
              />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-lg">{user.name}</p>
                <p className="text-gray-700 text-sm sm:text-base">{user.phone}</p>
              </div>
            </div>
            <Button
              onClick={() => handleSendClick(user._id)}
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send
            </Button>
          </div>
        ))}
      </div>

      {/* Centered form popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
            {/* Close Button */}
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowForm(false)}
              className="absolute right-3 top-3 rounded-full w-8 h-8 text-lg"
            >
              ✕
            </Button>

            <h3 className="text-xl font-semibold text-center mb-2">
              Send Money to{" "}
              <span className="text-blue-600 break-all">{selectedUser}</span>
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Receiver ID */}
                <FormField
                  control={form.control}
                  name="to"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Receiver ID</FormLabel>
                      <FormControl>
                        <Input readOnly {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Amount */}
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Send Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-bold px-10 py-10 transition"
                  >
                    Tap to Send
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
      {successMessage && <div className="fixed inset-0  flex justify-center items-center z-50 px-4">
        <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => setSuccessMessage(false)}
            className="absolute right-3 top-3 rounded-full w-8 h-8 text-lg"
          >
            ✕
          </Button>
          <p className="font-bold text-black text-center">Transaction History</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {/* Transaction ID */}
            <div className="border border-gray-400 rounded-md px-4 py-3 bg-white shadow-sm">
              <p className="font-semibold text-gray-800">Transaction</p>
              <p className="text-gray-700 italic">Upcoming feature</p>
            </div>

            {/* Date */}
            <div className="border border-gray-400 rounded-md px-4 py-3 bg-white shadow-sm">
              <p className="font-semibold text-gray-800">Date</p>
              <p className="text-gray-700">20/10/2025</p>
            </div>

            {/* Send Amount */}
            <div className="border border-gray-400 rounded-md px-4 py-3 bg-white shadow-sm">
              <p className="font-semibold text-gray-800">Send Amount</p>
              <p className="text-gray-700">59,390</p>
            </div>

            {/* Your Balance */}
            <div className="border border-gray-400 rounded-md px-4 py-3 bg-white shadow-sm">
              <p className="font-semibold text-gray-800">Your Balance</p>
              <input
                className="text-center w-full border-0 bg-transparent cursor-not-allowed font-medium text-gray-700"
                readOnly
                value={wallet?.data?.balance}
              />
            </div>

            {/* Fee */}
            <div className="border border-gray-400 rounded-md px-4 py-3 bg-white shadow-sm">
              <p className="font-semibold text-gray-800">Fee</p>
              <p className="text-gray-700 italic">Upcoming feature</p>
            </div>

            {/* Sending Number */}
            <div className="border border-gray-400 rounded-md py-3 bg-white shadow-sm">
              <p className="font-semibold text-gray-800">Sending Number</p>
              <p className="text-gray-700 text-sm">{selectedUser}</p>
            </div>
          </div>

          <div className="text-xl">Money has been send successfully ✅</div>

        </div>
      </div>}
    </div>
  )
}

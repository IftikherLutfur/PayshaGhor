/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useGetWalletQuery, useWithdrawMutation } from "@/redux/features/wallet/wallet.api"
import { toast } from "sonner"
import { useGetAgentUserQuery, useUserInfoQuery } from "@/redux/features/authentication/auth.api"
import { useState } from "react"

const formSchema = z.object({
  amount: z
    .number()
    .min(1, "Amount must be positive"),
})

export default function WithdrawForm() {
  const [withdraw] = useWithdrawMutation()
  const { data: userInfo } = useGetAgentUserQuery(undefined)
  console.log(userInfo, "Hello")
  const { data: selfProfile } = useUserInfoQuery(undefined)
  const { data: wallet } = useGetWalletQuery(selfProfile?.data?._id)
  const [showForm, setShowForm] = useState(false)
    const [selectedUser, setSelectedUser] = useState<string | null>(null)
  
  const [show, setShow] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: undefined,
    },
  })

  // Set 'from' field automatically when userInfo is loaded
  // useEffect(() => {
  //   if (userInfo?.data?._id) {
  //     form.setValue("from", userInfo?.data._id)
  //   }
  // }, [userInfo, form]) 

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await withdraw(values).unwrap()
      if (res.success) {
        toast.success(res.message)
      }
    } catch (err: any) {
      console.error(err)
    }
    console.log(values)
  }
    const handleSendClick = (_id: string) => {
    setSelectedUser(_id)
   
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
              {userInfo?.data?.map((user: any) => (
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

      {/* Form */}
     {show && <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
      cash out {selectedUser}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            {/* Amount Field */}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-2">
              Send
            </Button>
          </form>
        </Form>
      </div>}
      {/* End form */}
    </div>
  )
}

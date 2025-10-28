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
import { toast } from "sonner"
import { useCashinMutation, useGetWalletQuery } from "@/redux/features/wallet/wallet.api"
import { useGetAgentUserQuery, useUserInfoQuery } from "@/redux/features/authentication/auth.api"
import { Link } from "react-router"
import { Home } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
  // from: z.string().min(2, "At least 2 characters required").max(50),
  to: z.string().min(2, "At least 2 characters required").max(50),
  amount: z
    .number()
    .min(1, "Amount must be positive"),
})

export default function CashInForm() {
  const [show, setShow] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [cashin] = useCashinMutation()
  const { data: userIfo } = useGetAgentUserQuery(undefined)
  const { data: profile } = useUserInfoQuery(undefined)
  console.log(profile)
  const { data: wallet } = useGetWalletQuery(profile?.data?._id)
  // console.log(wallet)
  const onlyUser = userIfo?.data?.filter((agent: any) => agent.role === "USER")
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
      amount: undefined,
    },
  })


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await cashin(values).unwrap()
      if (res.success) {
        toast.success(res.message)
      }
    } catch (err: any) {
      console.error(err)
      toast.error(err?.data?.message)
    }
  }

  const handleCashoutClick = (id:string) =>{
    setShowForm(true)
    console.log(id)
  }

  return (
    <div className="max-w-7xl">
      <div className="w-full   bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Cash In</h2>

        <div className="flex items-center justify-between mx-10 my-10">
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

          <div>
            <Link to="/home"><Home /></Link>
          </div>
        </div>

  <div className="my-8 space-y-4">
         {onlyUser?.map((agent: any) => (
           <div key={agent._id} className="flex justify-between items-center p-4 bg-blue-100 rounded-xl shadow">
             <div>
               <p className="font-semibold text-lg">{agent.name}</p>
               <p className="text-gray-600">{agent.phone}</p>
             </div>
             <Button
               className="bg-blue-600 text-white"
               onClick={() => handleCashoutClick(agent._id)}
             >
               Cash in
             </Button>
           </div>
         ))}
       </div>

        {showForm && <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative shadow-xl">
            <Button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3"
              onClick={() => setShowForm(false)}
            >
              ✕
            </Button>

             <h3 className="text-xl font-semibold text-center mb-3">
              Cashout to: <span className="text-blue-600">Cashin</span>
            </h3>


            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* From Field (read-only) */}

                {/* To Field */}
                <FormField
                  control={form.control}
                  name="to"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-bold px-10 py-10 transition" type="submit">
                  Tap to cashin
                </Button>
              </form>
            </Form>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

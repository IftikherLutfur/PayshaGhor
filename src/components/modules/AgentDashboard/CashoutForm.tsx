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
import { useState } from "react"
import { useCashoutMutation, useGetWalletQuery } from "@/redux/features/wallet/wallet.api"
import { useGetAgentUserQuery, useUserInfoQuery } from "@/redux/features/authentication/auth.api"
import {Home } from "lucide-react"
import { Link } from "react-router"

const formSchema = z.object({
  to: z.string().min(2, "Agent ID required"),
  amount: z.number().min(1, "Amount must be positive"),
})

export default function CashOutForm() {
  const [cashout] = useCashoutMutation()
  const { data: allUser } = useGetAgentUserQuery(undefined)
  const { data: selfProfile } = useUserInfoQuery(undefined)
  const { data: wallet } = useGetWalletQuery(selfProfile?.data?._id)
  const allAgents = allUser?.data?.filter((user: any) => user.role === "AGENT")
  const [show, setShow] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
      amount: undefined,
    },
  })

  const handleCashoutClick = (agentId: string) => {
    setSelectedAgent(agentId)
    form.setValue("to", agentId)
    setShowForm(true)
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await cashout(values).unwrap()
      if (res.success) {
        toast.success(res.message)
        setShowForm(false)
        form.reset()
        setSuccessMessage(true)
      }
    } catch (err: any) {
      toast.error(err?.data?.message)
    }
  }

  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const formattedDate = `${date}/${month}/${year}`;

  return (
    <div className="px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">Cashout</h2>

      <div className="flex justify-center mt-4">
        <input
          className="border-2 p-2 w-2/3 sm:w-1/2 rounded-l-lg"
          type="text"
          placeholder="Search by number(_upcoming feature_)"
        />
        <button className="bg-blue-600 text-white rounded-r-lg p-3 font-bold cursor-pointer">
          Search
        </button>
      </div>


       
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

      {/* Agent List */}
      <div className="my-8 space-y-4">
        {allAgents?.map((agent: any) => (
          <div key={agent._id} className="flex justify-between items-center p-4 bg-blue-100 rounded-xl shadow">
            <div>
              <p className="font-semibold text-lg">{agent.name}</p>
              <p className="text-gray-600">{agent.phone}</p>
            </div>
            <Button
              className="bg-blue-600 text-white"
              onClick={() => handleCashoutClick(agent._id)}
            >
              Cashout
            </Button>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl p-6 w-full relative shadow-xl">
            <Button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3"
              onClick={() => setShowForm(false)}
            >
              ✕
            </Button>

            <h3 className="text-xl font-semibold text-center my-3">
              Cashout to: <span className="text-blue-600">{selectedAgent}</span>
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <FormField
                  control={form.control}
                  name="to"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agent ID</FormLabel>
                      <FormControl>
                        <Input readOnly {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          placeholder="Enter amount"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-bold px-10 py-10 transition" type="submit">
                  Tap to cashput
                </Button>
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
              <p className="text-gray-700">{formattedDate}5</p>
            </div>

            {/* Send Amount */}
            <div className="border border-gray-400 rounded-md px-4 py-3 bg-white shadow-sm">
              <p className="font-semibold text-gray-800">Send Amount</p>
              <p className="text-gray-700 italic">upcoming feature</p>
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
              <p className="text-gray-700 text-sm">{selectedAgent}</p>
            </div>
          </div>

          <div className="text-xl">Money has been send successfully ✅</div>

        </div>
      </div>}

    </div>
  )
}

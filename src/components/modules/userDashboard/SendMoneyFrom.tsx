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
import { useUserInfoQuery } from "@/redux/features/authentication/auth.api"
import { toast } from "sonner"

const formSchema = z.object({
  // from: z.string().min(2, "At least 2 characters required").max(50),
  to: z.string().min(2, "At least 2 characters required").max(50),
  amount: z
    .number()
    .min(1, "Amount must be positive"),
})

export default function SendMoneyForm() {
  const [sendMoney] = useSendMoneyMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
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
      const res = await sendMoney(values).unwrap()
      if(res.success){
        toast.success(res.message)
      }
    } catch (err: any) {
      console.error( err)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Send Money</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* From Field (read-only) */}

            {/* To Field */}
            <FormField
              control={form.control}
              name="to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reciever Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
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
            <Button type="submit" className="w-full mt-2">
              Send
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

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
import { useWithdrawMutation } from "@/redux/features/wallet/wallet.api"
import { toast } from "sonner"

const formSchema = z.object({
  amount: z
    .number()
    .min(1, "Amount must be positive"),
})

export default function WithdrawForm() {
    const [withdraw] = useWithdrawMutation()
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
      if(res.success){
        toast.success(res.message)
      }
    } catch (err: any) {
      console.error( err)
    }
    console.log(values)
  }

  return (
    <div className="x px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Withdraw Money </h2>

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
      </div>
    </div>
  )
}

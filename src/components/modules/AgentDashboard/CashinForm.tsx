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
import { useCashinMutation } from "@/redux/features/wallet/wallet.api"

const formSchema = z.object({
  // from: z.string().min(2, "At least 2 characters required").max(50),
  to: z.string().min(2, "At least 2 characters required").max(50),
  amount: z
    .number()
    .min(1, "Amount must be positive"),
})

export default function CashInForm() {
  const [cashin] = useCashinMutation()
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
      if(res.success){
        toast.success(res.message)
      }
    } catch (err: any) {
      console.error(err)
      toast.error(err?.data?.message )
    }
  }

  return (
    <div className="px-4">
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

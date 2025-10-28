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
import { useMobileRechargeMutation } from "@/redux/features/wallet/wallet.api"
import { toast } from "sonner"

const formSchema = z.object({
    number: z.number().min(11, "Number must be 11 digit"),
    amount: z
        .number()
        .min(1, "Amount must be positive"),
})

export default function MobileRecharge() {
    const [mobileRecharge] = useMobileRechargeMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: undefined,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await mobileRecharge(values).unwrap()
            if (res.success) {
                toast.success(res.message)
            }
        } catch (err: any) {
            console.error(err)
        }
        console.log(values)
    }

    return (
        <div className="px-4 py-20">
            <div className="w-full max-w-md mx-auto my-auto bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6
      border-2 border-amber-200
      ">
                <h2 className="text-2xl font-semibold text-center">Popup Money</h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                        {/* Number */}
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter 11 digit number"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
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
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-600 mt-2">
                            Send
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

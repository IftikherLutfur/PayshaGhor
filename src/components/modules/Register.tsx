import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useRegisterMutation } from "@/redux/features/authentication/auth.api"
 
const formSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  role: z.string()
})
 
export function RegisterForm() {
    const [register] = useRegisterMutation()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await register(values).unwrap();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return(
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
  control={form.control}
  name="role"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Role</FormLabel>
      <FormControl>
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <SelectTrigger>
            <SelectValue placeholder="Admin | Agent | User" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ADMIN">Admin</SelectItem>
            <SelectItem value="AGENT">Agent</SelectItem>
            <SelectItem value="USER">User</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormDescription className="sr-only">
        This is your role.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    )
}
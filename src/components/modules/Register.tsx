import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { useRegisterMutation } from "@/redux/features/authentication/auth.api"
import { useNavigate } from "react-router"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string(),
  name: z.string(),
  phone: z.string(),
  profilePhoto: z.string(),

})

export function RegisterForm() {
  const [register] = useRegisterMutation()
  const navigate = useNavigate()
    const [show, setShow] = useState(false)
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
      name: "",
      phone: "",
      profilePhoto: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await register(values).unwrap()
      if (response.success) {
        navigate("/login")
      }
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="py-14 px-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name*/}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="text"
                    inputMode="numeric" placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Profile photo */}
          <FormField
            control={form.control}
            name="profilePhoto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile</FormLabel>
                <FormControl>
                  <Input placeholder="Profile Photo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
               <div className="relative">
                 <FormControl>
                  <Input type={show? "text" : "password"} placeholder="Enter your password" {...field} />
                </FormControl>
                 <span
                          onClick={() => setShow(!show)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl"
                        >
                          {show ? <FaEye /> : <FaEyeSlash />}
                        </span>
               </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Role */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AGENT">Agent</SelectItem>
                      <SelectItem value="USER">User</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full py-3 text-lg font-semibold">
            Register
          </Button>
        </form>
      </Form>
      <p className="text-sm font-semibold mt-5  text-black">If you have an account <a className="underline" href="login">Login</a></p>
    </div>
  )
}

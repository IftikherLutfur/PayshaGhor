/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLoginMutation } from "@/redux/features/authentication/auth.api";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const LoginForm = () => {
  const [login] = useLoginMutation();
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await login(values).unwrap();
      if (response.success) {
        toast.success("Login successfull")
        navigate("/Home");
      }
      console.log(response);
    } catch (error: any) {
      toast.error(error?.data?.message)
      console.error(error?.data?.message);
    }
  };



  return (
    <div className="max-w-md mx-auto mt-16 py-14 px-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
               <div className="relative">
                 <FormControl>
                  <Input type={show ? "text" : "password"} placeholder="Enter your password" {...field} />
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

          

          {/* Submit Button */}
          <Button type="submit" className="w-full py-3 text-lg font-semibold">
            Login
          </Button>
        </form>
      </Form>
      <p className="text-sm font-semibold mt-5  text-black">If you don't have account <a className="underline" href="register">Register</a></p>

    </div>
  );
};

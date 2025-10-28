/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  useEditUserMutation, useUserInfoQuery } from "@/redux/features/authentication/auth.api";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character long"),
  email: z.string().min(2, "Email must be at least 2 characters long"),
  currentPassword: z.string().min(4, "Current password must be at least 4 characters long"),
  newPassword: z.string().min(4, "New password must be at least 4 characters long").optional(),
});

export default function UserProfileUpdate() {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const [editUser] = useEditUserMutation();
  console.log(userInfo);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      currentPassword: "",
      newPassword: "",
    },
  });

  // API data আসার পরে defaultValues update করতে useEffect
  useEffect(() => {
    if (userInfo?.data) {
      form.reset({
        name: userInfo?.data.name || "",
        email: userInfo.data.email || "",
        currentPassword: "",
        newPassword: "",
      });
    }
  }, [userInfo, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await editUser(values).unwrap();
      if(response.success){
        toast.success(response.message)
      }
    } catch (error: any) {
        toast.error(error.data.message || "An error occurred")
        console.log(error)
    }
    console.log(values);
    // এখানে তোমার API call যাবে
  };

  return (
    <div className="w-full max-w-7xl mt-8 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter name" {...field} />
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
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Current Password */}
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter current password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter new password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full mt-2">
            Update
          </Button>
        </form>
      </Form>
    </div>
  );
}

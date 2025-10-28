import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    console.log("Message submitted:", values);
    alert("Message sent successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-10 space-y-10">

      {/* Contact Header */}
      <div className="text-start">
        <h1 className="text-4xl font-bold text-start mb-4 text-gray-900">Contact Us</h1>

        <h2 className="text-2xl font-semibold">Helpline</h2>
        <p className="text-lg font-medium">12345 or 01-23456789</p>
        <p className="text-sm text-gray-600">
          (Accessible from all major mobile operators)
        </p>

        <div className="mt-4">
          <p className="text-xl font-semibold">Email</p>
          <p className="text-gray-700 font-medium">support@yourservice.com</p>
        </div>

        <a className="text-indigo-600 underline mt-2 block cursor-pointer">
          Click here to fill in the form if you want us to contact you
        </a>
      </div>

      {/* Customer Care Addresses */}
      <div className="text-start">
        <h2 className="text-2xl font-semibold mb-3">Customer Care Center Addresses</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Dhaka Center - ABC Tower, 1st Floor, Road 12, Dhaka-1200</li>
          <li>Chittagong Center - XYZ Plaza, Ground Floor, Agrabad, CTG</li>
          <li>Sylhet Center - EFG Complex, Jail Road, Sylhet-3100</li>
          <li>Rajshahi Center - HIJ Market Plaza, Boalia, Rajshahi</li>
          <li>Khulna Center - KLM View Tower, Shibbari Mor, Khulna</li>
          <li>Barisal Center - NOP Mall, Bottala, Barisal</li>
          <li>Rangpur Center - QR Road, Rangpur</li>
        </ul>
      </div>

      {/* Service Timing */}
      <div className="text-start">
        <h2 className="text-2xl font-semibold mb-2">Service Timing</h2>
        <p className="text-gray-700">
          <strong>Customer Care Center:</strong> 10:00 AM – 7:00 PM (Friday: 10:00 AM – 6:00 PM)
        </p>
        <p className="text-gray-700">
          <strong>Customer Service:</strong> Saturday – Thursday (10:00 AM – 6:00 PM)
        </p>
        <p className="text-gray-600 mt-2">
          Contact us anytime:
        </p>
        <ul className="pl-6 list-disc text-gray-700 text-start">
          <li>Call: 12345</li>
          <li>Email: support@yourservice.com</li>
          <li>Live Chat: yourservice.com/livechat</li>
          <li>Facebook: facebook.com/yourservice</li>
        </ul>
      </div>

      {/* Corporate and Commercial Address */}
      <div className="text-start">
        <h2 className="text-2xl font-semibold mb-2">Corporate Address</h2>
        <p className="text-gray-700">RandomXYZ Tower, Road X, Rajloxmi, Dhaka XXXX</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Commercial Address</h2>
        <p className="text-gray-700">ABC Tower, Mohakhali, Dhaka – XXXX</p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10">
        <p className="text-gray-600 mb-6 text-center">
          Have a question or want to get in touch? Fill out the form below and we'll get back to you soon.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Your Message"
                      {...field}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2">
              Send Message
            </Button>

          </form>
        </Form>
      </div>

    </div>
  );
};

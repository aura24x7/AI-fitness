import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast"; // Corrected import based on shadcn add toast
import { subscribeEmail, SubscribeResponse } from "@/api/subscribe"; // Assuming subscribe.ts is in @/api

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function Waitlist() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast(); // Correct hook usage
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    console.log("Waitlist submission:", data);

    try {
      const response: SubscribeResponse = await subscribeEmail(data.email);
      if (response.success) {
        toast({
          title: "Success!",
          description: response.message || "Successfully subscribed! Check your inbox.",
        });
        form.reset(); // Reset form on success
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: response.message || "Subscription failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="waitlist" className="bg-[#1A1A1A] py-16 sm:py-24">
      <div className="mx-auto max-w-xl text-center px-4"> {/* Adjusted max-width and added padding */}
        
        <h2 className="text-3xl lg:text-4xl font-light text-gray-100 tracking-tight mb-4">
          Be Among the First.
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Join the waitlist for Aura AI and be a pioneer in the new era of intelligent fitness.
        </p>

        {/* Removed the left-side graphic/float animation div entirely */}
        {/* The form will now be centered directly under the text */}
        
        {/* The space-y-6 and other layout classes from the previous right-side div are now applied to the form container if needed, or handled by the new centered layout */}
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-6 max-w-md mx-auto" // Added max-w-md and mx-auto for form itself
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* FormLabel can be visually hidden if design is very minimalist, or styled */}
                  {/* <FormLabel className="sr-only">Email Address</FormLabel>  */}
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="Enter your email address"
                      {...field}
                      className="bg-gray-800 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500 rounded-md w-full py-3 px-4" // Adjusted styling
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm mt-1 text-left" /> {/* Ensure visibility and alignment */}
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              size="lg" // Consistent with Hero CTA
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 transition-transform hover:scale-105" // Consistent with Hero CTA
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Join Waitlist"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
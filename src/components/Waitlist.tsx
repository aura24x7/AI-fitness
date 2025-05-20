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
    <div id="waitlist" className="py-24 glass-effect">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative z-10 glass-effect p-6 rounded-2xl border border-purple-500/20">
              <div className="bg-gray-900/80 rounded-xl p-4 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <p className="text-purple-300">🎉 Hey Fitness Rockstar!</p>
                  </div>
                  <div className="glass-effect p-3 rounded-lg">
                    <p className="text-gray-400">Your spot in the future of fitness is waiting!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-4">
              Be Part of Something Epic!
            </h2>
            <p className="text-gray-400">
              Jump on our waitlist and be the first to experience the future of fitness. Early birds get exclusive perks! 🎁
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Join Waitlist"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
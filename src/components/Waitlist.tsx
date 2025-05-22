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
import { useToast } from "@/hooks/use-toast";
import { subscribeEmail, SubscribeResponse } from "@/api/subscribe";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function Waitlist() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    // console.log("Waitlist submission:", data); // Keep for debugging if needed

    try {
      const response: SubscribeResponse = await subscribeEmail(data.email);
      if (response.success) {
        toast({
          title: "Success!",
          description: response.message || "Successfully subscribed! We'll keep you updated.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Subscription Failed",
          description: response.message || "Could not subscribe. Please try again later.",
        });
      }
    } catch (error) {
      // console.error("Subscription error:", error); // Keep for debugging
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
    <div id="waitlist" className="py-20 md:py-24"> {/* Consistent padding, removed glass-effect */}
      <div className="container mx-auto px-6">
        {/* Changed to a single-column, centered layout for the form */}
        <div className="max-w-xl mx-auto text-center"> {/* Adjusted max-width and centering */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Be the First to Know
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Sign up to receive updates, early access invitations, and exclusive news about our 
            AI multi-agent health platform.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left"> {/* text-left for form labels */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Email Address</FormLabel> {/* Updated text color */}
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="you@example.com" // Simplified placeholder
                        {...field}
                        // Removed old classes: "bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                        // Input now inherits global styles from index.css and ui/input.tsx
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" /> {/* Updated text color */}
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors" // Updated button styling
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
          </Form>
        </div>
        {/* Removed the entire decorative left pane div */}
      </div>
    </div>
  );
}
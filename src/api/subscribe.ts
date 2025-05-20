export interface SubscribeResponse {
  success: boolean;
  message: string;
}

export const subscribeEmail = async (email: string): Promise<SubscribeResponse> => {
  console.log("Subscribing email:", email);

  // Basic validation (as per subtask, primary validation is in the form, but a basic check here is good)
  if (!email || !email.trim() || !email.includes('@')) {
    console.error("Invalid email provided for subscription:", email);
    return { success: false, message: "Invalid email provided." };
  }

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a successful subscription
  // In a real application, this would involve an actual API call to a backend service.
  console.log("Successfully subscribed email:", email);
  return { success: true, message: "Successfully subscribed!" };
};

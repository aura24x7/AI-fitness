export interface Agent { // Ensure this interface matches if it's in the same file
  id: string;
  name: string;
  image: string;
  bio: string;
  specialty: string;
}

export const agentsData: Agent[] = [
  {
    id: "AW-001",
    name: "Kai - Adaptive Workout Agent",
    image: "/placeholders/agent-default.svg", // This path should remain if using the generic placeholder
    bio: "As your dedicated fitness strategist, I design and dynamically adjust workout programs that evolve with you. I analyze your performance, preferences, and energy levels to ensure each session is engaging, challenging, and perfectly aligned with your goals. My aim is to make your fitness journey intuitive and effective.",
    specialty: "Personalized Fitness Orchestration"
  },
  {
    id: "NT-002",
    name: "Nara - Intelligent Nutrition Agent",
    image: "/placeholders/agent-default.svg",
    bio: "I'm your personal AI nutritionist, committed to simplifying healthy eating. I craft bespoke meal plans, offer smart dietary recommendations, and help you track your nutritional intake. My intelligence adapts to your needs, ensuring your diet supports your fitness objectives and lifestyle seamlessly.",
    specialty: "Adaptive Nutritional Science"
  },
  {
    id: "HP-003",
    name: "Helia - Holistic Progress Agent",
    image: "/placeholders/agent-default.svg",
    bio: "I provide a comprehensive view of your wellness journey. By meticulously tracking your physical activity, nutritional habits, and biometric data, I offer insightful analytics and visualizations. I'm here to help you celebrate milestones and understand the holistic impact of your efforts.",
    specialty: "Wellness & Performance Analytics"
  },
  {
    id: "DG-004",
    name: "Dynamo - Dynamic Goal Agent",
    image: "/placeholders/agent-default.svg",
    bio: "I am your motivational partner and goal navigator. I help you set clear, achievable objectives and adapt them as you progress. I provide timely encouragement, track your commitment, and help you maintain momentum, ensuring you stay inspired and focused on your path to success.",
    specialty: "Goal Actualization & Motivation"
  }
];

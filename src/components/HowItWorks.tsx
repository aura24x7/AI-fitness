import React from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card"; // Assuming CardHeader is not explicitly needed per description

const agents = [
  {
    name: "Meal Architect",
    description: "AI-powered meal planning, tailored to your goals, preferences, and biometrics."
  },
  {
    name: "Exercise Strategist",
    description: "Dynamic workout programming that evolves with your performance and feedback."
  },
  {
    name: "Performance Analyst",
    description: "Deep insights into your progress, identifying trends and areas for optimization."
  }
];

const capabilities = [
  {
    title: "Hyper-Personalization",
    description: "Truly individualized strategies, moving beyond templates to match your unique physiology and lifestyle."
  },
  {
    title: "Proactive Adaptation",
    description: "Aura AI anticipates your needs and adjusts your plan in real-time, ensuring continuous progress."
  },
  {
    title: "Predictive Insights",
    description: "Leverage AI to foresee potential plateaus or recovery needs, keeping you ahead of the curve."
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-[#1A1A1A] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">

        {/* Section 1: How Aura Works (Conceptual) */}
        <h2 className="text-3xl lg:text-4xl font-light text-gray-100 tracking-tight mb-12">
          Intelligent Synergy: A Multi-Agent Approach.
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Aura AI leverages specialized agents for every facet of your well-being:
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {agents.map((agent) => (
            <div key={agent.name} className="p-4">
              <h3 className="text-xl font-medium text-blue-400 mb-2">{agent.name}</h3>
              <p className="text-md text-gray-400">{agent.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xl text-gray-200 mt-12 font-light">
          Seamlessly integrated, constantly learning, and entirely focused on you.
        </p>

        {/* Separator */}
        <div className="my-16 sm:my-20"></div>

        {/* Section 2: The Revolution (Key Capabilities/Benefits) */}
        <h2 className="text-3xl lg:text-4xl font-light text-gray-100 tracking-tight mb-12">
          Experience the Unprecedented.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <Card 
              key={capability.title} 
              className="bg-[#1F1F1F] border-none text-gray-100 p-6 flex flex-col text-left" // Added text-left for card content
            >
              {/* CardTitle is used directly as per Card component structure, no separate CardHeader needed if simple */}
              <CardTitle className="text-xl font-medium text-blue-400 mb-3">{capability.title}</CardTitle>
              <CardContent className="text-md text-gray-300 p-0 flex-grow"> {/* Added flex-grow */}
                {capability.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

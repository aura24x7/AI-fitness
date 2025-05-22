import React from 'react';
import { Zap, Target, UtensilsCrossed, TrendingUp } from 'lucide-react'; // Updated icons
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featuresList = [
  {
    icon: Zap, // Changed from Brain
    title: "Adaptive Workout Agent",
    description: "Our AI intelligently learns your preferences and performance, dynamically adjusting your routines for optimal engagement and results."
  },
  {
    icon: Target, // Changed from Users
    title: "Dynamic Goal Agent",
    description: "Set personalized health objectives and let our AI craft your path, tracking milestones and adapting to your progress for continuous achievement."
  },
  {
    icon: UtensilsCrossed, // Changed from Bell
    title: "Intelligent Nutrition Agent",
    description: "Receive tailored meal plans and dietary recommendations from an AI that understands your nutritional needs and preferences."
  },
  {
    icon: TrendingUp, // Changed from LineChart
    title: "Holistic Progress Agent",
    description: "Visualize your comprehensive health journey with integrated analytics, offering clear insights into your achievements across all activities."
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 md:py-24"> {/* Adjusted padding slightly, removed glass-effect */}
      <div className="container mx-auto px-6"> {/* Adjusted padding to px-6 to match Hero */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6"> {/* Updated text color and mb */}
            Core Capabilities of Your AI Health Companion
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto"> {/* Updated text color, size and max-width */}
            Explore the core functionalities our AI multi-agent system uses to deliver a personalized and revolutionary approach to your health and fitness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card border border-border hover:border-primary/80 transition-colors flex flex-col" 
              // Removed: hover:scale-105, animate-float, glass-effect, old bg/border colors
              // style={{ animationDelay: `${index * 0.2}s` }} // Removed animation delay
            >
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors"> {/* Updated colors, mb */}
                  <feature.icon className="w-7 h-7 text-primary" /> {/* Updated icon color */}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle> {/* Updated text color */}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{feature.description}</p> {/* Updated text color */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
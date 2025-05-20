import React from 'react';
import { Brain, Users, Bell, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Badge might be used later if features get tags like "New" or "Coming Soon"
// import { Badge } from "@/components/ui/badge"; 

const featuresList = [
  {
    icon: Brain,
    title: "Smart Workout Buddy",
    description: "Your AI coach learns what you love and adapts to your style. No more boring routines! 🧠"
  },
  {
    icon: Users,
    title: "Squad Goals",
    description: "Jump into fun challenges with your fitness fam. Nothing beats crushing goals together! 🏆"
  },
  {
    icon: Bell, // Consider a more fitting icon like UserPlus or Search if it's about finding
    title: "Workout Matchmaker",
    description: "Find your perfect gym buddy nearby. Because workouts are better with friends! 🤝"
  },
  {
    icon: LineChart,
    title: "Progress Party",
    description: "Watch your gains with cool visual stats. Every PR is worth celebrating! 📈"
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 glass-effect">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            The Future of Fitness is Here
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've packed some seriously cool features into your pocket. It's like having a gym membership from the future! ✨
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 animate-float glass-effect flex flex-col" // Added flex flex-col for equal height
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="p-3 bg-purple-900/30 rounded-lg w-fit mb-3 group-hover:bg-purple-900/50 transition-colors">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-purple-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow"> {/* Added flex-grow to make content area expand */}
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
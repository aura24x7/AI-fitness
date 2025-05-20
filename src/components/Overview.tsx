import React from 'react';
import { Users, Brain, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const overviewPoints = [
  { icon: Brain, title: "Smart AI Plans", text: "AI analyzes your progress and adapts your plan for optimal results." },
  { icon: Users, title: "Community Connection", text: "Connect with like-minded fitness enthusiasts for support and motivation." },
  { icon: Trophy, title: "Goal Achievement", text: "Achieve goals faster with engaging community challenges and shared success." }
];

export default function Overview() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Fitness Journey with AI-Powered Community
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Experience a new way of achieving your fitness goals with personalized AI guidance and a supportive community that keeps you motivated.
            </p>
            <div className="space-y-4">
              {overviewPoints.map((item, index) => (
                <Card key={index} className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-900/30 rounded-lg">
                        <item.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-purple-300">{item.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Ensuring the image section has a higher z-index if needed, but blur is on a sibling div */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" /> 
            <img 
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80" 
              alt="Fitness Community" 
              className="rounded-2xl shadow-2xl relative z-10" // Ensure image is above the blur
            />
          </div>
        </div>
      </div>
    </div>
  );
}
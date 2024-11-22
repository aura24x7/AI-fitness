import React from 'react';
import { Users, Brain, Trophy } from 'lucide-react';

export default function Overview() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Fitness Journey with AI-Powered Community
            </h2>
            <p className="text-gray-400 text-lg">
              Experience a new way of achieving your fitness goals with personalized AI guidance and a supportive community that keeps you motivated.
            </p>
            <div className="space-y-4">
              {[
                { icon: Brain, text: "AI analyzes your progress and adapts your plan" },
                { icon: Users, text: "Connect with like-minded fitness enthusiasts" },
                { icon: Trophy, text: "Achieve goals faster with community challenges" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-900/30 rounded-lg">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80" 
              alt="Fitness Community" 
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
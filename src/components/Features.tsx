import React from 'react';
import { Brain, Users, Bell, LineChart } from 'lucide-react';

export default function Features() {
  const features = [
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
      icon: Bell,
      title: "Workout Matchmaker",
      description: "Find your perfect gym buddy nearby. Because workouts are better with friends! 🤝"
    },
    {
      icon: LineChart,
      title: "Progress Party",
      description: "Watch your gains with cool visual stats. Every PR is worth celebrating! 📈"
    }
  ];

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
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl glass-effect border border-purple-500/10 hover:border-purple-500/30 transition-all hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-3 bg-purple-900/30 rounded-lg w-fit mb-4 group-hover:bg-purple-900/50 transition-colors">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
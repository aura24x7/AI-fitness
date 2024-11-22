import React from 'react';
import { ArrowRight, Sparkles, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-violet-950/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/20 mb-8 animate-float">
                <Activity className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-200 text-sm">Beta Access Soon</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
                AI-Powered Fitness Revolution
              </h1>
              
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Join the future of fitness where AI meets community. Experience personalized workouts that adapt to you, find your perfect gym buddy, and crush goals together. 🚀
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-transparent relative neon-border rounded-xl overflow-hidden transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 gradient-shift opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center text-white font-semibold">
                    Join Waitlist <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-purple-950/50 hover:bg-purple-900/50 border border-purple-500/20 hover:border-purple-500/40 rounded-xl font-semibold transition-all text-purple-300"
                >
                  Explore Features
                </button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[100px]" />
              <div className="relative animate-morph overflow-hidden aspect-square max-w-[500px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80" 
                  alt="Fitness Community" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 glass-effect">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <p className="text-white font-medium">Join 1000+ early adopters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
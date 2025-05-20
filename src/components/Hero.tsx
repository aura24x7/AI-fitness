import React from 'react';
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center text-center bg-[#1A1A1A] p-4 relative overflow-hidden"
    >
      {/* Background Animation Div */}
      <div className="absolute inset-0 w-full h-full bg-hero-animation opacity-50 z-0" />

      {/* Content Div */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl lg:text-6xl font-light text-gray-100 tracking-wide">
          The Future of Fitness is Intelligent.
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mt-6 max-w-2xl">
          Aura AI: Your revolutionary multi-agent AI coach, dedicated to your peak performance and well-being.
        </p>
        <Button 
          size="lg" 
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 transition-transform hover:scale-105"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Revolution
        </Button>
      </div>
    </div>
  );
}
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Waitlist() {
  const handleJoinWaitlist = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfpZLYh_ILAAIiJgl9yMlTl9qR6fwMLYLHZh8ck-wZFD1rirQ/viewform', '_blank');
  };

  return (
    <div id="waitlist" className="py-24 glass-effect">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative z-10 glass-effect p-6 rounded-2xl border border-purple-500/20">
              <div className="bg-gray-900/80 rounded-xl p-4 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <p className="text-purple-300">🎉 Hey Fitness Rockstar!</p>
                  </div>
                  <div className="glass-effect p-3 rounded-lg">
                    <p className="text-gray-400">Your spot in the future of fitness is waiting!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-4">
              Be Part of Something Epic!
            </h2>
            <p className="text-gray-400">
              Jump on our waitlist and be the first to experience the future of fitness. Early birds get exclusive perks! 🎁
            </p>

            <button
              onClick={handleJoinWaitlist}
              className="group w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <span>Join Waitlist</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
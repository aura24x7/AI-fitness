import React from 'react';

export default function Overview() {
  return (
    <div id="overview" className="bg-[#1F1F1F] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* Section 1: The Paradigm Shift */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-100 tracking-tight">
            Beyond Generic Fitness.
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mt-4">
            Standard fitness plans lack true personalization and adaptability. Your unique potential remains untapped.
          </p>
          <p className="text-lg lg:text-xl text-blue-500 mt-6 font-medium">
            It's time for a revolutionary approach.
          </p>
        </div>

        {/* Separator / Spacing */}
        <div className="my-12 sm:my-16"></div>

        {/* Section 2: Introducing Aura AI */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-100 tracking-tight">
            Aura AI: Your Personal Jarvis for Health & Fitness.
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mt-4">
            Aura AI isn't just an app; it's your dedicated team of intelligent AI agents, collaborating to architect your optimal path to fitness, health, and longevity.
          </p>
          <p className="text-lg lg:text-xl text-gray-300 mt-4">
            Imagine a system that doesn't just track, but understands, adapts, and strategizes with you, for you.
          </p>
        </div>
      </div>
    </div>
  );
}
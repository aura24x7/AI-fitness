import React from 'react';
// Removed unused icons: Users, Brain, Trophy
// Removed unused Card components

// Removed overviewPoints array as it's no longer used

export default function Overview() {
  return (
    <div id="overview" className="py-20 md:py-24"> {/* Consistent padding, removed old bg-gray-900 */}
      <div className="container mx-auto px-6">
        {/* Changed to a single-column, centered layout */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A New Era of Personalized Health, Powered by AI Agents.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our platform isn't just another health app. It's a sophisticated ecosystem of 
            specialized AI agents working in concert to understand you, adapt to your unique needs, 
            and guide you towards holistic well-being. From crafting the perfect meal plan 
            to dynamically adjusting your workouts and providing insightful progress analysis, 
            experience a truly integrated and intelligent health companion.
          </p>
          {/* Removed the mapped Card components (overviewPoints) */}
        </div>
        {/* Removed the entire image div and its parent column */}
      </div>
    </div>
  );
}
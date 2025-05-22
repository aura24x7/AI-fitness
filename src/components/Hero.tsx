import React, { useCallback } from 'react'; // Removed useEffect and useState
import { ArrowRight, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Particles from "@tsparticles/react"; // Updated import
import { loadSlim } from "@tsparticles/slim"; // Updated import
import { particlesConfig } from "@/lib/particles-config";
import type { Engine, Container } from "@tsparticles/engine"; // Engine and Container types

export default function Hero() {
  // Removed init state and useEffect for initParticlesEngine

  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine); // For debugging if needed
    // loads the tsparticles package bundle, it's a bare bundle
    // adding an empty bundle will load the default options, which are static particles with no interactions
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => { // Updated prop name and type
    // await console.log("Particles loaded", container); // For debugging if needed
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-12 md:py-24">
      {/* Particles component now directly uses init and loaded props */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="absolute inset-0 -z-10" // Ensure particles are in the background
      />
      
      <div className="container mx-auto px-6 relative z-10"> {/* Content must have higher z-index */}
        {/* Increased max-width for a wider text column, centered text */}
        <div className="max-w-5xl mx-auto">
          {/* Removed md:flex-row and gap-12 as it's a single column layout now */}
          <div className="flex flex-col items-center"> {/* Centering content */}
            <div className="text-center"> {/* Ensure all text content is centered */}
              <Badge 
                variant="outline" 
                className="bg-primary/10 border-primary/30 text-primary py-2 px-4 mb-8"
              >
                <Info className="w-4 h-4 mr-2 text-primary" /> {/* Explicitly set icon color */}
                Beta Access Soon
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
                Meet Your AI Multi-Agent Health Companion.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Our revolutionary AI platform brings together specialized agents for meal planning, 
                dynamic exercise routines, and precise progress tracking, creating a truly 
                personalized and adaptive health journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  // Removed hover:scale-105 for a more static feel
                >
                  Join Waitlist <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-border hover:bg-accent/10 text-accent font-semibold"
                  // Example: "border border-primary text-primary hover:bg-primary/10"
                  // Using border-border and text-accent for a slightly different secondary style
                >
                  Explore Features
                </Button>
              </div>
            </div>

            {/* Removed the entire right pane (image visual area) */}
            {/* <div className="flex-1 relative"> ... </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
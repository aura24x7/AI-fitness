import React from 'react';
// import Image from 'next/image'; // Removed unused Next.js Image import
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { agentsData, Agent } from "@/data/agents";

export default function Agents() {
  return (
    <div id="agents" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Your AI Specialist Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated AI agents work tirelessly to provide you with a truly personalized
            and adaptive health journey. Each specialist contributes unique expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {agentsData.map((agent: Agent) => (
            <Card 
              key={agent.id} 
              className="group bg-card border border-border flex flex-col overflow-hidden h-full" // Added h-full for consistent height if needed by grid
            >
              <CardHeader className="p-0 relative"> {/* Remove padding for image to fill */}
                {/* Placeholder for Image - Using a simple div for now if next/image is problematic without Next.js setup */}
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  {/* In a real Next.js app, <Image /> would be here. For static Vite, use <img> */}
                  <img 
                    src={agent.image} 
                    alt={`${agent.name} - Placeholder`} 
                    className="object-contain h-32 w-32 text-muted-foreground" // Basic styling for SVG placeholder
                  /> 
                </div>
                {/* Optional: A colored strip at the bottom of the header, if agent.accentColor is used */}
                {/* {agent.accentColor && <div className="h-2" style={{ backgroundColor: agent.accentColor }} />} */}
              </CardHeader>
              
              <CardContent className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                <div className="mb-3">
                  <CardTitle className="text-xl font-semibold text-foreground mb-1">{agent.name}</CardTitle>
                  <p className="text-xs text-muted-foreground font-mono tracking-wider">{agent.id}</p>
                </div>
                
                {agent.specialty && (
                  <Badge 
                    variant="secondary" // Or "outline" with primary color
                    className="mb-3 w-fit bg-primary/10 text-primary border-primary/30" // Custom styling for visibility
                  >
                    {agent.specialty}
                  </Badge>
                )}
                
                <CardDescription className="text-sm text-muted-foreground flex-grow"> {/* Added flex-grow */}
                  {agent.bio}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

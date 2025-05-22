import React from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <Features />
      <Waitlist />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
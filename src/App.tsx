import React from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import HowItWorks from './components/HowItWorks'; // Added import
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen"> {/* Removed bg-gray-900 and text-white */}
      <Hero />
      <Overview />
      <HowItWorks /> {/* Replaced Features */}
      <Waitlist />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
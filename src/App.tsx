import React from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
// import Features from './components/Features'; // Removed Features import
import Agents from './components/Agents'; // Import the new Agents component
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      {/* <Features /> */} {/* Removed Features component */}
      <Agents /> {/* Add the Agents component here */}
      <Waitlist />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
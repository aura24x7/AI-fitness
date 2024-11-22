import React from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Overview />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101010] py-8 text-center"> {/* Slightly darker than #1A1A1A for subtle separation, or use #1A1A1A if preferred */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} Aura AI. All Rights Reserved.
          </p>
          <div className="flex space-x-3">
            <a 
              href="#" 
              className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-sm text-neutral-500">|</span>
            <a 
              href="#" 
              className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
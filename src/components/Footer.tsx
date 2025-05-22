import React from 'react';
// Removed unused icons: Github, Twitter, Instagram, Linkedin
// Removed unused Button component
// Removed footerSections and socialLinks arrays

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border"> {/* Updated background and border color */}
      <div className="container mx-auto px-6 py-8 md:py-12"> {/* Consistent padding */}
        {/* Removed complex grid layout, company branding, social links, and footer sections */}
        {/* The main div is now centered and contains only the copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground"> {/* Updated text color */}
            © {new Date().getFullYear()} HealthAI Companion. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
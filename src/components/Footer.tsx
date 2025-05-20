import React from 'react';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Company",
    links: ["About", "Careers", "Press"]
  },
  {
    title: "Resources",
    links: ["Blog", "Community", "Contact"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "Github" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-purple-500/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-bold text-white">FitAI</h3>
            <p className="text-gray-400 text-sm">
              Revolutionizing fitness through AI and community engagement.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Button 
                      variant="link" 
                      asChild 
                      className="p-0 h-auto text-gray-400 hover:text-purple-400 font-normal text-sm hover:no-underline"
                    >
                      <a href="#">{link}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700"> {/* Slightly lighter border */}
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} FitAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
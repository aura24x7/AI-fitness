import React from 'react';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-purple-500/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">FitAI</h3>
            <p className="text-gray-400">
              Revolutionizing fitness through AI and community engagement.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {[
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
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} FitAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
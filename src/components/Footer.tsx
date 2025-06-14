import React from 'react';
import { Heart, Github, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Sainudeen Safar A
            </h3>
            <p className="text-gray-400 leading-relaxed">
              DevOps Engineer passionate about building scalable, reliable, and efficient 
              infrastructure solutions for modern applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('skills');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              <a 
                href="https://linkedin.com/in/sainudeensafar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} className="mr-3" />
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/sainupopzienz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <Github size={20} className="mr-3" />
                GitHub Repository
              </a>
              <a 
                href="https://sainu.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Globe size={20} className="mr-3" />
                Personal Website
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500 mx-2" size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Sainudeen Safar A. All rights reserved.
            </div>
          </div>
        </div>

        {/* Certifications Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-full px-6 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">RHCSA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">RHCE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">CKA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
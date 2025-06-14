import React from 'react';
import { ChevronDown, Award, Calendar, GraduationCap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 pb-16">
      <div className="container mx-auto px-6 flex items-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
              <div className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-teal-600 bg-clip-text text-transparent">
                SS
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Sainudeen Safar A
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
            DevOps Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate DevOps Engineer with 2+ years of experience in cloud infrastructure, 
            containerization, and CI/CD automation. Specialized in AWS, Kubernetes, Docker, 
            and Infrastructure as Code.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Calendar className="text-blue-600" size={20} />
              <span className="text-gray-700 font-medium">2+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Award className="text-green-600" size={20} />
              <span className="text-gray-700 font-medium">RHCSA, RHCE, CKA</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <GraduationCap className="text-purple-600" size={20} />
              <span className="text-gray-700 font-medium">BCom Graduate</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="text-gray-400 hover:text-gray-600 transition-colors duration-200" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
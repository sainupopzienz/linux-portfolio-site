import React from 'react';
import { Server, Cloud, Code, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="text-blue-600" size={24} />,
      title: "Infrastructure Management",
      description: "Expert in Linux administration across CentOS, Fedora, RHEL, and Ubuntu systems"
    },
    {
      icon: <Cloud className="text-teal-600" size={24} />,
      title: "Cloud Architecture",
      description: "Extensive experience with AWS cloud services and Infrastructure as Code using Terraform"
    },
    {
      icon: <Code className="text-purple-600" size={24} />,
      title: "DevOps Automation",
      description: "Proficient in CI/CD pipelines using GitLab and Jenkins for seamless deployment workflows"
    },
    {
      icon: <Shield className="text-green-600" size={24} />,
      title: "Container Orchestration",
      description: "Skilled in Docker containerization and Kubernetes orchestration with kubeadm and EKS"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated DevOps professional committed to building robust, scalable, 
            and efficient infrastructure solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Ideas into Reality
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 2 years of hands-on experience in DevOps engineering, I specialize in 
                creating and maintaining cloud-native infrastructure that powers modern applications. 
                My journey began with a strong foundation in Linux systems administration and has 
                evolved to encompass the full spectrum of DevOps practices.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm passionate about automation, monitoring, and building systems that scale. 
                My certifications in RHCSA, RHCE, and CKA demonstrate my commitment to continuous 
                learning and staying current with industry best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-3">
                    {highlight.icon}
                    <h4 className="font-semibold text-gray-900 ml-3">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Education</h4>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Bachelor of Commerce</h5>
                    <p className="text-gray-600">Completed in 2021</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Red Hat Certified System Administrator (RHCSA)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Red Hat Certified Engineer (RHCE)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Certified Kubernetes Administrator (CKA)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
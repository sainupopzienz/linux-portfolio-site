import React from 'react';
import { ExternalLink, Users, Building, Plane, CreditCard, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "VideoKYC Platform",
      description: "Enterprise-grade video KYC solution enabling customers to complete digital identity verification remotely. Implemented robust infrastructure to handle high-volume verification processes.",
      icon: <Shield className="text-green-600" size={32} />,
      clients: ["India's Leading Banks", "International Banks", "Mnc's"],
      technologies: ["AWS", "Kubernetes", "Docker", "CI/CD", "Monitoring"],
      highlights: [
        "Scalable infrastructure for multiple banking clients",
        "High-availability deployment with zero downtime",
        "Automated CI/CD pipelines for rapid deployment",
        "Comprehensive monitoring and alerting"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "SIB-FD Account Opening",
      description: "Streamlined digital account opening platform for State Bank of India's Fixed Deposit services, focusing on user experience and backend reliability.",
      icon: <Building className="text-blue-600" size={32} />,
      clients: ["India's Leading Bank"],
      technologies: ["Linux", "Docker", "Jenkins", "AWS", "Terraform"],
      highlights: [
        "Automated infrastructure provisioning",
        "Secure and compliant deployment",
        "Performance optimization for high traffic",
        "Integration with banking systems"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Booking System",
      description: "Sophisticated booking and reservation system for a Japan-based client, handling complex scheduling and inventory management requirements.",
      icon: <Plane className="text-purple-600" size={32} />,
      clients: ["Japan-based Client"],
      technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana", "Loki"],
      highlights: [
        "Multi-region deployment architecture",
        "Real-time booking and inventory tracking",
        "Advanced monitoring and logging setup",
        "Load testing and performance optimization"
      ],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Document Extraction Platform",
      description: "AI-powered platform for extracting and processing information from Aadhaar cards and passports, serving multiple high-profile clients across different sectors.",
      icon: <CreditCard className="text-orange-600" size={32} />,
      clients: ["International Business Groups", "Prominent Banks", "Dubai Based Client"],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      highlights: [
        "Multi-tenant architecture for diverse clients",
        "Secure document processing pipeline",
        "International deployment (Dubai)",
        "Scalable ML inference infrastructure"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Dedupe System",
      description: "Data deduplication and management system for Kerala State Financial Enterprises, ensuring data integrity and optimizing storage efficiency.",
      icon: <Users className="text-teal-600" size={32} />,
      clients: ["Kerala State Government Institution"],
      technologies: ["Linux", "Docker", "GitLab CI", "Monitoring", "Scripting"],
      highlights: [
        "Large-scale data processing capabilities",
        "Automated deduplication algorithms",
        "Robust backup and recovery systems",
        "Performance monitoring and optimization"
      ],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world DevOps implementations across banking, fintech, and enterprise sectors
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`}></div>
              
              {/* Content Side */}
              <div className="flex-1 p-8 lg:p-12 bg-white relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                    {project.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.clients.map((client, clientIndex) => (
                        <span 
                          key={clientIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2.5 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium shadow-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 bg-gray-50 p-8 lg:p-12 flex items-center justify-center relative">
                <div className={`w-full max-w-md mx-auto bg-gradient-to-br ${project.color} rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                      {React.cloneElement(project.icon, { className: "text-white", size: 40 })}
                    </div>
                    <h5 className="text-xl font-bold mb-4">{project.title}</h5>
                    <div className="space-y-3 text-sm opacity-90">
                      <div className="flex justify-between">
                        <span>Infrastructure:</span>
                        <span>Cloud-Native</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deployment:</span>
                        <span>Automated</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monitoring:</span>
                        <span>24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Clients:</span>
                        <span>{project.clients.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Project Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">8+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

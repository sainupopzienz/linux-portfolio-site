import React from 'react';
import { 
  Terminal, 
  GitBranch, 
  Cloud, 
  Box, 
  Settings, 
  Container, 
  BarChart3, 
  FileText, 
  Zap, 
  Code 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Operating Systems",
      icon: <Terminal className="text-gray-800" size={24} />,
      skills: ["CentOS", "Fedora", "RHEL", "Ubuntu"],
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-orange-600" size={24} />,
      skills: ["Git", "GitHub", "GitLab"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-blue-600" size={24} />,
      skills: ["AWS", "EC2", "S3", "VPC", "IAM"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Infrastructure as Code",
      icon: <Box className="text-purple-600" size={24} />,
      skills: ["Terraform", "CloudFormation", "Ansible"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Containerization",
      icon: <Container className="text-blue-500" size={24} />,
      skills: ["Docker", "Docker Compose", "Container Registries"],
      color: "from-blue-400 to-cyan-600"
    },
    {
      title: "CI/CD",
      icon: <Settings className="text-green-600" size={24} />,
      skills: ["GitLab CI", "Jenkins", "GitHub Actions"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Orchestration",
      icon: <Zap className="text-indigo-600" size={24} />,
      skills: ["Kubernetes", "kubeadm", "EKS", "Helm"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Monitoring",
      icon: <BarChart3 className="text-red-600" size={24} />,
      skills: ["Prometheus", "Grafana", "Uptime Kuma"],
      color: "from-red-500 to-red-700"
    },
    {
      title: "Logging",
      icon: <FileText className="text-yellow-600" size={24} />,
      skills: ["Loki", "ELK Stack", "Fluentd"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Performance Testing",
      icon: <Zap className="text-pink-600" size={24} />,
      skills: ["K6", "Load Testing", "Performance Monitoring"],
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Programming",
      icon: <Code className="text-teal-600" size={24} />,
      skills: ["Bash Scripting", "Python", "YAML", "JSON"],
      color: "from-teal-500 to-teal-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps and cloud infrastructure management
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(Math.random() * 2) + 3 
                                ? `bg-gradient-to-r ${category.color}` 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Cloud Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                <div className="text-gray-600">DevOps Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-gray-600">Linux Distros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-600">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
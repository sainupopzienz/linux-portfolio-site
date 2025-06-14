import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Code,
  Play,
  CheckCircle
} from 'lucide-react';

const AnimatedSkills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState('');

  const skillCategories = [
    {
      title: "Operating Systems",
      icon: <Terminal className="text-gray-800" size={24} />,
      skills: ["CentOS", "Fedora", "RHEL", "Ubuntu"],
      color: "from-gray-600 to-gray-800",
      command: "uname -a && lsb_release -a",
      description: "Linux system administration across multiple distributions"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-orange-600" size={24} />,
      skills: ["Git", "GitHub", "GitLab"],
      color: "from-orange-500 to-red-600",
      command: "git --version && git log --oneline -5",
      description: "Source code management and collaboration"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-blue-600" size={24} />,
      skills: ["AWS", "EC2", "S3", "VPC", "IAM"],
      color: "from-blue-500 to-blue-700",
      command: "aws --version && aws ec2 describe-instances",
      description: "Cloud infrastructure and services"
    },
    {
      title: "Infrastructure as Code",
      icon: <Box className="text-purple-600" size={24} />,
      skills: ["Terraform", "CloudFormation", "Ansible"],
      color: "from-purple-500 to-purple-700",
      command: "terraform version && terraform plan",
      description: "Automated infrastructure provisioning"
    },
    {
      title: "Containerization",
      icon: <Container className="text-blue-500" size={24} />,
      skills: ["Docker", "Docker Compose", "Container Registries"],
      color: "from-blue-400 to-cyan-600",
      command: "docker --version && docker ps -a",
      description: "Application containerization and deployment"
    },
    {
      title: "CI/CD",
      icon: <Settings className="text-green-600" size={24} />,
      skills: ["GitLab CI", "Jenkins", "GitHub Actions"],
      color: "from-green-500 to-green-700",
      command: "jenkins --version && gitlab-runner --version",
      description: "Continuous integration and deployment"
    },
    {
      title: "Orchestration",
      icon: <Zap className="text-indigo-600" size={24} />,
      skills: ["Kubernetes", "kubeadm", "EKS", "Helm"],
      color: "from-indigo-500 to-indigo-700",
      command: "kubectl version && helm version",
      description: "Container orchestration and management"
    },
    {
      title: "Monitoring",
      icon: <BarChart3 className="text-red-600" size={24} />,
      skills: ["Prometheus", "Grafana", "Uptime Kuma"],
      color: "from-red-500 to-red-700",
      command: "prometheus --version && grafana-server --version",
      description: "System monitoring and alerting"
    }
  ];

  const executeCommand = (categoryIndex: number) => {
    const category = skillCategories[categoryIndex];
    setTerminalOutput(`$ ${category.command}\n\n✓ ${category.title} tools initialized\n✓ Configuration validated\n✓ Services running`);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">$</span>{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ./list_skills.sh
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-yellow-400">#</span> Comprehensive DevOps toolkit for modern infrastructure
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skills Categories */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 cursor-pointer transition-all duration-300 ${
                      activeCategory === index ? 'border-green-400 bg-gray-800/80' : 'hover:border-gray-600'
                    }`}
                    onClick={() => {
                      setActiveCategory(index);
                      executeCommand(index);
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20 border border-gray-600`}>
                        {category.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white font-mono">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                        >
                          <div className="flex items-center">
                            <CheckCircle className="text-green-400 mr-3" size={16} />
                            <span className="text-gray-300 font-mono">{skill}</span>
                          </div>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: (skillIndex * 0.1) + (i * 0.05) }}
                                className={`w-2 h-2 rounded-full ${
                                  i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-mono text-sm hover:shadow-lg transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        executeCommand(index);
                      }}
                    >
                      <Play size={16} />
                      <span>Execute</span>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Terminal Output */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="sticky top-24"
              >
                <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
                  {/* Terminal Header */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center ml-4 text-gray-400 text-sm font-mono">
                      <Terminal size={16} className="mr-2" />
                      <span>skills-terminal</span>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-sm h-96 overflow-y-auto">
                    <div className="text-green-400 mb-4">
                      sainu@devops:~$ ./check_skills.sh
                    </div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-cyan-300 whitespace-pre-line"
                      >
                        {terminalOutput || `Welcome to Skills Terminal\n\nClick on any skill category to execute commands\nand see detailed information.\n\n> Ready for input...`}
                      </motion.div>
                    </AnimatePresence>

                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-green-400 mt-2"
                    ></motion.div>
                  </div>
                </div>

                {/* System Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                >
                  <h4 className="text-lg font-bold text-white mb-4 font-mono">System Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-mono">Categories:</span>
                      <span className="text-green-400 font-mono">{skillCategories.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-mono">Total Skills:</span>
                      <span className="text-blue-400 font-mono">
                        {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-mono">Experience:</span>
                      <span className="text-purple-400 font-mono">2+ Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-mono">Status:</span>
                      <span className="text-green-400 font-mono flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        Active
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSkills;
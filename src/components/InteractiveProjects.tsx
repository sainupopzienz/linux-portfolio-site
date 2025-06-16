import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Users, 
  Building, 
  Plane, 
  CreditCard, 
  Shield,
  Terminal,
  Play,
  Code,
  Server,
  Database,
  GitBranch
} from 'lucide-react';

const InteractiveProjects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [terminalActive, setTerminalActive] = useState(false);

  const projects = [
    {
      title: "VideoKYC Platform",
      description: "Enterprise-grade video KYC solution enabling customers to complete digital identity verification remotely.",
      icon: <Shield className="text-green-400" size={32} />,
      clients: ["India's Leading Banks", "International Banks", "Mnc's"],
      technologies: ["AWS", "Kubernetes", "Docker", "CI/CD", "Monitoring"],
      architecture: ["Microservices", "Load Balancer", "Auto Scaling", "RDS"],
      metrics: { uptime: "99.9%", users: "10K+", deployments: "50+" },
      terminalCommands: [
        "kubectl get pods -n videokyc",
        "docker ps | grep kyc-service",
        "aws ec2 describe-instances --filters 'Name=tag:Project,Values=VideoKYC'",
        "prometheus-query 'up{job=\"kyc-api\"}'"
      ],
      color: "from-green-500 to-emerald-600",
      bgPattern: "bg-green-500/10"
    },
    {
      title: "SIB-FD Account Opening",
      description: "Streamlined digital account opening platform for State Bank of India's Fixed Deposit services.",
      icon: <Building className="text-blue-400" size={32} />,
      clients: ["India's Leading Bank"],
      technologies: ["Linux", "Docker", "Jenkins", "AWS", "Terraform"],
      architecture: ["Monolithic", "CDN", "Database Cluster", "Backup"],
      metrics: { uptime: "99.8%", transactions: "5K+", response: "<2s" },
      terminalCommands: [
        "terraform plan -var-file=sib-fd.tfvars",
        "jenkins build SIB-FD-Pipeline",
        "docker logs sib-fd-app --tail 100",
        "aws rds describe-db-instances --db-instance-identifier sib-fd-db"
      ],
      color: "from-blue-500 to-blue-700",
      bgPattern: "bg-blue-500/10"
    },
    {
      title: "Booking System",
      description: "Sophisticated booking and reservation system for a Japan-based client with complex scheduling requirements.",
      icon: <Plane className="text-purple-400" size={32} />,
      clients: ["Japan-based Client"],
      technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana", "Loki"],
      architecture: ["Multi-region", "Event-driven", "Cache Layer", "API Gateway"],
      metrics: { regions: "3", bookings: "1K+", latency: "<500ms" },
      terminalCommands: [
        "helm list -n booking-system",
        "kubectl get ingress -n japan-booking",
        "grafana-cli admin reset-admin-password",
        "loki-canary -addr=http://loki:3100"
      ],
      color: "from-purple-500 to-indigo-600",
      bgPattern: "bg-purple-500/10"
    },
    {
      title: "Document Extraction Platform",
      description: "AI-powered platform for extracting and processing information from Aadhaar cards and passports.",
      icon: <CreditCard className="text-orange-400" size={32} />,
      clients: ["International Business Groups", "Prominent Banks", "Dubai Based Client", "Dubai Racing Club"],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      architecture: ["Serverless", "ML Pipeline", "Queue System", "Storage"],
      metrics: { accuracy: "98%", processed: "100K+", clients: "3" },
      terminalCommands: [
        "aws lambda list-functions --region us-east-1",
        "kubectl get jobs -n document-processing",
        "terraform state list | grep extraction",
        "python ml_pipeline.py --validate"
      ],
      color: "from-orange-500 to-red-600",
      bgPattern: "bg-orange-500/10"
    },
    {
      title: "Dedupe System",
      description: "Data deduplication and management system for Kerala State Financial Enterprises.",
      icon: <Users className="text-teal-400" size={32} />,
      clients: ["Kerala State Government Institution"],
      technologies: ["Linux", "Docker", "GitLab CI", "Monitoring", "Scripting"],
      architecture: ["Batch Processing", "Data Pipeline", "Scheduler", "Reporting"],
      metrics: { efficiency: "85%", records: "1M+", storage: "60% saved" },
      terminalCommands: [
        "gitlab-runner status",
        "docker exec -it dedupe-service bash",
        "crontab -l | grep dedupe",
        "df -h /data/dedupe-storage"
      ],
      color: "from-teal-500 to-cyan-600",
      bgPattern: "bg-teal-500/10"
    }
  ];

  const executeTerminalCommand = (command: string) => {
    setTerminalActive(true);
    // Simulate command execution
    setTimeout(() => setTerminalActive(false), 2000);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
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
              ls -la /projects/
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-yellow-400">#</span> Production deployments across enterprise clients
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Project Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center">
                  <Terminal className="mr-2 text-green-400" size={20} />
                  Projects
                </h3>
                <div className="space-y-2">
                  {projects.map((project, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProject(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 font-mono text-sm ${
                        selectedProject === index
                          ? 'bg-green-400/20 border border-green-400 text-green-400'
                          : 'bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="mr-3">
                          {React.cloneElement(project.icon, { size: 16 })}
                        </div>
                        <div>
                          <div className="font-semibold">{project.title}</div>
                          <div className="text-xs text-gray-400">
                            {project.clients.length} client{project.clients.length > 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Project Header */}
                  <div className={`${projects[selectedProject].bgPattern} rounded-xl p-8 border border-gray-700`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${projects[selectedProject].color} bg-opacity-20 border border-gray-600`}>
                          {projects[selectedProject].icon}
                        </div>
                        <div className="ml-6">
                          <h3 className="text-3xl font-bold text-white mb-2 font-mono">
                            {projects[selectedProject].title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {projects[selectedProject].clients.map((client, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full font-mono border border-gray-600"
                              >
                                {client}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {projects[selectedProject].description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(projects[selectedProject].metrics).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                        >
                          <div className="text-2xl font-bold text-white font-mono">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Technologies */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-bold text-white mb-4 font-mono flex items-center">
                        <Code className="mr-2 text-blue-400" size={20} />
                        Technologies
                      </h4>
                      <div className="space-y-2">
                        {projects[selectedProject].technologies.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center p-2 bg-gray-700/50 rounded-lg"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[selectedProject].color} mr-3`}></div>
                            <span className="text-gray-300 font-mono">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-bold text-white mb-4 font-mono flex items-center">
                        <Server className="mr-2 text-purple-400" size={20} />
                        Architecture
                      </h4>
                      <div className="space-y-2">
                        {projects[selectedProject].architecture.map((arch, index) => (
                          <motion.div
                            key={arch}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center p-2 bg-gray-700/50 rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                            <span className="text-gray-300 font-mono">{arch}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Terminal Commands */}
                  <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                    <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center ml-4 text-gray-400 text-sm font-mono">
                        <Terminal size={16} className="mr-2" />
                        <span>{projects[selectedProject].title.toLowerCase().replace(/\s+/g, '-')}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="space-y-3">
                        {projects[selectedProject].terminalCommands.map((command, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                          >
                            <div className="flex items-center">
                              <span className="text-green-400 mr-2 font-mono">$</span>
                              <span className="text-gray-300 font-mono text-sm">{command}</span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => executeTerminalCommand(command)}
                              className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors duration-200"
                            >
                              <Play size={16} />
                            </motion.button>
                          </motion.div>
                        ))}
                      </div>

                      {terminalActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-3 bg-gray-800 rounded-lg border border-green-400"
                        >
                          <div className="text-green-400 font-mono text-sm">
                            <div className="flex items-center">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full mr-2"
                              ></motion.div>
                              Executing command...
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProjects;

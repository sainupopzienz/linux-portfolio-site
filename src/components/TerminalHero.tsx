import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight, User, Server, Zap, Shield } from 'lucide-react';

const TerminalHero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    { 
      cmd: 'whoami', 
      output: 'sainudeen-safar-a',
      description: 'DevOps Engineer'
    },
    { 
      cmd: 'cat /proc/experience', 
      output: '2+ years in DevOps & Cloud Infrastructure',
      description: 'Professional Experience'
    },
    { 
      cmd: 'ls -la /skills/', 
      output: 'AWS • Kubernetes • Docker • Terraform • CI/CD',
      description: 'Core Technologies'
    },
    { 
      cmd: 'grep -r "certifications" /home/sainu/', 
      output: 'RHCSA • RHCE • CKA',
      description: 'Professional Certifications'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const command = commands[currentCommand];
    let index = 0;
    setDisplayText('');

    const typeInterval = setInterval(() => {
      if (index <= command.cmd.length) {
        setDisplayText(command.cmd.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentCommand]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-green-400 pt-20 pb-16 relative overflow-hidden">
      {/* Matrix-like background animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 font-mono text-xs"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ 
              y: window.innerHeight + 100,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 flex items-center min-h-screen relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Terminal Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center ml-4 text-gray-400 text-sm">
                  <Terminal size={16} className="mr-2" />
                  <span>sainu@devops-portfolio:~$</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4 h-80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCommand}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center text-green-400">
                      <ChevronRight size={16} className="mr-2" />
                      <span>{displayText}</span>
                      {showCursor && <span className="bg-green-400 w-2 h-4 ml-1 animate-pulse"></span>}
                    </div>
                    
                    {displayText === commands[currentCommand].cmd && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-2 ml-4 text-cyan-300"
                      >
                        {commands[currentCommand].output}
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* System Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8 text-gray-500 text-xs space-y-1"
                >
                  <div>Linux devops-machine 5.15.0-generic #72-Ubuntu</div>
                  <div>Last login: {new Date().toLocaleDateString()} from 192.168.1.100</div>
                  <div className="text-yellow-400">Welcome to Sainudeen's DevOps Environment</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Profile Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-32 h-32 mx-auto lg:mx-0 mb-8 relative"
              >
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center border-2 border-green-400">
                    <User className="text-green-400" size={40} />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-green-400 rounded-full"
                ></motion.div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Sainudeen Safar A
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl lg:text-2xl text-gray-300 mb-6 font-mono"
              >
                <span className="text-green-400">$</span> DevOps Engineer
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl"
              >
                Architecting scalable cloud infrastructure with 2+ years of hands-on experience 
                in AWS, Kubernetes, and DevOps automation. Certified in RHCSA, RHCE, and CKA.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
              >
                {[
                  { icon: <Server className="text-blue-400" size={20} />, value: '2+', label: 'Years' },
                  { icon: <Zap className="text-yellow-400" size={20} />, value: '5+', label: 'Projects' },
                  { icon: <Shield className="text-green-400" size={20} />, value: '3', label: 'Certs' },
                  { icon: <Terminal className="text-purple-400" size={20} />, value: '10+', label: 'Tools' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Terminal size={20} />
                  <span>./view_projects.sh</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>sudo contact</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          className="text-green-400 hover:text-green-300 transition-colors duration-200"
        >
          <ChevronRight className="rotate-90" size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default TerminalHero;
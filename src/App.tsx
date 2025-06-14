import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeader from './components/AnimatedHeader';
import TerminalHero from './components/TerminalHero';
import About from './components/About';
import AnimatedSkills from './components/AnimatedSkills';
import InteractiveProjects from './components/InteractiveProjects';
import TerminalContact from './components/TerminalContact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <MatrixBackground />
      <div className="relative z-10">
        <AnimatedHeader />
        <TerminalHero />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>
        <AnimatedSkills />
        <InteractiveProjects />
        <TerminalContact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
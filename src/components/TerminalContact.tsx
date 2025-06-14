import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Globe, 
  Send, 
  CheckCircle, 
  Terminal,
  User,
  AtSign,
  MessageSquare,
  FileText
} from 'lucide-react';

const TerminalContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const formSteps = [
    { field: 'name', prompt: 'Enter your name:', icon: <User size={16} />, type: 'text' },
    { field: 'email', prompt: 'Enter your email:', icon: <AtSign size={16} />, type: 'email' },
    { field: 'subject', prompt: 'Enter subject:', icon: <FileText size={16} />, type: 'text' },
    { field: 'message', prompt: 'Enter your message:', icon: <MessageSquare size={16} />, type: 'textarea' }
  ];

  useEffect(() => {
    setTerminalOutput([
      '$ ./contact_form.sh',
      'Initializing secure contact form...',
      '✓ SSL encryption enabled',
      '✓ Form validation ready',
      '✓ Ready for input',
      '',
      formSteps[currentStep].prompt
    ]);
  }, [currentStep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setTerminalOutput(prev => [
      ...prev,
      '',
      '$ sending_message...',
      'Validating form data...',
      '✓ Name: ' + formData.name,
      '✓ Email: ' + formData.email,
      '✓ Subject: ' + formData.subject,
      '✓ Message length: ' + formData.message.length + ' characters',
      '',
      'Establishing secure connection...',
      '✓ Message sent successfully!',
      'Thank you for reaching out. I\'ll get back to you soon.',
      '',
      '$ _'
    ]);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      info: "sainudeensafar@example.com",
      link: "mailto:sainudeensafar@example.com",
      command: "mail -s 'Hello' sainudeensafar@example.com"
    },
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      title: "LinkedIn",
      info: "linkedin.com/in/sainudeensafar",
      link: "https://linkedin.com/in/sainudeensafar",
      command: "curl -X GET 'https://linkedin.com/in/sainudeensafar'"
    },
    {
      icon: <Github className="text-gray-300" size={24} />,
      title: "GitHub",
      info: "github.com/sainupopzienz",
      link: "https://github.com/sainupopzienz",
      command: "git clone https://github.com/sainupopzienz"
    },
    {
      icon: <Globe className="text-teal-400" size={24} />,
      title: "Website",
      info: "sainu.xyz",
      link: "https://sainu.xyz",
      command: "curl -I https://sainu.xyz"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
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
              ./connect.sh
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-yellow-400">#</span> Establishing secure communication channels
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
                <Terminal className="mr-3 text-green-400" size={28} />
                Available Channels
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-200">
                          {contact.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors duration-200 font-mono">
                            {contact.title}
                          </h4>
                          <p className="text-gray-400 font-mono text-sm">{contact.info}</p>
                        </div>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                        <span className="text-green-400">$</span>{' '}
                        <span className="text-gray-300">{contact.command}</span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* System Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h4 className="text-lg font-bold text-white mb-4 font-mono">System Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-mono">Availability:</span>
                    <div className="flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-400 rounded-full mr-2"
                      />
                      <span className="text-green-400 font-mono">ONLINE</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-mono">Response Time:</span>
                    <span className="text-blue-400 font-mono">&lt; 24h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-mono">Timezone:</span>
                    <span className="text-purple-400 font-mono">IST (UTC+5:30)</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Terminal Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center ml-4 text-gray-400 text-sm font-mono">
                  <Terminal size={16} className="mr-2" />
                  <span>contact-form</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-96 overflow-y-auto">
                <div className="font-mono text-sm space-y-2">
                  {terminalOutput.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`${
                        line.startsWith('$') ? 'text-green-400' :
                        line.startsWith('✓') ? 'text-cyan-300' :
                        line.startsWith('#') ? 'text-yellow-400' :
                        'text-gray-300'
                      }`}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>

                {!isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6"
                  >
                    <div className="flex items-center mb-3">
                      {formSteps[currentStep].icon}
                      <span className="ml-2 text-gray-400 font-mono">
                        {formSteps[currentStep].field}:
                      </span>
                    </div>
                    
                    {formSteps[currentStep].type === 'textarea' ? (
                      <textarea
                        name={formSteps[currentStep].field}
                        value={formData[formSteps[currentStep].field as keyof typeof formData]}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none resize-none"
                        placeholder="Type your message here..."
                      />
                    ) : (
                      <input
                        type={formSteps[currentStep].type}
                        name={formSteps[currentStep].field}
                        value={formData[formSteps[currentStep].field as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none"
                        placeholder={`Enter ${formSteps[currentStep].field}...`}
                      />
                    )}

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNextStep}
                      className="mt-4 w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-mono hover:shadow-lg transition-all duration-200"
                    >
                      {currentStep < formSteps.length - 1 ? (
                        <>
                          <span>Continue</span>
                          <span className="text-green-200">→</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Execute</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                )}

                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-green-400 mt-2"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalContact;
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Phone, MapPin, Calendar, Coffee, MessageCircle, Send, ArrowRight, Heart } from "lucide-react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const Contact = ({ isDarkMode }) => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const slideIn = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ujwolaryal@gmail.com",
      href: "mailto:ujwolaryal@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      description: "Drop me a line anytime"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ujwol-aryal",
      href: "https://www.linkedin.com/in/ujwol-aryal",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "ujwol1086",
      href: "https://github.com/ujwol1086",
      color: isDarkMode ? "text-gray-200" : "text-gray-800",
      bgColor: isDarkMode ? "bg-gray-500/10" : "bg-gray-500/10",
      description: "Check out my code"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977-9848771734",
      href: "tel:+977-9848771734",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      description: "Call me directly"
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Kathmandu, Nepal",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Calendar,
      title: "Available",
      value: "Open to opportunities",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Coffee,
      title: "Coffee Chats",
      value: "Always welcome!",
      color: "text-amber-600",
      bgColor: "bg-amber-500/10"
    }
  ];

  return (
    <Section
      id="contact"
      className={`py-20 px-4 relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-20 right-10 w-24 h-24 rounded-full ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-16 h-16 rounded-full ${isDarkMode ? 'bg-pink-500' : 'bg-pink-400'}`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          variants={slideIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle>Let's Build Something Amazing Together</SectionTitle>
          
          <motion.p
            className={`text-xl mb-6 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            {...fadeInUp}
          >
            I'm passionate about creating innovative solutions and collaborating on exciting projects. 
            Whether you have a project in mind, want to discuss opportunities, or just want to grab a coffee and chat about tech, 
            I'd love to hear from you!
          </motion.p>

          <motion.div
            className={`inline-flex items-center px-6 py-3 rounded-full ${isDarkMode ? 'bg-green-400' : 'bg-gray-200'} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* <Heart className="w-5 h-5 mr-2 text-red-500" /> */}
            <span className="text-md font-medium">Currently accepting new projects</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isDarkMode 
                      ? 'bg-black/40 backdrop-blur-xl border border-white/10 hover:bg-black/60' 
                      : 'bg-white/80 backdrop-blur-xl border border-gray-200/50 hover:bg-white/90'
                  } shadow-lg hover:shadow-2xl`}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${contact.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {contact.title}
                      </h4>
                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {contact.description}
                      </p>
                      <p className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Info
            </h3>
            
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-white/80'} border ${isDarkMode ? 'border-white/10' : 'border-gray-200/50'}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${info.bgColor}`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {info.title}
                      </p>
                      <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className={`mt-8 p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20' : 'bg-gradient-to-br from-green-50 to-emerald-50'} border ${isDarkMode ? 'border-green-500/20' : 'border-green-200'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className={`font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                  Currently Available
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm actively looking for new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center"
          variants={slideIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-black/40 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-xl border border-gray-200/50'} shadow-2xl`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Start a Project?
            </h3>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Whether it's a full-stack application, a creative design project, or just a friendly chat about technology, 
              I'm here to help bring your ideas to life.
            </p>
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:ujwolaryal@gmail.com"
                className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                } shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Start a Conversation
                <Send className="w-5 h-5 ml-3" />
              </motion.a>

              <motion.a
                href="/Ujwol Aryal - Resume.pdf"
                download
                className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                } shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;

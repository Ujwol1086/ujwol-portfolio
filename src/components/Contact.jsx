import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const Contact = ({ isDarkMode }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <Section
      id="contact"
      className={`py-20 px-4 relative ${isDarkMode ? 'bg-gray-800 ' : 'bg-white '} shadow-lg`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle>Let's Connect</SectionTitle>

        <motion.p
          className={`text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          {...fadeInUp}
        >
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can work together!
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Mail,
              title: "Email",
              value: "ujwolaryal@gmail.com",
              href: "mailto:ujwolaryal@gmail.com",
              color: "text-red-500",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              value: "ujwol-aryal",
              href: "https://www.linkedin.com/in/ujwol-aryal",
              color: "text-blue-600",
            },
            {
              icon: Github,
              title: "GitHub",
              value: "ujwol1086",
              href: "https://github.com/ujwol1086",
              color: isDarkMode ? "text-gray-200" : "text-gray-800",
            },
            {
              icon: Phone,
              title: "Phone",
              value: "+977-9848771734",
              href: "tel:+977-9848771734",
              color: isDarkMode ? "text-gray-200" : "text-gray-800",
            },
          ].map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg hover:shadow-lg transition-all duration-300 block cursor-pointer ${
                isDarkMode 
                  ? 'bg-black/25 backdrop-blur-20 border border-white/10 shadow-lg' 
                  : 'bg-white/15 backdrop-blur-20 border border-white/20 shadow-lg'
              }`}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <contact.icon
                className={`w-8 h-8 mx-auto mb-4 ${contact.color}`}
              />
              <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {contact.title}
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {contact.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="/Ujwol Aryal - Resume.pdf"
          download
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="mr-2 w-5 h-5" />
          Download Resume
        </motion.a>
      </div>
    </Section>
  );
};

export default Contact;

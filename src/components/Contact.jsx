import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, Phone } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <Section id="contact" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle>Let's Connect</SectionTitle>
        
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
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
            { icon: Mail, title: 'Email', value: 'ujwolaryal@gmail.com', color: 'text-red-500' },
            { icon: Linkedin, title: 'LinkedIn', value: 'ujwol-aryal', color: 'text-blue-600' },
            { icon: Github, title: 'GitHub', value: 'ujwol1086', color: 'text-gray-800 dark:text-gray-200' },
            { icon: Phone, title: 'Phone', value: '+977-9848771734', color: 'text-gray-800 dark:text-gray-200' },
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <contact.icon className={`w-8 h-8 mx-auto mb-4 ${contact.color}`} />
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{contact.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button 
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="mr-2 w-5 h-5" />
          Download Resume
        </motion.button>
      </div>
    </Section>
  )
}

export default Contact 
import { motion } from 'framer-motion'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-8 px-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2024 Ujwol Aryal. Built with React, Tailwind CSS & Framer Motion.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer 
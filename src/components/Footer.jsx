import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="text-gray-400"
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
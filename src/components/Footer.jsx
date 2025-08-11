import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          2024 &copy; Ujwol Aryal
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer 
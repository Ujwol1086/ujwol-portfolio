import { motion } from 'framer-motion'

function SectionTitle({ children }) {
  return (
    <motion.h2 
      className="text-4xl font-bold text-center mb-12 gradient-text"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  )
}

export default SectionTitle 
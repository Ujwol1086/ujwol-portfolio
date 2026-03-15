import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1]

function SectionTitle({ children }) {
  return (
    <motion.h2 
      className="text-4xl font-bold text-center mb-12 gradient-text"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: easeOut }}
    >
      {children}
    </motion.h2>
  )
}

export default SectionTitle 
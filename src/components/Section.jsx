import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1]

function Section({ children, className, ...props }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px", amount: 0.1 }}
      transition={{ duration: 0.85, ease: easeOut }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default Section 
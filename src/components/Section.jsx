import { motion } from 'framer-motion'

function Section({ children, className, ...props }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default Section 
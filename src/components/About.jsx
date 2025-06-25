import { motion } from 'framer-motion'
import { Code, Server, Database, Palette } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const About = () => {
  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { name: 'Node.js', icon: Server, color: 'text-green-400', bg: 'bg-green-500/20' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500', bg: 'bg-green-600/20' },
    { name: 'PHP', icon: Server, color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { name: 'CSS/Design', icon: Palette, color: 'text-orange-400', bg: 'bg-orange-500/20' },
  ]

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <Section id="about" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Innovative, passionate, and detail-oriented professional with a solid foundation 
              in Information Technology. I specialize in aligning technology solutions with 
              business objectives and creating user-centric applications.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: 'Frontend', desc: 'HTML, CSS, JavaScript, React', icon: Code },
                { title: 'Backend', desc: 'PHP, Node.js', icon: Server },
                { title: 'Database', desc: 'SQL, MongoDB', icon: Database },
                { title: 'Tools', desc: 'Git, Figma, Adobe Suite', icon: Palette }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass p-4 rounded-lg hover:shadow-lg transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`glass p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 ${tech.bg}`}
                variants={scaleIn}
                whileInView="animate"
                initial="initial"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color}`} />
                <h4 className={`font-semibold ${tech.color}`}>{tech.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default About 
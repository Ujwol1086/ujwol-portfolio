import { motion } from 'framer-motion'
import { Code, Server, Database, Palette } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const About = ({ isDarkMode }) => {
  const techStack = [
    { name: 'React', icon: Code, color: isDarkMode ? 'text-blue-400' : 'text-blue-600', bg: 'bg-blue-500/20' },
    { name: 'Node.js', icon: Server, color: isDarkMode ? 'text-green-400' : 'text-green-600', bg: 'bg-green-500/20' },
    { name: 'JavaScript', icon: Code, color: isDarkMode ? 'text-yellow-400' : 'text-yellow-600', bg: 'bg-yellow-500/20' },
    { name: 'MongoDB', icon: Database, color: isDarkMode ? 'text-green-500' : 'text-green-700', bg: 'bg-green-600/20' },
    { name: 'PHP', icon: Server, color: isDarkMode ? 'text-purple-400' : 'text-purple-600', bg: 'bg-purple-500/20' },
    { name: 'CSS/Design', icon: Palette, color: isDarkMode ? 'text-orange-400' : 'text-orange-600', bg: 'bg-orange-500/20' },
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
    <Section id="about" className={`py-20 px-4 relative ${isDarkMode ? 'bg-gray-800 ' : 'bg-white '} shadow-lg`}>
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
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
                  className={`p-4 rounded-lg hover:shadow-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-black/25 backdrop-blur-20 border border-white/10 shadow-lg' 
                      : 'bg-white/15 backdrop-blur-20 border border-white/20 shadow-lg'
                  }`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className={`w-6 h-6 mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h4 className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.title}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
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
                className={`p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-black/25 backdrop-blur-20 border border-white/10 shadow-lg' 
                    : 'bg-white/15 backdrop-blur-20 border border-white/20 shadow-lg'
                }`}
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
import { motion } from 'framer-motion'
import { Code, Server, Database, Palette, User, Award, Target, Zap, Globe, Heart, Star, TrendingUp } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const About = ({ isDarkMode }) => {
  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-500', bg: 'bg-blue-500/10', level: 'Advanced' },
    { name: 'Node.js', icon: Server, color: 'text-green-500', bg: 'bg-green-500/10', level: 'Advanced' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-500', bg: 'bg-yellow-500/10', level: 'Expert' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600', bg: 'bg-green-600/10', level: 'Intermediate' },
    { name: 'PHP', icon: Server, color: 'text-purple-500', bg: 'bg-purple-500/10', level: 'Advanced' },
    { name: 'UI/UX Design', icon: Palette, color: 'text-orange-500', bg: 'bg-orange-500/10', level: 'Intermediate' },
  ]

  const skills = [
    { title: 'Frontend Development', desc: 'React, HTML5, CSS3, JavaScript, TypeScript', icon: Code, progress: 90 },
    { title: 'Backend Development', desc: 'Node.js, PHP, Express.js, REST APIs', icon: Server, progress: 85 },
    { title: 'Database Management', desc: 'MongoDB, MySQL, PostgreSQL', icon: Database, progress: 80 },
    { title: 'Design & Tools', desc: 'Figma, Adobe Suite, Git, Docker', icon: Palette, progress: 75 }
  ]

  const achievements = [
    { icon: Award, title: '3+ Years', desc: 'Professional Experience', color: 'text-yellow-500' },
    { icon: Target, title: '50+', desc: 'Projects Completed', color: 'text-blue-500' },
    { icon: Zap, title: '24/7', desc: 'Problem Solver', color: 'text-green-500' },
    { icon: Heart, title: '100%', desc: 'Client Satisfaction', color: 'text-red-500' }
  ]

  const slideInLeft = {
    initial: { opacity: 0, x: -100, rotateY: -15 },
    animate: { opacity: 1, x: 0, rotateY: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 100, rotateY: 15 },
    animate: { opacity: 1, x: 0, rotateY: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60, rotateX: -15 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8, rotateZ: -10 },
    animate: { opacity: 1, scale: 1, rotateZ: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const float = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <Section id="about" className={`py-20 px-4 relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className={`absolute top-20 left-10 w-40 h-40 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={`absolute bottom-20 right-10 w-32 h-32 rounded-full ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'}`}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={`absolute top-1/2 left-1/4 w-24 h-24 rounded-full ${isDarkMode ? 'bg-pink-500' : 'bg-pink-400'}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <motion.p
            className={`text-xl max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A passionate full-stack developer with a love for creating innovative solutions and 
            turning complex problems into elegant, user-friendly applications.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info & Skills */}
          <motion.div 
            className="space-y-8"
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Personal Introduction Card */}
            <motion.div
              className={`p-8 rounded-3xl ${isDarkMode ? 'bg-black/40 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-xl border border-gray-200/50'} shadow-2xl transform-gpu`}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                  <User className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Who I Am
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Full-Stack Developer & Problem Solver
                  </p>
                </div>
              </div>
              
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a detail-oriented developer who thrives on creating seamless user experiences 
                and robust backend systems. With expertise in modern web technologies, I bring ideas 
                to life through clean code and innovative solutions.
              </p>
            </motion.div>

            {/* Skills Progress */}
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Core Skills
              </h3>
              
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl ${isDarkMode ? 'bg-black/40 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-xl border border-gray-200/50'} shadow-xl transform-gpu`}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    rotateX: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                        <skill.icon className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {skill.title}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {skill.progress}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className={`w-full h-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack & Achievements */}
          <motion.div 
            className="space-y-8"
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Tech Stack */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Tech Stack
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl text-center transform-gpu ${isDarkMode ? 'bg-black/40 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-xl border border-gray-200/50'} shadow-xl`}
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`p-4 rounded-2xl ${tech.bg} mb-4 mx-auto w-fit`}>
                      <tech.icon className={`w-8 h-8 ${tech.color}`} />
                    </div>
                    <h4 className={`font-semibold mb-2 ${tech.color}`}>{tech.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                      {tech.level}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Achievements */}
            <motion.div
              className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-white/10' : 'bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl border border-gray-200/50'} shadow-2xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Key Achievements
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-white/50'} mb-3 mx-auto w-fit`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <h4 className={`text-2xl font-bold ${achievement.color}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {achievement.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Action Card */}
            <motion.div
              className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-xl border border-green-500/20' : 'bg-gradient-to-r from-green-50 to-emerald-50 backdrop-blur-xl border border-green-200'} shadow-xl`}
              variants={float}
              animate="animate"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <div>
                  <h4 className={`font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                    Always Learning
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Continuously exploring new technologies and best practices
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className={`inline-flex items-center px-8 py-4 rounded-2xl ${isDarkMode ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-white/80 backdrop-blur-xl border border-gray-200/50'} shadow-xl`}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Star className="w-5 h-5 mr-3 text-yellow-500" />
            <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to bring your ideas to life? Let's collaborate!
            </span>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export default About 
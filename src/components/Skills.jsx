import { motion } from 'framer-motion'
import { Code, Server, Database, Palette, User, Briefcase, Award } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const Skills = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code },
    { name: 'Backend Development', level: 85, icon: Server },
    { name: 'Database Management', level: 80, icon: Database },
    { name: 'UI/UX Design', level: 75, icon: Palette },
    { name: 'Problem Solving', level: 95, icon: User },
    { name: 'Team Leadership', level: 80, icon: Briefcase }
  ]

  const certifications = [
    'MERN Stack Development',
    'Python Intermediate',
    'PHP Beginner',
    'Adobe Premiere Pro & After Effects',
    'Portfolio Management System (C++)',
    'Figma Design'
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

  return (
    <Section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <Code className="mr-3" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <skill.icon className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <Award className="mr-3" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="p-4 glass rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="font-medium">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Skills 
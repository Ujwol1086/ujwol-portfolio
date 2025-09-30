import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, Code, GraduationCap, Award, Building2 } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      title: 'Junior Full Stack Developer',
      company: 'Neutrotex Computer IT Solutions and Innovation Pvt. Ltd.',
      location: 'Onsite',
      period: '2024 - Present',
      type: 'Full Time',
      description: 'Built custom websites and web applications for small businesses and startups. Managed end-to-end project delivery from requirements gathering to deployment.',
      technologies: ['ExpressJs', 'ReactJs','NextJs', 'NodeJs', 'MongoDb', 'Tailwind','React Native','TypeScript'],
      icon: Building2
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Goma Engineering Consultant Pvt. Ltd.',
      location: 'Remote',
      period: '2024 - Present',
      type: 'internship',
      description: 'Leading development of modern web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver scalable solutions.',
      technologies: ['React', 'Node.js', 'MongoDB','ExpressJs','TypeScript'],
      icon: Code
    },
   
    {
      title: 'Bachelor in Information Technology',
      company: 'Tribhuvan University',
      location: 'Kathmandu, Nepal',
      period: '2021 - Present',
      type: 'education',
      description: 'Graduated with distinction focusing on software development, web technologies, and system design. Completed multiple projects in full-stack development.',
      technologies: ['Programming', 'Database Design', 'Software Engineering', 'Project Management'],
      icon: GraduationCap
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2022 - Present',
      type: 'work',
      description: 'Built custom websites and web applications for small businesses and startups. Managed end-to-end project delivery from requirements gathering to deployment.',
      technologies: ['ExpressJs', 'ReactJs', 'NodeJs', 'MongoDb', 'TypeScript', 'NextJs'],
      icon: Briefcase
    },
    
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full Time':
        return 'from-blue-500 to-blue-600'
      case 'internship':
        return 'from-green-500 to-green-600'
      case 'education':
        return 'from-purple-500 to-purple-600'
      case 'work':
        return 'from-orange-500 to-orange-600'
      case 'achievement':
        return 'from-yellow-500 to-yellow-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getTypeBadge = (type) => {
    const badges = {
      'Full Time': { 
        text: 'Full Time', 
        bg: isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800' 
      },
      'Part Time': { 
        text: 'Part Time', 
        bg: isDarkMode ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800' 
      },
      work: { 
        text: 'Freelance', 
        bg: isDarkMode ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800' 
      },
      internship: { 
        text: 'Internship', 
        bg: isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800' 
      },
      education: { 
        text: 'Education', 
        bg: isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800' 
      },
      achievement: { 
        text: 'Achievement', 
        bg: isDarkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800' 
      }
    }
    return badges[type] || badges.work
  }

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const lineVariants = {
    initial: { height: 0 },
    animate: { 
      height: '100%',
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const dotVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <Section id="experience" className={`py-20 px-4 relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Professional Journey</SectionTitle>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"
            variants={lineVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
          
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full shadow-lg`}
                  variants={dotVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <exp.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Content */}
                <motion.div
                  className="ml-8 flex-1"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <div className={`p-6 rounded-lg hover:shadow-xl transition-all duration-300 group ${
                     isDarkMode 
                       ? 'bg-black/25 backdrop-blur-20 border border-white/10 shadow-lg' 
                       : 'bg-white/15 backdrop-blur-20 border border-white/20 shadow-lg'
                      }`}>
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {exp.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getTypeBadge(exp.type).bg}`}>
                          {getTypeBadge(exp.type).text}
                        </span>
                        {/* {exp.period.includes('Present') && (
                          <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                            isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                          }`}>
                            Current
                          </span>
                        )} */}
                      </div>
                                             <div className={`flex items-center space-x-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.company}
                    </h4>
                    
                    <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                                                     className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Experience 
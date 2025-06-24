import { motion } from 'framer-motion'
import Section from './Section'
import SectionTitle from './SectionTitle'

const Education = () => {
  return (
    <Section id="education" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Education</SectionTitle>
        
        <div className="space-y-8">
          {[
            {
              degree: 'BSc. Computer Science & Information Technology',
              institution: 'Prime College, Nayabazar, KTM',
              status: '6th Semester Ongoing',
              icon: 'BSc',
              color: 'bg-blue-600'
            },
            {
              degree: '10+2 Science',
              institution: 'NIST, Lainchaur, KTM',
              status: 'GPA: 3.32',
              icon: '+2',
              color: 'bg-purple-600'
            },
            {
              degree: 'Secondary Education Examination',
              institution: 'Malpi International School, Kavre',
              status: 'GPA: 3.55',
              icon: 'SEE',
              color: 'bg-green-600'
            }
          ].map((edu, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  className={`w-12 h-12 ${edu.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {edu.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500">{edu.status}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Education 
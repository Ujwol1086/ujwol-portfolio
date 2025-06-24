import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI/UX, payment integration, and real-time inventory management',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      status: 'Completed',
      image: '🛒',
      link: '#'
    },
    {
      title: 'Food Delivery WebApp',
      description: 'Modern food delivery application with real-time tracking, GPS integration, and seamless user experience',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Maps API'],
      status: 'Completed',
      image: '🍕',
      link: '#'
    },
    {
      title: 'Interactive Form Builder',
      description: 'Drag-and-drop form builder with dynamic validation, conditional logic, and export functionality',
      tech: ['React', 'TypeScript', 'Tailwind', 'React DnD'],
      status: 'Completed',
      image: '📝',
      link: '#'
    },
    {
      title: 'CV Maker',
      description: 'Professional resume builder with multiple templates, PDF export, and ATS-friendly formatting',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jsPDF'],
      status: 'Completed',
      image: '📄',
      link: '#'
    },
    {
      title: 'To-Do List Application',
      description: 'Task management app with advanced filtering, categories, deadlines, and productivity analytics',
      tech: ['React', 'Local Storage', 'CSS3', 'Chart.js'],
      status: 'Completed',
      image: '✅',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with animations, dark mode, and optimized performance',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      status: 'In Progress',
      image: '🎨',
      link: '#'
    }
  ]

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <Section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-lg hover:shadow-xl transition-all duration-300 group"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.button
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Projects 
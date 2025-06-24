import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const techStack = [
    { name: 'React', icon: '⚛️', color: 'text-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
    { name: 'JavaScript', icon: '🟨', color: 'text-yellow-400' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-500' },
    { name: 'PHP', icon: '🐘', color: 'text-purple-400' },
    { name: 'HTML/CSS', icon: '🎨', color: 'text-orange-400' },
  ]

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution built with MERN stack',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'Completed'
    },
    {
      title: 'Food Delivery WebApp',
      description: 'Modern food delivery application with real-time tracking',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      status: 'Completed'
    },
    {
      title: 'Interactive Form Builder',
      description: 'Drag-and-drop form builder with dynamic validation',
      tech: ['React', 'TypeScript', 'Tailwind'],
      status: 'Completed'
    },
    {
      title: 'CV Maker',
      description: 'Professional resume builder with multiple templates',
      tech: ['PHP', 'MySQL', 'Bootstrap'],
      status: 'Completed'
    },
    {
      title: 'To-Do List Application',
      description: 'Task management app with advanced filtering',
      tech: ['React', 'Local Storage', 'CSS3'],
      status: 'Completed'
    }
  ]

  const skills = [
    'Hardware & Software Troubleshooting',
    'Network Administration',
    'Cybersecurity',
    'Database Management',
    'Technical Problem Solving',
    'Full Stack Development',
    'C/C++ Programming',
    'Adobe Creative Suite',
    'Leadership & Communication',
    'Continuous Learning'
  ]

  const certifications = [
    'MERN Stack Development',
    'Python Intermediate',
    'PHP Beginner',
    'Adobe Premiere Pro & After Effects',
    'Portfolio Management System (C++)',
    'Figma Design'
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold gradient-text">
                Ujwol Aryal
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'education', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize px-3 py-2 rounded-md transition-all duration-300 ${
                      activeSection === item
                        ? 'text-indigo-400 bg-indigo-500/20'
                        : 'hover:text-indigo-400 hover:bg-indigo-500/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Theme Toggle & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDarkMode ? '🌞' : '🌙'}
                </button>
                
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {isMenuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                {['home', 'about', 'skills', 'education', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <div className="mb-8 animate-float">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-6xl">
                👋
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Ujwol Aryal</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Innovative IT Professional & Full Stack Developer passionate about creating 
              digital solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-full transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Innovative, passionate, and detail-oriented professional with a solid foundation 
                  in Information Technology. I specialize in aligning technology solutions with 
                  business objectives.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Frontend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, React</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Backend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">PHP, Node.js</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Database</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">SQL, MongoDB</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Tools</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Git, Figma, Adobe Suite</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="glass p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <h4 className={`font-semibold ${tech.color}`}>{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 glass rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                    >
                      <span className="text-indigo-500 mr-3">▶</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 glass rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3">🏆</span>
                        <span className="font-medium">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Education</h2>
            
            <div className="space-y-8">
              <div className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    BSc
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                      BSc. Computer Science & Information Technology
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Prime College, Nayabazar, KTM
                    </p>
                    <p className="text-sm text-gray-500">6th Semester Ongoing</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    +2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                      10+2 Science
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      NIST, Lainchaur, KTM
                    </p>
                    <p className="text-sm text-gray-500">GPA: 3.32</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    SEE
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                      Secondary Education Examination
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Malpi International School, Kavre
                    </p>
                    <p className="text-sm text-gray-500">GPA: 3.55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Connect</h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">ujwol.aryal@example.com</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-300">ujwol-aryal</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-300">ujwol1086</p>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Ujwol Aryal. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

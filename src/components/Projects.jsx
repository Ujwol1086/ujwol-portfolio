import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const Projects = ({ isDarkMode }) => {
  // All of my projects as an array of objects
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with modern UI/UX, payment integration, and real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      status: "Completed",
      link: "https://github.com/Ujwol1086/E-Commerce-MERN-",
    },
    {
      title: "EVConnect Nepal",
      description:
        "Modern EV Charging Station Detection application with real-time tracking, GPS integration, and seamless user experience",
      tech: ["React", "Python", "MongoDB", "Maps API", "Tailwind CSS"],
      status: "Completed",
      link: "https://github.com/Ujwol1086/EV_ChargingStation_And_SlotBooking",
    },
    {
      title: "Interactive Form Builder",
      description:
        "Drag-and-drop form builder with dynamic validation, conditional logic, and export functionality",
      tech: ["ReactJs", "Tailwind CSS", "React DnD"],
      status: "Completed",
      link: "https://github.com/Ujwol1086/Interactive-Form-Builder-React",
    },
    {
      title: "hamroCV",
      description:
        "Professional resume builder with multiple templates, PDF export, and ATS-friendly formatting",
      tech: ["PHP", "MySQL", "Bootstrap", "jsPDF"],
      status: "Completed",
      link: "https://github.com/Ujwol1086/hamroCV",
    },
    {
      title: "To-Do List Application",
      description:
        "Task management app with advanced filtering, categories, deadlines, and productivity analytics",
      tech: ["React", "Local Storage", "CSS3", "Chart.js"],
      status: "Completed",
      link: "#",
    },
    {
      title: "Draggable Card Slider",
      description:
        "A draggable card slider with smooth animations and responsive design",
      tech: ["HTML", "CSS3", "JavaScript"],
      status: "Completed",
      link: "https://github.com/Ujwol1086/Draggable-Card-Slider",
    },
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <Section
      id="projects"
      className={`py-20 px-4 relative ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } shadow-lg`}
    >
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
              className={`p-6 rounded-lg hover:shadow-xl transition-all duration-300 group ${
                isDarkMode
                  ? "bg-black/25 backdrop-blur-20 border border-white/10 shadow-lg"
                  : "bg-white/15 backdrop-blur-20 border border-white/20 shadow-lg"
              }`}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {project.title}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Completed"
                      ? isDarkMode
                        ? "bg-green-900 text-green-200"
                        : "bg-green-100 text-green-800"
                      : isDarkMode
                      ? "bg-yellow-900 text-yellow-200"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p
                className={`mb-4 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-1 text-xs rounded-full ${
                      isDarkMode
                        ? "bg-blue-900 text-blue-200"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className={`flex items-center transition-colors ${
                    isDarkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </motion.button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Shoppee E-Commerce',
      description: 'Full-stack e-commerce web application with user authentication, product management, and shopping cart features',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Sharoobini/Shoppee-Ecommerce',
    },
    {
      title: 'GiftHeaven',
      description: 'Complete online gift ordering platform with backend order tracking and secure checkout with RESTful APIs',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Sharoobini/GiftHeaven',
    },
    {
      title: 'Cafe Charm',
      description: 'Responsive and visually appealing coffee shop website with form validation and intuitive navigation',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
      gradient: 'from-pink-500 to-orange-500',
      github: 'https://github.com/Sharoobini/Cafe-Charm',
    },
    {
      title: 'Weather Web Application',
      description: 'Real-time weather forecast app fetching live data using OpenWeatherMap API with interactive UI',
      tech: ['JavaScript', 'API Integration', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      gradient: 'from-green-500 to-teal-500',
      github: 'https://github.com/Sharoobini/Weather-Web-Application',
    },
    {
      title: 'Blood Bank System',
      description: 'Object-oriented Java application managing donor and blood request records with modular class design',
      tech: ['Java', 'MySQL', 'NetBeans'],
      image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80',
      gradient: 'from-red-500 to-pink-500',
      github: 'https://github.com/Sharoobini/Blood-Bank-System',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
          >
            Portfolio
          </motion.span>
          <h2 className="text-white mb-4">Featured Projects</h2>
          <p className="text-purple-200 text-xl max-w-2xl mx-auto">
            A selection of my recent work combining creativity with technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: '0 40px 80px rgba(139, 92, 246, 0.5)',
                }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  
                  {/* Dark Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: hoveredIndex === index ? 0.95 : 0.8 }}
                  />

                  {/* Hover Actions */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : -20,
                    }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-white mb-3">{project.title}</h3>
                  <p className="text-purple-200 mb-6">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-purple-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>View on GitHub</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
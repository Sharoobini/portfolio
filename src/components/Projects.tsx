import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Github, ArrowRight, Search, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  gradient: string;
  github: string;
  category: 'Full-Stack Web' | 'AI & Machine Learning' | 'Java & Systems' | 'Front-End UI';
  featured?: boolean;
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'AI Sustainable Tourism Guide',
      description: 'Web application promoting eco-friendly tourism in Sri Lanka using machine learning models to predict travel costs and recommend sustainable destinations.',
      tech: ['Python', 'Streamlit', 'Machine Learning', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      gradient: 'from-emerald-500 to-teal-500',
      github: 'https://github.com/Sharoobini/AI-Powered-Guide-For-Sustainable-Tourism-Prediction',
      category: 'AI & Machine Learning',
      featured: true,
    },
    {
      title: 'Shoppee E-Commerce Platform',
      description: 'Full-stack e-commerce web application with user authentication, product catalog management, shopping cart features, and order processing.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://images.unsplash.com/photo-1556742049-0a675628dd10?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Sharoobini/Shoppee-Ecommerce',
      category: 'Full-Stack Web',
      featured: true,
    },
    {
      title: 'GiftHeaven Online Store',
      description: 'Complete online gift ordering platform featuring product categories, order tracking system, and secure RESTful API backend.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Sharoobini/GiftHeaven',
      category: 'Full-Stack Web',
      featured: true,
    },
    {
      title: 'AI Movie Recommendation Engine',
      description: 'Machine learning recommendation system built with Python and Pandas analyzing content metadata and user preferences.',
      tech: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-Learn'],
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
      gradient: 'from-purple-600 to-indigo-600',
      github: 'https://github.com/Sharoobini/Movie_Recomondation',
      category: 'AI & Machine Learning',
      featured: true,
    },
    {
      title: 'Cafe Charm Coffee Shop',
      description: 'Responsive coffee shop website featuring interactive menu cards, online reservation form validation, and modern CSS layout.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Form Validation'],
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
      gradient: 'from-pink-500 to-orange-500',
      github: 'https://github.com/Sharoobini/Cafe-Charm',
      category: 'Front-End UI',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application fetching live meteorological data using OpenWeatherMap API with intuitive search interface.',
      tech: ['JavaScript', 'OpenWeather API', 'CSS3', 'HTML5'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      gradient: 'from-sky-500 to-indigo-500',
      github: 'https://github.com/Sharoobini/Weather-Web-Application',
      category: 'Front-End UI',
    },
    {
      title: 'Blood Bank Management System',
      description: 'Object-oriented Java application engineered for donor record tracking, blood inventory management, and database records.',
      tech: ['Java', 'MySQL', 'OOP Design', 'NetBeans'],
      image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80',
      gradient: 'from-red-500 to-pink-500',
      github: 'https://github.com/Sharoobini/ITBNM-2211-0188',
      category: 'Java & Systems',
    },
    {
      title: 'EduPortal Learning Platform',
      description: 'Interactive educational web portal designed for course access, student schedule management, and responsive navigation.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      gradient: 'from-amber-500 to-orange-500',
      github: 'https://github.com/Sharoobini/education',
      category: 'Front-End UI',
    },
    {
      title: 'Web Application Services (WSAT)',
      description: 'Comprehensive web services project showcasing modern layout techniques, REST integration, and dynamic script handling.',
      tech: ['CSS3', 'HTML5', 'Web Services', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      gradient: 'from-violet-500 to-fuchsia-500',
      github: 'https://github.com/Sharoobini/WSAT-Project',
      category: 'Full-Stack Web',
    },
    {
      title: 'Interactive Java Activity Suite',
      description: 'Java application demonstrating object-oriented programming concepts, GUI components, and structured data handling.',
      tech: ['Java', 'OOP', 'Data Structures', 'GUI'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      gradient: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/Sharoobini/Inky-Pinky-Activity',
      category: 'Java & Systems',
    },
    {
      title: 'Modern Personal Portfolio',
      description: 'State-of-the-art interactive developer portfolio featuring 3D ambient animations, glassmorphism UI, and responsive design.',
      tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Sharoobini/portfolio',
      category: 'Full-Stack Web',
      featured: true,
    }
  ];

  const categories = ['All Projects', 'Full-Stack Web', 'AI & Machine Learning', 'Java & Systems', 'Front-End UI'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All Projects' || project.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 mb-4 border border-purple-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            GitHub Portfolio Showcase
          </motion.span>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Featured GitHub Projects</h2>
          <p className="text-purple-200 text-xl max-w-3xl mx-auto">
            Explore my public GitHub repositories across Full-Stack Web Development, AI &amp; Machine Learning, Java Systems, and Front-End UI Design
          </p>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white shadow-lg' : 'text-purple-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-300 hover:text-white bg-white/10 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative flex flex-col h-full"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col h-full"
                  whileHover={{
                    y: -8,
                    rotateY: 4,
                    rotateX: 4,
                    boxShadow: '0 30px 60px rgba(139, 92, 246, 0.4)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Banner */}
                  <div className="relative h-60 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient & Dark Overlays */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-25`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </div>
                    )}

                    {/* Category Pill */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-xs text-purple-300 border border-white/10">
                      {project.category}
                    </div>

                    {/* GitHub Link Icon */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2.5 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-purple-200/80 text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-purple-300 border border-white/10 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Code Action Link */}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-pink-400 transition-colors pt-2 border-t border-white/10 w-full justify-between"
                      >
                        <span>View Source Code</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white/5 rounded-3xl border border-white/10"
          >
            <p className="text-purple-200 text-lg mb-4">No projects match your search criteria</p>
            <button
              onClick={() => { setActiveCategory('All Projects'); setSearchQuery(''); }}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Footer GitHub Link Banner */}
        <motion.div
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-slate-900/50 backdrop-blur-md border border-purple-500/20 text-center flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-left">
            <h4 className="text-white text-2xl font-bold mb-1">Want to explore all my repositories?</h4>
            <p className="text-purple-200 text-sm">Check out all open-source code and contributions directly on GitHub</p>
          </div>
          <motion.a
            href="https://github.com/Sharoobini"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-full inline-flex items-center gap-3 transition-colors shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-purple-300" />
            <span>Visit @Sharoobini GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
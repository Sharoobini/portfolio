import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Github, ArrowUpRight, Search, Sparkles, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  name: string;
  githubName: string;
  description: string;
  tech: string[];
  image: string;
  gradient: string;
  github: string;
  category: 'Full-Stack' | 'AI & ML' | 'Java & Systems' | 'Front-End';
  featured?: boolean;
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      name: 'AI Tourism Guide',
      githubName: 'AI-Powered-Guide-For-Sustainable-Tourism-Prediction',
      description: 'Streamlit & ML web app predicting travel costs & sustainable eco-destinations in Sri Lanka.',
      tech: ['Python', 'Streamlit', 'ML'],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
      gradient: 'from-emerald-500/25 to-teal-500/25',
      github: 'https://github.com/Sharoobini/AI-Powered-Guide-For-Sustainable-Tourism-Prediction',
      category: 'AI & ML',
      featured: true,
    },
    {
      name: 'Shoppee E-Commerce',
      githubName: 'Shoppee-Ecommerce',
      description: 'Full-stack MERN e-commerce store with authentication, product catalog & shopping cart.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1556742049-0a675628dd10?w=600&q=80',
      gradient: 'from-purple-500/25 to-pink-500/25',
      github: 'https://github.com/Sharoobini/Shoppee-Ecommerce',
      category: 'Full-Stack',
      featured: true,
    },
    {
      name: 'GiftHeaven Store',
      githubName: 'GiftHeaven',
      description: 'Online gift ordering system with category filtering, order tracking & RESTful backend.',
      tech: ['React', 'Node.js', 'REST API'],
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80',
      gradient: 'from-blue-500/25 to-cyan-500/25',
      github: 'https://github.com/Sharoobini/GiftHeaven',
      category: 'Full-Stack',
      featured: true,
    },
    {
      name: 'Movie Recommendation',
      githubName: 'Movie_Recomondation',
      description: 'Machine learning movie recommendation engine analyzing content similarity & user data.',
      tech: ['Python', 'Jupyter', 'Pandas'],
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
      gradient: 'from-fuchsia-500/25 to-purple-500/25',
      github: 'https://github.com/Sharoobini/Movie_Recomondation',
      category: 'AI & ML',
      featured: true,
    },
    {
      name: 'Cafe Charm',
      githubName: 'Cafe-Charm',
      description: 'Responsive coffee shop website featuring interactive menus & reservation form validation.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
      gradient: 'from-amber-500/25 to-orange-500/25',
      github: 'https://github.com/Sharoobini/Cafe-Charm',
      category: 'Front-End',
    },
    {
      name: 'Weather Web App',
      githubName: 'Weather-Web-Application',
      description: 'Real-time weather forecast app fetching live OpenWeather API data with dynamic UI.',
      tech: ['JavaScript', 'API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80',
      gradient: 'from-sky-500/25 to-indigo-500/25',
      github: 'https://github.com/Sharoobini/Weather-Web-Application',
      category: 'Front-End',
    },
    {
      name: 'Blood Bank System',
      githubName: 'ITBNM-2211-0188',
      description: 'Modular object-oriented Java app managing blood requests, donor records & MySQL database.',
      tech: ['Java', 'MySQL', 'OOP'],
      image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=600&q=80',
      gradient: 'from-rose-500/25 to-red-500/25',
      github: 'https://github.com/Sharoobini/ITBNM-2211-0188',
      category: 'Java & Systems',
    },
    {
      name: 'EduPortal Platform',
      githubName: 'education',
      description: 'Interactive educational web workspace for course schedules, study modules & navigation.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80',
      gradient: 'from-orange-500/25 to-yellow-500/25',
      github: 'https://github.com/Sharoobini/education',
      category: 'Front-End',
    },
    {
      name: 'WSAT Project',
      githubName: 'WSAT-Project',
      description: 'Web application services project demonstrating modern layout patterns & script handling.',
      tech: ['CSS3', 'HTML5', 'Web Services'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      gradient: 'from-violet-500/25 to-purple-500/25',
      github: 'https://github.com/Sharoobini/WSAT-Project',
      category: 'Full-Stack',
    },
    {
      name: 'Java Activity Suite',
      githubName: 'Inky-Pinky-Activity',
      description: 'Java application showcasing object-oriented principles, GUI layouts & data structures.',
      tech: ['Java', 'OOP', 'GUI'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      gradient: 'from-cyan-500/25 to-blue-500/25',
      github: 'https://github.com/Sharoobini/Inky-Pinky-Activity',
      category: 'Java & Systems',
    },
  ];

  const categories = ['All', 'Full-Stack', 'AI & ML', 'Java & Systems', 'Front-End'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.githubName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-[1600px] mx-auto">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-500/15 via-fuchsia-500/15 to-pink-500/15 backdrop-blur-md rounded-full text-fuchsia-300 text-sm font-medium mb-3 border border-fuchsia-500/20 shadow-lg shadow-fuchsia-950/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
          >
            <Sparkles className="w-4 h-4 text-fuchsia-400 animate-pulse" />
            <span>GitHub Repositories</span>
          </motion.div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Explore my public GitHub repositories curated across Full-Stack, AI &amp; Machine Learning, Java Systems, and Front-End Development
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar Container */}
        <motion.div 
          className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/70 backdrop-blur-xl p-3 sm:p-4 rounded-3xl border border-purple-500/25 shadow-2xl shadow-purple-950/50"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Categories Pill Navigation */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-lg shadow-fuchsia-500/30'
                      : 'text-purple-300/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-2xl"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Sleek Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search repo or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 bg-purple-950/50 border border-purple-500/30 rounded-2xl text-white text-xs sm:text-sm placeholder-purple-300/40 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/30 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-purple-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                title="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </motion.div>

        {/* 5-Column Grid Layout for Desktop (5 per row!) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.githubName}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="flex flex-col h-full group"
              >
                <div className="relative flex flex-col h-full bg-slate-900/80 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-fuchsia-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-950/60 overflow-hidden">
                  
                  {/* Image Header Banner */}
                  <div className="relative h-36 overflow-hidden bg-purple-950/50">
                    <motion.div
                      className="w-full h-full"
                      animate={{ scale: hoveredIndex === index ? 1.08 : 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.name}
                        className="w-full h-36 object-cover"
                      />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Category Pill */}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-slate-950/85 backdrop-blur-md rounded-full text-[10px] font-semibold text-fuchsia-300 border border-fuchsia-500/30 shadow-md">
                      {project.category}
                    </span>

                    {/* GitHub Repo Button */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2.5 right-2.5 p-1.5 bg-slate-950/85 backdrop-blur-md rounded-xl text-purple-200 hover:text-white hover:bg-fuchsia-600 transition-all border border-white/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title={`View ${project.githubName} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Project Name */}
                      <h3 className="text-white text-sm font-bold mb-1 truncate group-hover:text-fuchsia-300 transition-colors">
                        {project.name}
                      </h3>

                      {/* GitHub Repo Handle */}
                      <div className="mb-2">
                        <code 
                          className="inline-block max-w-full text-[10px] font-mono text-fuchsia-300 bg-fuchsia-950/50 border border-fuchsia-500/30 px-2 py-0.5 rounded truncate"
                          title={project.githubName}
                        >
                          {project.githubName}
                        </code>
                      </div>

                      {/* Description */}
                      <p className="text-purple-200/75 text-xs line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-purple-950/60 backdrop-blur-sm rounded-md text-[10px] font-medium text-purple-300 border border-purple-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* View Code Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full pt-2.5 border-t border-purple-500/20 text-[11px] font-semibold text-fuchsia-400 group-hover:text-pink-300 transition-colors"
                      >
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-slate-900/60 rounded-3xl border border-purple-500/20"
          >
            <p className="text-purple-200 text-sm mb-3">No repositories match your search query</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full text-xs font-semibold shadow-lg shadow-fuchsia-950/50 hover:opacity-95 transition-opacity"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* GitHub External Callout */}
        <motion.div
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900/80 to-purple-950/60 backdrop-blur-xl border border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div>
            <h4 className="text-white text-lg sm:text-xl font-bold mb-1">
              Want to see all open source repositories?
            </h4>
            <p className="text-purple-300/80 text-xs sm:text-sm">
              Explore complete codebases, commits, and activity directly on GitHub
            </p>
          </div>
          <motion.a
            href="https://github.com/Sharoobini"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs sm:text-sm font-semibold rounded-2xl inline-flex items-center gap-2.5 shadow-xl shadow-fuchsia-950/50 transition-all shrink-0 border border-fuchsia-400/30"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Github className="w-4 h-4" />
            <span>Visit @Sharoobini GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
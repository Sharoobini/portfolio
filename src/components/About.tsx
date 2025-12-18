import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Boxes, Zap, Users, Award } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions with best practices',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Pushing boundaries with innovative and stunning visuals',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Boxes,
      title: 'MERN Stack',
      description: 'Full-stack development with MongoDB, Express, React, Node.js',
      color: 'from-pink-500 to-orange-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized for speed without compromising quality',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'User-Focused',
      description: 'Crafting intuitive experiences that users love',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'Problem Solver',
      description: 'Creative solutions to complex technical challenges',
      color: 'from-indigo-500 to-purple-500',
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
            About Me
          </motion.span>
          <h2 className="text-white mb-4">What I Bring to the Table</h2>
          <p className="text-purple-200 text-xl max-w-3xl mx-auto">
            BIT (Hons) student at Horizon Campus specializing in Networking &amp; Mobile Computing.
            Skilled in creating intuitive user interfaces, building full-stack applications,
            and delivering efficient digital solutions through teamwork and leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="relative group"
                initial={{ opacity: 0, y: 50, z: -100 }}
                animate={inView ? { opacity: 1, y: 0, z: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full overflow-hidden"
                  whileHover={{
                    y: -10,
                    rotateY: 8,
                    rotateX: 8,
                    boxShadow: '0 30px 60px rgba(139, 92, 246, 0.4)',
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotateY: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-white mb-3">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
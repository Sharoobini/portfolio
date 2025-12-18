import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: 'React.js / JavaScript', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'HTML5 / CSS3 / Responsive Design', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'MERN Stack (MongoDB, Express, Node.js)', level: 85, color: 'from-green-500 to-teal-500' },
    { name: 'MySQL / MS SQL Server', level: 80, color: 'from-blue-500 to-indigo-500' },
    { name: 'Git / GitHub / Vercel', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'Java / PHP / C', level: 82, color: 'from-red-500 to-pink-500' },
    { name: 'Cisco Networking / VLSM', level: 75, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
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
            Skills
          </motion.span>
          <h2 className="text-white mb-4">Technical Expertise</h2>
          <p className="text-purple-200 text-xl max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern web experiences
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="flex justify-between mb-3">
                <span className="text-white text-lg">{skill.name}</span>
                <motion.span
                  className="text-purple-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="relative h-4 bg-white/5 rounded-full overflow-hidden backdrop-blur-md border border-white/10">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: 'easeOut' }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm opacity-50`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Floating Elements Grid */}
        <div className="relative mt-24 h-64 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(i % 5) * 20 + 10}%`,
                  top: `${Math.floor(i / 5) * 25 + 12.5}%`,
                  width: '60px',
                  height: '60px',
                }}
                animate={{
                  y: [0, -30, 0],
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${
                    skills[i % skills.length].color
                  } opacity-20 backdrop-blur-sm border border-white/20`}
                  style={{
                    borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '0%',
                    transform: `translateZ(${i * 5}px)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
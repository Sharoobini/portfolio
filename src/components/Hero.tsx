import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.2, 1],
          }}
          transition={{ scale: { duration: 4, repeat: Infinity } }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ scale: { duration: 5, repeat: Infinity } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ scale: { duration: 6, repeat: Infinity } }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                <img
                  src={profileImg}
                  alt="Raja Annadurai Sharoobini"
                  className="w-full h-full object-contain"
                  style={{
                    objectPosition: 'center',
                    transform: 'scale(1)',
                  }}
                />
              </div>

              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-pink-400/30"
                animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white">Available for opportunities</span>
          </motion.div>

          <motion.h1
            className="text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: '1.1',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Raja Annadurai
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Sharoobini
            </span>
          </motion.h1>
          
          <motion.p
            className="text-purple-200 text-xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Creative IT undergraduate passionate about UI/UX design, front-end development,
            and crafting engaging digital experiences with the MERN stack
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* 3D Floating Cards */}
          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { label: 'Web Development', icon: '💻' },
              { label: 'Front-End Design', icon: '🎨' },
              { label: 'MERN Stack', icon: '⚡' },
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                className="group relative"
                initial={{ opacity: 0, rotateY: -90, z: -100 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 flex items-center gap-3"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: 10,
                    boxShadow: '0 30px 60px rgba(139, 92, 246, 0.4)',
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white">{skill.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-purple-300 text-sm">Scroll to explore</span>
            <ChevronDown className="text-white w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
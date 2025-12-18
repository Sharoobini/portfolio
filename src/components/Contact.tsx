import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socials = [
    { icon: Mail, label: 'sharoobini233@gmail.com', link: 'sharoobini233@gmail.com', color: 'from-red-500 to-pink-500' },
    { icon: Linkedin, label: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/raja-annathurai-sharoobini', color: 'from-blue-500 to-cyan-500' },
    { icon: Github, label: 'GitHub: Sharoobini', link: 'https://github.com/Sharoobini', color: 'from-gray-500 to-slate-500' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
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
            Contact
          </motion.span>
          <h2 className="text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-purple-200 text-xl max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
              whileHover={{ boxShadow: '0 30px 60px rgba(139, 92, 246, 0.3)' }}
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.link}
                  className="relative group overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <motion.div
                    className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl relative z-10"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)',
                    }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-white">{social.label}</span>
                  </motion.div>
                  
                  {/* Hover gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
                  />
                </motion.a>
              );
            })}

            {/* Floating 3D Decorative Element */}
            <motion.div
              className="relative h-40 mt-4 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
              animate={{
                rotateY: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-16 h-16 bg-gradient-to-br ${
                      socials[i % socials.length].color
                    } opacity-20 rounded-lg`}
                    style={{
                      left: `${(i % 3) * 30 + 10}%`,
                      top: `${Math.floor(i / 3) * 40 + 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotateZ: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-purple-300">
            &copy; 2025 Raja Annadurai Sharoobini. Crafted with passion and code.
          </p>
          <p className="text-purple-400 text-sm mt-2">
            +94 76 0854006 • Malabe, Sri Lanka
          </p>
        </motion.div>
      </div>
    </section>
  );
}
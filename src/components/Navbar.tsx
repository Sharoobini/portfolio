import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-white text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sharoobini
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:sharoobini233@gmail.com"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-purple-200 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:sharoobini233@gmail.com"
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

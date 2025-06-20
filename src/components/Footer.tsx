import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Alessandro
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Fullstack Developer appassionato di tecnologie moderne e soluzioni innovative.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Link Rapidi</h3>
            <div className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'Chi Sono' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#contact', label: 'Contatti' }
              ].map((link) => (
                <motion.button
                  key={link.href}
                  whileHover={{ x: 5 }}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Seguimi</h3>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/Andros924', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/alessandro-amoroso-9b5681123/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:studiotrib.amoroso@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 flex items-center justify-center gap-2"
          >
            Made with <Heart size={16} className="text-red-500" /> by Alessandro © 2025
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
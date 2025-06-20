import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Placeholder per il download del CV
    alert('CV download functionality - da implementare con il tuo CV');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-20 sm:pt-16 pb-16 sm:pb-20"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl ring-2 ring-white/10 mb-6 sm:mb-8"
          >
            <img
              src="/1704189795148.jpeg"
              alt="Alessandro Amoroso"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-blue-200"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              {t.hero.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-blue-300"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-colors duration-200"
            >
              {t.hero.cta}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={downloadCV}
              className="w-full sm:w-auto px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              {t.hero.downloadCV}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Andros924', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/alessandro-amoroso-9b5681123/', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToAbout}
            className="text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown size={28} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
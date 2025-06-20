import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    { icon: Code, name: 'Frontend', techs: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { icon: Server, name: 'Backend', techs: ['Node.js', 'Express', 'Python', 'REST APIs'] },
    { icon: Database, name: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis'] },
    { icon: Globe, name: 'Web Technologies', techs: ['HTML5', 'CSS3', 'JavaScript', 'Vite'] },
    { icon: Smartphone, name: 'Mobile', techs: ['React Native', 'PWA', 'Responsive Design'] },
    { icon: Zap, name: 'Tools & Others', techs: ['Git', 'Docker', 'Netlify', 'Vercel'] }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            {t.about.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              {t.about.skills}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3 sm:mr-4">
                      <skill.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skill.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {t.about.experience}
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t.about.passion.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {t.about.passion.description}
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t.about.approach.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {t.about.approach.description}
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {t.about.goals.title}
                </h4>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm sm:text-base">
                  {t.about.goals.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
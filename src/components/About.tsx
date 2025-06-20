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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t.about.skills}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white mr-4">
                      <skill.icon size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience/Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t.about.experience}
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '4+', label: 'Progetti Completati' },
                { number: '2+', label: 'Anni di Esperienza' },
                { number: '10+', label: 'Tecnologie Utilizzate' },
                { number: '100%', label: 'Soddisfazione Cliente' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white"
            >
              <h4 className="text-xl font-bold mb-4">La mia filosofia</h4>
              <p className="leading-relaxed">
                Credo che ogni progetto sia un'opportunità per creare qualcosa di straordinario. 
                Mi concentro sulla qualità del codice, l'esperienza utente e l'innovazione tecnologica 
                per trasformare le idee in soluzioni digitali efficaci.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
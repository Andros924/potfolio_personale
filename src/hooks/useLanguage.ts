import { useState, useEffect } from 'react';
import type { Language } from '../types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'it';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update document language attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const cycleLanguage = () => {
    setLanguage(prev => {
      switch (prev) {
        case 'it': return 'en';
        case 'en': return 'fr';
        case 'fr': return 'it';
        default: return 'it';
      }
    });
  };

  return { language, setLanguage, cycleLanguage };
};
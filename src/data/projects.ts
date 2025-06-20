import type { Project } from '../types';

export const projects: { [key: string]: Project[] } = {
  it: [
    {
      id: '1',
      title: 'Studio Tributario Amoroso',
      description: 'Sito web professionale per studio tributario con gestione clienti e servizi fiscali. Interfaccia moderna e user-friendly per la presentazione dei servizi professionali.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/Andros924/studio-tributario-amoroso',
      liveUrl: 'https://studiofiscaleamoroso.com/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'BookTok',
      description: 'Piattaforma per appassionati di libri che permette di gestire la propria libreria fisica in modo comodo, veloce e user-friendly. Include funzionalità di catalogazione e ricerca.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/Andros924/BookTok',
      liveUrl: 'https://libreriavirtuale.netlify.app/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Propora',
      description: 'Sistema di gestione per case vacanze che centralizza la gestione degli appartamenti da Booking e Airbnb in un\'unica piattaforma. Ottimizza la gestione delle prenotazioni.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'API Integration'],
      githubUrl: 'https://github.com/Andros924/Propora',
      status: 'in-progress',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'Blog M.P. Farinella',
      description: 'Blog personale per una giornalista con sistema di gestione articoli. Interfaccia pulita e moderna per la pubblicazione e gestione dei contenuti editoriali.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
      githubUrl: 'https://github.com/Andros924/Blog-M.P.-Farinella',
      liveUrl: 'https://mpfarinella.netlify.app/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ],
  en: [
    {
      id: '1',
      title: 'Amoroso Tax Office',
      description: 'Professional website for tax office with client management and fiscal services. Modern and user-friendly interface for presenting professional services.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/Andros924/studio-tributario-amoroso',
      liveUrl: 'https://studiofiscaleamoroso.com/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'BookTok',
      description: 'Platform for book enthusiasts that allows managing your physical library in a convenient, fast and user-friendly way. Includes cataloging and search functionality.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/Andros924/BookTok',
      liveUrl: 'https://libreriavirtuale.netlify.app/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Propora',
      description: 'Management system for vacation rentals that centralizes apartment management from Booking and Airbnb in a single platform. Optimizes booking management.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'API Integration'],
      githubUrl: 'https://github.com/Andros924/Propora',
      status: 'in-progress',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'M.P. Farinella Blog',
      description: 'Personal blog for a journalist with article management system. Clean and modern interface for publishing and managing editorial content.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
      githubUrl: 'https://github.com/Andros924/Blog-M.P.-Farinella',
      liveUrl: 'https://mpfarinella.netlify.app/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ],
  fr: [
    {
      id: '1',
      title: 'Cabinet Fiscal Amoroso',
      description: 'Site web professionnel pour cabinet fiscal avec gestion clients et services fiscaux. Interface moderne et conviviale pour la présentation des services professionnels.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/Andros924/studio-tributario-amoroso',
      liveUrl: 'https://studiofiscaleamoroso.com/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'BookTok',
      description: 'Plateforme pour passionnés de livres qui permet de gérer sa bibliothèque physique de manière pratique, rapide et conviviale. Inclut des fonctionnalités de catalogage et de recherche.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/Andros924/BookTok',
      liveUrl: 'https://libreriavirtuale.netlify.app/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Propora',
      description: 'Système de gestion pour locations de vacances qui centralise la gestion des appartements de Booking et Airbnb dans une seule plateforme. Optimise la gestion des réservations.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'API Integration'],
      githubUrl: 'https://github.com/Andros924/Propora',
      status: 'in-progress',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'Blog M.P. Farinella',
      description: 'Blog personnel pour une journaliste avec système de gestion d\'articles. Interface propre et moderne pour la publication et la gestion du contenu éditorial.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
      githubUrl: 'https://github.com/Andros924/Blog-M.P.-Farinella',
      liveUrl: 'https://mpfarinella.netlify.app/',
      status: 'completed',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]
};
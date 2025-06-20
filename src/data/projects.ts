import type { Project } from '../types';

export const projects: Project[] = [
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
];
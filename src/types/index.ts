export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress';
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type Language = 'it' | 'en';
export type Theme = 'light' | 'dark';
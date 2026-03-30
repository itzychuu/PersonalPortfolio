export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'network' | 'programming';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  image?: string;
}

export interface Community {
  id: string;
  name: string;
  role: string;
  description: string;
  logo?: string;
  period: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
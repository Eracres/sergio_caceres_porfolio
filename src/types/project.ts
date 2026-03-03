export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  featured?: boolean;
};
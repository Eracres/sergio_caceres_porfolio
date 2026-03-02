import type { Project } from "@/types/project";

export type Project = {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    githubUrl: string;
    demoUrl?: string;
    image: string; // ruta en /public
  };
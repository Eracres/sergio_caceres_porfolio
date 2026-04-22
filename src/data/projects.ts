import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "task-manager-pro",
    title: "Task Manager Pro",
    description: "Aplicación avanzada de gestión de tareas con arquitectura escalable.",
    longDescription: "Proyecto fullstack donde implemento...",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    features: [
      "CRUD completo",
      "Filtros avanzados",
      "Persistencia de datos"
    ],
    challenges: [
      "Gestión de estado compleja",
      "Arquitectura escalable"
    ],
    learnings: [
      "Optimización de componentes",
      "Buenas prácticas en React"
    ],
    githubUrl: "https://github.com/Eracres/nextjs-task-manager.git",
    demoUrl: "https://nextjs-task-manager-eight.vercel.app/",
    image: "/projects/task-manager.png",
    featured: false,
  },

  {
    slug: "movie-finder",

    title: "Movie Finder",

    description:
      "Buscador de películas consumiendo una API externa con paginación y gestión de estados de carga.",

    longDescription:
      "Movie Finder es una aplicación que permite buscar películas utilizando una API externa. Implementa paginación de resultados, manejo de estados de carga y errores, y una interfaz clara centrada en la experiencia de usuario. Este proyecto se creó para practicar consumo de APIs y gestión de datos asíncronos.",

    technologies: ["Next.js", "TypeScript", "API REST", "Tailwind"],

    image: "/images/projects/movie-finder.png",

    githubUrl: "https://github.com/Eracres/movie-finder",

    demoUrl: "",

    featured: true,

    features: [
      "Búsqueda de películas por texto",
      "Consumo de API externa",
      "Paginación de resultados",
      "Estados de carga y error",
      "Diseño responsive",
    ],

    challenges: [
      "Gestionar estados de carga y error correctamente",
      "Diseñar un sistema simple de paginación",
      "Controlar peticiones asincrónicas",
    ],

    learnings: [
      "Consumo de APIs externas",
      "Gestión de datos asíncronos",
      "Patrones de UI para estados de carga",
    ],
  },
];
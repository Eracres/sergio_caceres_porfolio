import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "task-manager",
    title: "Task Manager",
    description: "Aplicación CRUD para gestionar tareas con filtros y persistencia.",
    longDescription:
      "Aplicación de gestión de tareas enfocada en arquitectura de componentes, manejo de estado y persistencia. Incluye creación, edición, eliminación, filtros y estados de tarea.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    features: [
      "CRUD completo de tareas",
      "Filtros por estado y búsqueda",
      "Persistencia en localStorage",
      "UI responsive",
    ],
    challenges: [
      "Diseñar un estado escalable y fácil de mantener",
      "Evitar renders innecesarios al filtrar y buscar",
    ],
    learnings: [
      "Modelado de datos y tipado con TypeScript",
      "Separación de lógica y UI en componentes reutilizables",
    ],
    githubUrl: "https://github.com/Eracres",
    demoUrl: "",
    image: "/images/projects/task-manager.png",
    featured: true,
  },
  {
    slug: "movie-finder",
    title: "Movie Finder",
    description: "Buscador de películas consumiendo una API externa con paginación.",
    longDescription:
      "Proyecto para demostrar consumo de APIs, manejo de errores, estados de carga y paginación. Incluye búsqueda por texto y navegación a detalle.",
    technologies: ["Next.js", "TypeScript", "API REST"],
    features: [
      "Búsqueda por texto",
      "Paginación de resultados",
      "Estados de carga y error",
      "Detalle básico de película",
    ],
    challenges: [
      "Gestionar estados de loading/error sin romper la UX",
      "Diseñar una paginación simple y clara",
    ],
    learnings: [
      "Consumo de APIs y control de errores",
      "Patrones de UI para estados asíncronos",
    ],
    githubUrl: "https://github.com/Eracres",
    demoUrl: "",
    image: "/images/projects/movie-finder.png",
    featured: true,
  },
];
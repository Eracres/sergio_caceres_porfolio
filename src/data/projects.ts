import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "task-manager",

    title: "Task Manager",

    description:
      "Aplicación para gestionar tareas con filtrado, persistencia local y arquitectura basada en componentes reutilizables.",

    longDescription:
      "Task Manager es una aplicación CRUD desarrollada para gestionar tareas de forma eficiente. Permite crear, filtrar, completar y eliminar tareas con persistencia en el navegador mediante localStorage. El objetivo del proyecto fue practicar arquitectura limpia en React, separación de responsabilidades y optimización de renders.",

    technologies: ["React", "TypeScript", "Next.js", "Tailwind"],

    image: "/images/projects/task-manager.png",

    githubUrl: "https://github.com/Eracres/task-manager",

    demoUrl: "",

    featured: true,

    features: [
      "CRUD completo de tareas",
      "Persistencia de datos con localStorage",
      "Filtros de tareas (pendientes / completadas)",
      "Arquitectura basada en componentes reutilizables",
      "UI responsive",
    ],

    challenges: [
      "Evitar renders innecesarios al actualizar listas de tareas",
      "Diseñar una estructura de componentes escalable",
      "Gestionar correctamente el estado de las tareas",
    ],

    learnings: [
      "Modelado de datos con TypeScript",
      "Optimización de renderizado en React",
      "Separación clara entre lógica y UI",
    ],
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
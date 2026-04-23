import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "task-manager-pro",
    title: "Task Manager Pro",
    description:
      "Aplicación fullstack de gestión de tareas con autenticación, API propia, persistencia en Supabase y experiencia de usuario avanzada.",
    longDescription:
      "Task Manager Pro es una aplicación fullstack orientada a la productividad, donde implemento una arquitectura más realista con Next.js, TypeScript y Supabase. El proyecto incluye autenticación de usuarios, API propia con Route Handlers, base de datos persistente, drag and drop con guardado de orden, dashboard de métricas, filtros, tema claro/oscuro y una interfaz pensada para ofrecer una experiencia más profesional.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
      "dnd-kit",
    ],
    features: [
      "CRUD completo de tareas",
      "Autenticación de usuarios",
      "API real con Route Handlers",
      "Persistencia de datos en Supabase",
      "Filtros por estado",
      "Drag and drop con guardado de orden",
      "Dashboard de métricas",
      "Tema claro/oscuro",
      "Atajos de teclado en edición",
      "Toasts y animaciones de interfaz",
    ],
    challenges: [
      "Diseñar una arquitectura escalable separando cliente, API y base de datos",
      "Gestionar autenticación y autorización por usuario",
      "Persistir el orden de tareas tras el drag and drop",
      "Mantener una experiencia fluida entre estado local y datos remotos",
    ],
    learnings: [
      "Integración fullstack con Next.js y Supabase",
      "Implementación de autenticación SSR",
      "Gestión de estado y sincronización con base de datos",
      "Mejora de UX con animaciones, feedback visual y theming",
    ],
    githubUrl: "https://github.com/Eracres/nextjs-task-manager",
    demoUrl: "https://nextjs-task-manager-eight.vercel.app/",
    image: "/projects/task-manager.png",
    featured: true,
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
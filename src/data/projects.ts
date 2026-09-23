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
    featured: false,
  },

  {
    slug: "movie-finder",
    title: "Movie Finder",
    description:
      "Aplicación para buscar películas y series usando la API de TMDB, con interfaz moderna, filtros por tipo y resultados dinámicos.",
    longDescription:
      "Movie Finder es una aplicación desarrollada con Angular que consume la API de TMDB para buscar tanto películas como series. Incluye búsqueda avanzada por tipo (películas, series o ambos), normalización de datos entre distintos endpoints, interfaz moderna y responsive, navegación a páginas de detalle, sistema de favoritos y persistencia del estado de búsqueda.",
    technologies: [
      "Angular",
      "TypeScript",
      "SCSS",
      "TMDB API",
      "RxJS",
    ],
    features: [
      "Búsqueda de películas y series",
      "Selector de tipo: Películas, Series o Todo",
      "Consumo de API externa de TMDB",
      "Normalización de datos entre películas y series",
      "Paginación de resultados",
      "Páginas de detalle dinámicas",
      "Sistema de favoritos",
      "Persistencia del estado de búsqueda",
      "Gestión de estados de carga, error y resultados vacíos",
      "Interfaz responsive",
    ],
    challenges: [
      "Unificar resultados procedentes de endpoints diferentes de TMDB",
      "Gestionar diferencias entre los modelos de películas y series",
      "Combinar y normalizar resultados de múltiples peticiones",
      "Gestionar correctamente la actualización de la interfaz y detección de cambios",
      "Mantener el estado de búsqueda durante la navegación",
      "Compatibilizar almacenamiento del navegador con Angular SSR",
    ],
    learnings: [
      "Consumo de APIs externas con Angular",
      "Programación reactiva con RxJS",
      "Arquitectura modular basada en componentes y servicios",
      "Normalización de datos en frontend",
      "Gestión de estado y persistencia en el navegador",
      "Angular SSR y compatibilidad entre servidor y navegador",
      "Diseño de interfaces responsive y mejora de experiencia de usuario",
    ],
    githubUrl: "https://github.com/Eracres/movie-finder",
    demoUrl: "https://movie-finder-yz9q.vercel.app/",
    image: "/images/projects/movie-finder.png",
    featured: false,
  },

  {
    slug: "cocihub",
    title: "CociHub",
    description:
      "Plataforma web para descubrir, crear y compartir recetas, desarrollada como aplicación fullstack.",
    longDescription:
      "CociHub es una plataforma gastronómica fullstack orientada a la creación, descubrimiento y gestión de recetas. El proyecto combina una interfaz moderna con autenticación, persistencia de datos y funcionalidades sociales, y continúa actualmente en desarrollo con nuevas características.",

    technologies: [],

    features: [],

    challenges: [],

    learnings: [],

    githubUrl: "https://github.com/Eracres/coci_hub",
    demoUrl: "",
    image: "/images/projects/cocihub.png",
    featured: true,
  },
];
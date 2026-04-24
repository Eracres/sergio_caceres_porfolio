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
    slug: "task-manager",
    title: "Task Manager Pro",
    description:
      "Aplicación fullstack para gestionar tareas con autenticación, API real, drag and drop, métricas y persistencia en Supabase.",
    longDescription:
      "Task Manager Pro es una aplicación fullstack desarrollada con Next.js, TypeScript, Tailwind CSS y Supabase. Incluye autenticación de usuarios, API real mediante Route Handlers, persistencia en base de datos, drag and drop con orden guardado, dashboard de métricas, filtros por estado, edición inline, tema claro/oscuro y una experiencia de usuario cuidada.",
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
      "Autenticación con Supabase Auth",
      "API real con Next.js Route Handlers",
      "Persistencia de datos en Supabase",
      "Drag and drop con orden persistente",
      "Dashboard de métricas",
      "Filtros por estado",
      "Edición inline de tareas",
      "Tema claro y oscuro",
    ],
    challenges: [
      "Diseñar una arquitectura fullstack mantenible",
      "Gestionar autenticación y permisos por usuario",
      "Persistir el orden de tareas tras reordenarlas",
      "Coordinar estado local, API y base de datos",
      "Adaptar la interfaz a modo claro y oscuro",
    ],
    learnings: [
      "Integración de Supabase con Next.js",
      "Uso de Route Handlers como API real",
      "Protección de datos mediante autenticación",
      "Persistencia y sincronización de estado con base de datos",
      "Mejora de UX con métricas, animaciones y drag and drop",
    ],
    githubUrl: "https://github.com/Eracres/nextjs-task-manager",
    demoUrl: "https://movie-finder-yz9q.vercel.app/",
    image: "/images/projects/task-manager.png",
    featured: false,
  }
];
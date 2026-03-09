"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { span } from "framer-motion/m";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:-translate-y-1 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`Imagen del proyecto ${project.title}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white transition group-hover:text-purple-300">
                {project.title}
              </h2>

              {project.featured ? (
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  Destacado
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-white/60">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-purple-400 transition group-hover:text-purple-300">
                Ver detalles →
              </span>

              <div className="flex gap-2">
                <span className="rounded-lg border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60">
                  GitHub
                </span>
                {project.demoUrl ? (
                  <span className="rounded-lg border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60">
                    Demo
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
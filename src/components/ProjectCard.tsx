import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          fill
          className="object-cover transition group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="mt-2 text-white/60">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
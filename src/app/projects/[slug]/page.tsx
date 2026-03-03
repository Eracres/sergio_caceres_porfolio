import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Sergio Cáceres",
      description: "El proyecto solicitado no existe.",
    };
  }

  return {
    title: `${project.title} | Sergio Cáceres`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Sergio Cáceres`,
      description: project.description,
      images: [project.image],
    },
  };
}


type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-3 text-white/60">{project.longDescription}</p>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Tecnologías</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-semibold">Features</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {project.features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-semibold">Retos</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {project.challenges.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-semibold">Aprendizajes</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {project.learnings.map((l) => (
              <li key={l}>• {l}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Enlaces</h2>
        <div className="mt-3 flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition"
          >
            Código (GitHub)
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition"
            >
              Demo
            </a>
          ) : (
            <span className="rounded-lg border border-white/15 px-4 py-2 text-white/60">
              Demo (próximamente)
            </span>
          )}
        </div>
      </section>
    </main>
  );
}
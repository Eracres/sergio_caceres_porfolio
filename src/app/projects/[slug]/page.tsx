import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";
import Container from "@/components/Container";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

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

  const ogImage = `${site.url}${project.image}`;

  return {
    title: `${project.title} | Sergio Cáceres`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Sergio Cáceres`,
      description: project.description,
      url: `${site.url}/projects/${project.slug}`,
      images: [{ url: ogImage }],
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
    <Container>
      <section className="py-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
            Proyecto
          </span>

          {project.featured ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
              Destacado
            </span>
          ) : null}
        </div>

        <h1 className="gradient-text mt-5 text-4xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          {project.longDescription}
        </p>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Imagen del proyecto ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Tecnologías</h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-purple-500/40 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <h2 className="text-lg font-semibold text-white">Features</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/60">
            {project.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <h2 className="text-lg font-semibold text-white">Retos</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/60">
            {project.challenges.map((challenge) => (
              <li key={challenge}>• {challenge}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <h2 className="text-lg font-semibold text-white">Aprendizajes</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/60">
            {project.learnings.map((learning) => (
              <li key={learning}>• {learning}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Enlaces</h2>

        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-purple-500/40 hover:bg-white/10 hover:text-white"
          >
            Código en GitHub
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="gradient-button rounded-lg px-5 py-3 text-sm font-medium"
            >
              Ver demo
            </a>
          ) : (
            <span className="rounded-lg border border-white/15 px-5 py-3 text-sm text-white/50">
              Demo próximamente
            </span>
          )}
        </div>
      </section>
    </Container>
  );
}
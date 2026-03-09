import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";

export default function ProjectsPage() {

  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  {sortedProjects.map((p) => (
    <ProjectCard key={p.slug} project={p} />
  ))}

  return (
    <Container>
      <section className="py-10">
        <h1 className="gradient-text text-4xl font-bold tracking-tight">
          Proyectos
        </h1>

        <p className="mt-4 max-w-3xl text-white/60">
          Una selección de proyectos donde muestro arquitectura, buenas prácticas,
          resolución de problemas reales y una forma de trabajar orientada a
          construir aplicaciones limpias y mantenibles.
        </p>
      </section>

      <section className="mt-4 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </Container>
  );
}
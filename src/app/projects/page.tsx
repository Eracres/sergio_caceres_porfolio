import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tight">Proyectos</h1>
      <p className="mt-3 text-white/60">
        Una selección de proyectos donde muestro arquitectura, buenas prácticas y
        resolución de problemas reales.
      </p>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </Container>
  );
}
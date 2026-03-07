import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import FeaturedStack from "@/components/FeaturedStack";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";


export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <Container>
      <Hero />

      <FeaturedStack />

      <section className="mt-8 border-t border-white/10 pt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Proyectos destacados</h2>
          <Link
            href="/projects"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-white/10 pt-8">
        <h2 className="text-2xl font-semibold">Cómo trabajo</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-medium">Arquitectura</p>
            <p className="mt-2 text-sm text-white/60">
              Separación clara de datos, componentes y páginas. Código fácil de
              escalar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-medium">UI/UX</p>
            <p className="mt-2 text-sm text-white/60">
              Interfaces limpias, responsive y centradas en la experiencia de
              usuario.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-medium">Calidad</p>
            <p className="mt-2 text-sm text-white/60">
              Tipado con TypeScript, componentes reutilizables y commits claros.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );}
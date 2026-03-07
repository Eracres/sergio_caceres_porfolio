import Link from "next/link";

const badges = ["React", "Next.js", "TypeScript", "JavaScript", "Git/GitHub"];

export default function Hero() {
  return (
    <section className="py-10">
      <div className="space-y-5">
        <p className="text-sm text-white/60">
          Disponible para oportunidades junior
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Sergio Cáceres
          <span className="block text-white/80">Desarrollador Web Junior</span>
        </h1>

        <p className="max-w-2xl text-lg text-white/60">
          Desarrollo aplicaciones web con foco en frontend, componentes
          reutilizables y código bien estructurado. Estoy construyendo proyectos
          reales para demostrar mi trabajo y encontrar mi primera oportunidad en
          el sector.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Link
            href="/projects"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition"
          >
            Ver proyectos
          </Link>

          <a
            href="/CV_Sergio_DAW.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            Descargar CV
          </a>

          <a
            href="https://github.com/Eracres"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
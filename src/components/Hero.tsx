import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const badges = ["React", "Next.js", "TypeScript", "JavaScript", "Git/GitHub"];

export default function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">

        {/* FILA SUPERIOR */}
        <div className="grid items-start gap-12 md:grid-cols-[1fr_260px]">

          <div>
            <p className="text-sm text-white/60">
              Disponible para oportunidades junior
            </p>

            <h1 className="mt-2 text-5xl font-bold leading-tight sm:text-6xl">
              Sergio Cáceres
              <span className="gradient-text block">
                Desarrollador Web Junior
              </span>
            </h1>
          </div>

          {/* FOTO */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(168,85,247,0.18)]">
              <Image
                src="/Foto_Prueba.webp"
                alt="Sergio Cáceres"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* TEXTO A TODO EL ANCHO */}
        <div className="mt-10 max-w-3xl">
          <p className="text-lg leading-9 text-white/70">
            Desarrollo aplicaciones web con foco en frontend, componentes
            reutilizables y código bien estructurado. Estoy construyendo
            proyectos reales para demostrar mi trabajo y encontrar mi primera
            oportunidad en el sector.
          </p>
        </div>

        {/* BADGES */}
        <div className="mt-6 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* BOTONES */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="gradient-button rounded-lg px-6 py-3 text-sm font-medium"
          >
            Ver proyectos
          </Link>

          <a
            href={site.cvPath}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Descargar CV
          </a>

          <a
            href="https://github.com/Eracres"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
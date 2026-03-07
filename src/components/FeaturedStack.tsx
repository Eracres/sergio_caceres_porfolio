import Link from "next/link";

type Tech = {
  name: string;
  icon: string;
};

const featuredTechs: Tech[] = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
];

export default function FeaturedStack() {
  return (
    <section className="mt-14 border-t border-white/10 pt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="gradient-text text-3xl font-bold">Stack principal</h2>
          <p className="mt-2 max-w-2xl text-white/60">
            Tecnologías principales con las que construyo mis proyectos y sigo
            mejorando cada día.
          </p>
        </div>

        <Link
          href="/stack"
          className="text-sm text-white/70 transition hover:text-white"
        >
          Ver stack completo →
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-10 sm:grid-cols-4 lg:grid-cols-6">
        {featuredTechs.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center text-center"
          >
            <div className="gradient-border flex h-24 w-24 items-center justify-center rounded-xl bg-white/5 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-12 w-12 object-contain transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.45)]"
              />
            </div>

            <p className="mt-4 text-sm text-white/75">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import Container from "@/components/Container";

type Tech = {
  name: string;
  icon: string;
};

type SectionProps = {
  title: string;
  techs: Tech[];
};

const frontend: Tech[] = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

const backend: Tech[] = [
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
];

const database: Tech[] = [
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
];

const tools: Tech[] = [
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
];

function StackSection({ title, techs }: SectionProps) {
  return (
    <section className="mt-14 border-t border-white/10 pt-10">
      <h2 className="text-center text-2xl font-semibold text-white/90">
        {title}
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center rounded-sm border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:scale-105 hover:bg-white/10 hover:brightness-110"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-16 w-16 object-contain"
            />
            <p className="mt-3 text-sm text-white/70">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function StackPage() {
  return (
    <Container>
      <section className="py-10 text-center">
        <h1 className="gradient-text text-5xl font-bold">
          Mis habilidades
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Tecnologías que utilizo en mis proyectos y con las que sigo creciendo
          como desarrollador web.
        </p>
      </section>

      <StackSection title="Frontend" techs={frontend} />
      <StackSection title="Backend" techs={backend} />
      <StackSection title="Base de datos" techs={database} />
      <StackSection title="Herramientas" techs={tools} />
    </Container>
  );
}
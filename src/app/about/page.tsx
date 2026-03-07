import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-6">
        <h1 className="text-4xl font-bold tracking-tight">Sobre mí</h1>

        <p className="mt-4 max-w-3xl text-white/60">
          Soy Sergio Cáceres, desarrollador web junior, con especial interés en
          la creación de aplicaciones web modernas, bien estructuradas y fáciles
          de mantener.
        </p>

        <p className="mt-4 max-w-3xl text-white/60">
          Me gusta trabajar con una arquitectura clara, componentes reutilizables
          y una buena experiencia de usuario. Actualmente estoy construyendo mi
          portfolio y proyectos propios para demostrar mis habilidades y seguir
          creciendo profesionalmente.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Tecnologías principales</h2>
          <ul className="mt-4 space-y-2 text-white/60">
            <li>React / Next.js</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML / CSS</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Actualmente busco</h2>
          <p className="mt-4 text-white/60">
            Mi primera oportunidad como desarrollador junior, donde pueda aportar,
            aprender de un equipo real y seguir mejorando tanto a nivel técnico
            como profesional.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Cómo trabajo</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="font-medium">Código claro</p>
            <p className="mt-2 text-sm text-white/60">
              Priorizo componentes entendibles, estructura ordenada y buena
              legibilidad.
            </p>
          </div>

          <div>
            <p className="font-medium">Aprendizaje continuo</p>
            <p className="mt-2 text-sm text-white/60">
              Me gusta mejorar proyecto a proyecto, revisando arquitectura,
              estilo y experiencia de usuario.
            </p>
          </div>

          <div>
            <p className="font-medium">Orientación práctica</p>
            <p className="mt-2 text-sm text-white/60">
              Intento construir proyectos que sirvan para demostrar habilidades
              útiles en entornos reales.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
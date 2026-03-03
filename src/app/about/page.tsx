export default function AboutPage() {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">Sobre mí</h1>
        <p className="mt-3 text-gray-600">
          Soy Sergio Cáceres, desarrollador web junior. Me enfoco en construir
          interfaces claras, componentes reutilizables y proyectos bien
          estructurados con React/Next.js.
        </p>
  
        <h2 className="mt-8 text-xl font-semibold">Tecnologías</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-600">
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Git / GitHub</li>
        </ul>
      </main>
    );
  }
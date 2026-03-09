"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
} from "react-icons/si";
import type { Variants } from "framer-motion";
import Container from "@/components/Container";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

export default function AboutPage() {
  return (
    <Container>
      <section className="py-10">
        <h1 className="gradient-text text-4xl font-bold tracking-tight">
          Sobre mí
        </h1>

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

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Tecnologías */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Tecnologías principales
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Stack principal con el que construyo mis proyectos.
              </p>
            </div>

            <Link
              href="/stack"
              className="text-sm text-purple-400 transition hover:text-purple-300"
            >
              Ver stack →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {techs.map((tech) => {
              const Icon = tech.icon;

              return (
                <Link key={tech.name} href="/stack" className="group">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-4 transition duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]"
                  >
                    <Icon size={22} color={tech.color} />
                    <span className="text-sm text-white/80">{tech.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Actualmente busco */}
        <Link href="/contact" className="group">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.22 }}
            className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          >
            <h2 className="text-xl font-semibold text-white">
              Actualmente busco
            </h2>

            <p className="mt-4 text-white/60">
              Mi primera oportunidad como desarrollador junior, donde pueda
              aportar, aprender de un equipo real y seguir mejorando tanto a
              nivel técnico como profesional.
            </p>

            <p className="mt-6 text-sm text-purple-400 transition group-hover:text-purple-300">
              Ir a contacto →
            </p>
          </motion.div>
        </Link>
      </section>

      {/* Cómo trabajo */}
      <motion.section
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6"
      >
        <h2 className="text-xl font-semibold text-white">Cómo trabajo</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="font-medium text-white">Código claro</p>
            <p className="mt-2 text-sm text-white/60">
              Priorizo componentes entendibles, estructura ordenada y buena
              legibilidad.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="font-medium text-white">Aprendizaje continuo</p>
            <p className="mt-2 text-sm text-white/60">
              Me gusta mejorar proyecto a proyecto, revisando arquitectura,
              estilo y experiencia de usuario.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="font-medium text-white">Orientación práctica</p>
            <p className="mt-2 text-sm text-white/60">
              Intento construir proyectos que sirvan para demostrar habilidades
              útiles en entornos reales.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Accesos rápidos */}
      <section className="mt-10 grid gap-6 sm:grid-cols-3">
        <Link href="/stack" className="group">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.22 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
          >
            <h3 className="font-semibold text-white">Stack completo</h3>
            <p className="mt-2 text-sm text-white/60">
              Explora las tecnologías, herramientas y bases de datos que manejo.
            </p>
            <p className="mt-5 text-sm text-purple-400 group-hover:text-purple-300">
              Ver stack →
            </p>
          </motion.div>
        </Link>

        <Link href="/projects" className="group">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.22 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
          >
            <h3 className="font-semibold text-white">Mis proyectos</h3>
            <p className="mt-2 text-sm text-white/60">
              Revisa aplicaciones y trabajos donde muestro mi forma de
              desarrollar.
            </p>
            <p className="mt-5 text-sm text-purple-400 group-hover:text-purple-300">
              Ver proyectos →
            </p>
          </motion.div>
        </Link>

        <Link href="/contact" className="group">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.22 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
          >
            <h3 className="font-semibold text-white">Hablemos</h3>
            <p className="mt-2 text-sm text-white/60">
              Si quieres contactar conmigo para una oportunidad o colaboración,
              aquí tienes acceso directo.
            </p>
            <p className="mt-5 text-sm text-purple-400 group-hover:text-purple-300">
              Ir a contacto →
            </p>
          </motion.div>
        </Link>
      </section>
    </Container>
  );
}
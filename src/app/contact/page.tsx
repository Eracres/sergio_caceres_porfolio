"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const FORM_ENDPOINT = "https://formspree.io/f/maqpnvzg";
const EMAIL = "shark2150388@gmail.com";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container>
      <section className="py-10">
        <h1 className="gradient-text text-4xl font-bold tracking-tight">
          Contacto
        </h1>

        <p className="mt-4 max-w-2xl text-white/60">
          Si quieres hablar sobre una oportunidad profesional, una colaboración
          o cualquier proyecto, puedes escribirme directamente desde este formulario.
        </p>
      </section>

      <section className="space-y-10">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-white/80">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-white/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="company" className="mb-2 block text-sm text-white/80">
              Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-500"
              placeholder="Nombre de la empresa (opcional)"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-sm text-white/80">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-500"
              placeholder="Cuéntame en qué puedo ayudarte..."
            />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="gradient-button rounded-lg px-6 py-3 text-sm font-medium disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400">
                Mensaje enviado correctamente.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">
                Hubo un error al enviar el mensaje.
              </p>
            )}
          </div>
        </form>

        {/* CONTACTO DIRECTO */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <h2 className="text-xl font-semibold text-white">
            Contacto directo
          </h2>

          <p className="mt-2 text-sm text-white/60">
            También puedes contactarme directamente por cualquiera de estos medios.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">

            {/* EMAIL */}
            <motion.a
              href="mailto:shark2150388@gmail.com"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            >
              <FaEnvelope
                size={34}
                color="#EA4335"
                className="transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-4 font-semibold text-white">
                Email
              </h3>

              <p className="mt-2 text-sm text-white/60 break-all">
                shark2150388@gmail.com
              </p>
            </motion.a>

            {/* GITHUB */}
            <a
              href="https://github.com/Eracres"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            >
              <FaGithub
                size={34}
                className="text-white transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-4 font-semibold text-white">
                GitHub
              </h3>

              <p className="mt-2 text-sm text-white/60">
                github.com/Eracres
              </p>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            >
              <FaLinkedin
                size={34}
                color="#0A66C2"
                className="transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-4 font-semibold text-white">
                LinkedIn
              </h3>

              <p className="mt-2 text-sm text-white/60">
                Tu perfil de LinkedIn
              </p>
            </a>

          </div>

        </div>
      </section>
    </Container>
  );
}
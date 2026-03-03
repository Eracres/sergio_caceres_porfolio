import Container from "@/components/Container";
import CopyEmailButton from "@/components/CopyEmailButton";

const EMAIL = "shark2150388@gmail.com";

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tight">Contacto</h1>
      <p className="mt-4 max-w-2xl text-white/60">
        Si quieres hablar sobre una oportunidad junior o un proyecto, puedes
        escribirme o ver mis perfiles.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition"
        >
          ✉️ Enviar email
        </a>

        <CopyEmailButton email={EMAIL} />

        <a
          href="https://github.com/Eracres"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
        >
          💻 GitHub
        </a>

        {/* LinkedIn cuando lo tengas */}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-white/60">Email</p>
        <p className="mt-1 font-medium">{EMAIL}</p>
      </div>
    </Container>
  );
}
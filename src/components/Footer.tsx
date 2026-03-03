import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="flex flex-col gap-2 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sergio Cáceres</p>

          <div className="flex gap-4">
            <a
              href="https://github.com/Eracres"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
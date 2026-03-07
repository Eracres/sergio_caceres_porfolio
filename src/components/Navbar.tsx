"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
  { href: "/stack", label: "Stack" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <Container>
        <nav className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Sergio Cáceres
          </Link>

          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "rounded-lg px-3 py-2 text-sm transition",
                      "text-white/80 hover:text-white hover:bg-white/10",
                      isActive ? "bg-white/15 text-white" : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href={site.cvPath}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:opacity-90 transition"
            >
              CV
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
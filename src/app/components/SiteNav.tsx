// app/components/SiteNav.tsx
import Link from "next/link";
import { SITE } from "@/app/lib/site";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight text-zinc-900">
          {SITE.name}
        </Link>

        <nav className="hidden gap-6 text-sm text-zinc-600 sm:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-zinc-900 transition">
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={`mailto:${SITE.email}`}
          className="rounded-xl border border-zinc-200 bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition"
        >
          Email
        </a>
      </div>
    </header>
  );
}

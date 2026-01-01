// app/page.tsx
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import { Card, Pill } from "@/app/components/ui";
import { FEATURED_PROJECTS, SITE, slugify } from "@/app/lib/site";

function HeroSimple() {
  const pills = [
    "Detector instrumentation",
    "Reconstruction pipelines",
    "Detector ML",
    "Front-end electronics",
    "DAQ / readout",
    "FPGA / Verilog",
    "Signal processing",
    "CFD / structural sims",
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:py-16">
        <p className="text-sm font-medium text-zinc-600">{SITE.location}</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl leading-[1.05]">
          {SITE.name}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-zinc-700 sm:text-xl leading-relaxed">
          {SITE.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {pills.map((x) => (
            <Pill key={x}>{x}</Pill>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition"
          >
            Email
          </a>
          <Link
            href="/projects"
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition"
          >
            View projects
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition"
          >
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}

function NavTiles() {
  const tiles = [
    { title: "About", desc: "Short bio + focus areas.", href: "/about" },
    { title: "Projects", desc: "Selected work with full detail pages.", href: "/projects" },
    { title: "Publications", desc: "Thesis, papers, notes, talks.", href: "/publications" },
    { title: "Experience", desc: "Timeline + key contributions.", href: "/experience" },
    { title: "Contact", desc: "Email + links.", href: "/contact" },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-12">
      <h2 className="text-xl font-semibold text-zinc-900">Explore</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <Link key={t.href} href={t.href}>
            <Card className="h-full hover:border-zinc-300 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">{t.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{t.desc}</p>
                </div>
                <span className="text-sm text-zinc-500">→</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjectsPreview() {
  const picks = FEATURED_PROJECTS.slice(0, 3);
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-zinc-900">Featured projects</h2>
        <Link href="/projects" className="text-sm font-medium text-zinc-700 hover:underline">
          See all →
        </Link>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {picks.map((p) => {
          const slug = slugify(p.title);
          return (
            <Link key={p.title} href={`/projects/${slug}`}>
              <Card className="h-full hover:border-zinc-300 transition">
                <h3 className="text-base font-semibold text-zinc-900">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />
      <HeroSimple />
      <NavTiles />
      <FeaturedProjectsPreview />
      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto w-full max-w-6xl px-5 text-xs text-zinc-500">
          © {new Date().getFullYear()} {SITE.name}
        </div>
      </footer>
    </div>
  );
}

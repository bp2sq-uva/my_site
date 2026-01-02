// app/page.tsx
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import { Card, Pill } from "@/app/components/ui";
import { FEATURED_PROJECTS, SITE, slugify } from "@/app/lib/site";
import { CURRENT } from "@/app/lib/site";
import Image from "next/image";
import { WORK_LOGOS } from "@/app/lib/site";
import { EXPERIENCE } from "@/app/lib/site";







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
    // <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
    <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-indigo-50 to-white">
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
            // className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition">
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
    // { title: "Contact", desc: "Email + links.", href: "/contact" },
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

function Thumb({ src, alt }: { src: string; alt: string }) {
  const isGif = src.toLowerCase().endsWith(".gif");
  if (isGif) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className="h-44 w-full object-cover" />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className="h-44 w-full object-cover"
    />
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
            <Card className="h-full overflow-hidden hover:border-zinc-300 transition">
            {p.images?.[0] ? (
                <div className="mb-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                <Thumb src={p.images[0].src} alt={p.images[0].alt} />
                </div>
            ) : null}

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

function AboutPreview() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10">
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-zinc-900">About me</h2>
            <p className="mt-2 text-zinc-700 leading-relaxed">
            I’m a cross-disciplinary engineer-scientist with hands-on experience across mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and data/ML pipelines. In my PhD work at the University of Virginia / Jefferson Lab, I’ve routinely owned problems end-to-end: turning requirements into practical designs, building and validating test setups, and developing analysis and calibration software that converts raw detector measurements into reliable, decision-ready results.
            On the mechanical side, I’ve designed and built fixtures and tooling for detector assembly, alignment, handling, and high-voltage testing—working closely with technicians and engineers to iterate based on fabrication constraints, safety requirements, and performance feedback. I also use simulation-guided design (CFD and structural analysis) to evaluate options, understand failure modes, and make design decisions that translate cleanly from model to hardware.
            On the electrical side, I’m comfortable operating at the hardware–software boundary: timing and synchronization issues, readout constraints, debugging workflows, and the engineering discipline required to make systems stable in real environments. I bring the same mindset to software—building maintainable pipelines, QA automation, and (when it helps) ML methods for signal detection and tracking in noisy, high-rate data.
            I work best in collaborative project environments where mechanical, electrical, and software decisions interact. My strength is bridging disciplines—communicating clearly across teams, keeping interfaces clean, validating with measurements, and iterating quickly—making me a strong fit for versatile engineering roles that involve designing, simulating, building, testing, and continuously improving complex systems.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/about"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition"
            >
              Read more
            </a>
            <a
              href="/projects"
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSplitPreview() {
  const professional = [
    "Cross-disciplinary engineer-scientist spanning mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and ML/data pipelines.",
    "Strong in collaborative environments—owning problems end-to-end: design → simulate → build → test → iterate.",
  ];

  const personal = [
    "I like building things, exploring new places, and learning new tools.",
    "Photography/video, live music, and projects that mix creativity with engineering.",
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">About</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Quick snapshot — professional and personal.
          </p>
        </div>

        <a href="/about" className="text-sm font-medium text-zinc-700 hover:underline">
          Read more →
        </a>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {/* Professional */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600" />
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
            Professional
          </p>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
            {professional.map((p, i) => (
              <p key={i} className="line-clamp-3">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-5">
            <a
              href="/about#professional"
              className="inline-flex rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
            >
              More →
            </a>
          </div>
        </div>

        {/* Personal */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-1 bg-zinc-400" />
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Personal
            </p>


          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
            {personal.map((p, i) => (
              <p key={i} className="line-clamp-3">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-5">
            <a
              href="/about#personal"
              className="inline-flex rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 transition"
            >
              More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreviewCombined() {
  const professional =
    "Cross-disciplinary engineer-scientist spanning mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and ML/data pipelines. I work best owning problems end-to-end: design → simulate → build → test → iterate in collaborative teams.";

  const personal =
    "Outside work, I enjoy building things, exploring new places, photography/video, and live music—especially projects that mix creativity with engineering.";

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">About</h2>
          <p className="mt-1 text-sm text-zinc-600">Professional + personal (short).</p>
        </div>

        <a href="/about" className="text-sm font-medium text-zinc-700 hover:underline">
          Read more →
        </a>
      </div>

      <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Professional */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
              Professional
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-700 line-clamp-4">
              {professional}{" "}
              <a
                href="/about#professional"
                className="font-semibold text-indigo-700 hover:underline"
              >
                More…
              </a>
            </p>
          </div>

          {/* Personal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Personal
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-700 line-clamp-4">
              {personal}{" "}
              <a
                href="/about#personal"
                className="font-semibold text-blue-600 hover:underline"
              >
                More…
              </a>
            </p>
          </div>
        </div>

        {/* Buttons (same box, below both columns) */}
        <div className="mt-6 flex flex-wrap gap-3 border-t border-zinc-200 pt-6">
          <a
            href="/about#professional"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
          >
            Professional details
          </a>

          <a
            href="/about#personal"
            className="rounded-xl border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 hover:border-blue-500 transition"
          >
            Personal
          </a>
        </div>
      </div>
    </section>
  );
}


function CurrentStatus() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-2">
      <div className="rounded-3xl border border-zinc-200 bg-indigo-50/40 p-6 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
              Current
            </p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-900">
              {CURRENT.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-700">{CURRENT.org}</p>
            <p className="mt-1 text-sm text-zinc-600">{CURRENT.supervisor}</p>
            <p className="mt-1 text-sm text-zinc-600">{CURRENT.location}</p>
          </div>

          <div className="sm:max-w-md">
            <p className="text-sm font-semibold text-zinc-900">Focus right now</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700">
              {CURRENT.focus.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-zinc-800">
              {CURRENT.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroWix() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/55" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-zinc-200">{SITE.location}</p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl leading-[1.05]">
              {SITE.name}
            </h1>

            <p className="mt-4 max-w-2xl text-base text-zinc-200 sm:text-lg leading-relaxed">
              {SITE.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
              >
                Download CV
              </a>
              <a
                href="/projects"
                className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                View Projects
              </a>
              <a
                href="/about"
                className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                About
              </a>
            </div>
          </div>

          {/* Right: Current panel */}
          <div className="lg:col-span-2 lg:justify-self-end lg:-mt-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
              {/* Concave notches */}
              {/* (Fill matches bg-zinc-950/55 overlay) */}
              <svg
                aria-hidden="true"
                className="absolute left-0 top-0 h-8 w-8 -translate-x-[1px] -translate-y-[1px]"
                viewBox="0 0 32 32"
              >
                <path d="M32 0H0v32C0 14.327 14.327 0 32 0Z" fill="rgb(9 9 11 / 0.55)" />
              </svg>

              <svg
                aria-hidden="true"
                className="absolute right-0 top-0 h-8 w-8 translate-x-[1px] -translate-y-[1px]"
                viewBox="0 0 32 32"
              >
                <path d="M0 0h32v32C32 14.327 17.673 0 0 0Z" fill="rgb(9 9 11 / 0.55)" />
              </svg>

              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Current
              </p>

              <p className="mt-2 text-sm text-white/90">
                {SITE.currentTitle}
                <br />
                <span className="text-white/70">{SITE.currentOrg}</span>
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <p>
                  <span className="text-white/70">Email: </span>
                  <a className="font-medium hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </p>

                {SITE.phone ? (
                  <p>
                    <span className="text-white/70">Phone: </span>
                    <span className="font-medium">{SITE.phone}</span>
                  </p>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {SITE.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function LogoMark({ src, alt }: { src: string; alt: string }) {
  const isSvg = src.toLowerCase().endsWith(".svg");

  if (isSvg) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className="h-19 w-auto object-contain" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={220}
      height={90}
      className="h-10 w-auto object-contain"
    />
  );
}


function LogoStrip() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10">
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
          Worked with
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {WORK_LOGOS.map((logo) => {
            const img = (
              <div className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-4 py-4">
                <div className="opacity-95 saturate-90 contrast-105 transition hover:opacity-100 hover:saturate-110 hover:contrast-110">
                <LogoMark src={logo.src} alt={logo.name} />
                </div>
              </div>
            );

            return logo.href ? (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="block"
                aria-label={logo.name}
                title={logo.name}
              >
                {img}
              </a>
            ) : (
              <div key={logo.name} title={logo.name}>
                {img}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />
      <HeroWix />
      <LogoStrip />
      <CurrentStatus />
      <AboutPreviewCombined />
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


// export default function Page() {
//   return (
//     <div className="min-h-screen bg-white text-zinc-900">
//       <SiteNav />
//       <HeroSimple />
//       <NavTiles />
//       <FeaturedProjectsPreview />
//       <footer className="border-t border-zinc-200 py-8">
//         <div className="mx-auto w-full max-w-6xl px-5 text-xs text-zinc-500">
//           © {new Date().getFullYear()} {SITE.name}
//         </div>
//       </footer>
//     </div>
//   );
// }

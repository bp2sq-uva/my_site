// app/page.tsx
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import { Card, Pill } from "@/app/components/ui";
import { FEATURED_PROJECTS, SITE, slugify } from "@/app/lib/site";
import { CURRENT } from "@/app/lib/site";
import Image from "next/image";
import { WORK_LOGOS } from "@/app/lib/site";
import { EXPERIENCE } from "@/app/lib/site";
import { projectSlug } from "@/app/lib/site";

//bhasitha 2




// function LogoMark({ src, alt }: { src: string; alt: string }) {
//   const isSvg = src.toLowerCase().endsWith(".svg");

//   // Fills a fixed square box uniformly
//   const cls = "h-full w-full object-contain p-2 opacity-70 transition group-hover:opacity-100";

//   if (isSvg) {
//     // eslint-disable-next-line @next/next/no-img-element
//     return <img src={src} alt={alt} className={cls} />;
//   }

//   return <Image src={src} alt={alt} width={256} height={256} className={cls} />;
// }



// function LogoMark({ src, alt }: { src: string; alt: string }) {
//   const isSvg = src.toLowerCase().endsWith(".svg");
//   const cls =
//     "h-full w-full object-contain p-2 opacity-70 transition group-hover:opacity-100";

//   if (isSvg) {
//     // eslint-disable-next-line @next/next/no-img-element
//     return <img src={src} alt={alt} className={cls} />;
//   }

//   return <Image src={src} alt={alt} width={256} height={256} className={cls} />;
// }




const HOME_PROJECT_SLUGS = new Set([
  // "deep-learning-based-rf-signal-detection-and-classification-for-drone-surveillance",
  "graph-neural-networks-gnns-for-nuclear-particle-tracking",
  "cfd-and-structural-simulations",
  "measurement-of-neutrons-electromagnetic-form-factor-at-high-momentum-transfer",
  // "wind-turbine-blade-design-optimization-using-cfd-simulations",
  // "nuclear-detector-fixtures",
]);



const TILE_BGS = ["bg-white", "bg-zinc-50", "bg-sky-50"] as const;
const TILE_ACCENTS = [
  "bg-indigo-600",
  "bg-sky-600",
  "bg-emerald-600",
  "bg-amber-500",
  "bg-rose-600",
  "bg-zinc-900/30",
] as const;

function bgForIndex(i: number) {
  return TILE_BGS[i % TILE_BGS.length];
}
function accentForIndex(i: number) {
  return TILE_ACCENTS[i % TILE_ACCENTS.length];
}

function ProjectsTilesHome() {
  // const projects = FEATURED_PROJECTS.filter((p) => HOME_PROJECT_SLUGS.has(projectSlug(p)));
  const projects = Array.from(HOME_PROJECT_SLUGS)
    .map((slug) => FEATURED_PROJECTS.find((p) => projectSlug(p) === slug))
    .filter((p): p is (typeof FEATURED_PROJECTS)[number] => Boolean(p));

  return (
    <section className="border-t border-zinc-200/70 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Projects
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900">
              Selected work
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              A few highlights—see the full list for more.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-700 hover:underline underline-offset-4"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const slug = projectSlug(p);
            const cover = p.images?.[0];
            const bg = bgForIndex(i);
            const accent = accentForIndex(i);

            return (
              <Link
                key={slug}
                href={`/projects/${slug}`}
                className={[
                  "group block",
                  "border border-zinc-200/70",
                  "transition",
                  "hover:-translate-y-0.5 hover:shadow-md",
                  "focus:outline-none focus:ring-2 focus:ring-zinc-900/20",
                  bg,
                ].join(" ")}
              >
                <div className={`h-1 w-full ${accent}`} />

                {cover?.src ? (
                  <div className="aspect-[16/10] overflow-hidden bg-white/60 ring-1 ring-black/5">
                    <Image
                      src={cover.src}
                      alt={cover.alt ?? p.title}
                      width={1600}
                      height={900}
                      className="h-full w-full object-cover"
                      priority={false}
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-white/60 ring-1 ring-black/5" />
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:underline underline-offset-8 decoration-zinc-300">
                      {p.title}
                    </h3>
                    <span className="text-sm text-zinc-500">→</span>
                  </div>

                  {p.tagline ? (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                      {p.tagline}
                    </p>
                  ) : null}

                  {(p.tags ?? []).length ? (
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-600">
                      {(p.tags ?? []).slice(0, 6).map((t: string) => (
                        <span key={t} className="border-b border-zinc-300/70 pb-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {(p.highlights ?? []).length ? (
                    <ul className="mt-5 space-y-1.5 text-sm text-zinc-700/90">
                      {(p.highlights ?? []).slice(0, 2).map((h: string, idx: number) => (
                        <li key={idx}>• {h}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6 inline-flex items-center gap-2 border-b-2 border-zinc-900 pb-1 text-sm font-semibold text-zinc-900 group-hover:border-zinc-600">
                    See details <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}




function LogoMark({ src, alt }: { src: string; alt: string }) {
  const isSvg = src.toLowerCase().endsWith(".svg");

  // consistent visual height, boxless
    const cls =
    "h-20 sm:h-24 md:h-26 w-auto max-w-[460px] object-contain opacity-70 transition group-hover:opacity-100";


  if (isSvg) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={cls} />;
  }

  return <Image src={src} alt={alt} width={700} height={350} className={cls} />;
}

function LogoStrip({ logos }: { logos: Array<{ name: string; src: string }> }) {
  return (
    <section className="border-t border-zinc-200/70 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-78">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Places I’ve worked
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900">
              Teams & organizations
            </h2>
          </div>
        </div>

        <div className="mt-30 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.name} className="group flex items-center justify-center">
              <LogoMark src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function SkillsSection() {
  const SKILLS = [
    {
      title: "Mechanical Engineering",
      items: [
        "Numerical simulations, CFD, FEA",
        "SolidWorks, ANSYS",
        "Microcontroller programming, NDT testing",
      ],
    },
    {
      title: "Programming",
      items: ["Python, C++, MATLAB", "Git", "UNIX/Linux, shell scripting"],
    },
    {
      title: "Machine Learning",
      items: [
        "PyTorch, scikit-learn, NumPy, Pandas",
        "GNNs, Transformers, CNNs, LSTMs",
        "Classification, regression, clustering",
      ],
    },
    {
      title: "Electrical Engineering",
      items: ["DSP", "FPGA", "ASIC design", "Verilog"],
    },
    {
      title: "Data Visualization",
      items: ["Matplotlib, Plotly, Seaborn", "ROOT"],
    },
  ];

  return (
    <section className="border-t border-zinc-200/70 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-36">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Skills
        </p>
        <h2 className="mt-2 text-xl font-semibold text-zinc-900">
          Cross-disciplinary toolkit
        </h2>

        <div className="mt-20 grid gap-x-18 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => (
            <div key={s.title}>
            <h3 className="text-sm font-semibold text-zinc-900">{s.title}</h3>
            <div className="mt-3 h-px w-10 bg-zinc-200" />
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-700">
                {s.items.map((it) => (
                <li key={it}>• {it}</li>
                ))}
            </ul>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
}




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
        {SITE.secondaryTagline && (
        <p className="mt-2 text-sm text-zinc-600">
            {SITE.secondaryTagline}
        </p>
        )}
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
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Explore</h2>
          <p className="mt-1 text-sm text-zinc-600">Quick links into more info.</p>
        </div>
      </div>

      <div className="mt-10 divide-y divide-zinc-200">
        {tiles.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group block py-7"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 group-hover:underline underline-offset-8 decoration-zinc-300">
                    {t.title}
                  </h3>
                  <span className="text-sm text-zinc-500">→</span>
                </div>

                <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                  {t.desc}
                </p>
              </div>

              <div className="hidden sm:block text-xs font-medium text-zinc-500 group-hover:text-zinc-700 transition">
                Open
              </div>
            </div>
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
    return <img src={src} alt={alt} className="h-full w-full object-cover" />;
  }
  return (
    <Image src={src} alt={alt} width={1200} height={800} className="h-full w-full object-cover" />
  );
}






function FeaturedProjectsPreview() {
  const picks = FEATURED_PROJECTS.slice(0, 3);

  return (
    <section className="w-full bg-indigo-50/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:py-36 lg:py-56">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-zinc-900">Featured projects</h2>
          {/* <Link href="/projects" className="text-sm font-medium text-zinc-700 hover:underline"> */}
            <Link href="/projects" className="text-sm font-medium text-zinc-700 hover:underline">
            See all →
            </Link>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {picks.map((p) => {
            const slug = projectSlug(p);
            return (
            <Link key={slug} href={`/projects/${slug}`} className="group">
                {p.images?.[0] ? (
                  <div className="aspect-[16/10] overflow-hidden bg-white ring-1 ring-black/5">
                    <Thumb src={p.images[0].src} alt={p.images[0].alt ?? p.title} />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-white ring-1 ring-black/5" />
                )}

                <h3 className="mt-5 text-lg font-semibold text-zinc-900 group-hover:underline underline-offset-8 decoration-zinc-300">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-500">
                  {(p.tags ?? []).slice(0, 4).map((t) => (
                    <span key={t} className="border-b border-zinc-200 pb-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
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
            I’m a cross-disciplinary engineer-scientist with hands on experience across mechanical design/build, instrumentation, electrical/DAQ adjacent workflows, and data/ML pipelines. In my PhD work at the University of Virginia / Jefferson Lab, I’ve routinely owned problems end to end: turning requirements into practical designs, building and validating test setups, and developing analysis and calibration software that converts raw detector measurements into reliable, decision-ready results.
            On the mechanical side, I’ve designed and built fixtures and tooling for detector assembly, alignment, handling, and high voltage testing—working closely with technicians and engineers to iterate based on fabrication constraints, safety requirements, and performance feedback. I also use simulation guided design (CFD and structural analysis) to evaluate options, understand failure modes, and make design decisions that translate cleanly from model to hardware.
            On the electrical side, I’m comfortable operating at the hardware vs software boundary: timing and synchronization issues, readout constraints, debugging workflows, and the engineering discipline required to make systems stable in real environments. I bring the same mindset to software building maintainable pipelines, QA automation, and (when it helps) ML methods for signal detection and tracking in noisy, high rate data.
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
    "Outside work, I enjoy building things, exploring new places, photography/video, and live music, especially projects that mix creativity with engineering.";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:py-36 lg:py-60">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">About</h2>
            <p className="mt-30 text-sm text-zinc-600"></p>
          </div>

          <a href="/about" className="text-sm font-medium text-zinc-700 hover:underline">
            Read more →
          </a>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="max-w-prose">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
              Professional
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              {professional}{" "}
              <a href="/about#professional" className="font-semibold text-indigo-700 hover:underline">
                More…
              </a>
            </p>
          </div>

          <div className="max-w-prose lg:border-l lg:border-zinc-900/10 lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              Personal
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              {personal}{" "}
              <a href="/about#personal" className="font-semibold text-blue-700 hover:underline">
                More…
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/about#professional"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
          >
            Professional details
          </a>

          <a
            href="/about#personal"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition"
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
    <section className="w-full bg-indigo-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:py-36 lg:py-56">
        <div className="grid gap-20 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
              Current
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-zinc-900">
              {CURRENT.title}
            </h2>

            <p className="mt-2 text-base text-zinc-800">{CURRENT.org}</p>
            <p className="mt-1 text-sm text-zinc-700">{CURRENT.supervisor}</p>
            <p className="mt-1 text-sm text-zinc-700">{CURRENT.location}</p>
          </div>

          {/* Right */}
          <div className="md:border-l md:border-zinc-900/10 md:pl-10">
            <p className="text-sm font-semibold text-zinc-900">Focus right now</p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700">
              {CURRENT.focus.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-medium text-zinc-800">
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
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
        {/* optional: a little depth so text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
      </div>

      {/* Content (centered vertically) */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-5 pt-20 pb-16">
        <div className="grid w-full gap-10 lg:grid-cols-5 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-zinc-200">{SITE.location}</p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl leading-[1.02]">
              {SITE.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base text-zinc-200 sm:text-xl leading-relaxed">
              {SITE.tagline}
            </p>
            {SITE.secondaryTagline && (
            <p className="mt-2 text-sm text-zinc-400">
                {SITE.secondaryTagline}
            </p>
            )}
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

          {/* Right: Current (NO BOX) */}
          <div className="lg:col-span-2 lg:justify-self-end">
            <div className="lg:border-l lg:border-white/20 lg:pl-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Current
              </p>

              <p className="mt-3 text-base font-semibold text-white">
                {SITE.currentTitle}
              </p>
              <p className="mt-1 text-sm text-white/75">{SITE.currentOrg}</p>

              <div className="mt-6 space-y-2 text-sm text-white/85">
                <p>
                  <span className="text-white/60">Email: </span>
                  <a className="font-medium hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </p>

                {SITE.phone ? (
                  <p>
                    <span className="text-white/60">Phone: </span>
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

        {/* Optional scroll hint */}
        <a
          href="#worked-with"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 hover:bg-white/15 transition"
        >
          Scroll ↓
        </a>
      </div>
    </section>
  );
}









export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />
      <HeroWix />
      <AboutPreviewCombined />
      <LogoStrip logos={WORK_LOGOS} />
      <CurrentStatus />
      <SkillsSection />
      <ProjectsTilesHome />
      <NavTiles />
      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto w-full max-w-6xl px-5 text-xs text-zinc-500">
          © {new Date().getFullYear()} {SITE.name}
        </div>
      </footer>
    </div>
  );
}



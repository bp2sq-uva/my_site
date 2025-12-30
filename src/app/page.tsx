// app/page.tsx
import type { ReactNode } from "react";

type Link = { label: string; href: string };
type Project = {
  title: string;
  tagline: string;
  tags: string[];
  highlights: string[];
  links: Link[];
  image?: { src: string; alt: string };
};
type Publication = {
  title: string;
  venue?: string;
  year?: string;
  links?: Link[];
};
type Experience = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
};

const SITE = {
  name: "Bhasitha Dharmasena",
  tagline:
    "Experimental nuclear physics • detector instrumentation • ML for reconstruction",
  location: "Virginia, USA",
  email: "bhasitha@example.com", // TODO
  links: [
    { label: "GitHub", href: "https://github.com/yourhandle" }, // TODO
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourhandle" }, // TODO
    { label: "Google Scholar", href: "https://scholar.google.com/" }, // TODO
    { label: "CV (PDF)", href: "/cv.pdf" }, // put cv.pdf in /public
  ] satisfies Link[],
  about: [
    `I build analysis + reconstruction pipelines for high-rate detector data, and I like the messy interface between hardware, physics, and ML.`,
    `Recent work includes GEM tracking/decoding, coincidence timing + calibration workflows, and polarization-transfer analysis.`,
  ],
};

const FEATURED_PROJECTS: Project[] = [
  {
    title: "GEM Raw Decoding with ML",
    tagline:
      "Learning-based denoising/segmentation to reconstruct clusters directly from raw readout.",
    tags: ["PyTorch", "Segmentation", "Detector ML", "GEM"],
    highlights: [
      "Event-wise image/tensor pipelines with robust normalization and augmentation.",
      "Reduced false positives while preserving cluster purity under rate.",
      "Designed evaluation metrics aligned with physics reconstruction goals.",
    ],
    links: [
      { label: "Code", href: "https://github.com/yourhandle/project" },
      { label: "Write-up", href: "#" },
    ],
  },
  {
    title: "HCAL + Hodoscope Timing Calibration",
    tagline:
      "Coincidence-time alignment, per-block offsets, QA plots, and DB parameter updates.",
    tags: ["ROOT", "Calibration", "Time-of-Flight", "Hall-A"],
    highlights: [
      "Automated peak-finding + fitting with safeguards for low-stat bins.",
      "Produced run-by-run QA PDFs and stable DB updates.",
      "Improved coincidence timing stability after replay.",
    ],
    links: [{ label: "Note", href: "#" }],
  },
  {
    title: "Recoil Polarimetry / Polarization Transfer",
    tagline:
      "Maximum-likelihood extraction of polarization components with spin-transport (COSY).",
    tags: ["ML Estimation", "COSY", "Polarimetry", "Analysis"],
    highlights: [
      "Implemented likelihood model and validated with closure tests.",
      "Transported polarimeter observables back to target for physics extraction.",
      "Built clear plotting + reporting for review and iteration.",
    ],
    links: [{ label: "Slides", href: "#" }],
  },
  {
    title: "Nuclear Particle Detectors Assembly and Testing Fixtures",
    tagline:
      "Designed and built mechanical fixtures for detector assembly, alignment, and HV testing.",
    tags: ["ML Estimation", "COSY", "Polarimetry", "Analysis"],
    highlights: [
      "Designed custom jigs and frames to meet precise alignment and handling requirements.",
      "Collaborated with technicians and engineers to iterate designs based on fabrication feedback.",
      "Ensured all fixtures met safety and operational standards for lab use.",
    ],
    links: [{ label: "Slides", href: "#" }],
    image: [{ src: "/projects/HV_1.jpg", alt: "HV testing fixture" },
            { src: "/projects/HV_2.jpg", alt: "HV testing setup" },
            { src: "/projects/stretcher.jpg", alt: "GEM stretcher apparatues" }
    ],
  },
];

const PUBLICATIONS: Publication[] = [
  {
    title: "Your paper / thesis title here",
    venue: "Journal / Conference",
    year: "2025",
    links: [{ label: "PDF", href: "#" }],
  },
  {
    title: "Another publication / note",
    venue: "arXiv",
    year: "2024",
    links: [{ label: "Link", href: "#" }],
  },
];

const EXPERIENCE: Experience[] = [
  {
    title: "PhD Researcher (Experimental Nuclear Physics)",
    org: "University of Virginia / Jefferson Lab",
    dates: "20XX — Present",
    bullets: [
      "Built calibration + reconstruction workflows for GEM trackers and calorimeters.",
      "Developed analysis methods for polarization-transfer observables and QA.",
      "Prototyped testing/assembly apparatuses for detector hardware.",
    ],
  },
  {
    title: "Mechanical Engineering / Instrumentation Work",
    org: "Lab / Project",
    dates: "20XX — 20XX",
    bullets: [
      "Designed fixtures, frames, and test rigs (HV testing, assembly tooling, alignment).",
      "Iterated designs from requirements → fabrication → validation.",
    ],
  },
];

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-14", className)}>
      <div className="mx-auto w-full max-w-6xl px-5">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function Nav() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-semibold tracking-tight text-zinc-900">
          {SITE.name}
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-600 sm:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-zinc-900 transition"
            >
              {n.label}
            </a>
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

function Hero() {
  return (
    <div className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-zinc-600">{SITE.location}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              {SITE.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
              I work across physics analysis, detector instrumentation, and
              machine learning — building tools that turn messy data into clean
              observables.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>Detector ML</Pill>
              <Pill>Calibration &amp; QA</Pill>
              <Pill>Tracking</Pill>
              <Pill>Polarimetry</Pill>
              <Pill>Hardware Prototyping</Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {SITE.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-white">
              <h3 className="text-sm font-semibold text-zinc-900">
                Quick highlights
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>• GEM tracking + reconstruction pipelines</li>
                <li>• HCAL/HODO timing calibration workflows</li>
                <li>• MLE polarization extraction + spin transport</li>
                <li>• Fixtures &amp; test rigs (HV/assembly tooling)</li>
              </ul>
              <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-xs font-medium text-zinc-700">
                  Looking for
                </p>
                <p className="mt-1 text-sm text-zinc-700">
                  Cross-disciplinary engineering roles (hardware + software +
                  data).
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {FEATURED_PROJECTS.map((p) => (
        <Card key={p.title} className="flex flex-col">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              {p.highlights.map((h, i) => (
                <li key={i}>• {h}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {p.links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className="text-sm font-medium text-zinc-900 hover:underline"
              >
                {l.label} →
              </a>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function Publications() {
  return (
    <div className="space-y-4">
      {PUBLICATIONS.map((pub, idx) => (
        <Card key={idx}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">
                {pub.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">
                {[pub.venue, pub.year].filter(Boolean).join(" • ")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {(pub.links ?? []).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-zinc-900 hover:underline"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="space-y-5">
      {EXPERIENCE.map((e, idx) => (
        <Card key={idx}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">
                {e.title}
              </h3>
              <p className="text-sm text-zinc-600">{e.org}</p>
            </div>
            <p className="text-sm text-zinc-500">{e.dates}</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            {e.bullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <Card className="bg-zinc-50">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">Contact</h3>
          <p className="mt-1 text-sm text-zinc-600">
            Email is best — I usually respond quickly.
          </p>
          <p className="mt-3 text-sm font-medium text-zinc-900">{SITE.email}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition"
          >
            Email me
          </a>
          {SITE.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <Hero />

      <Section id="about" title="About" eyebrow="A bit of context">
        <div className="grid gap-5 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="space-y-4 text-base leading-relaxed text-zinc-700">
              {SITE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-zinc-900">Focus</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>• Reconstruction + tracking</li>
              <li>• Calibration + QA automation</li>
              <li>• ML for detector readout</li>
              <li>• Hardware + test tooling</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects" eyebrow="Selected work">
        <ProjectGrid />
      </Section>

      <Section id="publications" title="Publications" eyebrow="Papers, notes, talks">
        <Publications />
      </Section>

      <Section id="experience" title="Experience" eyebrow="Where I’ve worked">
        <ExperienceTimeline />
      </Section>

      <Section id="contact" title="Get in touch" className="pb-20">
        <Contact />
        <p className="mt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </Section>
    </div>
  );
}

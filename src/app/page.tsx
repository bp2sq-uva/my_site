// app/page.tsx
import type { ReactNode } from "react";
import Image from "next/image";

type Link = { label: string; href: string };
type Project = {
  title: string;
  tagline: string;
  tags: string[];
  highlights: string[];
  links: Link[];
  images?: { src: string; alt: string }[];
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
  email: "bhasitha.d@gmail.com", // TODO
  links: [
    { label: "GitHub", href: "https://github.com/bp2sq-uva" }, // TODO
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bhasitha-dharmasena-877287177/" }, // TODO
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=le3tNbYAAAAJ&hl=en" }, // TODO
    { label: "CV (PDF)", href: "/cv.pdf" }, // put cv.pdf in /public
  ] satisfies Link[],
  about: [
    `I build analysis + reconstruction pipelines for high-rate detector data, and I like the messy interface between hardware, physics, and ML.`,
    `Recent work includes GEM tracking/decoding, coincidence timing + calibration workflows, and polarization-transfer analysis.`,
  ],
};

const FEATURED_PROJECTS: Project[] = [
  {
    title: "Wind Turbine Blade Design Optimization using CFD Simulations",
    tagline:
      "Conducted CFD simulations to optimize the aerodynamic performance of small-scale wind turbine blades.",
    tags: ["CFD", "Wind Turbine Design", "ANSYS Fluent", "Ansys CFX"],
    highlights: [
      "Performed detailed CFD simulations using ANSYS Fluent and Ansys CFX to analyze airflow and performance characteristics of various blade designs.",
      "Optimized blade geometry to enhance efficiency and power output based on simulation results.",
    ],
    links: [
      { label: "Write-up", href: "#" },
    ],
    images: [
      { src: "/projects/wind-1.png", alt: "wind turbine blade" },
      { src: "/projects/wind-2.png", alt: "wind turbine blade" },
      { src: "/projects/wind-3.png", alt: "wind blade" },
    ],
  },
  {
    title: "Nuclear Particle Detectors Assembly and Testing Fixtures",
    tagline:
      "Designed and built mechanical fixtures for detector assembly, alignment, and HV testing.",
    tags: ["Mechanical Design", "Fabrication", "Instrumentation"],
    highlights: [
      "Designed custom jigs and frames to meet precise alignment and handling requirements.",
      "Collaborated with technicians and engineers to iterate designs based on fabrication feedback.",
      "Ensured all fixtures met safety and operational standards for lab use.",
    ],
    links: [{ label: "Slides", href: "#" }],
    images: [
      { src: "/projects/HV_1.jpg", alt: "HV testing fixture" },
      { src: "/projects/HV_2.jpg", alt: "HV testing setup" },
      { src: "/projects/stretcher.jpg", alt: "GEM stretcher apparatus" },
    ],
  },
  {
    title: "Computational Fluid Dynamics Simulations(CFD) and Static Structural Simulations",
    tagline:
      "Performed CFD and Static Structural Simulations using ANSYS software for various engineering projects including nuclear particle detectors.",
    tags: ["CFD", "ANSYS", "Structural Analysis", "Simulation"],
    highlights: [
      "Conducted fluid flow simulations to optimize flow systems for detector systems.",
      "Performed static structural analysis to ensure mechanical integrity of detector components under operational loads.",
      "Analyzed simulation results to inform design improvements and ensure compliance with engineering standards.",
    ],
    links: [{ label: "Slides", href: "#" }],
    images: [
      { src: "/projects/gem_demo.gif", alt: "GEM gas flow simulations" },
    ],
  },
  {
    title: "Deep Learning based RF Signal Detection and Classification for Drone Surveillance",
    tagline:
      "Conducted Frequency domain signal analysis for RF signals emitted by drones and developed deep learning models for surveillance applications.",
    tags: ["Deep Learning", "RF Signal Processing", "Signal Analysis"],
    highlights: [
      "Analyzed RF signals in the frequency domain to identify characteristic patterns associated with drone emissions.",
      "Developed and trained deep learning models to accurately detect and classify RF signals from drones amidst background noise.",
    ],
    links: [{ label: "Slides", href: "#" }],
    images: [
      { src: "/projects/Dedrone.png", alt: "GNNs" },
    ],
  },
  {
    title: "Graph Neural Networks(GNNs) for Nuclear Particle Tracking",
    tagline:
      "Implemented GNN architectures to enhance particle tracking accuracy in high-rate nuclear physics experiments.",
    tags: ["Graph Neural Networks", "Detector ML", "Reconstruction"],
    highlights: [
      "Developed GNN models to capture complex spatial relationships in detector data.",
      "Improved tracking efficiency and resolution compared to traditional methods.",
    ],
    links: [{ label: "Slides", href: "#" }],
    images: [
      { src: "/projects/GNN-2.png", alt: "GNNs" },
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
    dates: "2021 — Present",
    bullets: [
      "Built calibration + reconstruction workflows for GEM trackers and calorimeters.",
      "Developed analysis methods for polarization-transfer observables and QA.",
      "Prototyped testing/assembly apparatuses for detector hardware.",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    org: "Dedrone by AXON",
    dates: "2024 (Summer)",
    bullets: [
      "Developed ML models for drone detection and classification using sensor data.",
      "Optimized data pipelines for real-time processing and analysis.",
      "Collaborated with cross-functional teams to integrate ML solutions into existing systems.",
    ],
  },
  {
    title: "Graduate Researcher (Machine Learning and Data Analysis for Nuclear Physics)",
    org: "Graduate Researcher (Machine Learning and Data Analysis for Nuclear Physics)",
    dates: "2023 - Present",
    bullets: [
      "Front-end electronics installation, testing and real-time data acquisition system development for nuclear physics experiments.",
      "Applied machine learning techniques to enhance data analysis and interpretation in nuclear physics experiments.",
      "Collaborated with interdisciplinary teams to develop innovative solutions for complex research challenges.",
    ],
  },
  {
    title: "Research Engineer Intern",
    org: "Korea Maritime & Ocean University, South Korea",
    dates: "2017 - 2018",
    bullets: [
      "Conducted CFD simulations to optimize novel small scale wind turbine blade designs.",
      "Analyzed simulation data to inform design improvements and enhance performance.",
      "Conducted wind tunnel experiments to validate simulation results and assess aerodynamic performance.",
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
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl leading-[1.1]">
              Experimental Nuclear Physics &amp; Detector ML
            </h1>

            <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg leading-relaxed">
              Instrumentation • calibration &amp; QA • reconstruction pipelines
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
              I work across physics analysis, detector instrumentation, and
              machine learning, building tools that turn messy data into clean
              observables.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>Mechanical Design and Prototyping</Pill>
              <Pill>Detector ML</Pill>
              <Pill>Calibration &amp; QA</Pill>
              <Pill>Data Analysis</Pill>
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

function ProjectMedia({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const isGif = src.toLowerCase().endsWith(".gif");

  if (isGif) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={className}
      priority={false}
    />
  );
}


function ProjectGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {FEATURED_PROJECTS.map((p) => (
        <Card key={p.title} className="flex flex-col">
          <div>
            {/* --- Images (optional) --- */}
            {p.images?.length ? (
              <div className="mb-4">
                {/* Main image */}
                <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                  <ProjectMedia
                    src={p.images[0].src}
                    alt={p.images[0].alt}
                    className="h-40 w-full object-cover"
                  />
                </div>

                {/* Thumbnails (if more than 1 image) */}
                {p.images.length > 1 ? (
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {p.images.slice(1).map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50"
                      >
                      <ProjectMedia
                        src={img.src}
                        alt={img.alt}
                        className="h-16 w-full object-cover"
                      />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* --- Title + content --- */}
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

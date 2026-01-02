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

// function NavTiles() {
//   const tiles = [
//     { title: "About", desc: "Short bio + focus areas.", href: "/about" },
//     { title: "Projects", desc: "Selected work with full detail pages.", href: "/projects" },
//     { title: "Publications", desc: "Thesis, papers, notes, talks.", href: "/publications" },
//     { title: "Experience", desc: "Timeline + key contributions.", href: "/experience" },
//     // { title: "Contact", desc: "Email + links.", href: "/contact" },
//   ];

//   return (
//     <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
//     <h2 className="text-xl font-semibold text-zinc-900">Explore</h2>

//     <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {tiles.map((t) => (
//           <Link key={t.href} href={t.href}>
//             <Card className="h-full hover:border-zinc-300 transition">
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h3 className="text-base font-semibold text-zinc-900">{t.title}</h3>
//                   <p className="mt-1 text-sm text-zinc-600">{t.desc}</p>
//                 </div>
//                 <span className="text-sm text-zinc-500">→</span>
//               </div>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


// function NavTiles() {
//   const tiles = [
//     { title: "About", desc: "Short bio + focus areas.", href: "/about" },
//     { title: "Projects", desc: "Selected work with full detail pages.", href: "/projects" },
//     { title: "Publications", desc: "Thesis, papers, notes, talks.", href: "/publications" },
//     { title: "Experience", desc: "Timeline + key contributions.", href: "/experience" },
//   ];

//   return (
//     <section className="w-full bg-zinc-50">
//       <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
//         <h2 className="text-xl font-semibold text-zinc-900">Explore</h2>

//         <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {tiles.map((t) => (
//             <Link
//               key={t.href}
//               href={t.href}
//               className="group rounded-3xl bg-white px-6 py-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h3 className="text-base font-semibold text-zinc-900">{t.title}</h3>
//                   <p className="mt-1 text-sm text-zinc-600">{t.desc}</p>
//                 </div>
//                 <span className="text-sm text-zinc-500 transition group-hover:translate-x-0.5">
//                   →
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
          <p className="mt-1 text-sm text-zinc-600">Quick links into the site.</p>
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


// function Thumb({ src, alt }: { src: string; alt: string }) {
//   const isGif = src.toLowerCase().endsWith(".gif");
//   if (isGif) {
//     // eslint-disable-next-line @next/next/no-img-element
//     return <img src={src} alt={alt} className="h-44 w-full object-cover" />;
//   }
//   return (
//     <Image
//       src={src}
//       alt={alt}
//       width={1200}
//       height={800}
//       className="h-44 w-full object-cover"
//     />
//   );
// }



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


// function FeaturedProjectsPreview() {
//   const picks = FEATURED_PROJECTS.slice(0, 3);
//   return (
//     <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
//     <div className="flex items-end justify-between gap-4">
//         <h2 className="text-xl font-semibold text-zinc-900">Featured projects</h2>
//         <Link href="/projects" className="text-sm font-medium text-zinc-700 hover:underline">
//           See all →
//         </Link>
//       </div>

//       <div className="mt-8 grid gap-6 md:grid-cols-3">
//         {picks.map((p) => {
//           const slug = slugify(p.title);
//           return (
//             <Link key={p.title} href={`/projects/${slug}`}>
//             <Card className="h-full overflow-hidden hover:border-zinc-300 transition">
//             {p.images?.[0] ? (
//                 <div className="mb-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
//                 <Thumb src={p.images[0].src} alt={p.images[0].alt} />
//                 </div>
//             ) : null}

//             <h3 className="text-base font-semibold text-zinc-900">{p.title}</h3>
//             <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {p.tags.slice(0, 4).map((t) => (
//                     <span
//                       key={t}
//                       className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </Card>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// function FeaturedProjectsPreview() {
//   const picks = FEATURED_PROJECTS.slice(0, 3);

//   return (
//     <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
//       <div className="flex items-end justify-between gap-4">
//         <h2 className="text-xl font-semibold text-zinc-900">Featured projects</h2>
//         <Link href="/projects" className="text-sm font-medium text-zinc-700 hover:underline">
//           See all →
//         </Link>
//       </div>

//       <div className="mt-10 grid gap-10 md:grid-cols-3">
//         {picks.map((p) => {
//           const slug = slugify(p.title);
//           return (
//             <Link key={p.title} href={`/projects/${slug}`} className="group">
//               {p.images?.[0] ? (
//                 <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
//                   <Thumb src={p.images[0].src} alt={p.images[0].alt} />
//                 </div>
//               ) : (
//                 <div className="aspect-[16/10] bg-zinc-100" />
//               )}

//               <h3 className="mt-5 text-lg font-semibold text-zinc-900 group-hover:underline underline-offset-8 decoration-zinc-300">
//                 {p.title}
//               </h3>

//               <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>

//               <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-500">
//                 {p.tags.slice(0, 4).map((t) => (
//                   <span key={t} className="border-b border-zinc-200 pb-0.5">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


function FeaturedProjectsPreview() {
  const picks = FEATURED_PROJECTS.slice(0, 3);

  return (
    <section className="w-full bg-green-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-zinc-900">Featured projects</h2>
          <Link href="/projects" className="text-sm font-medium text-zinc-700 hover:underline">
            See all →
          </Link>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {picks.map((p) => {
            const slug = slugify(p.title);
            return (
              <Link key={p.title} href={`/projects/${slug}`} className="group">
                {p.images?.[0] ? (
                  <div className="aspect-[16/10] overflow-hidden bg-white ring-1 ring-black/5">
                    <Thumb src={p.images[0].src} alt={p.images[0].alt} />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-white ring-1 ring-black/5" />
                )}

                <h3 className="mt-5 text-lg font-semibold text-zinc-900 group-hover:underline underline-offset-8 decoration-zinc-300">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-500">
                  {p.tags.slice(0, 4).map((t) => (
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
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">About</h2>
            <p className="mt-1 text-sm text-zinc-600">Professional + personal (short).</p>
          </div>

          <a href="/about" className="text-sm font-medium text-zinc-700 hover:underline">
            Read more →
          </a>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
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

          <div className="lg:border-l lg:border-zinc-900/10 lg:pl-10">
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



// function AboutPreviewCombined() {
//   const professional =
//     "Cross-disciplinary engineer-scientist spanning mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and ML/data pipelines. I work best owning problems end-to-end: design → simulate → build → test → iterate in collaborative teams.";

//   const personal =
//     "Outside work, I enjoy building things, exploring new places, photography/video, and live music—especially projects that mix creativity with engineering.";

//   return (
//     <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
//       <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//         {/* Title row inside box */}
//         <div className="flex items-center justify-between gap-4">
//           <p className="text-sm font-semibold text-zinc-900">About</p>
//           <a href="/about" className="text-sm font-medium text-zinc-700 hover:underline">
//             Read more →
//           </a>
//         </div>

//         <div className="mt-6 grid gap-6 lg:grid-cols-2">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
//               Professional
//             </p>
//             <p className="mt-3 text-sm leading-relaxed text-zinc-700 line-clamp-4">
//               {professional}{" "}
//               <a href="/about#professional" className="font-semibold text-indigo-700 hover:underline">
//                 More…
//               </a>
//             </p>
//           </div>

//           <div>
//             <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
//               Personal
//             </p>
//             <p className="mt-3 text-sm leading-relaxed text-zinc-700 line-clamp-4">
//               {personal}{" "}
//               <a href="/about#personal" className="font-semibold text-blue-600 hover:underline">
//                 More…
//               </a>
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200 pt-6">
//           <a
//             href="/about#professional"
//             className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
//           >
//             Professional details
//           </a>
//           <a
//             href="/about#personal"
//             className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition"
//           >
//             Personal
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



function CurrentStatus() {
  return (
    <section className="w-full bg-indigo-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
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


// function CurrentStatus() {
//   return (
//     <section className="w-full bg-indigo-50">
//       <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
//         {/* your current layout here */}
//       </div>
//     </section>
//   );
// }


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


// function LogoStrip() {
//   return (
//     <section id="worked-with" className="w-full bg-zinc-50">
//       <div className="mx-auto w-full max-w-6xl px-5 py-12">
//         <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
//           Worked with
//         </p>

//         <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
//           {WORK_LOGOS.map((logo) => {
//             const item = (
//               <div className="flex items-center justify-center py-3">
//                 <div className="opacity-80 grayscale-[20%] transition hover:opacity-100 hover:grayscale-0">
//                   <LogoMark src={logo.src} alt={logo.name} />
//                 </div>
//               </div>
//             );

//             return logo.href ? (
//               <a
//                 key={logo.name}
//                 href={logo.href}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="block"
//                 aria-label={logo.name}
//                 title={logo.name}
//               >
//                 {item}
//               </a>
//             ) : (
//               <div key={logo.name} title={logo.name}>
//                 {item}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


function LogoStrip() {
  return (
    <section id="worked-with" className="w-full bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
          Worked with
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {WORK_LOGOS.map((logo) => {
            const item = (
              <div className="flex items-center justify-center py-3">
                <div className="opacity-80 grayscale-[20%] transition hover:opacity-100 hover:grayscale-0">
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
                {item}
              </a>
            ) : (
              <div key={logo.name} title={logo.name}>
                {item}
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
      <FeaturedProjectsPreview />
      <NavTiles />
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

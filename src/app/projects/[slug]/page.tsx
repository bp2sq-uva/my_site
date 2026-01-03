// app/projects/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/app/components/SiteNav";
import { ProjectMedia } from "@/app/components/ui";
import { FEATURED_PROJECTS, slugify } from "@/app/lib/site";
import Image from "next/image";


// Match the index page cycling so accents feel consistent
const TILE_BGS = [
  "bg-white",
  "bg-zinc-50",
  "bg-sky-50",
  "bg-white",
  "bg-zinc-50",
  "bg-sky-50",
] as const;

const TILE_ACCENTS = [
  "bg-zinc-900/20",
  "bg-indigo-600",
  "bg-sky-600",
  "bg-amber-500",
  "bg-emerald-600",
  "bg-rose-600",
] as const;

function bgForIndex(i: number) {
  return TILE_BGS[i % TILE_BGS.length];
}
function accentForIndex(i: number) {
  return TILE_ACCENTS[i % TILE_ACCENTS.length];
}




export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ Find by explicit slug if present, otherwise fallback to slugify(title)
const incoming = params.slug;

const idx = FEATURED_PROJECTS.findIndex((p: any) => {
  const s = (p.slug ?? slugify(p.title)).trim();
  return s === incoming.trim();
});


if (idx < 0) return notFound();


  const project: any = FEATURED_PROJECTS[idx];
  const accentBg = bgForIndex(idx);
  const accentStrip = accentForIndex(idx);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      {/* Header band */}
      <section className={"w-full " + accentBg}>
        <div className={"h-1 w-full " + accentStrip} />
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-700 hover:underline underline-offset-4"
          >
            ← Back to projects
          </Link>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          <p className="mt-3 max-w-3xl text-base text-zinc-700">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-600">
            {(project.tags ?? []).map((t: string) => 
              <span key={t} className="border-b border-zinc-300/70 pb-0.5">
                {t}
              </span>
            )}
          </div>
        </div>
        <div className="h-px w-full bg-zinc-200/70" />
      </section>

      {/* Media (more photos) */}
      {project.images?.length ? (
        <section className="w-full bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
            <h2 className="text-sm font-semibold text-zinc-900">Media</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.images.map((img: any) => 
                <div key={img.src} className="overflow-hidden">
                  <ProjectMedia
                    src={img.src}
                    alt={img.alt}
                    className="h-72 w-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="h-px w-full bg-zinc-200/70" />
        </section>
      ) : null}

//       {/* More details / overview (shows only if you add project.details in FEATURED_PROJECTS) */}
//       {project.details?.length ? (
//         <section className="w-full bg-white">
//           <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
//             <h2 className="text-sm font-semibold text-zinc-900">Overview</h2>
//             <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-700">
//               {project.details.map((para: string, i: number) => (
//                 <p key={i}>{para}</p>
//               ))}
//             </div>
//           </div>
//           <div className="h-px w-full bg-zinc-200/70" />
//         </section>
//       ) : null}

      {/* Highlights + Links */}
      <section className={"w-full " + accentBg}>
        <div className={"h-1 w-full " + accentStrip} />
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Highlights */}
            <div className="lg:col-span-8">
              <h2 className="text-sm font-semibold text-zinc-900">Highlights</h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {(project.highlights ?? []).map((h: string, i: number) => 
                  <li key={i}>• {h}</li>
                )}
              </ul>
            </div>

            {/* Links */}
            <div className="lg:col-span-4 lg:border-l lg:border-zinc-900/10 lg:pl-10">
              <h2 className="text-sm font-semibold text-zinc-900">Links</h2>

              <div className="mt-4 flex flex-col gap-2">
                {(project.links ?? []).length ? (
                  project.links.map((l: any) => 
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-sm font-semibold text-zinc-900 hover:underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} →
                    </a>
                  )
                ) : (
                  <p className="text-sm text-zinc-700">
                    Add links (write-up, repo, slides) if you want.
                  </p>
                )}
              </div>

              <div className="mt-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border-b-2 border-zinc-900 pb-1 text-sm font-semibold text-zinc-900 hover:border-zinc-600"
                >
                  Back to projects <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((p: any) => ({
    slug: p.slug ?? slugify(p.title),
  }));
}

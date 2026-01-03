// src/app/projects/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/app/components/SiteNav";
import { ProjectMedia } from "@/app/components/ui";
import { FEATURED_PROJECTS, slugify } from "@/app/lib/site";

// Accent helpers (keep or adjust to match your project tiles)
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

// ✅ Safe slug getter: NEVER calls slugify unless title is a real string
function getProjectSlug(p: any): string | null {
  if (typeof p?.slug === "string" && p.slug.trim().length > 0) return slugify(p.slug.trim());
  if (typeof p?.title === "string" && p.title.trim().length > 0) return slugify(p.title);
  return null;
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug?: string };
}) {
  const incoming = slugify((params?.slug ?? "").trim());
  if (!incoming) notFound();

  const idx = FEATURED_PROJECTS.findIndex((p: any) => getProjectSlug(p) === incoming);
  if (idx < 0) notFound();

  const project: any = FEATURED_PROJECTS[idx];
  const accentBg = bgForIndex(idx);
  const accentStrip = accentForIndex(idx);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      {/* Header */}
      <section className={`w-full ${accentBg}`}>
        <div className={`h-1 w-full ${accentStrip}`} />

        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
            <Link
            href="/"
            className="text-sm font-medium text-zinc-700 hover:underline underline-offset-4"
            >
            Back to Home
            </Link>


          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title ?? "Project"}
          </h1>

          {project.tagline ? (
            <p className="mt-3 max-w-3xl text-base text-zinc-700">{project.tagline}</p>
          ) : null}

          {(project.tags ?? []).length ? (
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-600">
              {(project.tags ?? []).map((t: string) => (
                <span key={t} className="border-b border-zinc-300/70 pb-0.5">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="h-px w-full bg-zinc-200/70" />
      </section>

      {/* Media */}
      {project.images?.length ? (
        <section className="w-full bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
            <h2 className="text-sm font-semibold text-zinc-900">Media</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.images.map((img: any) => (
                <div key={img.src} className="overflow-hidden">
                  <ProjectMedia
                    src={img.src}
                    alt={img.alt ?? project.title ?? "Project image"}
                    className="h-72 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-zinc-200/70" />
        </section>
      ) : null}

      {/* Highlights + Links */}
      <section className={`w-full ${accentBg}`}>
        <div className={`h-1 w-full ${accentStrip}`} />

        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Highlights */}
            <div className="lg:col-span-8">
              <h2 className="text-sm font-semibold text-zinc-900">Highlights</h2>

              {(project.highlights ?? []).length ? (
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {(project.highlights ?? []).map((h: string, i: number) => (
                    <li key={`${i}-${h}`}>• {h}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-zinc-700">
                  Add <code>highlights</code> in <code>FEATURED_PROJECTS</code> if you want.
                </p>
              )}
            </div>

            {/* Links */}
            <div className="lg:col-span-4 lg:border-l lg:border-zinc-900/10 lg:pl-10">
              <h2 className="text-sm font-semibold text-zinc-900">Links</h2>

              <div className="mt-4 flex flex-col gap-2">
                {(project.links ?? []).length ? (
                  (project.links ?? []).map((l: any) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-sm font-semibold text-zinc-900 hover:underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} →
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-zinc-700">
                    Add <code>links</code> (repo, write-up, etc.) in your project data if you want.
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

// ✅ Also make static params safe
export function generateStaticParams() {
  return FEATURED_PROJECTS.map((p: any) => getProjectSlug(p))
    .filter((slug): slug is string => typeof slug === "string" && slug.length > 0)
    .map((slug) => ({ slug }));
}

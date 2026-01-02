// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import { FEATURED_PROJECTS, slugify } from "@/app/lib/site";

function PageBanner() {
  return (
    <section className="relative h-[750px] w-full overflow-hidden border-b border-zinc-200">
      <Image
        src="/banners/projects-1.png"
        alt="Projects banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950/45" />

      <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-6xl flex-col justify-end px-5 pb-10">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Projects
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-white/85">
          Selected work across mechanical design/build, instrumentation, software,
          and ML.
        </p>
      </div>
    </section>
  );
}

// Light section backgrounds (cycle)
const SECTION_BGS = [
  "bg-white",
  "bg-zinc-50",
  "bg-sky-50",
  "bg-amber-50",
  "bg-emerald-50",
  "bg-rose-50",
] as const;

function bgForIndex(i: number) {
  return SECTION_BGS[i % SECTION_BGS.length];
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />
      <PageBanner />

      {/* Full-width project bands */}
      <main className="w-full">
        {FEATURED_PROJECTS.map((p, i) => {
          const slug = slugify(p.title);
          const cover = p.images?.[0];
          const bg = bgForIndex(i);

          return (
            <section key={slug} className={`w-full ${bg}`}>
              <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:py-28 lg:py-32">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  {/* Image (not boxed) */}
                  <div className="lg:col-span-5">
                    {cover ? (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={cover.src}
                          alt={cover.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] bg-zinc-200/40" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="lg:col-span-7">
                    <div className="flex items-start justify-between gap-6">
                      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                        <Link
                          href={`/projects/${slug}`}
                          className="hover:underline underline-offset-8 decoration-zinc-300"
                        >
                          {p.title}
                        </Link>
                      </h2>
                      <span className="text-sm text-zinc-500">→</span>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700">
                      {p.tagline}
                    </p>

                    {/* Tags (not pill badges) */}
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-600">
                      {p.tags?.slice(0, 8).map((t) => (
                        <span
                          key={t}
                          className="border-b border-zinc-300/70 pb-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="mt-6 space-y-2 text-sm text-zinc-700/90">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-6">
                      <Link
                        href={`/projects/${slug}`}
                        className="inline-flex items-center gap-2 border-b-2 border-zinc-900 pb-1 text-sm font-semibold text-zinc-900 hover:border-zinc-600"
                      >
                        See details <span aria-hidden>→</span>
                      </Link>

                      <Link
                        href="/"
                        className="text-sm font-medium text-zinc-700 hover:underline underline-offset-4"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator between bands */}
              <div className="h-px w-full bg-zinc-200/70" />
            </section>
          );
        })}
      </main>
    </div>
  );
}

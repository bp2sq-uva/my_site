// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import { FEATURED_PROJECTS, slugify } from "@/app/lib/site";


function PageBanner() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden border-b border-zinc-200">
      <Image
        src="/banners/projects.jpg"
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

// Tile backgrounds (cycle)
const TILE_BGS = [
  "bg-white",
  "bg-zinc-50",
  "bg-indigo-50/60",
  "bg-zinc-50",
  "bg-indigo-50/60",
  "bg-emerald-50",
  "bg-rose-50",
] as const;

const TILE_ACCENTS = [
  "bg-zinc-900/20",
  "bg-indigo-600",
  "bg-sky-600",
  "bg-zinc-900/20",
  "bg-indigo-600",
  "bg-rose-600",
] as const;

function bgForIndex(i: number) {
  return TILE_BGS[i % TILE_BGS.length];
}
function accentForIndex(i: number) {
  return TILE_ACCENTS[i % TILE_ACCENTS.length];
}

function Thumb({ src, alt }: { src: string; alt: string }) {
  const isGif = src.toLowerCase().endsWith(".gif");
  if (isGif) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className="h-full w-full object-cover" />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={1400}
      height={900}
      className="h-full w-full object-cover"
      priority={false}
    />
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />
      <PageBanner />

      <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">All projects</h2>
            <p className="mt-1 text-sm text-zinc-600">
              Click a tile for the full write-up and media.
            </p>
          </div>

          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 hover:underline underline-offset-4"
          >
            Back to Home
          </Link>
        </div>

        {/* Tiles grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => {
            const slug = slugify(p.title);
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
                {/* Top accent strip (no rounding) */}
                <div className={`h-1 w-full ${accent}`} />

                {/* Image */}
                {cover ? (
                  <div className="aspect-[16/10] overflow-hidden bg-white/60 ring-1 ring-black/5">
                    <Thumb src={cover.src} alt={cover.alt} />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-white/60 ring-1 ring-black/5" />
                )}

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:underline underline-offset-8 decoration-zinc-300">
                      {p.title}
                    </h3>
                    <span className="text-sm text-zinc-500">→</span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                    {p.tagline}
                  </p>

                  {/* Tags (simple, not pill badges) */}
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-600">
                    {p.tags?.slice(0, 6).map((t) => (
                      <span key={t} className="border-b border-zinc-300/70 pb-0.5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Mini highlights */}
                  <ul className="mt-5 space-y-1.5 text-sm text-zinc-700/90">
                    {p.highlights.slice(0, 2).map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>

                  <div className="mt-6 inline-flex items-center gap-2 border-b-2 border-zinc-900 pb-1 text-sm font-semibold text-zinc-900 group-hover:border-zinc-600">
                    See details <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

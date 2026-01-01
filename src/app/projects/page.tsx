import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import { FEATURED_PROJECTS, slugify } from "@/app/lib/site";

function PageBanner() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden border-b border-zinc-200">
      {/* ✅ Make sure this file exists at /public/banners/projects.jpg */}
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
          Selected work across mechanical design/build, instrumentation, software, and ML.
        </p>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />
      <PageBanner />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((p) => {
            const slug = slugify(p.title);
            const cover = p.images?.[0];

            return (
              <section
                key={slug}
                className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:grid-cols-5 lg:items-start"
              >
                {/* Image */}
                <div className="lg:col-span-2">
                  {cover ? (
                    <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-64 rounded-2xl border border-zinc-200 bg-zinc-50" />
                  )}
                </div>

                {/* Text */}
                <div className="lg:col-span-3">
                  <h2 className="text-xl font-semibold text-zinc-900">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-zinc-700">{p.tagline}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags?.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2 text-sm text-zinc-600">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${slug}`}
                      className="inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                    >
                      See details
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

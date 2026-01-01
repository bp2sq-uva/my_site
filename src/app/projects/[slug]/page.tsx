import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/app/components/SiteNav";
import { Card, ProjectMedia } from "@/app/components/ui";
import { FEATURED_PROJECTS, slugify } from "@/app/lib/site";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = FEATURED_PROJECTS.find((p) => slugify(p.title) === params.slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="flex items-center justify-between gap-4">
          <Link href="/projects" className="text-sm font-medium text-zinc-700 hover:underline">
            ← Back to projects
          </Link>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-base text-zinc-600">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>

        {project.images?.length ? (
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {project.images.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
              >
                <ProjectMedia src={img.src} alt={img.alt} className="h-64 w-full object-cover" />
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-zinc-900">Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              {project.highlights.map((h, i) => (
                <li key={i}>• {h}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-sm font-semibold text-zinc-900">Links</h2>
            <div className="mt-3 flex flex-col gap-2">
              {(project.links ?? []).length ? (
                project.links!.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm font-medium text-zinc-900 hover:underline">
                    {l.label} →
                  </a>
                ))
              ) : (
                <p className="text-sm text-zinc-600">Add links (write-up, repo, slides) if you want.</p>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

// Optional (nice for static builds)
export function generateStaticParams() {
  return FEATURED_PROJECTS.map((p) => ({ slug: slugify(p.title) }));
}

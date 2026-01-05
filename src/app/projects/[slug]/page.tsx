import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FEATURED_PROJECTS, slugify } from '@/app/lib/site';
import SiteNav from '@/app/components/SiteNav';

// Define the type for page props
interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug || slugify(project.title),
  }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = FEATURED_PROJECTS.find(
    (p) => (p.slug || slugify(p.title)) === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />
      <main className="mx-auto w-full max-w-6xl px-5 py-16">
        <Link href="/projects" className="text-sm text-zinc-600 hover:underline">
          ← Back to projects
        </Link>
        <h1 className="mt-4 text-3xl font-semibold text-zinc-900">
          {project.title}
        </h1>
        {project.tagline && (
          <p className="mt-2 text-lg text-zinc-700">{project.tagline}</p>
        )}
        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.images && project.images.length > 0 && (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.images.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt || project.title}
                width={600}
                height={400}
                className="rounded-lg"
              />
            ))}
          </div>
        )}
        {project.highlights && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-zinc-900">Highlights</h2>
            <ul className="mt-4 space-y-2 text-zinc-700">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>• {highlight}</li>
              ))}
            </ul>
          </div>
        )}
        {project.description && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-zinc-900">Description</h2>
            <p className="mt-4 text-zinc-700">{project.description}</p>
          </div>
        )}
      </main>
      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto w-full max-w-6xl px-5 text-xs text-zinc-500">
          © {new Date().getFullYear()} Bhasitha Dharmasena
        </div>
      </footer>
    </div>
  );
}
import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";
import { EXPERIENCE } from "@/app/lib/site";



export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="mt-2 text-zinc-600">Timeline + key contributions.</p>

        <div className="mt-8 space-y-6">
          {EXPERIENCE.map((e) => (
            <section
              key={`${e.org}-${e.title}`}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-zinc-900">{e.title}</h2>
              <p className="text-sm text-zinc-700">{e.org}</p>
              <p className="text-sm text-zinc-500">{e.dates}</p>

              <ExperienceLogos logos={(e as any).logos} />

              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {e.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto w-full max-w-6xl px-5 text-xs text-zinc-500">
          © {new Date().getFullYear()} {SITE.name}
        </div>
      </footer>
    </div>
  );
}

function ExperienceLogos({
  logos,
}: {
  logos?: { name: string; src: string; href?: string }[];
}) {
  if (!logos?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {logos.map((l) => {
        const img = (
          <div className="flex h-12 w-28 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 px-3">
            <Image
              src={l.src}
              alt={l.name}
              width={220}
              height={90}
              className="h-8 w-auto object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition"
            />
          </div>
        );

        return l.href ? (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            title={l.name}
          >
            {img}
          </a>
        ) : (
          <div key={l.name} title={l.name}>
            {img}
          </div>
        );
      })}
    </div>
  );
}
import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";
import { EXPERIENCE } from "@/app/lib/site";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>

        <div className="mt-8 space-y-5">
          {EXPERIENCE.map((e, idx) => (
            <Card key={idx}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-zinc-900">{e.title}</h2>
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
      </main>
    </div>
  );
}

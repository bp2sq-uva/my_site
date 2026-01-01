import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";
import { PUBLICATIONS } from "@/app/lib/site";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Publications</h1>

        <div className="mt-8 space-y-4">
          {PUBLICATIONS.map((pub, idx) => (
            <Card key={idx}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-zinc-900">{pub.title}</h2>
                  <p className="mt-1 text-sm text-zinc-600">
                    {[pub.venue, pub.year].filter(Boolean).join(" • ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {(pub.links ?? []).map((l) => (
                    <a key={l.href} href={l.href} className="text-sm font-medium text-zinc-900 hover:underline">
                      {l.label} →
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

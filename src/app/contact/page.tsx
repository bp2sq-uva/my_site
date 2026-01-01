import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";
import { SITE } from "@/app/lib/site";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

        <div className="mt-8">
          <Card className="bg-zinc-50">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Email</h2>
                <p className="mt-1 text-sm text-zinc-600">
                  Email is best — I usually respond quickly.
                </p>
                <p className="mt-3 text-sm font-medium text-zinc-900">{SITE.email}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition"
                >
                  Email me
                </a>
                {SITE.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

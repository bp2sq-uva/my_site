import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";
import { SITE } from "@/app/lib/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="space-y-4 text-base leading-relaxed text-zinc-700">
              {SITE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-sm font-semibold text-zinc-900">Focus</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>• Reconstruction + tracking</li>
              <li>• Calibration + QA automation</li>
              <li>• ML for detector readout</li>
              <li>• Hardware + test tooling</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}

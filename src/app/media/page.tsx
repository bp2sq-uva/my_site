import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Media</h1>

        <div className="mt-8">
          <Card>
            <p className="text-zinc-700">
              Drone videography / media portfolio coming soon.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";
import { SITE } from "@/app/lib/site";
import { Pill } from "@/app/components/ui";


const PERSONAL = {
  title: "Personal",
  paragraphs: [
    "Outside of work, I enjoy exploring new places, photography/video, and learning new tools—especially when it leads to building something tangible.",
    "I like collaborative environments, live music, and projects that blend creativity with engineering.",
  ],
  chips: ["Photography / video", "Travel", "Live music", "Building things", "Learning new tools"],
};

const PROFESSIONAL = {
  title: "Professional",
  paragraphs: [
    "I’m a cross-disciplinary engineer-scientist with hands-on experience across mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and data/ML pipelines. I’m most effective when I can own problems end-to-end: design, simulate, build, test, and iterate.",
    "In my current role, I work in experimental nuclear/particle physics at the University of Virginia / Jefferson Lab, developing reliable reconstruction and calibration workflows for detector systems and building software tools to make analysis repeatable and measurable.",
    "I thrive in collaborative project environments where mechanical, electrical, and software decisions interact. I enjoy bridging disciplines—communicating clearly across teams, keeping interfaces clean, and validating decisions with data and testing.",
  ],
  chips: [
    "Mechanical design & fixtures",
    "Test rigs & HV setups",
    "CFD / structural simulation",
    "Instrumentation mindset",
    "DAQ/timing debugging",
    "C++/ROOT + Python",
    "ML for signal/tracking",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
          <p className="text-zinc-600">
            A quick snapshot of who I am—split into professional and personal.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Professional */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600" />
            <h2 className="text-lg font-semibold">{PROFESSIONAL.title}</h2>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-700">
              {PROFESSIONAL.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {PROFESSIONAL.chips.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </Card>

          {/* Personal */}
          <Card className="relative overflow-hidden bg-zinc-50">
            <div className="absolute inset-x-0 top-0 h-1 bg-zinc-400" />
            <h2 className="text-lg font-semibold">{PERSONAL.title}</h2>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-700">
              {PERSONAL.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {PERSONAL.chips.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </Card>
        </div>

        {/* Optional: quick contact strip */}
        <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-900">Let’s connect</p>
              <p className="mt-1 text-sm text-zinc-600">
                Email is best for collaboration, roles, or project questions.
              </p>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
            >
              Email me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}


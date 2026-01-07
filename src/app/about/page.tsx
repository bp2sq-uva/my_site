import SiteNav from "@/app/components/SiteNav";
import { Card } from "@/app/components/ui";
import { SITE } from "@/app/lib/site";
import { Pill } from "@/app/components/ui";


const PERSONAL = {
  title: "Personal",
  paragraphs: [
   "I love things that move and I like stay moving too, so I like to stay active and keep some team energy in my week, whether that’s time at the gym or playing sports like soccer, rugby, volleyball, and field hockey. I also like exploring checking out new places, finding a good trail, or grabbing a beach day whenever I canI’ve always enjoyed learning outside of work too. Lately that’s meant improving my guitar skills and picking up new tools, both technical and creative, just for the satisfaction of getting better at something.",
    "I’m equally happy in the mountains or by the ocean, and I’m a huge fan of animals and pets of all kinds. If there’s a dog nearby, I’ll probably be the person saying hi. When I’m recharging indoors, I’m usually watching a movie or a great TV show when time allows, especially anything with good storytelling.",
    "I’m drawn to collaborative environments with kind, motivated people. I love live music, and I’m most excited by projects where creativity and engineering meet, where you can prototype, iterate, and build something real as a team."
  ],
  chips: ["Travel", "Live music", "Team Sports", "Learning new tools"],
};

const PROFESSIONAL = {
  title: "Professional",
  paragraphs: [
    "I’m a cross disciplinary engineer and researcher with hands on experience across mechanical design and build, data analysis, data and ML pipelines, instrumentation, and electrical and DAQ adjacent workflows. I have been most effective when problems have been owned end to end, with designs having been simulated, built, tested, and iterated with clear feedback loops.",
    "In my current role, experimental nuclear and particle physics work has been carried out at the University of Virginia and Jefferson Lab, where reliable reconstruction and calibration workflows for detector systems have been developed and software tools have been built to make analysis repeatable and measurable. Close collaboration has been maintained with computer scientists, mechanical and electrical engineers, and physicists, with requirements and interfaces having been aligned across hardware and software so results have stayed robust under real experimental conditions.",
    "Collaborative project environments have been valued most when mechanical, electrical, and software decisions have interacted tightly and tradeoffs have needed to be made quickly. Bridging disciplines has been enjoyed through clear communication, clean interfaces, and validation through data, testing, and iteration.",
  ],
  chips: [
    "Mechanical design & fixtures",
    "ML for signal/tracking",
    "C++/ROOT + Python",
    "Test rigs & HV setups",
    "CFD / structural simulation",
    "Instrumentation",
    "DAQ systems",
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
            A quick snapshot of who I am.....
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


import SiteNav from "@/app/components/SiteNav";
import { Card, Pill } from "@/app/components/ui";

const SKILL_GROUPS: Array<{ title: string; items: string[] }> = [
  {
    title: "Mechanical",
    items: [
      "Fixture & test rig design",
      "Assembly/alignment tooling",
      "Prototyping + fabrication coordination",
      "Tolerance/fit reasoning",
      "CFD-informed design (ANSYS Fluent/CFX)",
      "Static structural simulation",
    ],
  },
  {
    title: "Electrical / Instrumentation",
    items: [
      "DAQ/readout constraints mindset",
      "Timing/synchronization debugging",
      "Signal flow + troubleshooting",
      "FPGA/Verilog (design exposure)",
      "High-voltage test setups & safety",
    ],
  },
  {
    title: "Software / Data / ML",
    items: [
      "C++ / ROOT analysis",
      "Python (NumPy, Pandas, PyTorch)",
      "Reconstruction + calibration pipelines",
      "QA automation + plotting/reporting",
      "Deep learning for detection/tracking/denoising",
      "Git, HPC workflows",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
        <p className="mt-2 max-w-3xl text-zinc-600">
          A snapshot of my technical toolkit across mechanical, electrical/instrumentation,
          and software/ML work.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {SKILL_GROUPS.map((g) => (
            <Card key={g.title}>
              <h2 className="text-sm font-semibold text-zinc-900">{g.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

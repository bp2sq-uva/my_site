import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import { Card, ProjectMedia } from "@/app/components/ui";
import { FEATURED_PROJECTS, slugify } from "@/app/lib/site";
import Image from "next/image";


function PageBanner() {
  return (
    <div className="relative h-56 w-full overflow-hidden border-b border-zinc-200">
      <Image src="/banners/projects.jpg" alt="Projects banner" fill className="object-cover" />
      <div className="absolute inset-0 bg-zinc-950/35" />
      <div className="absolute inset-0 mx-auto flex w-full max-w-6xl items-end px-5 pb-8">
        <h1 className="text-3xl font-semibold text-white">Engineering Projects</h1>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <PageBanner />

      <div className="mx-auto w-full max-w-6xl px-5 py-12 space-y-10">
{FEATURED_PROJECTS.map((p) => {
  const slug = slugify(p.title);
  return (
    <div key={slug} className="grid gap-6 lg:grid-cols-5 lg:items-start">
      ...
      <Link href={`/projects/${slug}`}>See details</Link>
      ...
    </div>
  );
})}

      </div>
    </div>
  );
}


// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen bg-white text-zinc-900">
//       <SiteNav />

//       <main className="mx-auto w-full max-w-6xl px-5 py-12">
//         <div className="flex items-end justify-between gap-4">
//           <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
//           <p className="text-sm text-zinc-600">Click a project for full details.</p>
//         </div>

//         <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {FEATURED_PROJECTS.map((p) => {
//             const slug = slugify(p.title);
//             return (
//               <Link key={p.title} href={`/projects/${slug}`}>
//                 <Card className="flex h-full flex-col hover:border-zinc-300 transition">
//                   {p.images?.[0] ? (
//                     <div className="mb-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
//                       <ProjectMedia
//                         src={p.images[0].src}
//                         alt={p.images[0].alt}
//                         className="h-44 w-full object-cover"
//                       />
//                     </div>
//                   ) : null}

//                   <h2 className="text-base font-semibold text-zinc-900">{p.title}</h2>
//                   <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {p.tags.slice(0, 5).map((t) => (
//                       <span
//                         key={t}
//                         className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-5 text-sm font-medium text-zinc-900">
//                     View details →
//                   </div>
//                 </Card>
//               </Link>
//             );
//           })}
//         </div>
//       </main>
//     </div>
//   );
// }

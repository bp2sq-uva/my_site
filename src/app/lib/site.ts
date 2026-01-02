// app/lib/site.ts
export type Link = { label: string; href: string };

export type Project = {
  title: string;
  tagline: string;
  tags: string[];
  highlights: string[];
  links?: Link[];  // <- optional
  images?: { src: string; alt: string }[];
};

export type Publication = {
  title: string;
  venue?: string;
  year?: string;
  links?: Link[];
};

// export type Experience = {
//   title: string;
//   org: string;
//   dates: string;
//   bullets: string[];
// };


export type Site = {
  name: string;
  tagline: string;
  email: string;
  links: Link[];
  about: string[];
  location?: string;
  currentTitle?: string;
  currentOrg?: string;
  phone?: string;
};

export const SITE: Site = {
  name: "Bhasitha Dharmasena",
  tagline: "Experimental nuclear physics • detector instrumentation • ML for reconstruction",
  // location: "Virginia, USA",
  email: "bhasitha.d@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/..." },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/..." },
    { label: "Google Scholar", href: "https://scholar.google.com/..." },
    { label: "CV (PDF)", href: "/cv.pdf" },
  ],
  about: [
    "I’m a cross-disciplinary engineer-scientist with experience across mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and data/ML pipelines.",
    "I thrive in collaborative environments where mechanical, electrical, and software decisions interact—and I like owning problems end-to-end: design, simulate, build, test, and iterate.",
  ],
  currentTitle: "PhD Researcher (Experimental Nuclear & Particle Physics)",
  currentOrg: "University of Virginia / Jefferson Lab (Hall A)",
  // phone: "+1 ...", // optional
};



export const CURRENT = {
  title: "PhD Researcher (Experimental Nuclear & Particle Physics)",
  org: "University of Virginia / Jefferson Lab (Hall A)",
  supervisor: "Supervisor: Prof. Nilanga Liyanage",
  location: "Virginia, USA", // ✅ add this
  focus: [
    "Detector instrumentation + reconstruction for GEM-based trackers",
    "Calibration, QA automation, and analysis pipelines",
    "ML methods for signal/cluster reconstruction and tracking",
  ],
  availability: "Open to versatile engineering roles (US-wide)",
} as const;


export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}



export type WorkLogo = { name: string; src: string; href?: string };

export type Experience = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
  logos?: WorkLogo[]; // ✅ add this
};



export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Wind Turbine Blade Design Optimization using CFD Simulations",
    tagline: "CFD-based blade design iteration for improved efficiency and power output.",
    tags: ["CFD", "Wind Turbine Design", "ANSYS Fluent", "Ansys CFX"],
    highlights: [
      "Performed detailed CFD simulations using ANSYS Fluent and Ansys CFX to analyze airflow and performance characteristics of various blade designs.",
      "Optimized blade geometry to enhance efficiency and power output based on simulation results.",
    ],
    images: [
      { src: "/projects/wind-11.png", alt: "wind turbine blade" },
      { src: "/projects/wind-2.png", alt: "wind turbine blade" },
      { src: "/projects/wind-3.png", alt: "wind blade" },
    ],
  },
  {
    title: "Nuclear Particle Detectors Assembly and Testing Fixtures",
    tagline: "Designed and built fixtures for assembly, alignment, and high-voltage testing.",
    tags: ["Mechanical Design", "Fabrication", "Instrumentation"],
    highlights: [
      "Designed custom jigs and frames to meet precise alignment and handling requirements.",
      "Collaborated with technicians and engineers to iterate designs based on fabrication feedback.",
      "Ensured all fixtures met safety and operational standards for lab use.",
    ],
    images: [
      { src: "/projects/HV_1.jpg", alt: "HV testing fixture" },
      { src: "/projects/HV_2.jpg", alt: "HV testing setup" },
      { src: "/projects/stretcher.jpg", alt: "GEM stretcher apparatus" },
    ],
  },
  {
    title: "Computational Fluid Dynamics Simulations(CFD) and Static Structural Simulations",
    tagline: "ANSYS-based flow + structural simulations for engineering systems and detectors.",
    tags: ["CFD", "ANSYS", "Structural Analysis", "Simulation"],
    highlights: [
      "Conducted fluid flow simulations to optimize flow systems for detector systems.",
      "Performed static structural analysis to ensure mechanical integrity under operational loads.",
      "Analyzed simulation results to guide design improvements and engineering decisions.",
    ],
    images: [{ src: "/projects/gem_demo.gif", alt: "GEM gas flow simulations" }],
  },
  {
    title: "Deep Learning based RF Signal Detection and Classification for Drone Surveillance",
    tagline: "Frequency-domain RF analysis + deep learning models for drone detection.",
    tags: ["Deep Learning", "RF Signal Processing", "Signal Analysis"],
    highlights: [
      "Analyzed RF signals in the frequency domain to identify characteristic emission patterns.",
      "Trained deep learning models to detect and classify drone RF signals amid background noise.",
    ],
    images: [{ src: "/projects/Dedrone.png", alt: "RF signal detection" }],
  },
  {
    title: "Graph Neural Networks(GNNs) for Nuclear Particle Tracking",
    tagline: "GNN architectures to improve tracking accuracy in high-rate detector data.",
    tags: ["Graph Neural Networks", "Detector ML", "Reconstruction"],
    highlights: [
      "Developed GNN models to capture complex spatial relationships in detector data.",
      "Improved tracking efficiency and resolution compared to traditional methods.",
    ],
    images: [{ src: "/projects/GNN-2.png", alt: "GNNs" }],
  },
];

export const PUBLICATIONS: Publication[] = [
  { title: "Thesis", links: [{ label: "PDF", href: "#" }] },
  { title: "Another publication", links: [{ label: "Link", href: "#" }] },
];

export const EXPERIENCE: Experience[] = [
  {
    title: "PhD Researcher (Experimental Nuclear Physics)",
    org: "University of Virginia / Jefferson Lab",
    dates: "2021 — Present",
    bullets: [
      "Built calibration + reconstruction workflows for GEM trackers and calorimeters.",
      "Developed analysis methods for polarization-transfer observables and QA.",
      "Prototyped testing/assembly apparatuses for detector hardware.",
    ],
    logos: [
      { name: "University of Virginia", src: "/logos/uva.svg", href: "https://www.virginia.edu" },
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    org: "Dedrone by AXON",
    dates: "2024 (Summer)",
    bullets: [
      "Developed ML models for drone detection and classification using sensor data.",
      "Optimized data pipelines for real-time processing and analysis.",
      "Collaborated with cross-functional teams to integrate ML solutions into existing systems.",
    ],

    logos: [
      { name: "Dedrone by Axon", src: "/logos/dedrone.svg", href: "https://www.dedrone.com" },
    ],

  
  },
  {
    title: "Graduate Researcher (Machine Learning and Data Analysis for Nuclear Physics)",
    org: "University of Virginia / Jefferson Lab",
    dates: "2023 — Present",
    bullets: [
      "Front-end electronics installation, testing and real-time data acquisition system development.",
      "Applied ML techniques to enhance data analysis and interpretation.",
      "Built tools with interdisciplinary teams to solve reconstruction problems.",
    ],
    logos: [
      { name: "Jefferson Lab", src: "/logos/jlab.svg", href: "https://www.jlab.org" },
    ],
  },
  {
    title: "Research Engineer Intern",
    org: "Korea Maritime & Ocean University, South Korea",
    dates: "2017 — 2018",
    bullets: [
      "Conducted CFD simulations to optimize small-scale wind turbine blade designs.",
      "Analyzed simulation data to inform design improvements and enhance performance.",
      "Ran wind tunnel experiments to validate aerodynamic performance.",
    ],
    logos: [
      { name: "Dedrone by Axon", src: "/logos/kmou_2.svg", href: "https://www.kmou.ac.kr" },
    ],

  },
];


export type Logo = { name: string; src: string; href?: string };

export const WORK_LOGOS: Logo[] = [
  { name: "University of Virginia", src: "/logos/uva.svg", href: "https://www.virginia.edu" },
  { name: "Jefferson Lab", src: "/logos/jlab.svg", href: "https://www.jlab.org" },
  { name: "Dedrone by Axon", src: "/logos/dedrone.svg", href: "https://www.dedrone.com" },
  { name: "Korea Maritime & Ocean University", src: "/logos/kmou_2.svg", href: "https://www.kmou.ac.kr" },
];

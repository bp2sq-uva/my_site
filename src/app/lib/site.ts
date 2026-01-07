// app/lib/site.ts
export type Link = { label: string; href: string };

// export type Project = {
//   slug?: string; // ✅ add this
//   title: string;
//   tagline: string;
//   tags: string[];
//   highlights: string[];
//   links?: Link[];
//   images?: { src: string; alt: string }[];
// };

export type Project = {
  title: string;
  slug?: string; // optional if you sometimes use slugify(title)
  tagline?: string;
  tags?: string[];
  images?: { src: string; alt?: string }[];
  highlights?: string[];
  description?: string;
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
  secondaryTagline?: string;
  email: string;
  links: Link[];
  about: string[];
  location?: string;
  currentTitle?: string;
  currentOrg?: string;
  phone?: string;
};


// src/app/lib/site.ts

export function projectSlug(p: Project) {
  // Always return a URL-safe slug, whether you provided p.slug or not
  return slugify((p.slug ?? p.title ?? "").trim());
}






// export const SITE: Site = {
//   name: "Bhasitha Dharmasena",
//   tagline: "Mechanical Engineering • ML for reconstruction & other • Experimental nuclear physics • detector instrumentation",
//   // location: "Virginia, USA",
//   email: "bhasitha.d@gmail.com",
//   links: [
//     { label: "GitHub", href: "https://github.com/bp2sq-uva" },
//     { label: "LinkedIn", href: "https://www.linkedin.com/in/bhasitha-dharmasena-877287177/" },
//     { label: "Google Scholar", href: "https://scholar.google.com/citations?user=le3tNbYAAAAJ&hl=en" },
//     { label: "CV (PDF)", href: "/cv.pdf" },
//   ],
//   about: [
//     "I’m a cross-disciplinary engineer-scientist with experience across mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and data/ML pipelines.",
//     "I thrive in collaborative environments where mechanical, electrical, and software decisions interact—and I like owning problems end-to-end: design, simulate, build, test, and iterate.",
//   ],
//   currentTitle: "PhD Researcher (Experimental Nuclear & Particle Physics)",
//   currentOrg: "University of Virginia / Jefferson Lab",
//   // phone: "+1 ...", // optional
// };



export const SITE: Site = {
  name: "Bhasitha Dharmasena",
  tagline: "Engineering • Physics • Machine Learning • R&D",
  secondaryTagline: "Mechanical Engineering • ML for reconstruction & other • Experimental nuclear physics • detector instrumentation",
  email: "bhasitha.d@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/bp2sq-uva" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bhasitha-dharmasena-877287177/" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=le3tNbYAAAAJ&hl=en" },
    { label: "CV (PDF)", href: "/cv.pdf" },
  ],
  about: [
    "I’m a cross-disciplinary engineer-scientist with experience across mechanical design/build, instrumentation, electrical/DAQ-adjacent workflows, and data/ML pipelines.",
    "I thrive in collaborative environments where mechanical, electrical, and software decisions interact—and I like owning problems end-to-end: design, simulate, build, test, and iterate.",
  ],
  currentTitle: "PhD Researcher (Experimental Nuclear & Particle Physics)",
  currentOrg: "University of Virginia / Jefferson Lab",
} as const;




export const CURRENT = {
  title: "PhD Researcher (Experimental Nuclear & Particle Physics)",
  org: "University of Virginia / Jefferson Lab",
  supervisor: "Supervisor: Prof. Nilanga Liyanage",
  location: "Virginia, USA", // ✅ add this
  focus: [
    "Detector instrumentation + reconstruction for GEM-based trackers",
    "Calibration, QA automation, and analysis pipelines",
    "ML methods for signal/cluster reconstruction and tracking",
  ],
  availability: "Open to versatile engineering roles (US-wide)",
} as const;


export function slugify(input: unknown) {
  const s = (typeof input === "string" ? input : "").trim();
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}



export type WorkLogo = { name: string; src: string; className: string;href?: string };

export type Experience = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
  logos?: WorkLogo[]; // ✅ add this
};



export const FEATURED_PROJECTS: Project[] = [

  {
    title: "Deep Learning based RF Signal Detection and Classification for Drone Surveillance",
    slug: "deep-learning-based-rf-signal-detection-and-classification-for-drone-surveillance",
    tagline: "Frequency-domain RF analysis + deep learning models for drone detection.",
    tags: ["Deep Learning", "RF Signal Processing", "Signal Analysis"],
    highlights: [
      "Analyzed RF signals in the frequency domain to identify characteristic emission patterns.",
      "Trained deep learning models to detect and classify drone RF signals amid background noise.",
    ],
    images: [{ src: "/projects/Dedrone.png", alt: "RF signal detection" }],
    description: `Drones use radio frequency (RF) signals for communication and control, which can be detected and analyzed for surveillance purposes. This project focused on developing deep learning  models to identify and classify RF signals emitted by drones. By analyzing the frequency-domain characteristics of these signals, the models were trained to effectively distinguish drone signals from background noise and other RF sources. This work has applications in security and surveillance, enabling the detection of unauthorized drone activity.`,
  },
  {
    title: "Computational Fluid Dynamics Simulation(CFD) and Static Structural Simulation Projects",
    slug: "cfd-and-structural-simulations",
    tagline: "ANSYS-based flow + structural simulations for engineering systems and detectors.",
    tags: ["CFD", "ANSYS", "Structural Analysis", "Simulation"],
    highlights: [
      "Conducted fluid flow simulations to optimize flow systems for detector systems.",
      "Performed static structural analysis to ensure mechanical integrity under operational loads.",
      "Analyzed simulation results to guide design improvements and engineering decisions.",
    ],
    images: [
      { src: "/projects/gem_demo.gif", alt: "GEM gas flow simulations" },
      { src: "/projects/Ansys-1.png", alt: "GEM gas flow simulations" },
      { src: "/projects/NEMOH.png", alt: "GEM gas flow simulations" },
  ],
    description: `Built simulation driven studies across CFD, hydrodynamics, and structural FEA using ANSYS CFX, SolidWorks Flow Simulation, NEMOH, and ANSYS Static Structural.
    
    For the fluid side, end to end CFD workflows were executed including geometry preparation, meshing, boundary condition definition, and steady and transient solver setups. Results were post processed to interpret pressure and velocity fields, quantify performance trends such as flow distribution and pressure drop, and compare design iterations. This approach was applied in the SOLIDWORKS Flow project STUDY OF INTERNAL GAS FLOW OF SUBATOMIC PARTICLE DETECTORS.
    
    For wave body interaction work, the open source package NEMOH was used to model frequency domain hydrodynamic response and extract motion and force behavior across different conditions. This workflow was developed in HYDRODYNAMIC BEHAVIOR OF SUBMERGED PITCH SEA WAVE ENERGY DEVICE, where the focus was placed on understanding response trends and design relevant hydrodynamic behavior.
   
    Static structural simulations were carried out as separate projects on different mechanical components using ANSYS Static Structural. Realistic constraints and loading scenarios were applied to evaluate stress, deformation, and safety margins, with particular attention given to deflection driven requirements in DEFLECTION STUDY OF ELECTRON DETECTORS FOR MOLLER EXPERIMENT. Across all simulations, trustworthy results were emphasized through convergence checks, mesh refinement in critical regions, and sensitivity studies to ensure conclusions were robust and design relevant.`
  },
  {
    title: "Electromagnetic Form Factor Measurements (Experiment running, DAQ, and Data Analysis)",
    slug: "measurement-of-neutrons-electromagnetic-form-factor-at-high-momentum-transfer",
    tagline: "Experiment execution, data acquisition and data analysis for Neutron form factor measurement.",
    tags: ["Experimental Nuclear Physics", "Data Analysis", "DAQ Systems"],
    highlights: [
      "Performed frontend electronic readout system installation",
      "Performed real-time data acquisition system development and testing",
      "C++ and Python based data analysis and reconstruction",
    ],
    images: [
      { src: "/projects/jlab-4.HEIC", alt: "HV testing fixture" },
      { src: "/projects/SBS.png", alt: "HV testing fixture" },
      { src: "/projects/jlab-2.HEIC", alt: "HV testing fixture" },
      { src: "/projects/jlab-3.HEIC", alt: "HV testing fixture" },
      { src: "/projects/jlab-1.HEIC", alt: "HV testing fixture" },
    ],
    description: `The experiment aimed to measure the neutron electromagnetic form factor at high momentum transfer, providing insight into the neutron internal structure. A primary role was carried out in installing and testing the front end electronic readout systems, supporting particle detector installations, and performing troubleshooting and maintenance to ensure accurate and stable data capture throughout the run period.
    
    Work on data acquisition was carried out to support high rate operation, with systems configured and validated to reliably handle the data volumes produced during production running. Detector and electronics performance was monitored and issues were diagnosed and resolved to minimize downtime and protect data quality.
    
    Post experiment, data analysis and event reconstruction were carried out using C++ and Python based workflows. The collected datasets were processed, calibrated, and reconstructed, and physics observables relevant to the neutron form factor extraction were produced from the final analysis outputs.`,
      },
  {
    title: "Graph Neural Networks (GNNs) for Nuclear Particle Tracking",
    slug: "graph-neural-networks-gnns-for-nuclear-particle-tracking",
    tagline: "GNN architectures to improve tracking accuracy in high-rate detector data.",
    tags: ["Graph Neural Networks", "Detector ML", "Reconstruction"],
    highlights: [
      "Developed GNN models to capture complex spatial relationships in detector data.",
      "Improved tracking efficiency and resolution compared to traditional methods.",
    ],
    images: [
      { src: "/projects/GNN-2.png", alt: "GNNs" },
      { src: "/projects/GNN_vid.gif", alt: "GNNs_vid" },
  ],
    description: `Graph Neural Networks (GNNs) have emerged as powerful tools for modeling complex relationships in data, making them well-suited for particle tracking in high-rate nuclear physics detectors. This project focused on developing and implementing GNN architectures to enhance tracking accuracy and efficiency. By representing detector hit data as nodes and their spatial relationships as edges, the GNN models were able to learn intricate patterns in the data. This work has significant implications for advancing reconstruction techniques in nuclear and particle physics experiments.`,
  },
  {
    title: "Wind Turbine Blade Design Optimization using CFD Simulations",
    slug: "wind-turbine-blade-design-optimization-using-cfd-simulations",
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
    description: `This project focused on optimizing blade designs using Computational Fluid Dynamics (CFD) simulations conducted with Ansys CFX. Various blade geometries were modeled and analyzed to understand airflow patterns, pressure distributions, and performance metrics. Based on the simulation results, iterative design modifications were made to enhance aerodynamic efficiency and maximize energy capture. The optimized blade designs demonstrated improved performance characteristics, contributing to more effective wind energy generation.
    
    The project also included an added wind lense to the wind turbine blade to increase the efficiency and power output. CFD simulations were used to analyze the airflow around the wind lense and its impact on the overall performance of the wind turbine system.`,
  },
  {
    title: "Nuclear Particle Detectors Assembly and Testing Fixtures",
    slug: "nuclear-detector-fixtures",
    tagline: "Designed and built fixtures for assembly, alignment, and high-voltage testing.",
    tags: ["Mechanical Design", "Fabrication", "Instrumentation", "SOLIDWORKS", "Machining"],
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
    description: `This project involved designing and fabricating custom fixtures for the assembly, alignment, and high-voltage testing of nuclear particle detectors. The fixtures were engineered to meet precise mechanical and electrical requirements, ensuring accurate positioning and safe operation during testing. The designs were iteratively refined through collaboration with technicians and engineers, incorporating feedback from fabrication processes. All fixtures were validated to meet safety standards for laboratory use.`,
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
      { name: "University of Virginia", src: "/logos/uva.svg", className: "scale-110", href: "https://www.phys.virginia.edu" },
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
      { name: "Dedrone by Axon", src: "/logos/dedrone.svg", className: "scale-110", href: "https://www.dedrone.com" },
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
      { name: "Jefferson Lab", src: "/logos/jlab.svg", className: "scale-110", href: "https://www.jlab.org" },
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
      { name: "Dedrone by Axon", src: "/logos/kmou_2.svg", className: "scale-110", href: "https://www.kmou.ac.kr/english/cm/cntnts/cntntsView.do?mi=477&cntntsId=6906" },
    ],

  },


  {
    title: " Mechanical Engineer Intern",
    org: "Sri Lanka Air Force Base, Sri Lanka",
    dates: "2016",
    bullets: [
      "Got involved in maintenance of aircraft mechanical systems",
      "NDT inspection and quality assurance of aircraft components",
    ],
    logos: [
      { name: "Sri Lanka Air Force Base", src: "/logos/air_force.svg", className: "scale-110", href: "https://www.airforce.lk/index.php" },
    ],

  },

];


export type Logo = { name: string; src: string; href?: string };

export const WORK_LOGOS: Logo[] = [
  { name: "University of Virginia", src: "/logos/uva.svg", href: "https://www.virginia.edu" },
  { name: "Jefferson Lab", src: "/logos/jlab.svg", href: "https://www.jlab.org" },
  { name: "Dedrone by Axon", src: "/logos/dedrone.svg", href: "https://www.dedrone.com" },
  { name: "Korea Maritime & Ocean University", src: "/logos/kmou_2.svg", href: "https://www.kmou.ac.kr" },
  { name: "Sri Lanka Air Force Base", src: "/logos/air_force.svg", href: "https://www.airforce.lk/index.php" },
];

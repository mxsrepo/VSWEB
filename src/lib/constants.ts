export interface Project {
  id: string;
  title: string;
  location: string;
  country: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  category: 'aviation' | 'infrastructure' | 'industrial' | 'mixed-use';
}

export const PROJECTS: Project[] = [
  {
    id: 'delhi-airport',
    title: 'Delhi International Airport',
    location: 'Delhi',
    country: 'India',
    description: 'Key role in Terminal 2, Terminal 3 & Cargo Complex; Hajj Terminal construction; runway maintenance.',
    coordinates: [28.5562, 77.1000],
    category: 'aviation',
  },
  {
    id: 'mohali-mixed-use',
    title: 'Mega Mixed-Use Development',
    location: 'Mohali',
    country: 'India',
    description: '700K sq ft commercial, 5-star Radisson Hotel, 1.2M sq ft IT Park, luxury residential towers.',
    coordinates: [30.7046, 76.7179],
    category: 'mixed-use',
  },
  {
    id: 'dmrc-it-park',
    title: 'DMRC IT Park',
    location: 'Delhi',
    country: 'India',
    description: '3B + G + 9 floors IT Park for Delhi Metro Rail Corporation; completed in 18 months ahead of schedule.',
    coordinates: [28.6139, 77.2090],
    category: 'infrastructure',
  },
  {
    id: 'al-graffa-interchange',
    title: 'Al Graffa Interchange & Highway',
    location: 'Doha',
    country: 'Qatar',
    description: 'QR 200M+ infrastructure project including bridge, underpass, roads, drainage, and earthworks.',
    coordinates: [25.2854, 51.5310],
    category: 'infrastructure',
  },
  {
    id: 'aramco-road',
    title: '300 KM Road Infrastructure',
    location: 'Dhahran',
    country: 'Saudi Arabia',
    description: 'Extensive road network in Dhahran, industrial yards, rig platforms, all to ARAMCO standards.',
    coordinates: [26.2361, 50.0393],
    category: 'infrastructure',
  },
  {
    id: 'waraba-center',
    title: 'Waraba Center',
    location: 'Dubai',
    country: 'UAE',
    description: 'Mixed-use commercial and residential project delivered end-to-end under complex constraints.',
    coordinates: [25.2048, 55.2708],
    category: 'mixed-use',
  },
];

export const ASSOCIATIONS = [
  "ARAMCO, Dhahran, Saudi Arabia",
  "Trans Emirates, Dubai",
  "Shoba Contracting, Dubai",
  "Gulf Elite Contracting LLC, Dubai",
  "CCC Contracting, Dubai",
  "L&T, Doha, Qatar",
  "J&P Overseas, Doha, Qatar",
  "Unitech, Gurgaon",
  "RDC, Gurgaon",
  "Bestech, Gurgaon",
  "Kuala Lumpur Airport, Malaysia",
  "United Technocrate, Chandigarh"
];

export const SERVICES = [
  {
    title: "Project Management & Consultancy (PMC)",
    description: "Complete project planning & coordination, cost control & quality assurance, and timeline management.",
    icon: "ClipboardList"
  },
  {
    title: "Civil Works Execution",
    description: "Residential, commercial & industrial construction, turnkey project execution, and finishing works.",
    icon: "Building2"
  },
  {
    title: "MEP Services",
    description: "Electrical, Plumbing, and HVAC system design, installation, testing, and commissioning.",
    icon: "Settings"
  },
  {
    title: "Design & Engineering",
    description: "Architectural Planning, Structural Designing, and Interior Designing & Execution.",
    icon: "PencilRuler"
  },
  {
    title: "Execution & Supervision",
    description: "Site execution & monitoring, safety management, and quality control.",
    icon: "HardHat"
  },
  {
    title: "Overseas Manpower Supply",
    description: "Skilled & semi-skilled workforce supply for Middle East & Europe.",
    icon: "Users"
  }
];

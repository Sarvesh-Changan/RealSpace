import { Project, Service, TeamMember, FAQItem, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'residential-design',
    title: 'Bespoke Residential Interiors',
    iconName: 'Home',
    shortDescription: 'Custom, space-optimized interior design for premium 1BHK, 2BHK, and 3BHK+ flats. Engineered specifically to tackle Thane’s typical layout constraints.',
    longDescription: 'Our signature residential service transforms compact and spacious homes alike. We do not believe in cookie-cutter templates. We analyze the specific architectural layout, column placements, and natural light sources of your apartment (such as Godrej, Lodha, or Kalpataru layouts) to design a space-efficient masterpiece that feels spacious and premium.',
    benefits: [
      'Tailored space planning that maximizes usable carpet area by up to 22%',
      'Custom space-saving furniture design tailored to structural constraints (beams/shafts)',
      'High-end materials & modular components with up to 10 years warranty',
      'Vastu-compliant layouts integrated seamlessly without disrupting modern aesthetics',
      'Comprehensive 3D visualization and material sampling before execution begins'
    ],
    processSteps: [
      'Initial Site Survey & Constraint Mapping (structural beams, columns, window lines)',
      'Layout Concept & 2D Space Optimization Blueprinting',
      '3D Renderings & Detailed Material/Color Board Presentation',
      'Production of Modular Cabinetry and Custom Furniture at our Thane workshop',
      'On-site Installation with 3-tier Quality Checks and Final Handover'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'modular-kitchens',
    title: 'Smart Modular Kitchens',
    iconName: 'ChefHat',
    shortDescription: 'High-performance kitchens engineered for optimal workflow, premium hardware, and clever moisture-resistant storage solutions.',
    longDescription: 'Kitchens are the hardest working rooms in Mumbai apartments. We engineer bespoke, modular kitchen spaces that handle humidity, heavy cooking, and storage needs. Using top-tier hardware (Hafele, Hettich) and premium Boiling Water Resistant (BWR) plywood, we combine stunning aesthetics with structural longevity.',
    benefits: [
      'Ergonomic golden-triangle workflow design reducing daily physical strain',
      'BWR marine-grade plywood and high-gloss acrylic finishes that resist heat and water',
      'Intelligent storage solutions: pull-out larders, corner carousels, and bi-fold lifts',
      'Seamless integration of built-in hobs, chimneys, microwave ovens, and water purifiers',
      'Frictionless soft-close drawer runners and premium rust-free wire baskets'
    ],
    processSteps: [
      'Work triangle evaluation and gas/plumbing point verification',
      'Modular layout options generation (L-shape, parallel, or straight configuration)',
      'Hardware and accessory finalization (Hettich/Hafele soft-close systems)',
      'Off-site precision cutting and edge-banding finishing',
      'Dry-fit test and dust-free on-site assembly'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'commercial-spaces',
    title: 'Boutique Commercial & Office Design',
    iconName: 'Briefcase',
    shortDescription: 'Productive, impressive, and ergonomic workspaces, executive offices, and retail showrooms designed to elevate your brand presence.',
    longDescription: 'An office is not just a place of work; it is a physical manifestation of your brand. We design functional commercial spaces, offices, and retail showrooms across the Thane-Mumbai belt that boost employee productivity, optimize customer flow, and leave an unforgettable premium impression on your clients.',
    benefits: [
      'Acoustic space planning that minimizes noise pollution and enhances concentration',
      'Ergonomic desk configurations, lighting design, and comfortable seating layouts',
      'Brand colors and philosophy integrated into architectural elements seamlessly',
      'Smart wiring and cable-management systems integrated into custom furniture',
      'Strict adherence to commercial fire safety norms and electrical load configurations'
    ],
    processSteps: [
      'Operational needs analysis, team count, and dynamic workflow mapping',
      'Zoning layout showing collaborative, quiet, and client-facing areas',
      'Acoustic, electrical, and HVAC layout integration design',
      'Fabrication of custom workstations and reception counters',
      'Rapid overnight or weekend on-site assembly to prevent business downtime'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'turnkey-execution',
    title: 'Turnkey Design & Build Services',
    iconName: 'CheckCircle2',
    shortDescription: 'From initial 3D visualization to final paint coat. We take 100% accountability so you don’t have to manage contractors, delays, or budget overruns.',
    longDescription: 'The biggest fear of home interior projects is dealing with unreliable local carpenters, plumbers, painters, and electricians. With our Turnkey Service, we take complete responsibility. One singular point of contact (Vijay Chawan and team) manages everything, ensuring your design is executed exactly as rendered, on time, and within the agreed budget.',
    benefits: [
      'Single point of accountability - no coordinate-chasing between 5 different vendors',
      'Strict budget lock-in with a zero-surprise guarantee (no unapproved cost overruns)',
      'Milestone-tracked timeline updates via WhatsApp with photographic reports',
      'Sourced premium materials only - verified authenticity for laminates, wires, and paints',
      'Complimentary deep cleaning of the entire space prior to key handover'
    ],
    processSteps: [
      'Design lock-in and detailed itemized Bill of Quantities (BOQ) sign-off',
      'Civil modifications, electrical point rerouting, and false-ceiling framing',
      'Precision modular woodwork fabrication at our state-of-the-art facility',
      'Veneer/laminate pasting, premium fitting assembly, and advanced painting layers',
      'Comprehensive cleaning, hardware tuning, decorative styling, and final keys handover'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'lodha-crown-majiwada',
    title: 'The Contemporary Sanctuary',
    category: 'Residential',
    location: 'Lodha Crown, Majiwada, Thane',
    client: 'The Chawan Residence',
    budget: '₹8.5 Lakhs',
    year: '2025',
    area: '740 sq ft (2BHK)',
    description: 'A masterpiece in warm contemporary minimalism designed for a young family in Majiwada. Thane’s typical apartment beams were seamlessly integrated into premium veneer claddings and floating display alcoves. By opting for handle-less custom modular wardrobes and multi-functional hidden storage in the living room, we unlocked an additional 15% clear walking space. Accentuated by luxury ambient false ceilings and a bespoke brass-inlaid fluted paneling.',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    timeline: [
      { phase: 'Week 1-2', title: 'Consultation & 3D Approval', description: 'Detailed laser measurement and complete 3D modeling matching Vastu principles.' },
      { phase: 'Week 3-4', title: 'Modular Woodwork & Framing', description: 'Precision cabinetry cutting at the Thane unit and structural gypsum ceiling installation.' },
      { phase: 'Week 5-6', title: 'Lamination & Assembly', description: 'Applying custom anti-scratch matt laminates and premium Hafele soft-close runners.' },
      { phase: 'Week 7-8', title: 'Painting & Handover', description: 'Flawless Royale Luxury Emulsion coats, customized lighting fixture setup, and deep cleaning.' }
    ],
    materials: [
      'BWR Marine Plywood (Austin Premium)',
      '1mm Anti-fingerprint Matt Laminates (Merino)',
      'Premium Champagne Gold PVD profiles',
      'Hafele Sensys soft-close hinge assemblies',
      'Asian Paints Royale Luxury Emulsion'
    ],
    colorPalette: [
      { name: 'Warm Cream', hex: '#F5F0EB' },
      { name: 'Earthy Charcoal', hex: '#2A2A2A' },
      { name: 'Refined Gold', hex: '#C8A96A' },
      { name: 'Rich Walnut', hex: '#5A4A42' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', // Raw unpainted room with tiled floor
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80' // Beautiful modern living room
  },
  {
    id: 'hiranandani-estate-kitchen',
    title: 'The Culinary Theatre',
    category: 'Kitchen',
    location: 'Hiranandani Estate, Ghodbunder Rd, Thane',
    client: 'Dr. Mehta’s Kitchen',
    budget: '₹4.2 Lakhs',
    year: '2026',
    area: '120 sq ft (Kitchen Area)',
    description: 'An ultra-modern, high-efficiency parallel modular kitchen that balances Thane’s high humidity and severe spice cooking habits. Outfitted with Boiling Water Resistant Marine Plywood, a luxurious Kalinga Quartz countertop, and completely integrated high-suction chimney system. Handles were discarded for elegant Gola profile channels, while dedicated deep pull-out drawers keep spices, cutlery, and giant grain containers neatly hidden.',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    timeline: [
      { phase: 'Week 1', title: 'Work Triangle Layout Design', description: 'Mapping optimum distance between sink, cooktop, and refrigerator.' },
      { phase: 'Week 2-3', title: 'Quartz Fabrication', description: 'Precision carving and edge-polishing of stain-free Kalinga White Quartz.' },
      { phase: 'Week 4', title: 'Cabinet Dry-Fitting', description: 'Factory-finish module assembly using water-resistant polyurethane glues.' },
      { phase: 'Week 5', title: 'Appliance Fitting & Polish', description: 'Installing built-in oven, sensor chimney, gas piping, and final drawer calibration.' }
    ],
    materials: [
      'BWR Marine Plywood with 10-yr warranty',
      'Kalinga Quartz countertop (Stain-proof, 18mm)',
      'Hettich InnoTech double-walled drawers',
      'High-gloss moisture-sealed Acrylic shutters',
      'Concealed LED strip under-cabinet task lighting'
    ],
    colorPalette: [
      { name: 'Alabaster White', hex: '#F9F9F9' },
      { name: 'Warm Taupe', hex: '#8F857D' },
      { name: 'Sleek Chrome', hex: '#A8A8A8' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80', // raw kitchen brickwork
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'godrej-emerald-lounge',
    title: 'The Brass & Velvet Lounge',
    category: 'Specialty',
    location: 'Godrej Emerald, Kolshet, Thane',
    client: 'The Singhania Suite',
    budget: '₹6.0 Lakhs',
    year: '2025',
    area: '450 sq ft (Lounge & Foyer)',
    description: 'Designed around Vastu compliant principles of layout and natural daylight flow. This formal lounge features dramatic fluted wall paneling in dark charcoal, coupled with genuine brushed gold metallic trim and rich velvet seating. Special accent light panels were embedded to mask an ugly beam line, transforming an architectural problem into the lounge’s most iconic illuminated canopy detail.',
    mainImage: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    timeline: [
      { phase: 'Week 1-2', title: 'Vastu & Beam Alignment Survey', description: 'Consulting with certified Vastu partner and creating mock lighting geometries.' },
      { phase: 'Week 3-4', title: 'Fluting & Panel Installation', description: 'Applying custom density charcoal fiber panels to guarantee sound dampening and high texture.' },
      { phase: 'Week 5-6', title: 'Brass Trim Embedding', description: 'Installing hand-polished warm bronze channels and premium velvet-covered benches.' }
    ],
    materials: [
      'Charcoal polymer fluted panels',
      'Solid Brass flat bars (Tarnish-free coated)',
      'High-density acoustic backing boards',
      'Italian Statuario Marble accents',
      'D’Decor luxury velvet upholstery fabrics'
    ],
    colorPalette: [
      { name: 'Soot Black', hex: '#1C1C1C' },
      { name: 'Brushed Brass', hex: '#C8A96A' },
      { name: 'Slate Teal', hex: '#3B5254' },
      { name: 'Warm Putty', hex: '#DDD6CE' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80', // semi-raw room
    afterImage: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kalpataru-prime-office',
    title: 'The Executive Mono-Studio',
    category: 'Commercial',
    location: 'Kalpataru Prime, Wagle Estate, Thane',
    client: 'Apex Fintech HQ',
    budget: '₹12.0 Lakhs',
    year: '2026',
    area: '1,100 sq ft (Boutique Office)',
    description: 'A minimalist, highly elegant office suite executed in light birchwoods, textured glass, and micro-concrete flooring for a high-end financial firm. The space-planning prioritizes deep acoustic insulation for the cabins while fostering an airy, open collaboration area. Cable systems are completely hidden inside bespoke multi-layered desk legs, giving the entire workspace a cordless, clean-desk environment.',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    timeline: [
      { phase: 'Week 1-2', title: 'Layout Optimization', description: 'Coordinating desk densities and planning premium sound-absorption partitions.' },
      { phase: 'Week 3-4', title: 'Glass & Electrical Runs', description: 'Double-glazed acoustic glass wall partitions and high-frequency underfloor power lines.' },
      { phase: 'Week 5-6', title: 'Microconcrete & Joinery', description: 'Layering French microconcrete floors and assembling the main oak veneer board desk.' }
    ],
    materials: [
      'Premium European Oak veneers',
      'Acoustic double-glazed glass panels (STC 45 rated)',
      'Polished micro-concrete flooring (Neocrete)',
      'Integrated Philips LED custom linear profiles',
      'High-grade acoustic felt back panels'
    ],
    colorPalette: [
      { name: 'Birchwood Ash', hex: '#DDD6CD' },
      { name: 'Steel Gray', hex: '#6D6A66' },
      { name: 'Nordic White', hex: '#FFFFFF' },
      { name: 'Deep Midnight', hex: '#1C1C1C' }
    ],
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', // empty concrete office shell
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Vijay Chawan',
    role: 'Founder & Principal Interior Designer',
    bio: 'With over 12 years of hands-on interior design expertise across Mumbai and Thane, Vijay established REALSPACE with a single goal: designing gorgeous spaces rooted in physical room realities. He works directly with flat owners, ensuring no structural constraint diminishes design beauty.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=600&q=80'
  },
  {
    name: 'Anjali Desai',
    role: 'Lead 3D Visualization Artist',
    bio: 'Anjali brings abstract concepts to life. Her hyper-realistic 3D walkthroughs and renderings give REALSPACE clients the confidence to approve designs, knowing exactly how lighting, materials, and custom joints will look in reality before construction.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&h=600&q=80'
  },
  {
    name: 'Rajesh Shinde',
    role: 'Head of Project Execution & Civil Engineering',
    bio: 'Rajesh commands our team of specialized craftsmen, electricians, and modular fitting experts. With deep structural knowledge of Thane’s skyscraper architectures, he translates paper plans into secure, robust, millimeter-perfect realities.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&h=600&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is the approximate cost of a 2BHK interior project in Thane?',
    answer: 'A premium-finish, comprehensive 2BHK interior project typical for premium complexes in Thane (Lodha, Hiranandani, Godrej) ranges from ₹6.5 Lakhs to ₹12 Lakhs. This covers complete custom modular wardrobes, a full modular kitchen with quartz counter, false ceilings, electrical rerouting, paint, and custom TV units. Costs vary depending on material selection (laminate vs veneer) and specialized civil alterations.'
  },
  {
    question: 'How long does a turnkey home interior project take to complete?',
    answer: 'Typically, a 2BHK project requires 45 to 60 working days from the final 3D design sign-off. Since we manufacture our modular units off-site in our specialized workshop, on-site dust, disruption, and carpenter delays are reduced by 70%, allowing a clean, rapid handover.'
  },
  {
    question: 'Do you design according to Vastu Shastra principles?',
    answer: 'Yes, absolutely. We map the orientation of your flat (foyer entry, kitchen hob placement, master bedroom bed direction) according to Vastu Shastra during our initial space-planning phase. We blend these ancient layouts seamlessly so they never conflict with a clean, high-end modern design.'
  },
  {
    question: 'Do you handle both design and actual execution (turnkey)?',
    answer: 'Yes. We are a Turnkey Design Studio. We do not just hand you drawings and leave. We design, manufacture the modular woodworks at our shop, coordinate all civil and electrical contractors, and hand you the keys of a fully finished, deeply cleaned, ready-to-live home.'
  },
  {
    question: 'Can I see 3D visualizations before work begins on my flat?',
    answer: 'Yes, this is an absolute standard at REALSPACE. We do not start sawing wood or ordering materials until you have reviewed and signed off on hyper-realistic, high-resolution 3D renderings of every single room. This guarantees that "What you see is exactly what you get."'
  },
  {
    question: 'Which specific areas and complexes in Thane do you service?',
    answer: 'We primarily service Thane West, Majiwada, Ghodbunder Road, Kolshet Road, and Hiranandani Estate. We have deep structural layout familiarity with major luxury projects such as Lodha Crown, Godrej Emerald, Kalpataru Hills, and Hiranandani One Park.'
  }
];

export const REVIEWS: Review[] = [
  {
    author: 'Siddharth & Meera Joshi',
    rating: 5,
    text: 'Vijay Chawan designed our 2BHK flat in Lodha Crown Majiwada. He solved the beam placement issue in our bedroom beautifully by converting it into an elegant indirect lighting canopy. Very transparent budget, no hidden costs, and highly responsive team on WhatsApp!',
    date: 'March 2026',
    source: 'Justdial',
    projectType: '2BHK Home Owner'
  },
  {
    author: 'Dr. Kunal Mehta',
    rating: 5,
    text: 'Highly professional parallel kitchen execution at Hiranandani Estate. The boiling-water resistant plywood, acrylic shutter finish, and soft-close pullout hardware work absolutely flawlessly. Best decision was to trust their turnkey manufacturing.',
    date: 'May 2026',
    source: 'Verified Client',
    projectType: 'Modular Kitchen Client'
  },
  {
    author: 'Rajiv Singhania',
    rating: 5,
    text: 'The formal lounge they created for our family at Godrej Emerald is spectacular. Vastu guidelines were perfectly followed, and the fluted charcoal wall paneling with brass trim gives a highly premium, luxury boutique hotel feel. Exceptional craftsmanship!',
    date: 'January 2026',
    source: 'Google',
    projectType: 'Luxury Lounge Client'
  },
  {
    author: 'Priya R. Tambe',
    rating: 5,
    text: 'As flat owners, we were extremely worried about carpenter delays. Vijay and Rajesh delivered exactly on the 50th day as promised! Everything matched the signed 3D renders perfectly. Highly recommend their turnkey package for busy professionals.',
    date: 'February 2026',
    source: 'Justdial',
    projectType: '3BHK Turnkey Interior'
  }
];

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Calendar, Hammer, Trophy, ChevronRight } from 'lucide-react';

interface TransformationStep {
  id: number;
  phaseName: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: any;
  durationLabel: string;
}

const TRANSFORMATION_STEPS: TransformationStep[] = [
  {
    id: 1,
    phaseName: 'Phase 01',
    title: 'The Raw Reality',
    subtitle: 'Original Site & Structural Constraint Survey',
    description: 'We measure structural realities: beam locations, column margins, plumbing ducts, and light directions. No templates or guessworks — we blueprint around the exact raw masonry shell.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    icon: Layers,
    durationLabel: 'Day 1 - 3'
  },
  {
    id: 2,
    phaseName: 'Phase 02',
    title: 'The Intelligent Blueprint',
    subtitle: 'High-Fidelity 3D Renders & Material Selection',
    description: 'We lock in custom CAD blueprints, Vastu coordinates, and select exact anti-scratch laminates, PVD profiles, and light temperatures. You see a perfect 3D digital clone before any wood is cut.',
    image: 'https://images.unsplash.com/photo-1503387762458-7e52f410d602?auto=format&fit=crop&w=1200&q=80',
    icon: Calendar,
    durationLabel: 'Day 4 - 15'
  },
  {
    id: 3,
    phaseName: 'Phase 03',
    title: 'Milimeter-Perfect Execution',
    subtitle: 'Off-site Workshop Manufacture & Civil Works',
    description: 'Specialist carpenters assemble BWR marine-grade framework off-site. In-apartment plumbing, electrical rerouting, and Gypsum false ceiling framing happen concurrently with zero dust.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    icon: Hammer,
    durationLabel: 'Day 16 - 40'
  },
  {
    id: 4,
    phaseName: 'Phase 04',
    title: 'The Luxury Sanctuary',
    subtitle: 'Handover, Deep Cleaning & Styling',
    description: 'Assembly, soft-close alignment, premium luxury royale emulsion painting, and final custom styling. We deliver a gorgeous, custom interior suited entirely to your lifestyle, ready for immediate move-in.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    icon: Trophy,
    durationLabel: 'Day 41 - 50'
  }
];

export default function TransformationSequence() {
  const [activeStep, setActiveStep] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 4 ? 1 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const activeData = TRANSFORMATION_STEPS[activeStep - 1];
  const IconComponent = activeData.icon;

  return (
    <div id="transformation-seq-root" className="w-full bg-[#1C1C1C] text-[#F8F5F1] py-16 px-6 md:py-24 rounded-none border border-border-luxury relative">
      {/* Dynamic background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury mb-2 block">
              Space Evolution
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white">
              Watch Your Room Transform
            </h2>
          </div>
          <p className="text-[#A29E9A] max-w-md text-sm md:text-base font-sans mt-4 md:mt-0">
            Slide through the interactive timeline to trace how we transform a raw brick shell into a highly personalized luxury sanctuary.
          </p>
        </div>

        {/* Phase Selector Bar */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-10 border-b border-[#33302D] pb-6">
          {TRANSFORMATION_STEPS.map((step) => {
            const StepIcon = step.icon;
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setAutoplay(false); // Stop autoplay on user interaction
                }}
                className={`text-left pb-4 relative transition-all duration-300 focus:outline-none group cursor-pointer`}
              >
                {/* Horizontal Progress Indicator */}
                <div
                  className={`absolute bottom-[-1px] left-0 h-1 transition-all duration-500 ${
                    isSelected ? 'w-full bg-gold-luxury' : 'w-0 bg-[#44403C] group-hover:w-1/2'
                  }`}
                />
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`font-mono text-xs md:text-sm ${
                      isSelected ? 'text-gold-luxury font-semibold' : 'text-[#88837E]'
                    }`}
                  >
                    {step.phaseName}
                  </span>
                  <StepIcon
                    className={`h-4 w-4 hidden md:inline ${
                      isSelected ? 'text-gold-luxury' : 'text-[#6D6A66]'
                    }`}
                  />
                </div>
                <p
                  className={`font-serif text-xs md:text-lg tracking-tight hidden sm:block ${
                    isSelected ? 'text-white font-medium' : 'text-[#A29E9A] group-hover:text-white'
                  }`}
                >
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Information (Left 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 bg-[#2E2B28] px-3 py-1 rounded-none text-xs font-mono text-gold-luxury tracking-wider uppercase">
                  <IconComponent className="h-3.5 w-3.5" />
                  <span>{activeData.durationLabel}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight leading-tight">
                  {activeData.title}
                </h3>
                <h4 className="font-sans text-xs md:text-sm font-semibold text-gold-luxury uppercase tracking-wider">
                  {activeData.subtitle}
                </h4>
                <p className="text-[#D6D1CA] text-sm md:text-base leading-relaxed font-sans">
                  {activeData.description}
                </p>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-mono text-gold-luxury hover:text-[#white] transition-colors cursor-pointer" onClick={() => setAutoplay(!autoplay)}>
                  <div className={`h-2 w-2 rounded-full ${autoplay ? 'bg-[#25D366] animate-ping' : 'bg-red-500'}`} />
                  <span>{autoplay ? 'Timeline Autoplaying (Click to Pause)' : 'Autoplay Paused (Click to Resume)'}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image (Right 7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden aspect-[16/10] rounded-none border border-[#33302D] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={activeData.image}
                  alt={activeData.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Navigation overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <button
                onClick={() => {
                  setActiveStep((prev) => (prev === 4 ? 1 : prev + 1));
                  setAutoplay(false);
                }}
                className="absolute right-4 bottom-4 bg-[#1C1C1C]/90 hover:bg-gold-luxury text-white p-3 rounded-none flex items-center justify-center border border-[#33302D] cursor-pointer transition-all duration-300"
                title="Next Step"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

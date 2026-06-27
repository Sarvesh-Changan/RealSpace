import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Compass, HelpCircle, ArrowLeft, Layers, Sparkles, ShieldAlert, BadgeInfo } from 'lucide-react';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Read service ID from URL query if exists to support direct links!
  useEffect(() => {
    const serviceId = searchParams.get('id');
    if (serviceId) {
      setActiveServiceId(serviceId);
    } else {
      setActiveServiceId(null);
    }
  }, [searchParams]);

  const handleSelectService = (id: string | null) => {
    if (id) {
      setSearchParams({ id });
    } else {
      setSearchParams({});
    }
  };

  const activeService = SERVICES.find(s => s.id === activeServiceId);

  const localFAQs = [
    {
      q: 'Do I have to purchase the materials or hardware yourself?',
      a: 'No. Our Turnkey Service includes complete materials procurement. We directly order BWR marine plywood (Austin Premium), Gola profiles, Hafele soft-close slides, and premium Merino laminates. You receive original warranty certificates for everything.'
    },
    {
      q: 'How do you handle column shifts and structural beams?',
      a: 'Vijay Chawan maps your columns on Day 1. Instead of leaving ugly voids or simple wood fillers, we design around beams by incorporating them into custom fluted headboard canopies, floating shelves, or disguised storage closets.'
    },
    {
      q: 'What makes BWR Marine Plywood better than MDF/MDF panels used by others?',
      a: 'MDF and Particle boards expand, sag, and rot rapidly under Mumbai’s high humidity and steam. Boiling Water Resistant (BWR) marine plywood is manufactured using phenol-formaldehyde resins, ensuring complete moisture, water, and borer resistance.'
    }
  ];

  return (
    <div id="services-page-root" className="bg-bg-luxury font-sans min-h-screen pt-24">
      
      <AnimatePresence mode="wait">
        {!activeServiceId ? (
          // === ALL SERVICES INDEX VIEW ===
          <motion.div
            key="index-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-16 py-10"
          >
            {/* 1. Header Hero */}
            <div className="max-w-4xl mx-auto text-center px-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-luxury font-bold block">
                Bespoke Design Capabilities
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl tracking-tight text-text-luxury leading-tight">
                Our Signature Solutions
              </h1>
              <p className="text-sm text-muted-luxury max-w-xl mx-auto leading-relaxed">
                Engineered for structural longevity, aesthetic warmth, and space optimization. Sourced from authentic premium partners only.
              </p>
            </div>

            {/* 2. Responsive Cards Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white rounded-none border border-border-luxury overflow-hidden luxury-shadow hover:border-gold-luxury/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-bg-luxury relative">
                    <img
                      src={srv.gallery[0]}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                    <h3 className="absolute bottom-4 left-6 font-serif text-xl md:text-2xl font-bold text-white tracking-tight">
                      {srv.title}
                    </h3>
                  </div>

                  <div className="p-6 md:p-8 space-y-4">
                    <p className="text-muted-luxury text-xs md:text-sm leading-relaxed">
                      {srv.shortDescription}
                    </p>

                    <div className="pt-4 border-t border-border-luxury/50 flex justify-between items-center">
                      <span className="font-mono text-[10px] text-gold-luxury uppercase tracking-wider">
                        Turnkey Warranty Included
                      </span>
                      <button
                        onClick={() => handleSelectService(srv.id)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-text-luxury hover:text-gold-luxury font-bold cursor-pointer transition-colors"
                      >
                        <span>Explore Capabilities</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Core Benefits Panel */}
            <div className="bg-card-luxury border-y border-border-luxury py-20 px-6">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-2 max-w-xl mx-auto">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
                    The REALSPACE Standard
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl text-text-luxury tracking-tight">
                    Engineered Beyond Simple Decoration
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="h-8 w-8 text-gold-luxury"><Layers className="h-full w-full" /></div>
                    <h3 className="font-serif text-lg font-bold">10-Year Warranty</h3>
                    <p className="text-xs text-muted-luxury leading-relaxed font-sans">
                      We offer a 10-year warranty on all structural cabinetry and woodwork, ensuring complete peace of mind.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 w-8 text-gold-luxury"><Sparkles className="h-full w-full" /></div>
                    <h3 className="font-serif text-lg font-bold">Milimeter Precision</h3>
                    <p className="text-xs text-muted-luxury leading-relaxed font-sans">
                      Off-site manufacturing at our factory eliminates carpentry errors and guarantees millimeter accuracy.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 w-8 text-gold-luxury"><BadgeInfo className="h-full w-full" /></div>
                    <h3 className="font-serif text-lg font-bold">Vastu Integrated</h3>
                    <p className="text-xs text-muted-luxury leading-relaxed font-sans">
                      We incorporate traditional spatial principles layout directly into premium modern styles seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Local Services FAQ */}
            <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
              <h2 className="font-serif text-2xl md:text-3xl text-center tracking-tight">
                Our Sourcing & Quality FAQ
              </h2>
              <div className="space-y-4">
                {localFAQs.map((faq, index) => (
                  <div key={index} className="p-5 bg-white border border-border-luxury rounded-none luxury-shadow space-y-2">
                    <h4 className="font-serif text-sm md:text-base font-bold text-text-luxury flex gap-2">
                      <span className="text-gold-luxury">Q.</span>
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-xs text-muted-luxury pl-6 leading-relaxed font-sans">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          // === INDIVIDUAL DETAIL VIEW ===
          <motion.div
            key="detail-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto px-6 py-10 space-y-12"
          >
            {/* Back to all services */}
            <button
              onClick={() => handleSelectService(null)}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-luxury hover:text-gold-luxury font-bold cursor-pointer transition-colors py-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Services</span>
            </button>

            {/* Title Block */}
            <div className="space-y-4 border-b border-border-luxury pb-8">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-gold-luxury font-bold block">
                Bespoke Solutions Detail
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text-luxury">
                {activeService.title}
              </h1>
              <p className="text-sm md:text-base text-muted-luxury leading-relaxed font-sans max-w-3xl">
                {activeService.longDescription}
              </p>
            </div>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeService.gallery.map((imgUrl, i) => (
                <div key={i} className="aspect-[16/10] overflow-hidden rounded-none border border-border-luxury luxury-shadow">
                  <img
                    src={imgUrl}
                    alt={`${activeService.title} suite view ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              {/* Process steps (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-serif text-xl md:text-2xl text-text-luxury">
                  Millimeter-Perfect Project Journey
                </h2>
                <div className="h-0.5 w-12 bg-gold-luxury mb-4" />
                <div className="relative border-l border-border-luxury pl-6 space-y-8 ml-3">
                  {activeService.processSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-white border-2 border-gold-luxury flex items-center justify-center">
                        <span className="text-[9px] font-mono font-bold text-gold-luxury">{idx + 1}</span>
                      </div>
                      <p className="text-xs md:text-sm font-sans text-muted-luxury leading-relaxed font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits (5 cols) */}
              <div className="lg:col-span-5 bg-card-luxury p-6 md:p-8 rounded-none border border-border-luxury space-y-6 h-fit luxury-shadow">
                <h3 className="font-serif text-lg font-bold text-text-luxury">
                  Unique Benefits Sourced
                </h3>
                <ul className="space-y-4">
                  {activeService.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3 items-start text-xs md:text-sm text-text-luxury font-sans leading-relaxed">
                      <div className="h-5 w-5 bg-gold-luxury/10 text-gold-luxury rounded-none flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick action consultation */}
            <div className="bg-[#1C1C1C] text-white p-8 rounded-none flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <h4 className="font-serif text-xl md:text-2xl text-white">
                  Schedule Your Site Measurement Visit
                </h4>
                <p className="text-xs text-[#A29E9A] max-w-md">
                  Let Vijay Chawan and team analyze your physical room layout in Thane. First site mapping is completely free of cost.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-gold-luxury hover:bg-gold-hover-luxury text-white font-mono text-xs uppercase tracking-widest py-3 px-6 rounded-none shrink-0 transition-colors"
              >
                Book Visit Slot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

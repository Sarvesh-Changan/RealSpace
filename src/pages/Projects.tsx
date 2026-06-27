import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PROJECTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Calendar, MapPin, Landmark, ArrowRight, X, Sparkles, Sliders, Palette, Hammer, Box } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

type CategoryFilter = 'All' | 'Residential' | 'Kitchen' | 'Specialty' | 'Commercial';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Parse project ID and Category filters from query parameters for robust linking
  useEffect(() => {
    const projId = searchParams.get('id');
    const cat = searchParams.get('category') as CategoryFilter;
    
    if (projId) {
      setActiveProjectId(projId);
    } else {
      setActiveProjectId(null);
    }

    if (cat && ['All', 'Residential', 'Kitchen', 'Specialty', 'Commercial'].includes(cat)) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  const handleSelectCategory = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setSearchParams(cat === 'All' ? {} : { category: cat });
  };

  const handleSelectProject = (id: string | null) => {
    if (id) {
      const currentCat = selectedCategory !== 'All' ? { category: selectedCategory } : {};
      setSearchParams({ ...currentCat, id });
    } else {
      setSearchParams(selectedCategory !== 'All' ? { category: selectedCategory } : {});
    }
  };

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const activeProject = PROJECTS.find(p => p.id === activeProjectId);

  return (
    <div id="projects-page-root" className="bg-bg-luxury font-sans min-h-screen pt-24">
      {/* 1. Page Header */}
      <section className="py-12 md:py-16 px-6 max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-luxury font-bold block">
          Bespoke Realizations
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text-luxury">
          Our Masonry Portfolio
        </h1>
        <p className="text-sm text-muted-luxury max-w-xl mx-auto leading-relaxed">
          Review our completed residential, kitchen, commercial, and custom lounge spaces in Thane. Filter by category to self-identify.
        </p>
      </section>

      {/* 2. Category Filters */}
      <section className="max-w-7xl mx-auto px-6 pb-8 flex flex-wrap gap-2 md:gap-4 items-center justify-center border-b border-border-luxury/75">
        <div className="flex items-center gap-1.5 text-muted-luxury font-mono text-xs uppercase tracking-wider mr-2">
          <Filter className="h-3.5 w-3.5 text-gold-luxury" />
          <span>Category:</span>
        </div>
        {(['All', 'Residential', 'Kitchen', 'Specialty', 'Commercial'] as CategoryFilter[]).map((cat) => (
          <button
            key={cat}
            onClick={() => handleSelectCategory(cat)}
            className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider rounded-none border transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                : 'bg-white text-muted-luxury border-border-luxury hover:border-gold-luxury/45'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* 3. Masonry Portfolio Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-none overflow-hidden border border-border-luxury luxury-shadow group hover:border-gold-luxury/30 transition-all duration-300 flex flex-col"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-luxury cursor-pointer" onClick={() => handleSelectProject(proj.id)}>
                  <img
                    src={proj.mainImage}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 bg-[#1C1C1C]/90 px-3 py-1 rounded-none text-[9px] font-mono uppercase tracking-widest text-white border border-[#2E2B28]">
                    {proj.category}
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-gold-luxury font-mono text-[10px] uppercase tracking-wider">
                      <MapPin className="h-3 w-3" />
                      <span>{proj.location}</span>
                    </div>
                    <h3
                      onClick={() => handleSelectProject(proj.id)}
                      className="font-serif text-xl md:text-2xl font-bold text-text-luxury group-hover:text-gold-luxury transition-colors cursor-pointer"
                    >
                      {proj.title}
                    </h3>
                    <p className="text-xs text-muted-luxury leading-relaxed font-sans line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-luxury/50 flex justify-between items-center text-[10px] font-mono text-muted-luxury">
                    <div className="flex gap-4">
                      <span>Area: {proj.area}</span>
                      <span>Budget: {proj.budget}</span>
                    </div>
                    <button
                      onClick={() => handleSelectProject(proj.id)}
                      className="text-text-luxury font-bold uppercase tracking-widest hover:text-gold-luxury flex items-center gap-1 cursor-pointer"
                    >
                      <span>View details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Full Page Overlay Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            id="project-detail-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md overflow-y-auto p-4 md:p-10 flex justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-bg-luxury w-full max-w-5xl rounded-none overflow-hidden relative border border-border-luxury my-auto luxury-shadow"
            >
              {/* Close Floating Button */}
              <button
                onClick={() => handleSelectProject(null)}
                className="absolute top-4 right-4 z-40 bg-white/95 text-text-luxury p-2.5 rounded-none hover:bg-gold-luxury hover:text-white border border-border-luxury shadow-lg cursor-pointer transition-colors"
                aria-label="Close Project Details"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Main Banner Hero */}
              <div className="relative h-[250px] md:h-[420px] overflow-hidden bg-[#1C1C1C]">
                <img
                  src={activeProject.mainImage}
                  alt={activeProject.title}
                  className="w-full h-full object-cover opacity-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:left-10 text-white space-y-2 max-w-2xl">
                  <span className="bg-gold-luxury px-3 py-1 rounded-none text-[9px] font-mono uppercase tracking-widest text-white">
                    {activeProject.category} Suite
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold tracking-tight">
                    {activeProject.title}
                  </h2>
                  <p className="font-mono text-[10px] md:text-xs text-gold-luxury uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{activeProject.location}</span>
                  </p>
                </div>
              </div>

              {/* Core Project Info Metadata Grid */}
              <div className="bg-card-luxury border-b border-border-luxury p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-luxury block">Client</span>
                  <span className="font-serif text-sm font-bold text-text-luxury flex justify-center items-center gap-1">
                    <Landmark className="h-4 w-4 text-gold-luxury" />
                    <span>{activeProject.client}</span>
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-luxury block">Carpet Area</span>
                  <span className="font-serif text-sm font-bold text-text-luxury flex justify-center items-center gap-1">
                    <Sliders className="h-4 w-4 text-gold-luxury" />
                    <span>{activeProject.area}</span>
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-luxury block">Budget Spent</span>
                  <span className="font-serif text-sm font-bold text-text-luxury flex justify-center items-center gap-1">
                    <Box className="h-4 w-4 text-gold-luxury" />
                    <span>{activeProject.budget}</span>
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-luxury block">Delivery Year</span>
                  <span className="font-serif text-sm font-bold text-text-luxury flex justify-center items-center gap-1">
                    <Calendar className="h-4 w-4 text-gold-luxury" />
                    <span>{activeProject.year}</span>
                  </span>
                </div>
              </div>

              {/* Narrative description */}
              <div className="p-6 md:p-10 space-y-10">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl text-text-luxury">
                    The Design Story
                  </h3>
                  <div className="h-0.5 w-12 bg-gold-luxury" />
                  <p className="text-muted-luxury text-sm md:text-base leading-relaxed font-sans">
                    {activeProject.description}
                  </p>
                </div>

                {/* Sourced Material Specs & Color Palette */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Materials */}
                  <div className="bg-white p-6 rounded-none border border-border-luxury luxury-shadow space-y-4">
                    <h4 className="font-serif text-lg font-bold text-text-luxury flex items-center gap-2">
                      <Hammer className="h-5 w-5 text-gold-luxury" />
                      <span>Sourced Material Specifications</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs text-muted-luxury font-sans">
                      {activeProject.materials.map((mat, i) => (
                        <li key={i} className="flex gap-2 items-center">
                          <div className="h-1.5 w-1.5 bg-gold-luxury rounded-none" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colors */}
                  <div className="bg-white p-6 rounded-none border border-border-luxury luxury-shadow space-y-4">
                    <h4 className="font-serif text-lg font-bold text-text-luxury flex items-center gap-2">
                      <Palette className="h-5 w-5 text-gold-luxury" />
                      <span>Color Palette Swatches</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {activeProject.colorPalette.map((col, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2 bg-bg-luxury rounded-none border border-border-luxury/50">
                          <div
                            className="h-8 w-8 rounded-none shadow-sm border border-black/10"
                            style={{ backgroundColor: col.hex }}
                          />
                          <div className="flex flex-col">
                            <span className="font-serif text-xs font-bold text-text-luxury leading-none">{col.name}</span>
                            <span className="font-mono text-[9px] text-muted-luxury mt-1">{col.hex}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Before After Comparison Slider */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-serif text-lg md:text-xl text-text-luxury">
                    Before / After Spatial Comparison
                  </h3>
                  <BeforeAfterSlider
                    beforeImage={activeProject.beforeImage}
                    afterImage={activeProject.afterImage}
                    heightClass="h-[280px] md:h-[450px]"
                  />
                </div>

                {/* Project Timeline steps */}
                <div className="space-y-6 pt-4">
                  {/* Execution Timeline & Milestones */}
                  <h3 className="font-serif text-lg md:text-xl text-text-luxury">
                    Execution Timeline & Milestones
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {activeProject.timeline.map((step, i) => (
                      <div key={i} className="bg-card-luxury/50 p-4 rounded-none border border-border-luxury/60 space-y-2 text-left">
                        <span className="font-mono text-[10px] text-gold-luxury bg-white px-2 py-0.5 rounded-none border border-border-luxury inline-block font-semibold">
                          {step.phase}
                        </span>
                        <h5 className="font-serif text-sm font-bold text-text-luxury mt-1">{step.title}</h5>
                        <p className="text-[11px] text-muted-luxury font-sans leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Gallery Photos */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-serif text-lg md:text-xl text-text-luxury">
                    Additional Suite Galleries
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activeProject.gallery.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-none overflow-hidden border border-border-luxury relative group cursor-pointer">
                        <img
                          src={img}
                          alt="additional angle"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-104"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close at bottom */}
              <div className="p-6 bg-card-luxury border-t border-border-luxury text-center">
                <button
                  onClick={() => handleSelectProject(null)}
                  className="bg-[#1C1C1C] hover:bg-gold-luxury text-white text-xs uppercase tracking-widest font-mono py-2.5 px-8 rounded-none transition-colors cursor-pointer"
                >
                  Close Suite Blueprint
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

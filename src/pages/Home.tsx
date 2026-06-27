import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Heart, User, Sparkles, Star, ChevronDown, Check, Eye } from 'lucide-react';
import { SERVICES, PROJECTS, REVIEWS, FAQS } from '../data';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TransformationSequence from '../components/TransformationSequence';
import ConsultationForm from '../components/ConsultationForm';

export default function Home() {
  const stats = [
    { value: '12+', label: 'Years Design Experience' },
    { value: '150+', label: 'Luxury Projects Delivered' },
    { value: '4.5★', label: 'Verified Justdial Rating' },
    { value: '100%', label: 'Turnkey Responsibility' }
  ];

  const whyChooseUs = [
    {
      icon: Compass,
      title: 'Space-First Design Philosophy',
      description: 'We do not paste templated modular kits onto your room. We map physical realities — beam drop positions, window alignments, column offsets — to optimize your exact carpet layout.'
    },
    {
      icon: User,
      title: 'Direct Access to Vijay Chawan',
      description: 'Avoid corporate chain sales reps. You collaborate directly with our Principal Designer Vijay Chawan, ensuring absolute accountability from initial draft to final polish.'
    },
    {
      icon: ShieldCheck,
      title: 'Moisture-Engineered Cabinetry',
      description: 'Specifically built for Thane’s climate. We use 100% Boiling Water Resistant (BWR) marine plywood to prevent laminate cracking, wood swelling, and cabinetry warping.'
    },
    {
      icon: Sparkles,
      title: 'Flawless 3D Visualization Lock-In',
      description: 'What you see is what you get. You approve hyper-realistic 3D representations of your actual flat before a single carpenter cuts wood. Zero unexpected budget surprises.'
    }
  ];

  return (
    <div id="home-page-root" className="bg-bg-luxury font-sans min-h-screen">
      
      {/* 1. Hero Section */}
      <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90"
            alt="Luxury modern living room with custom veneer ceilings"
            className="w-full h-full object-cover opacity-35 scale-105 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1C1C1C]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold-luxury font-semibold block">
              Space-First Interior Design • Thane
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Designs Born From <br />
              <span className="text-gold-luxury italic font-light">Your Space’s Reality</span>
            </h1>
            <p className="text-sm md:text-lg text-[#D6D1CA] font-sans max-w-2xl mx-auto leading-relaxed">
              We design luxury interiors around your physical room constraints — beams, columns, and budgets. Personal attention from Vijay Chawan. Exceptional turnkey delivery.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                id="hero-cta-consultation"
                to="/contact"
                className="w-full sm:w-auto bg-gold-luxury hover:bg-gold-hover-luxury text-white py-4 px-8 rounded-none font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg"
              >
                Book Free Consultation
              </Link>
              <Link
                id="hero-cta-portfolio"
                to="/projects"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white py-4 px-8 rounded-none font-mono text-xs uppercase tracking-widest transition-all duration-300"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>

          {/* Scrolling Down Arrow Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-5 w-5 text-[#A29E9A]" />
          </div>
        </div>
      </section>

      {/* 2. Hero Stats Bar */}
      <section id="stats-section" className="bg-card-luxury border-b border-border-luxury py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-serif text-3xl md:text-5xl font-bold text-text-luxury">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-luxury">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Space-Constraint-Aware Introduction */}
      <section id="intro-philosophy-section" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
              The REALSPACE Edge
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text-luxury tracking-tight leading-tight">
              Design That Begins Where Your Space Ends
            </h2>
            <div className="h-0.5 w-16 bg-gold-luxury" />
            <p className="text-muted-luxury text-sm md:text-base leading-relaxed font-sans">
              At REALSPACE, every project starts with actual room limits — not a generic pinterest board. Founder Vijay Chawan and our master builders survey your room's concrete constraints — odd columns, high beams, window lines — before a single material choice is made.
            </p>
            <p className="text-muted-luxury text-sm md:text-base leading-relaxed font-sans">
              The result? Multi-functional luxury layouts that expand your apartment's usable carpet area by up to 22%, saving money and preventing structural hazards.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-luxury hover:text-gold-luxury font-bold transition-colors group"
              >
                <span>Read Vijay’s Story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-none overflow-hidden aspect-[4/5] border border-border-luxury relative group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
                    alt="Space optimized sleek kitchen layout"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-gold-luxury">Thane West</p>
                    <p className="font-serif text-base font-semibold">Modular Kitchen Space</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 md:mt-8">
                <div className="rounded-none overflow-hidden aspect-[4/5] border border-border-luxury relative group">
                  <img
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80"
                    alt="Master bedroom with elegant wooden headboard panels"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-gold-luxury">Hiranandani Estate</p>
                    <p className="font-serif text-base font-semibold">Contemporary Bedroom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Preview Grid */}
      <section id="services-preview-section" className="bg-card-luxury py-20 px-6 border-y border-border-luxury">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
              Bespoke Capabilities
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text-luxury tracking-tight">
              Our Core Architecture Services
            </h2>
            <p className="text-muted-luxury text-xs md:text-sm">
              From individual room customization to structural turnkey home design. We manufacture off-site at our Thane workshop to guarantee perfect assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-none border border-border-luxury flex flex-col justify-between hover:border-gold-luxury/50 luxury-shadow transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-bg-luxury border border-border-luxury text-gold-luxury rounded-none flex items-center justify-center font-bold">
                    {service.title.substring(0, 1)}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-luxury tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-luxury font-sans leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-border-luxury/50 mt-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-text-luxury hover:text-gold-luxury transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Apple-style Room Transformation Scrubber Section */}
      <section id="transformation-scrubber-section" className="py-20 px-6 max-w-7xl mx-auto">
        <TransformationSequence />
      </section>

      {/* 6. Featured Projects Portfolio Slider */}
      <section id="featured-projects-section" className="bg-bg-luxury py-20 px-6 border-t border-border-luxury">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
                Luxury Realizations
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-text-luxury tracking-tight">
                Our Signature Realizations
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-luxury hover:text-gold-luxury font-bold transition-colors group mt-4 md:mt-0"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-none overflow-hidden border border-border-luxury group hover:border-gold-luxury/40 luxury-shadow transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-none text-[10px] font-mono uppercase tracking-wider text-text-luxury border border-border-luxury">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="font-mono text-[10px] text-gold-luxury uppercase tracking-wider">
                    {project.location}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-text-luxury group-hover:text-gold-luxury transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-luxury leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-border-luxury flex justify-between items-center text-[11px] font-mono text-muted-luxury">
                    <span>Year: {project.year}</span>
                    <Link
                      to={`/projects?id=${project.id}`}
                      className="text-text-luxury font-bold hover:text-gold-luxury flex items-center gap-1"
                    >
                      <span>Explore Suite</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us / Differentiators Panel */}
      <section id="why-choose-us-section" className="bg-[#1C1C1C] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold-luxury block">
              The REALSPACE Promise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
              Why Thane Flat Owners Choose Us
            </h2>
            <p className="text-xs text-[#A29E9A]">
              We skip generic design catalog trends and instead focus heavily on structural longevity and spatial comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyChooseUs.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-none bg-[#2E2B28] border border-gold-luxury/20 flex items-center justify-center text-gold-luxury shrink-0">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-medium text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#A29E9A] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Before / After Interactive Slider Section */}
      <section id="before-after-slider-section" className="py-20 px-6 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
            Visual Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text-luxury tracking-tight">
            Drag to Reveal Transformation
          </h2>
          <p className="text-muted-luxury text-xs md:text-sm max-w-md mx-auto">
            Compare a standard under-construction flat shell in Majiwada with our completed luxury walnut & brass living room.
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
        />
      </section>

      {/* 9. Testimonials & Google Reviews */}
      <section id="testimonials-section" className="bg-card-luxury py-20 px-6 border-y border-border-luxury">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
              Client Appreciations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text-luxury tracking-tight">
              Testimonials & Verified Justdial Reviews
            </h2>
            <p className="text-xs text-muted-luxury">
              Don’t take our word for it. Review testimonials from verified new flat owners in Lodha, Hiranandani, and Godrej complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-none border border-border-luxury flex flex-col justify-between luxury-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-gold-luxury tracking-wider uppercase font-semibold">
                      {review.source} Verified
                    </span>
                    <div className="flex gap-0.5 text-gold-luxury">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#3A3835] text-sm md:text-base italic font-serif leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-border-luxury/50 mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-text-luxury">
                      {review.author}
                    </h4>
                    <p className="text-[10px] text-muted-luxury font-sans uppercase tracking-wider mt-0.5">
                      {review.projectType}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-[#A29E9A]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section id="faq-section" className="py-20 px-6 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text-luxury tracking-tight">
            Frequently Asked Inquiries
          </h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-border-luxury rounded-none luxury-shadow space-y-3"
            >
              <h3 className="font-serif text-base md:text-lg font-bold text-text-luxury flex gap-2 items-start">
                <span className="text-gold-luxury font-mono text-sm mt-0.5">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs md:text-sm text-muted-luxury pl-6 font-sans leading-relaxed border-l border-gold-luxury/20">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Final Conversion CTA Card Section */}
      <section id="final-cta-form-section" className="py-16 px-6 max-w-5xl mx-auto">
        <ConsultationForm />
      </section>

    </div>
  );
}

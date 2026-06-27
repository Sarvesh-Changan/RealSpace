import { motion } from 'motion/react';
import { Compass, Sparkles, ShieldCheck, Star, Users, Briefcase, Award } from 'lucide-react';
import { TEAM } from '../data';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: Compass,
      title: 'Architectural Sincerity',
      description: 'We never mask structural problems with flimsy gypsum panels. We remodel layouts with structural integrity first, ensuring maximum load safety and legal permissions.'
    },
    {
      icon: Award,
      title: 'Workshop Precision',
      description: 'By cutting, edging, and sealing our modular woodwork off-site at our Thane industrial unit, we guarantee millimeter accuracy and keep your apartment 100% dust-free.'
    },
    {
      icon: ShieldCheck,
      title: 'Honest Material Sourcing',
      description: 'We grant a strict 10-year warranty because we only use Austin BWR ply, Merino laminates, and Blum/Hettich hinges. We invite clients for random material checks anytime.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'The Genesis', desc: 'Vijay Chawan launched a local design consultancy in Thane after 5 years of working with premium Mumbai architecture firms.' },
    { year: '2018', title: '50 Homes Delivered', desc: 'Established deep local expertise in Majiwada, Ghodbunder, and Panchpakhadi developments, perfecting compact layouts.' },
    { year: '2021', title: 'Workshop Expansion', desc: 'Built a specialized 2,000 sq ft off-site modular furniture fabrication shop in Thane, reducing on-site carpentry delays.' },
    { year: '2026', title: '150+ Sanctuary Homes', desc: 'Recognized as Thane’s premier "space-first" design studio, focusing purely on client-centric bespoke turnkey deliveries.' }
  ];

  return (
    <div id="about-page-root" className="bg-bg-luxury font-sans min-h-screen pt-24">
      {/* 1. Header Hero Banner */}
      <section className="py-16 md:py-24 px-6 border-b border-border-luxury relative overflow-hidden bg-card-luxury">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top,rgba(200,169,106,0.15),transparent_75%)]" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-luxury font-bold block">
            Meet REALSPACE Interiors
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-text-luxury leading-tight">
            We Design Around <br />
            <span className="text-gold-luxury italic font-light">Your Space’s Reality</span>
          </h1>
          <p className="text-sm md:text-base text-muted-luxury max-w-xl mx-auto leading-relaxed">
            Founded by Vijay Chawan, REALSPACE is a boutique, turnkey design studio engineered specifically to solve Thane’s apartment layout constraints.
          </p>
        </div>
      </section>

      {/* 2. Founder Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-card-luxury -z-10 rounded-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-luxury/10 -z-10 rounded-none" />
            <div className="rounded-none overflow-hidden aspect-[4/5] border border-border-luxury shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&h=875&q=80"
                alt="Vijay Chawan - Founder of REALSPACE Interiors"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Float Badge */}
            <div className="absolute bottom-6 left-6 bg-white py-3 px-5 rounded-none luxury-shadow border border-border-luxury flex items-center gap-3">
              <span className="font-serif text-3xl font-bold text-gold-luxury">12+</span>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-luxury">
                Years of local<br />Thane Expertise
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
              Founder’s Vision
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-text-luxury tracking-tight">
              “Your Home Starts With Your Space, Not A Mood Board.”
            </h2>
            <div className="h-0.5 w-16 bg-gold-luxury" />

            <div className="space-y-4 text-muted-luxury text-sm md:text-base leading-relaxed">
              <p>
                “When I started REALSPACE in 2014, I noticed a severe gap in how apartments in Thane were being furnished. Corporate design chains would force standardized pre-built wardrobes and modular units onto homes, completely ignoring structural columns, ventilation duct orientations, or Vastu guidelines.”
              </p>
              <p>
                “This lazy template-driven method leaves massive awkward corners, traps moisture, and eats up precious carpet area. I wanted to establish an architectural design studio that bends furniture and layouts around physical rooms, creating bespoke contemporary spaces that feel airy, spacious, and premium.”
              </p>
              <p>
                “At REALSPACE, we treat every flat as an independent architectural canvas. We own our fabrication workshop, specify materials with 100% transparency, and promise a turnkey execution that leaves our clients completely stress-free.”
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-text-luxury">Vijay Chawan</span>
                <span className="font-mono text-[10px] text-muted-luxury uppercase tracking-wider">Founder & Principal Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Values */}
      <section className="bg-card-luxury border-y border-border-luxury py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
              Core Ethics
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-text-luxury tracking-tight">
              The Principles We Live By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-none border border-border-luxury space-y-4 luxury-shadow">
                  <div className="h-10 w-10 bg-bg-luxury border border-border-luxury rounded-none flex items-center justify-center text-gold-luxury">
                    <ValIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-luxury">
                    {val.title}
                  </h3>
                  <p className="text-xs text-muted-luxury leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Timeline Milestones */}
      <section className="py-20 px-6 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
            Our Timeline
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-text-luxury tracking-tight">
            Our Evolution & Journey
          </h2>
        </div>

        <div className="relative border-l border-border-luxury pl-6 ml-4 space-y-10">
          {milestones.map((mile, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-gold-luxury flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-gold-luxury" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-gold-luxury bg-card-luxury px-2 py-0.5 rounded border border-border-luxury inline-block">
                  {mile.year}
                </span>
                <h3 className="font-serif text-lg font-bold text-text-luxury mt-1">
                  {mile.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-luxury font-sans leading-relaxed">
                  {mile.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Meets The Team */}
      <section className="bg-card-luxury border-t border-border-luxury py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
              The Masterminds
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-text-luxury tracking-tight">
              Meet Our Designers & Crafters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-none overflow-hidden border border-border-luxury group hover:border-gold-luxury/30 transition-all duration-300 luxury-shadow">
                <div className="aspect-[4/5] overflow-hidden bg-bg-luxury">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-text-luxury">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[10px] text-gold-luxury uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-luxury leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Office / Workshop Gallery */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-luxury block">
            Inside the Workshop
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-text-luxury tracking-tight">
            Our Sourcing & Manufacturing Unit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-none overflow-hidden aspect-video border border-border-luxury relative group">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="Off-site carpentry workshop"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/45 flex items-end p-4">
              <span className="text-white font-mono text-xs uppercase tracking-widest">Off-site modular fabrication</span>
            </div>
          </div>

          <div className="rounded-none overflow-hidden aspect-video border border-border-luxury relative group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Majiwada Studio Meeting Space"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/45 flex items-end p-4">
              <span className="text-white font-mono text-xs uppercase tracking-widest">Majiwada Studio Meeting Space</span>
            </div>
          </div>

          <div className="rounded-none overflow-hidden aspect-video border border-border-luxury relative group md:col-span-2 lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              alt="Specialized material selection desk"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/45 flex items-end p-4">
              <span className="text-white font-mono text-xs uppercase tracking-widest">Sourcing premium wood materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Block */}
      <section className="bg-bg-luxury border-t border-border-luxury py-16 px-6 text-center space-y-6">
        <h3 className="font-serif text-2xl md:text-3xl text-text-luxury">
          Want Vijay Chawan to visit your flat?
        </h3>
        <p className="text-sm text-muted-luxury max-w-md mx-auto">
          We offer a complimentary first layout consultation visit within Thane. Let us mapping your beams together.
        </p>
        <Link
          to="/contact"
          className="inline-flex bg-[#1C1C1C] hover:bg-gold-luxury text-white py-3.5 px-8 rounded-none font-mono text-xs uppercase tracking-widest transition-colors duration-300"
        >
          Book Consultation Now
        </Link>
      </section>
    </div>
  );
}

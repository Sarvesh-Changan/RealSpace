import { motion } from 'motion/react';
import { Compass, Phone, Mail, MapPin, Clock, MessageSquare, ShieldAlert, ArrowUpRight } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

export default function Contact() {
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=919869211777&text=Hello%20REALSPACE%20Interiors%2C%20I%20would%20like%20to%20book%20a%20free%20design%20consultation%20for%20my%20Thane%20flat.';

  const contactCards = [
    {
      icon: Phone,
      title: 'Click To Call',
      detail: '+91 98692 11777',
      link: 'tel:+919869211777',
      linkText: 'Initiate voice call'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Chat',
      detail: 'Instant Chat Available',
      link: whatsappUrl,
      linkText: 'Launch WhatsApp'
    },
    {
      icon: Mail,
      title: 'Email Studio',
      detail: 'realspaceinteriors@hotmail.com',
      link: 'mailto:realspaceinteriors@hotmail.com',
      linkText: 'Compose mail'
    }
  ];

  return (
    <div id="contact-page-root" className="bg-bg-luxury font-sans min-h-screen pt-24">
      {/* 1. Page Header */}
      <section className="py-12 md:py-16 px-6 max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold-luxury font-bold block">
          Establish Contact
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text-luxury">
          Let’s Co-Design Your Space
        </h1>
        <p className="text-sm text-muted-luxury max-w-xl mx-auto leading-relaxed">
          Reach out for a complimentary site mapping visit. Vijay Chawan maps out your columns, beams, and budget on-site.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick cards */}
            <div className="space-y-4">
              {contactCards.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <a
                    key={idx}
                    href={card.link}
                    target={card.icon === MessageSquare ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex gap-4 items-center p-5 bg-white rounded-none border border-border-luxury hover:border-gold-luxury/30 luxury-shadow transition-colors group block"
                  >
                    <div className="h-10 w-10 rounded-none bg-bg-luxury border border-border-luxury text-gold-luxury flex items-center justify-center shrink-0">
                      <CardIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-grow space-y-1">
                      <h4 className="font-serif text-base font-bold text-text-luxury group-hover:text-gold-luxury transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-muted-luxury font-mono">{card.detail}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#A29E9A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>

            {/* Address & Hours */}
            <div className="bg-card-luxury p-6 rounded-none border border-border-luxury space-y-5 luxury-shadow">
              <h4 className="font-serif text-lg font-bold text-text-luxury">
                Studio Details
              </h4>
              
              <div className="space-y-4 text-xs md:text-sm text-muted-luxury font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold-luxury shrink-0" />
                  <p className="leading-relaxed">
                    W5-1717, Lodha Crown Quality Homes, Near Majiwada Highway, Majiwada, Thane — 400608, Maharashtra, India.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gold-luxury shrink-0" />
                  <div>
                    <p className="font-semibold text-text-luxury">Business Hours:</p>
                    <p className="mt-1">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    <p className="text-red-400 font-mono text-xs mt-1">(Sunday Closed for site visits)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column (7 cols) */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 3. Real Google Maps Embed Location */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-4">
        <h3 className="font-serif text-xl font-bold text-text-luxury">
          Our Thane Studio on Map
        </h3>
        <div className="rounded-none overflow-hidden border border-border-luxury h-[350px] md:h-[450px] luxury-shadow relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8966144883906!2d72.98144211151624!3d19.21063628195821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93b82143ea9%3A0xbc76839bb00f07df!2sLodha%20Crown%20Quality%20Homes!5e0!3m2!1sen!2sin!4v1719500000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="REALSPACE Interiors Majiwada Studio Map"
          />
        </div>
      </section>
    </div>
  );
}

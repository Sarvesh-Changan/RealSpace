import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="luxury-footer" className="bg-[#1C1C1C] text-[#F8F5F1] pt-16 pb-8 border-t border-[#2E2B28] relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.02)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2E2B28]">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-gold-luxury" />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] font-bold text-white uppercase leading-none">
                  REAL<span className="text-gold-luxury">SPACE</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-luxury leading-none mt-1">
                  INTERIORS • THANE
                </span>
              </div>
            </div>

            <p className="text-[#A29E9A] text-sm leading-relaxed font-sans max-w-sm">
              We design around your physical space realities, mapping every beam, column, and window line. Elevating your lifestyle with timeless contemporary aesthetics across Thane.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/realspace_27"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#2E2B28] hover:bg-gold-luxury text-white flex items-center justify-center transition-colors"
                title="Instagram Link"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com/realspaceinteriorsindia"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#2E2B28] hover:bg-gold-luxury text-white flex items-center justify-center transition-colors"
                title="Facebook Link"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://youtube.com/@Realspaceinteriorsindia"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#2E2B28] hover:bg-gold-luxury text-white flex items-center justify-center transition-colors"
                title="YouTube Link"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-luxury font-semibold">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-sm text-[#A29E9A] font-sans">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home Dashboard</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Founder Story & Team</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Our Bespoke Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Masonry Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-luxury font-semibold">
              Thane Studio Location
            </h4>
            <ul className="space-y-3 text-sm text-[#A29E9A] font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-luxury shrink-0 mt-0.5" />
                <span>W5-1717, Lodha Crown Quality Homes, Near Majiwada Highway, Majiwada, Thane — 400608, MH</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-luxury" />
                <a href="tel:+919869211177" className="hover:text-white transition-colors">+91 98692 11777</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-luxury" />
                <a href="mailto:realspaceinteriors@hotmail.com" className="hover:text-white transition-colors">realspaceinteriors@hotmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold-luxury" />
                <span>Mon - Sat: 10:00 AM - 7:00 PM <span className="text-red-400 font-mono text-xs ml-1">(Sunday Closed)</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6D6A66] font-mono">
          <p>© {currentYear} REALSPACE Interiors. All rights reserved. Sole Proprietorship (Vijay Chawan).</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-gold-luxury uppercase tracking-wider font-bold">Thane’s Finest</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

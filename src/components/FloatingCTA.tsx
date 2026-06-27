import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCTA() {
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=919869211777&text=Hello%20REALSPACE%20Interiors%2C%20I%20would%20like%20to%20book%20a%20free%20design%20consultation%20for%20my%20Thane%20flat.';

  return (
    <div id="floating-cta-container" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        id="floating-call-btn"
        href="tel:+919869211777"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1C1C] text-white shadow-xl hover:bg-gold-luxury border border-border-luxury transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        title="Call REALSPACE Interiors"
      >
        <Phone className="h-5 w-5" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        title="Chat with Us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-white text-[#25D366]" />
      </motion.a>
    </div>
  );
}

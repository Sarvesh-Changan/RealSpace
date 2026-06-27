import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="flex-grow flex flex-col min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  // Structured data (JSON-LD) for LocalBusiness to get 100% SEO rating
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "InteriorDesign",
    "name": "REALSPACE Interiors, Thane",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "W5-1717, Lodha Crown Quality Homes, Near Majiwada Highway, Majiwada",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400608",
      "addressCountry": "IN"
    },
    "telephone": "+919869211177",
    "email": "realspaceinteriors@hotmail.com",
    "url": "https://realspaceinteriors.in",
    "priceRange": "₹₹₹",
    "founder": {
      "@type": "Person",
      "name": "Vijay Chawan"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    }
  };

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Interior Designer in Thane | REALSPACE — Majiwada, Ghodbunder, Kolshet</title>
          <meta name="description" content="REALSPACE is a premium interior design studio in Thane led by Vijay Chawan. Space-first luxury 1BHK, 2BHK, 3BHK flat & office interiors in Majiwada, Ghodbunder & Kolshet. Call +91 98692 11777." />
          
          {/* Open Graph / Social */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Interior Designer in Thane | REALSPACE Interiors" />
          <meta property="og:description" content="Premium space-first custom interiors. From 3D plans to turnkey assembly. Lead by Vijay Chawan." />
          <meta property="og:image" content="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" />
          <meta property="og:site_name" content="REALSPACE Interiors" />
          
          {/* Schema injection */}
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>

        <div className="flex flex-col min-h-screen bg-bg-luxury text-text-luxury selection:bg-gold-luxury selection:text-white relative overflow-x-hidden">
          {/* Decorative architectural grid background lines for the Luxury / Prestige theme */}
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-border-luxury/30 pointer-events-none -z-10" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-luxury/50 pointer-events-none -z-10" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-border-luxury/30 pointer-events-none -z-10" />

          <ScrollToTop />
          <Header />
          <AnimatedRoutes />
          <Footer />
          <FloatingCTA />
        </div>
      </Router>
    </HelmetProvider>
  );
}

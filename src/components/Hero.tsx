import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../lib/SiteContext';

export default function Hero() {
  const { data } = useSite();
  const c = data?.content?.hero || {
    tagline: "Xenians Corporate Advisory",
    title: "Where Capital Strategy Meets Operational Excellence.",
    titleItalic: "Capital Strategy",
    subtitle: "XENIANS는 정교한 데이터와 압도적인 전문성으로 자산 가치를 재정의합니다.",
    ctaExpertise: "EXPERTISE",
    ctaContact: "CONTACT US"
  };

  const renderTitle = () => {
    if (!c.titleItalic) return c.title;
    const parts = c.title.split(c.titleItalic);
    if (parts.length !== 2) return c.title;
    return (
      <>
        {parts[0]}
        <span className="text-gold italic font-normal">{c.titleItalic}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight text-white overflow-hidden">
      {/* Background Graphic/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/80 to-midnight"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-gold tracking-[0.2em] text-sm md:text-base font-semibold mb-6 uppercase">
            {c.tagline}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
            {renderTitle()}
          </h1>
          <p className="text-gray-400 font-light text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            {c.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/advisory"
              className="w-full sm:w-auto px-8 py-4 bg-gold text-midnight font-bold tracking-widest text-sm hover:bg-gold-light transition-colors duration-300"
            >
              {c.ctaExpertise}
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold tracking-widest text-sm hover:border-white transition-colors duration-300"
            >
              {c.ctaContact}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

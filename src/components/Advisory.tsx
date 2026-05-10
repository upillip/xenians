import { motion } from 'motion/react';
import { Target, Search, BarChart4, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../lib/SiteContext';

export default function Advisory() {
  const { data } = useSite();
  const c = data?.content?.advisory || {
    tagline: "Advisory",
    title: "Maximizing Value Through Precision.",
    description: "XENIANS는 시장의 흐름을 읽는 Adviser입니다. 딜 소싱(Deal Sourcing)부터 종결(Closing)까지의 전 과정을 철저한 데이터 기반으로 분석합니다. 우리의 중립성과 전문적인 네트워크는 고객의 자본 구조를 최적화하고 성공적인 거래를 성사시키는 핵심 원동력입니다.",
    quote: "당신의 자산이 가진 잠재력, XENIANS의 정교한 전략으로 증명하십시오.",
    features: []
  };

  const icons = [<Search className="w-8 h-8 text-gold" />, <ShieldCheck className="w-8 h-8 text-gold" />, <BarChart4 className="w-8 h-8 text-gold" />, <Target className="w-8 h-8 text-gold" />];

  return (
    <section id="advisory" className="py-24 md:py-32 bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-midnight via-midnight/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-light uppercase tracking-widest text-sm font-semibold mb-4 block">
              {c.tagline}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {c.title}
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {c.description}
            </p>
            
            <div className="bg-white/5 border-l-4 border-gold p-6 italic text-gray-300 backdrop-blur-sm">
              "{c.quote}"
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {c.features.map((feature: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-sm"
              >
                <div className="mb-6">{icons[idx % icons.length]}</div>
                <h3 className="text-lg font-bold text-white mb-3 font-serif">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

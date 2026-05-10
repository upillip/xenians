import { motion } from 'motion/react';
import { Shield, TrendingUp, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../lib/SiteContext';

export default function StrategyPlanning() {
  const { data } = useSite();
  const c = data?.content?.strategy || {
    tagline: "Management Division",
    title: "Strategy Planning & Risk Control",
    description: "XENIANS는 기업의 지속 가능한 성장을 위한 정교한 전략 수립과 철저한 리스크 관리를 수행합니다. 인수 후 통합(PMI)부터 건설 기술 지원 및 금융 자문까지, 사업의 전 과정을 아우르는 관리 체계를 구축합니다.",
    highlightsTitle: "Value Maximization through Execution",
    highlightsDesc: "단순한 계획을 넘어 현장 중심의 리스크 통제와 프로세스 혁신을 통해 실질적인 성과를 도출합니다. XENIANS는 고객사의 자산이 가진 잠재력을 현실의 가치로 전환하는 최상의 관리 파트너입니다.",
    highlights: []
  };

  const icons = [<Shield className="w-10 h-10 text-gold" />, <TrendingUp className="w-10 h-10 text-gold" />, <Construction className="w-10 h-10 text-gold" />];

  return (
    <section id="strategy-planning" className="py-24 md:py-32 bg-midnight text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-gold/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-light font-sans uppercase tracking-widest text-sm mb-4"
          >
            {c.tagline}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-8"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 font-sans leading-relaxed"
          >
            {c.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {c.highlights.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-sm"
            >
              <div className="mb-8">{icons[index % icons.length]}</div>
              <h3 className="text-xl font-serif text-white mb-4 font-medium">{item.title}</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
                <div className="h-px w-8 bg-gold/30"></div>
                <p className="text-base text-gray-200 font-medium leading-relaxed">
                  {item.koDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-12 bg-midnight text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl font-serif text-gold mb-4">{c.highlightsTitle}</h3>
            <p className="text-gray-300 font-sans">
              {c.highlightsDesc}
            </p>
          </div>
          <div className="mt-8 md:mt-0 relative z-10">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gold text-midnight font-bold tracking-widest text-sm hover:bg-white transition-colors duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

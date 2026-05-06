import { motion } from 'motion/react';
import { Key, Users, TrendingUp, Building } from 'lucide-react';

export default function Hospitality() {
  const points = [
    {
      title: "Operation & Management",
      desc: "체계적인 위탁 운영 모델로 호텔, 리조트, 골프클럽의 일상적 운영부터 전략적 결정까지 책임집니다."
    },
    {
      title: "Asset Management",
      desc: "단순 관리를 넘어 자산의 수익률(Yield)을 최우선으로 고려하는 밸류애드(Value-Add) 전략."
    },
    {
      title: "Cost Optimization",
      desc: "데이터 기반의 비용 통제 시스템과 효율적인 인력 관리로 영업이익(GOP)을 극대화합니다."
    },
    {
      title: "Marketing & Strategy",
      desc: "시장의 변화에 기민하게 대응하는 객실 단가(ADR) 전략과 타겟 마케팅을 실행합니다."
    }
  ];

  return (
    <section id="hospitality" className="py-24 md:py-32 bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent lg:to-midnight/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:py-12"
          >
            <span className="text-gold-light uppercase tracking-widest text-sm font-semibold mb-4 block">
              Hospitality
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Turning Hospitality <br /> Into <span className="text-gold italic font-normal">High-Yield Assets.</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              XENIANS는 현장의 성공을 만드는 Operator입니다. <br className="hidden md:block" />
              최고의 환대(Hospitality)는 철저하게 계산된 운영의 결과물입니다. 
              우리의 위탁 운영 노하우는 호텔, 리조트, 골프클럽의 비용 최적화와 마케팅 전략을 통합하여 
              해당 자산을 가장 가치 높은 자산으로 탈바꿈시킵니다.
            </p>

            <ul className="space-y-6">
              {points.map((point, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mt-1 mr-4 text-gold">
                    <div className="w-2 h-2 bg-gold mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{point.title}</h4>
                    <p className="text-gray-400 text-sm">{point.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Lock, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSite } from '../lib/SiteContext';

type Category = 'All' | 'M&A' | 'PM/PF' | 'Hospitality' | 'Advisory';

export default function Portfolio() {
  const { data, loading } = useSite();
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lang, setLang] = useState<'ko' | 'en'>('ko');

  const categories: Category[] = ['All', 'M&A', 'PM/PF', 'Hospitality', 'Advisory'];

  if (loading || !data) return <div className="py-40 text-center font-bold uppercase tracking-widest text-midnight">Loading Projects...</div>;

  const projects = data.portfolio;

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">
                Proven Excellence
              </span>
              <div className="flex space-x-2 text-[10px] font-sans">
                <button 
                  onClick={() => setLang('en')} 
                  className={`px-2 py-0.5 border transition-colors ${lang === 'en' ? 'border-gold text-gold' : 'border-gray-200 text-gray-400'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('ko')} 
                  className={`px-2 py-0.5 border transition-colors ${lang === 'ko' ? 'border-gold text-gold' : 'border-gray-200 text-gray-400'}`}
                >
                  KR
                </button>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-midnight font-bold">
              Our Portfolio
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl text-lg font-sans">
              {lang === 'en' 
                ? "Delivering exceptional results through rigorous analysis and strategic execution across diverse asset classes."
                : "철저한 분석과 전략적 실행력을 바탕으로 다양한 자산 클래스에서 압도적인 성과를 증명해오고 있습니다."}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start md:items-end"
          >
            <Link 
              to="/client-portal"
              className="group flex items-center space-x-2 text-midnight font-bold hover:text-gold transition-colors duration-200"
            >
              <Lock size={16} />
              <span className="tracking-widest uppercase text-xs border-b border-midnight group-hover:border-gold pb-1">
                {lang === 'en' ? 'Access Private Deal Stream' : '프라이빗 딜 정보 열람'}
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center space-x-2 min-w-max">
            <div className="p-2 mr-2 text-midnight">
              <Filter size={18} />
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-sans tracking-widest uppercase transition-all duration-300 rounded-full border ${
                  activeCategory === cat 
                  ? 'bg-midnight text-gold border-midnight shadow-lg' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gold hover:text-midnight'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gold/10 transition-shadow duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <div className="absolute inset-0 bg-midnight/30 group-hover:bg-midnight/10 transition-all duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl text-midnight font-bold mb-4 leading-tight group-hover:text-gold transition-colors duration-300 min-h-[3rem]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {lang === 'en' ? project.desc.en : project.desc.ko}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <button className="flex items-center text-xs font-bold uppercase tracking-widest text-midnight hover:text-gold transition-colors duration-200">
                      Case Study <ArrowRight size={14} className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-midnight p-12 rounded-sm text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[radial-gradient(circle,rgba(184,151,105,0.2)_0%,rgba(10,13,18,0)_70%)]" />
          </div>
          <h3 className="text-white font-serif text-2xl md:text-3xl mb-6 relative z-10">
            {lang === 'en' ? 'Looking for a specific track record?' : '상세 실적이 궁금하신가요?'}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 relative z-10 font-sans">
            {lang === 'en' 
              ? 'Due to the confidential nature of our advisory work, many significant transactions are not listed publicly. Please contact our partners for a detailed capability statement.' 
              : '자문 업무의 비밀 유지 성격상, 다수의 주요 거래 실적은 외부에 공개되지 않습니다. 제니안스의 상세 수행 역량이 궁금하시다면 본부장 및 파트너에게 문의해 주시기 바랍니다.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-4 bg-gold text-white font-bold tracking-widest uppercase text-sm hover:bg-gold-light transition-all duration-300 rounded-sm shadow-xl"
            >
              {lang === 'en' ? 'Inquiry Now' : '문의하기'}
            </Link>
            <Link 
              to="/client-portal" 
              className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              {lang === 'en' ? 'Client Login' : '클라이언트 대시보드'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

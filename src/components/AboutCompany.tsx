import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import ceoImage from '../assets/images/regenerated_image_1778063530743.png';
import signatureImage from '../assets/images/signature.png';

export default function AboutCompany() {
  const [lang, setLang] = useState<'ko' | 'en'>('en');

  const content = {
    ko: {
      quote1: "자산의 가치를 넘어,",
      quote2: "기업의 미래를 설계합니다.",
      p1: "반갑습니다. XENIANS 입니다.",
      p2: "오늘날의 비즈니스 환경은 단순히 자본의 이동을 넘어, 정교한 전략과 치밀한 실행력이 결합되어야만 생존할 수 있는 시대입니다. XENIANS는 M&A와 Project Management 분야의 날카로운 분석력을 바탕으로, 고객사의 자산 가치를 극대화하는 최적의 솔루션을 제공 합니다.",
      p3: "우리는 단순한 어드바이저에 머물지 않습니다. 현장 중심의 실무 역량을 결합하여, 이론에 치우치지 않는 '실질적인 수익 모델'을 증명해내고 있습니다.",
      p4: "XENIANS를 신뢰해주시는 파트너 여러분의 기대에 부응하여, 투명한 프로세스와 압도적인 전문성으로 시장의 기준이 되는 결과를 만들어낼 것을 약속드립니다. 여러분의 위대한 여정에 XENIANS가 가장 든든한 전략적 동반자가 되겠습니다.",
      sign: "대표이사 유 석"
    },
    en: {
      quote1: "Beyond asset value,",
      quote2: "we design the future of your enterprise.",
      p1: "Greetings, we are XENIANS.",
      p2: "In today's business environment, survival requires more than just capital movement; it demands the synthesis of sophisticated strategy and meticulous execution. Based on our sharp analytical prowess in M&A and Project Management, XENIANS provides optimal solutions to maximize the asset value of our clients.",
      p3: "We do not stop at being mere advisors. By combining field-oriented practical competencies, we prove a 'practical profit model' that does not lean solely on theory.",
      p4: "To meet the expectations of our partners who trust XENIANS, we promise to deliver results that set the market standard through transparent processes and overwhelming expertise. XENIANS will be the most reliable strategic companion on your great journey.",
      sign: "CEO Phillip Yoo"
    }
  };

  const t = content[lang];

  const orgData = [
    {
      title: "M&A & Advisory Division",
      subtitle: "자문부문",
      color: "rose",
      teams: [
        { name: "Deal Sourcing", enDesc: "Deal Sourcing, Market Research, Network Expansion.", koDesc: "인수/매각 대상 발굴, 시장 리서치, 네트워크 확장." },
        { name: "Execution", enDesc: "Valuation, Due Diligence Coordination, Negotiation of Contract Terms.", koDesc: "가치평가(Valuation), 실사 조율, 계약 조건 협상." },
        { name: "Advisory", enDesc: "Strategic Advisory, Deal Structuring, Legal/Accounting Advisory Management.", koDesc: "전략적 자문, 구조 설계, 법률/회계 자문사 협업 관리." }
      ]
    },
    {
      title: "Strategy Planning Division",
      subtitle: "관리부문",
      color: "emerald",
      teams: [
        { name: "Project Management", enDesc: "PMI Management, Business Risk Control, Process Optimization.", koDesc: "통합(PMI) 관리, 사업 리스크 통제, 프로세스 최적화." },
        { name: "Strategic Planning", enDesc: "Mid-to-long-term Growth Strategy, Asset Portfolio Analysis.", koDesc: "중장기 성장 전략, 자산 포트폴리오 분석." },
        { name: "Construction PM & PF", enDesc: "Full-cycle Construction Management (Planning to Operation) and PF Advisory.", koDesc: "건설사업 전 과정(계획~운영) 총괄 관리 및 PF(Project Financing) 자문" }
      ]
    },
    {
      title: "Hospitality Division",
      subtitle: "위탁운영부문",
      color: "amber",
      teams: [
        { name: "Operations", enDesc: "Hotel, Resort & Golf Club Management, Service QC, Recruitment & Training.", koDesc: "호텔/리조트/골프클럽 현장 관리, 서비스 퀄리티 컨트롤(QC), 인력 채용 및 교육." },
        { name: "Revenue Management", enDesc: "Sales Strategy, Pricing Optimization, OTA Channel Management, Marketing.", koDesc: "판매 전략, 단가 최적화, 예약 채널 관리(OTA), 마케팅." },
        { name: "Asset Management", enDesc: "Facility Maintenance, Profitability Analysis, Renovation Planning.", koDesc: "시설 유지보수, 수익률 분석, 개보수(Renovation) 기획." }
      ]
    },
    {
      title: "Corporate Support Division",
      subtitle: "경영지원부문",
      color: "slate",
      teams: [
        { name: "Compliance & Legal", enDesc: "Regulatory Compliance, Contract Review, Security Management.", koDesc: "법규 준수, 계약서 검토, 보안 관리." },
        { name: "Finance & HR", enDesc: "Financial Management, HR, General Affairs.", koDesc: "재무 관리, 인사, 총무." },
        { name: "IT & Data Room", enDesc: "Client VDR & Secure Server Management.", koDesc: "클라이언트 전용 로그인 시스템(VDR) 및 보안 서버 관리." }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-sans uppercase tracking-[0.3em] text-[11px] font-bold mb-4"
            >
              Who We Are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-midnight font-medium tracking-tight"
            >
              About <span className="text-gold italic">XENIANS</span>
            </motion.h2>
          </div>
        </div>

        <div className="space-y-32">
          
          {/* CEO Greeting Section */}
          <div id="ceo-greeting" className="bg-white rounded-sm shadow-2xl shadow-gray-200/40 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top-right mix-blend-multiply opacity-50 z-0 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-12 xl:p-16 relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-12 h-px bg-gold"></span>
                    <div className="flex space-x-2 text-[10px] font-sans tracking-widest">
                      <button 
                        onClick={() => setLang('en')} 
                        className={`px-3 py-1 border transition-all duration-300 ${lang === 'en' ? 'bg-gold border-gold text-midnight font-bold' : 'border-gray-200 text-gray-400 hover:text-midnight'}`}
                      >
                        ENG
                      </button>
                      <button 
                        onClick={() => setLang('ko')} 
                        className={`px-3 py-1 border transition-all duration-300 ${lang === 'ko' ? 'bg-gold border-gold text-midnight font-bold' : 'border-gray-200 text-gray-400 hover:text-midnight'}`}
                      >
                        KOR
                      </button>
                    </div>
                  </div>

                  <div className="min-h-[380px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={lang}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className={`font-serif text-3xl md:text-4xl text-midnight mb-10 leading-tight ${lang === 'ko' ? 'font-medium' : 'font-light'}`}>
                          "{t.quote1} <br />
                          <span className="text-gold italic">{t.quote2}</span>"
                        </h2>
                        
                        <div className="space-y-6 text-gray-700 font-handwriting text-2xl leading-relaxed">
                          <p>{t.p1}</p>
                          <p>{t.p2}</p>
                          <p>{t.p3}</p>
                          <p>{t.p4}</p>
                          <div className="pt-8 flex items-center space-x-6 border-t border-gray-100">
                            <p className="font-handwriting text-midnight text-3xl">
                              {t.sign}
                            </p>
                            <img 
                              src={signatureImage} 
                              alt="Signature" 
                              className="h-16 md:h-20 object-contain -ml-2 opacity-90 brightness-75" 
                            />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-midnight/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={ceoImage} 
                      alt="CEO"
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 border-b border-r border-gold/50 flex items-end justify-end p-4 pointer-events-none">
                    <div className="w-20 h-20 bg-gold/5 backdrop-blur-sm -mr-12 -mb-12"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Organization Section */}
          <div id="organization" className="relative -mx-6 md:-mx-12 px-6 md:px-12 py-32 bg-gray-50/50 border-y border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative z-10 max-w-7xl mx-auto"
            >
              <div className="text-center mb-24">
                <span className="text-gold font-sans uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Powering Progress</span>
                <h2 className="text-4xl md:text-5xl font-serif text-midnight font-medium">Organization</h2>
                <div className="w-20 h-[1px] bg-gold mx-auto mt-8"></div>
              </div>
              
              {/* Executive */}
              <div className="flex flex-col items-center mb-24 relative">
                <div className="w-full max-w-3xl bg-midnight text-white p-10 md:p-14 rounded-sm shadow-2xl z-20 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 -translate-y-1/2 translate-x-1/2 rotate-45 pointer-events-none group-hover:bg-gold/10 transition-colors duration-700"></div>
                  <h3 className="text-2xl font-serif mb-12 text-center text-gold tracking-widest border-b border-white/10 pb-6">경영진 (Executive)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative">
                    <div className="text-center md:text-left relative">
                      <div className="flex items-center mb-4 justify-center md:justify-start">
                        <div className="w-1.5 h-1.5 bg-gold mr-3"></div>
                        <h4 className="font-brand font-medium text-xl text-white tracking-wide uppercase">CEO</h4>
                        <span className="text-[10px] text-white/40 ml-3 font-medium uppercase tracking-widest mt-1">대표이사</span>
                      </div>
                      <div className="space-y-3">
                        <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">Corporate Strategy & Key Network</p>
                        <p className="text-white/90 text-sm leading-relaxed font-light">전사 전략 수립, 핵심 네트워크 관리 및 주요 딜 승인.</p>
                      </div>
                    </div>

                    <div className="text-center md:text-left relative">
                      <div className="flex items-center mb-4 justify-center md:justify-start">
                        <div className="w-1.5 h-1.5 bg-gold mr-3"></div>
                        <h4 className="font-brand font-medium text-xl text-white tracking-wide uppercase">MD</h4>
                        <span className="text-[10px] text-white/40 ml-3 font-medium uppercase tracking-widest mt-1">본부장 / 파트너</span>
                      </div>
                      <div className="space-y-3">
                        <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">Division Oversight & Execution</p>
                        <p className="text-white/90 text-sm leading-relaxed font-light">부문별 총괄 및 신규 프로젝트 수주(Pitching).</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vertical Line from Executive */}
                <div className="h-16 w-px bg-gradient-to-b from-midnight to-gray-400 hidden lg:block z-10"></div>
              </div>

              {/* Branches Grid */}
              <div className="grid lg:grid-cols-4 gap-6 md:gap-10 relative z-20">
                {/* Perfect-Alignment Connection Line System (Desktop Only) */}
                <div className="hidden lg:grid grid-cols-4 gap-6 md:gap-10 absolute -top-16 left-0 right-0 pointer-events-none">
                   {[0, 1, 2, 3].map((i) => (
                     <div key={i} className="flex justify-center relative">
                       {/* Horizontal Segment */}
                       <div className={`absolute h-px bg-gray-400 bottom-0 ${i === 0 ? 'left-1/2 right-0' : i === 3 ? 'left-0 right-1/2' : 'left-0 right-0'}`}></div>
                       {/* Connection Node */}
                       <div className="w-2 h-2 rounded-full bg-gray-400 absolute left-1/2 -bottom-1 -translate-x-1/2"></div>
                     </div>
                   ))}
                </div>

                {orgData.map((dept, index) => {
                  const colorMap = {
                    rose: "border-rose-200 bg-rose-50/30 text-rose-900 group-hover:border-rose-400",
                    emerald: "border-emerald-200 bg-emerald-50/30 text-emerald-900 group-hover:border-emerald-400",
                    amber: "border-amber-200 bg-amber-50/30 text-amber-900 group-hover:border-amber-400",
                    slate: "border-slate-200 bg-slate-50/30 text-slate-900 group-hover:border-slate-400"
                  };
                  const accentColor = {
                    rose: "bg-rose-600",
                    emerald: "bg-emerald-600",
                    amber: "bg-amber-600",
                    slate: "bg-slate-600"
                  };

                  return (
                    <div
                      key={index}
                      className={`p-8 rounded-sm shadow-sm border flex flex-col relative group transition-all duration-500 overflow-hidden ${colorMap[dept.color as keyof typeof colorMap]}`}
                    >
                      {/* Vertical line connector */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-16 w-px bg-gray-400 hidden lg:block"></div>
                      
                      {/* Subtle accent background */}
                      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-[0.03] group-hover:scale-150 transition-transform duration-700 ${accentColor[dept.color as keyof typeof accentColor]}`}></div>

                      <div className="mb-8 border-b border-black/5 pb-6 relative">
                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] block mb-3 opacity-60`}>
                          {dept.subtitle}
                        </span>
                        <h3 className="font-sans font-bold text-midnight text-base leading-snug tracking-tight">
                          {dept.title}
                        </h3>
                      </div>
                      
                      <div className="space-y-8 flex-1">
                        {dept.teams.map((team, idx) => (
                          <div key={idx} className="group-hover:translate-x-1 transition-transform duration-300">
                            <h4 className="text-[13px] font-bold text-midnight mb-3 flex items-start">
                              <span className={`w-1.5 h-1.5 rounded-full mr-3 mt-1.5 shrink-0 ${accentColor[dept.color as keyof typeof accentColor]}`}></span>
                              <span>{team.name}</span>
                            </h4>
                            <div className="pl-[1.125rem]">
                              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1 leading-tight">
                                {team.enDesc}
                              </p>
                              <p className="text-[13px] text-midnight leading-relaxed font-normal opacity-80">
                                {team.koDesc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

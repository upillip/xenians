import { motion } from 'motion/react';
import { Lock, FileText, PieChart, Shield } from 'lucide-react';

export default function ClientPortal() {
  return (
    <section id="client-portal" className="py-24 md:py-32 bg-midnight text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center space-x-2 text-gold uppercase tracking-widest text-sm font-semibold mb-4">
              <Lock size={16} />
              <span>Private Virtual Data Room</span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Exclusive Client Portal
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              XENIANS는 고객에게 "철저하게 관리받고 있다"는 확신을 제공합니다. 
              일반 웹사이트와 완전히 분리된 클라이언트 전용 대시보드(VDR)를 통해 
              실시간으로 프로젝트 현황을 파악하고 기밀 문서를 투명하게 관리하세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-4 bg-white/5 p-4 border border-white/10">
                <PieChart className="text-gold" />
                <span className="font-semibold text-sm">Monthly Report</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 p-4 border border-white/10">
                <FileText className="text-gold" />
                <span className="font-semibold text-sm">NDA & Contracts</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 p-4 border border-white/10">
                <Shield className="text-gold" />
                <span className="font-semibold text-sm">Real-time Progress</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 p-4 border border-white/10">
                <Lock className="text-gold" />
                <span className="font-semibold text-sm">Secure VDR Access</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light"></div>
            <h3 className="font-serif text-3xl text-midnight font-bold mb-2 text-center">Client Login</h3>
            <p className="text-gray-500 text-center text-sm mb-8">안전한 자산 관리를 위한 전용 포털입니다.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-midnight text-xs font-bold uppercase tracking-wider mb-2">Username / Email</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-midnight bg-transparent"
                  placeholder="Enter your ID"
                />
              </div>
              <div>
                <label className="block text-midnight text-xs font-bold uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-midnight bg-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                  <input type="checkbox" className="accent-gold w-4 h-4" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-gold hover:text-midnight transition-colors">Forgot Password?</a>
              </div>
              <button 
                type="submit" 
                className="w-full bg-midnight text-white py-4 font-bold tracking-widest text-sm hover:bg-gold transition-colors duration-300 mt-4"
              >
                ACCESS SECURE PORTAL
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

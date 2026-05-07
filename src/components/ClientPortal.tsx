import { motion } from 'motion/react';
import { Lock, FileText, PieChart, Shield, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function ClientPortal() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setError('승인되지 않은 사용자입니다. 관리자에게 문의해주시기 바랍니다.');
    }, 1500);
  };

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
            
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-midnight text-xs font-bold uppercase tracking-wider mb-2">Username / Email</label>
                <input 
                  type="text" 
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-midnight bg-transparent"
                  placeholder="Enter your ID"
                />
              </div>
              <div>
                <label className="block text-midnight text-xs font-bold uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-midnight bg-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                  <input type="checkbox" className="accent-gold w-4 h-4" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="text-gold hover:text-midnight transition-colors">Forgot Password?</button>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start space-x-2 text-red-600 bg-red-50 p-3 text-xs"
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </motion.div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-midnight text-white py-4 font-bold tracking-widest text-sm hover:bg-gold transition-colors duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'ACCESS SECURE PORTAL'
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

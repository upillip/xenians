import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: 'M&A Advisory',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      // Using FormData as it's often more compatible with form handlers
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value as string);
      });
      // Add a subject line for better email visibility
      data.append('_subject', `[XENIANS] New Inquiry from ${formData.firstName} ${formData.lastName}`);

      const response = await fetch('https://formspree.io/f/mjglrjdy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          email: '',
          inquiryType: 'M&A Advisory',
          message: ''
        });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.errors ? errorData.errors.map((e: any) => e.message).join(', ') : '알 수 없는 오류';
        alert(`전송 중 오류가 발생했습니다: ${errorMessage}`);
      }
    } catch (error) {
      alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isEmailTouched = formData.email.length > 0;
  const isEmailValid = validateEmail(formData.email);
  const isFormValid = Object.values(formData).every((value: string) => value.trim() !== '') && isEmailValid;

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white border-2 border-gold p-10 max-w-md w-full shadow-2xl relative"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Mail className="text-gold" size={32} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-midnight mb-4">
                Thank You!
              </h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                문의가 성공적으로 전송되었습니다. <br />
                검토 후 담당자가 곧 연락드리겠습니다.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-midnight text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-gold hover:text-midnight transition-all duration-300"
              >
                확인
              </button>
            </div>
          </motion.div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-12 -top-12 w-64 h-64 opacity-5 blur-sm pointer-events-none select-none">
              <img src="/logo.png" alt="" className="w-full h-full object-contain" />
            </div>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">
              Contact Us | 문의하기
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-midnight font-bold mb-6">
              Ready to redefine <br /> your asset's value?
              <span className="block text-2xl md:text-3xl mt-4 font-sans text-gray-400 font-medium tracking-tight">자산 가치의 새로운 정의를 위해</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              최고의 전략과 압도적인 실행력을 경험하고 싶으시다면, <br className="hidden md:block" />
              전문 상담을 신청해 주십시오. 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 border border-gray-200 p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl text-midnight font-bold mb-8">Request a Consultation <span className="block text-sm font-sans text-gray-500 mt-1 uppercase tracking-wider">상담 신청</span></h3>
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">First Name <span className="text-gray-400 ml-1">이름</span></label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Last Name <span className="text-gray-400 ml-1">성</span></label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Company / Organization <span className="text-gray-400 ml-1">회사명 / 소속</span></label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Phone Number <span className="text-gray-400 ml-1">전화번호</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Email Address <span className="text-gray-400 ml-1">이메일 주소</span></label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white border p-3 focus:outline-none transition-colors ${
                    isEmailTouched && !isEmailValid ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-gold'
                  }`}
                />
                {isEmailTouched && !isEmailValid && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold">잘못된 이메일 주소입니다.</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Inquiry Type <span className="text-gray-400 ml-1">문의 유형</span></label>
                <select 
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors text-midnight"
                >
                  <option value="M&A Advisory">M&A Advisory | 인수 자문</option>
                  <option value="Project Management">Project Management | 개발 관리(PM)</option>
                  <option value="Hotel Operation & Management">Hotel Operation & Management | 호텔 위탁 경영</option>
                  <option value="Other">Other | 기타</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Message <span className="text-gray-400 ml-1">문의 내용</span></label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 font-bold tracking-widest text-sm transition-all duration-300 border border-transparent uppercase ${
                  isFormValid && !isSubmitting
                    ? 'bg-gold text-midnight hover:bg-midnight hover:text-white hover:border-white cursor-pointer shadow-lg' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-70'
                }`}
              >
                {isSubmitting ? 'SENDING... | 전송 중...' : 'SUBMIT INQUIRY | 문의 보내기'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

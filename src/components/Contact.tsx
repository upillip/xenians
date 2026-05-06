import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">
              Contact Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-midnight font-bold mb-6">
              Ready to redefine <br /> your asset's value?
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              최고의 전략과 압도적인 실행력을 경험하고 싶으시다면, <br className="hidden md:block" />
              전문 상담을 신청해 주십시오. 
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-midnight mb-1 uppercase tracking-wider text-sm">Email</h4>
                  <p className="text-gray-600">help@xenians.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 border border-gray-200 p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl text-midnight font-bold mb-8">Request a Consultation</h3>
            <form 
              action="https://formspree.io/f/mjglrjdy" 
              method="POST" 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Company / Organization</label>
                <input 
                  type="text" 
                  name="company"
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Inquiry Type</label>
                <select 
                  name="inquiryType"
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors text-midnight"
                >
                  <option>M&A Advisory</option>
                  <option>Project Management</option>
                  <option>Hotel Operation & Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-midnight uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-gold text-midnight w-full py-4 font-bold tracking-widest text-sm hover:bg-midnight hover:text-white transition-colors duration-300 border border-transparent hover:border-white"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

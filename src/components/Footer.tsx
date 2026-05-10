import { Link } from 'react-router-dom';
import { useSite } from '../lib/SiteContext';

export default function Footer() {
  const { data } = useSite();
  const siteName = data?.settings?.siteName || 'XENIANS';

  return (
    <footer className="bg-[#0a0f1c] text-white py-12 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-1" />
              <span className="font-brand font-medium text-3xl tracking-tight text-gold">{siteName}</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-geometric">
                {data?.content?.footer?.descriptionEn || 'Where Capital Strategy Meets Operational Excellence.'}
              </p>
              <p className="text-gray-500 text-xs max-w-sm leading-relaxed font-geometric">
                {data?.content?.footer?.descriptionKo || '정교한 데이터와 압도적인 전문성으로 자산 가치를 재정의합니다.'}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <div>
              <h4 className="text-gold font-bold tracking-wider text-xs uppercase mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/advisory" className="hover:text-white transition-colors">M&A Advisory</Link></li>
                <li><Link to="/advisory" className="hover:text-white transition-colors">Project Management</Link></li>
                <li><Link to="/hospitality" className="hover:text-white transition-colors">Hotel Management</Link></li>
                <li><Link to="/hospitality" className="hover:text-white transition-colors">Asset Management</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <div>
              <h4 className="text-gold font-bold tracking-wider text-xs uppercase mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/client-portal" className="hover:text-white transition-colors">Client Portal</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; 2019 {siteName}. All rights reserved.</p>
            <Link to="/admin" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-1">
              <span className="opacity-50 text-[10px]">ADMIN PANEL</span>
            </Link>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

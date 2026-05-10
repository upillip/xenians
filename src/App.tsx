import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SiteProvider } from './lib/SiteContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import Advisory from './components/Advisory';
import Hospitality from './components/Hospitality';
import StrategyPlanning from './components/StrategyPlanning';
import Portfolio from './components/Portfolio';
import ClientPortal from './components/ClientPortal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

// A helper component to scroll to top on route change or handle hash
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // slight delay to let render finish
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  
  return null;
}

export default function App() {
  return (
    <SiteProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 selection:bg-gold/30 selection:text-midnight flex flex-col">
          <Navbar />
          <main className="flex-grow pt-24 md:pt-0">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<AboutCompany />} />
              <Route path="/advisory" element={<Advisory />} />
              <Route path="/strategy" element={<StrategyPlanning />} />
              <Route path="/hospitality" element={<Hospitality />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/client-portal" element={<ClientPortal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SiteProvider>
  );
}

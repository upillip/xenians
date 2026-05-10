import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface SiteSettings {
  siteName: string;
  primaryColor: string;
  secondaryColor: string;
  fontSans: string;
  fontSerif: string;
}

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  desc: { en: string; ko: string };
  client: string;
  image: string;
  year: string;
}

interface SiteData {
  portfolio: PortfolioItem[];
  settings: SiteSettings;
}

interface SiteContextType {
  data: SiteData | null;
  loading: boolean;
  refresh: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/db');
      const json = await res.json();
      setData(json);
      applyTheme(json.settings);
    } catch (err) {
      console.error('Failed to fetch site data');
    } finally {
      setLoading(false);
    }
  };

  const applyTheme = (settings: SiteSettings) => {
    const root = document.documentElement;
    root.style.setProperty('--color-gold', settings.primaryColor);
    root.style.setProperty('--color-midnight', settings.secondaryColor);
    root.style.setProperty('--font-sans', settings.fontSans);
    root.style.setProperty('--font-serif', settings.fontSerif);

    // Dynamic Google Fonts loading
    const fontLink = document.getElementById('dynamic-fonts') as HTMLLinkElement;
    const fonts = [settings.fontSans, settings.fontSerif].map(f => f.replace(' ', '+')).join('&family=');
    const href = `https://fonts.googleapis.com/css2?family=${fonts}:wght@400;500;600;700&display=swap`;
    
    if (fontLink) {
      fontLink.href = href;
    } else {
      const link = document.createElement('link');
      link.id = 'dynamic-fonts';
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SiteContext.Provider value={{ data, loading, refresh: fetchData }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}

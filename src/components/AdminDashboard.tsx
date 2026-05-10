import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Save, Plus, Trash2, Edit2, Settings as SettingsIcon, FileText, Image as ImageIcon, Palette, Type, LogIn, Lock } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  desc: { en: string; ko: string };
  client: string;
  image: string;
  year: string;
}

interface SiteSettings {
  siteName: string;
  primaryColor: string;
  secondaryColor: string;
  fontSans: string;
  fontSerif: string;
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ id: '', password: '' });
  const [data, setData] = useState<{ portfolio: Project[], settings: SiteSettings } | null>(null);
  const [activeTab, setActiveTab] = useState<'portfolio' | 'settings'>('portfolio');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/db')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
    
    // Removed automatic session restoration to ensure ID/Password entry every time
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a server-side check.
    // For this demo, we'll use simple hardcoded check 
    // or you could use environment variables via VITE_ prefix.
    if (loginForm.id === 'xenians' && loginForm.password === 'atom072600!') {
      setIsLoggedIn(true);
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const saveToDb = async (newData: any) => {
    setSaving(true);
    try {
      await fetch('/api/db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
      });
      setData(newData);
      alert('저장되었습니다.');
    } catch (err) {
      alert('저장 실패');
    } finally {
      setSaving(false);
    }
  };

  const updateSettings = (key: keyof SiteSettings, value: string) => {
    if (!data) return;
    const newData = {
      ...data,
      settings: { ...data.settings, [key]: value }
    };
    setData(newData);
  };

  const handleProjectSave = () => {
    if (!data || !editingProject) return;
    let newPortfolio;
    if (data.portfolio.find(p => p.id === editingProject.id)) {
      newPortfolio = data.portfolio.map(p => p.id === editingProject.id ? editingProject : p);
    } else {
      newPortfolio = [...data.portfolio, { ...editingProject, id: Date.now() }];
    }
    const newData = { ...data, portfolio: newPortfolio };
    setData(newData);
    setEditingProject(null);
  };

  const deleteProject = (id: number) => {
    if (!data) return;
    if (!confirm('정말 삭제하시겠습니까?')) return;
    const newData = { ...data, portfolio: data.portfolio.filter(p => p.id !== id) };
    setData(newData);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 max-w-md w-full shadow-2xl rounded-sm"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-gold p-4 rounded-full shadow-lg shadow-gold/20">
              <Lock size={32} className="text-midnight" />
            </div>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white text-center mb-2">Admin Login</h1>
          <p className="text-gray-400 text-center text-xs uppercase tracking-widest mb-10">XENIANS Site Management</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Admin ID</label>
              <input 
                type="text" 
                required
                value={loginForm.id}
                onChange={(e) => setLoginForm({ ...loginForm, id: e.target.value })}
                className="w-full bg-white/10 border border-white/20 p-4 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                placeholder="Enter ID"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full bg-white/10 border border-white/20 p-4 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gold text-midnight py-4 font-bold tracking-widest uppercase text-sm hover:bg-white transition-all shadow-xl shadow-gold/10"
            >
              Access Dashboard
            </button>
          </form>
          <p className="mt-8 text-center text-gray-500 text-[10px] uppercase tracking-tighter">
            Authorized Personnel Only
          </p>
        </motion.div>
      </div>
    );
  }

  if (loading || !data) return <div className="p-20 text-center uppercase tracking-widest font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="font-serif text-4xl font-bold text-midnight flex items-center gap-3">
              Admin Dashboard <span className="text-sm font-sans font-normal text-gray-400">v1.1</span>
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Site Management Console</p>
              <button 
                onClick={handleLogout}
                className="text-[10px] font-bold text-red-500 uppercase tracking-widest hover:underline"
              >
                Logout
              </button>
            </div>
          </div>
          <button 
            onClick={() => saveToDb(data)}
            disabled={saving}
            className="flex items-center gap-2 bg-midnight text-gold px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-gold hover:text-midnight transition-colors shadow-xl disabled:opacity-50"
          >
            <Save size={18} />
            {saving ? 'SAVING...' : 'PUBLISH CHANGES'}
          </button>
        </header>

        <div className="flex space-x-4 mb-10 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`pb-4 px-4 font-bold tracking-widest uppercase text-xs transition-colors relative ${activeTab === 'portfolio' ? 'text-gold' : 'text-gray-400'}`}
          >
            <span className="flex items-center gap-2"><FileText size={14} /> Portfolio</span>
            {activeTab === 'portfolio' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-1 bg-gold" />}
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`pb-4 px-4 font-bold tracking-widest uppercase text-xs transition-colors relative ${activeTab === 'settings' ? 'text-gold' : 'text-gray-400'}`}
          >
            <span className="flex items-center gap-2"><SettingsIcon size={14} /> Site Settings</span>
            {activeTab === 'settings' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-1 bg-gold" />}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {activeTab === 'portfolio' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-midnight">Projects ({data.portfolio.length})</h2>
                <button 
                  onClick={() => setEditingProject({ id: 0, category: 'M&A', title: '', desc: { en: '', ko: '' }, client: '', image: '', year: '2024' })}
                  className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs border border-gold px-4 py-2 hover:bg-gold hover:text-white transition-colors"
                >
                  <Plus size={16} /> New Project
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.portfolio.map(project => (
                  <div key={project.id} className="bg-white p-6 border border-gray-200 flex flex-col group hover:border-gold transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1 block">{project.category}</span>
                        <h3 className="font-bold text-lg text-midnight">{project.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => setEditingProject(project)} className="p-2 text-gray-400 hover:text-midnight transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => deleteProject(project.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-4">
                      <div className="w-24 h-16 bg-gray-100 overflow-hidden">
                        <img src={project.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 line-clamp-2">{project.desc.ko}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white border border-gray-200 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="font-serif text-2xl font-bold text-midnight border-l-4 border-gold pl-4">Branding & Identity</h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Site Name</label>
                    <input 
                      type="text" 
                      value={data.settings.siteName}
                      onChange={(e) => updateSettings('siteName', e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors font-bold text-midnight"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="font-serif text-2xl font-bold text-midnight border-l-4 border-gold pl-4">Aesthetics & Theme</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Palette size={14} /> Primary Color</label>
                      <div className="flex gap-3 items-center">
                        <input 
                          type="color" 
                          value={data.settings.primaryColor}
                          onChange={(e) => updateSettings('primaryColor', e.target.value)}
                          className="w-12 h-12 border-0 cursor-pointer"
                        />
                        <span className="font-mono text-xs text-midnight">{data.settings.primaryColor}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Palette size={14} /> Secondary</label>
                      <div className="flex gap-3 items-center">
                        <input 
                          type="color" 
                          value={data.settings.secondaryColor}
                          onChange={(e) => updateSettings('secondaryColor', e.target.value)}
                          className="w-12 h-12 border-0 cursor-pointer"
                        />
                        <span className="font-mono text-xs text-midnight">{data.settings.secondaryColor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Type size={14} /> Sans Font</label>
                      <select 
                        value={data.settings.fontSans}
                        onChange={(e) => updateSettings('fontSans', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="Inter">Inter</option>
                        <option value="Space Grotesk">Space Grotesk</option>
                        <option value="Outfit">Outfit</option>
                        <option value="Manrope">Manrope</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Type size={14} /> Serif Font</label>
                      <select 
                        value={data.settings.fontSerif}
                        onChange={(e) => updateSettings('fontSerif', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="Playfair Display">Playfair Display</option>
                        <option value="Cormorant Garamond">Cormorant Garamond</option>
                        <option value="Libre Baskerville">Libre Baskerville</option>
                        <option value="Spectral">Spectral</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {editingProject && (
        <div className="fixed inset-0 bg-midnight/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-4xl p-8 md:p-12 shadow-2xl relative max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <h2 className="font-serif text-3xl font-bold text-midnight mb-8 border-b border-gray-100 pb-6">
              {editingProject.id === 0 ? 'Create New Project' : 'Edit Project'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Title</label>
                  <input 
                    type="text" 
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Category</label>
                    <select 
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gold"
                    >
                      <option>M&A</option>
                      <option>PM/PF</option>
                      <option>Hospitality</option>
                      <option>Advisory</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Year</label>
                    <input 
                      type="text" 
                      value={editingProject.year}
                      onChange={(e) => setEditingProject({ ...editingProject, year: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Image URL</label>
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      value={editingProject.image}
                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                      className="flex-1 bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gold"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 text-gold">Description (Korean)</label>
                  <textarea 
                    rows={4}
                    value={editingProject.desc.ko}
                    onChange={(e) => setEditingProject({ ...editingProject, desc: { ...editingProject.desc, ko: e.target.value } })}
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gold resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Description (English)</label>
                  <textarea 
                    rows={4}
                    value={editingProject.desc.en}
                    onChange={(e) => setEditingProject({ ...editingProject, desc: { ...editingProject.desc, en: e.target.value } })}
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gold resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-end gap-4 border-t border-gray-100 pt-8">
              <button 
                onClick={() => setEditingProject(null)}
                className="px-8 py-3 font-bold uppercase tracking-widest text-xs text-gray-400 hover:text-midnight transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleProjectSave}
                className="px-10 py-3 bg-midnight text-white font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors shadow-lg"
              >
                Apply Changes
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

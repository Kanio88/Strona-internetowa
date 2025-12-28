
import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Language, TranslationStrings, FAQItem, FAQSection, DetailedServiceItem, BlogPost } from './types';
import { translations } from './constants';

type Page = 'home' | 'about' | 'faq' | 'services' | 'blog' | 'article';

// Context for Language and Navigation
const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationStrings;
  currentPage: Page;
  setPage: (p: Page) => void;
  currentSlug: string | null;
  setSlug: (s: string | null) => void;
}>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
  currentPage: 'home',
  setPage: () => {},
  currentSlug: null,
  setSlug: () => {}
});

// Logo URL (Everyday Care Plus)
const LOGO_PRIMARY = "https://imgur.com/vH9v5z4.png";

// --- Components ---

const Header: React.FC = () => {
  const { lang, setLang, t, setPage, currentPage, setSlug } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (p: Page) => {
    setPage(p);
    setSlug(null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('home')}>
            <img className="h-12 w-auto" src={LOGO_PRIMARY} alt="Everyday Care Plus" />
            <span className="ml-3 text-xl font-bold text-blue-900 hidden md:block uppercase tracking-tight">Everyday Care Plus</span>
          </div>
          
          <nav className="hidden lg:flex space-x-8 items-center">
            <button onClick={() => navigate('home')} className={`text-sm font-semibold tracking-wide uppercase ${currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>{t.nav.home}</button>
            <button onClick={() => navigate('services')} className={`text-sm font-semibold tracking-wide uppercase ${currentPage === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>{t.nav.services}</button>
            <button onClick={() => navigate('about')} className={`text-sm font-semibold tracking-wide uppercase ${currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>{t.nav.about}</button>
            <button onClick={() => navigate('faq')} className={`text-sm font-semibold tracking-wide uppercase ${currentPage === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>{t.nav.faq}</button>
            <button onClick={() => navigate('blog')} className={`text-sm font-semibold tracking-wide uppercase ${currentPage === 'blog' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>{t.nav.blog}</button>
            
            <div className="flex items-center space-x-2 border-l pl-6 ml-6 border-gray-200">
              <button onClick={() => setLang('en')} className={`text-xs font-bold px-2 py-1 rounded transition ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'}`}>EN</button>
              <button onClick={() => setLang('pl')} className={`text-xs font-bold px-2 py-1 rounded transition ${lang === 'pl' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'}`}>PL</button>
            </div>
            
            <button 
              onClick={() => { navigate('home'); setTimeout(() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'}), 100); }}
              className="ml-4 bg-blue-600 text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-blue-700 transition shadow-lg active:transform active:scale-95 uppercase tracking-wider"
            >
              {t.nav.consultation}
            </button>
          </nav>

          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-xl">
          <button onClick={() => navigate('home')} className="block w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">{t.nav.home}</button>
          <button onClick={() => navigate('services')} className="block w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">{t.nav.services}</button>
          <button onClick={() => navigate('about')} className="block w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">{t.nav.about}</button>
          <button onClick={() => navigate('faq')} className="block w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">{t.nav.faq}</button>
          <button onClick={() => navigate('blog')} className="block w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">{t.nav.blog}</button>
          <div className="flex items-center space-x-2 px-4 pt-2">
            <button onClick={() => {setLang('en'); setIsMenuOpen(false);}} className={`flex-1 text-center text-sm font-bold py-3 rounded-lg border ${lang === 'en' ? 'bg-blue-600 text-white border-blue-600' : 'text-gray-500 border-gray-200'}`}>English</button>
            <button onClick={() => {setLang('pl'); setIsMenuOpen(false);}} className={`flex-1 text-center text-sm font-bold py-3 rounded-lg border ${lang === 'pl' ? 'bg-blue-600 text-white border-blue-600' : 'text-gray-500 border-gray-200'}`}>Polski</button>
          </div>
          <button 
             onClick={() => { navigate('home'); setTimeout(() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'}), 100); }}
             className="w-full mt-2 bg-blue-600 text-white px-4 py-4 rounded-lg text-center font-bold text-lg shadow-md"
          >
            {t.nav.consultation}
          </button>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const { t, setPage, setSlug } = useContext(LanguageContext);
  const navigate = (p: Page) => {
    setPage(p);
    setSlug(null);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3 text-white">
            <img src={LOGO_PRIMARY} alt="Everyday Care Plus" className="h-10 w-auto brightness-0 invert" />
            <span className="text-xl font-bold uppercase tracking-tight">Everyday Care Plus</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            {t.hero.subtitle}
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t.nav.services}</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => navigate('services')} className="hover:text-blue-400 transition">{t.services.items.hourly.title}</button></li>
            <li><button onClick={() => navigate('services')} className="hover:text-blue-400 transition">{t.services.items.liveIn.title}</button></li>
            <li><button onClick={() => navigate('services')} className="hover:text-blue-400 transition">{t.services.items.dementia.title}</button></li>
            <li><button onClick={() => navigate('services')} className="hover:text-blue-400 transition">{t.services.items.autism.title}</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => navigate('about')} className="hover:text-blue-400 transition">{t.nav.about}</button></li>
            <li><button onClick={() => navigate('faq')} className="hover:text-blue-400 transition">{t.nav.faq}</button></li>
            <li><button onClick={() => navigate('blog')} className="hover:text-blue-400 transition">{t.nav.blog}</button></li>
            <li><button onClick={() => navigate('home')} className="hover:text-blue-400 transition">{t.footer.privacy}</button></li>
          </ul>
        </div>
        
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t.nav.contact}</h4>
          <div className="flex items-start space-x-3 text-sm">
            <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>{t.footer.address}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span className="font-bold text-white">{t.footer.phone}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span className="text-white">{t.footer.email}</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-slate-500">
        <p>{t.footer.rights}</p>
        <div className="flex space-x-6">
          <button className="hover:text-white transition">{t.footer.privacy}</button>
          <button className="hover:text-white transition">{t.footer.complaints}</button>
          <button className="hover:text-white transition">{t.footer.safeguarding}</button>
        </div>
      </div>
    </footer>
  );
};

const ConsultationForm: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    careType: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = t.consultationForm.validationErrors.name;
    if (!formData.phone) newErrors.phone = t.consultationForm.validationErrors.phone;
    if (!formData.postcode) newErrors.postcode = t.consultationForm.validationErrors.postcode;
    if (!formData.consent) newErrors.consent = t.consultationForm.validationErrors.consent;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-2xl mx-auto border-t-8 border-green-500 animate-fadeIn">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4">{t.consultationForm.successTitle}</h3>
        <p className="text-slate-600 text-lg mb-8">{t.consultationForm.successMessage}</p>
        <div className="pt-8 border-t border-slate-100">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{t.consultationForm.speakDirectly}</p>
           <a href="tel:07563011244" className="text-2xl font-black text-blue-600 hover:text-blue-700 transition block">
             {t.consultationForm.callNow}
           </a>
        </div>
      </div>
    );
  }

  return (
    <div id="consultation-form" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto border-t-8 border-blue-600">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">{t.consultationForm.title}</h3>
        <p className="text-slate-600 text-lg">{t.consultationForm.intro}</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.consultationForm.fields.name} *</label>
          <input 
            type="text" 
            className={`w-full p-4 bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition`}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.consultationForm.fields.phone} *</label>
          <input 
            type="tel" 
            className={`w-full p-4 bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition`}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.consultationForm.fields.email}</label>
          <input 
            type="email" 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.consultationForm.fields.postcode} *</label>
          <input 
            type="text" 
            className={`w-full p-4 bg-slate-50 border ${errors.postcode ? 'border-red-500' : 'border-slate-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition`}
            value={formData.postcode}
            onChange={(e) => setFormData({...formData, postcode: e.target.value})}
          />
          {errors.postcode && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.postcode}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.consultationForm.fields.careType}</label>
          <select 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition"
            value={formData.careType}
            onChange={(e) => setFormData({...formData, careType: e.target.value})}
          >
            <option value="">-- Please select --</option>
            {t.consultationForm.careOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.consultationForm.fields.message}</label>
          <textarea 
            rows={4}
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <div className="md:col-span-2 flex items-start space-x-3 mt-4">
          <input 
            type="checkbox" 
            className="mt-1 w-5 h-5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
            checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
          />
          <span className={`text-sm ${errors.consent ? 'text-red-500 font-bold' : 'text-slate-600'}`}>{t.consultationForm.fields.consent}</span>
        </div>

        <div className="md:col-span-2 mt-8">
          <button 
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white p-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition shadow-lg active:transform active:scale-95 uppercase tracking-widest flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
            ) : t.consultationForm.submit}
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest">{t.consultationForm.reassurance}</p>
        </div>
      </form>
    </div>
  );
};

// --- Page Content Components ---

const HomePage: React.FC = () => {
  const { t, setPage } = useContext(LanguageContext);

  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000" alt="Home Care" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 space-y-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition shadow-2xl uppercase tracking-widest active:scale-95 transform"
              >
                {t.hero.ctaPrimary}
              </button>
              <a 
                href="tel:07563011244"
                className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition shadow-xl border-2 border-transparent uppercase tracking-widest active:scale-95 transform"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800">
               {[t.trust.dbs, t.trust.cqc, t.trust.gdpr, t.trust.training].map((item, i) => (
                 <div key={i} className="flex items-center space-x-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                   <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                   <span>{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-slate-100 flex-shrink-0 overflow-hidden shadow-2xl border-4 border-white transform rotate-3">
             <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" alt="Founder" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">{t.founder.title}</span>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">{t.founder.name}</h2>
            <div className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-8 py-2 font-medium">
              "{t.founder.message}"
            </div>
            <button onClick={() => setPage('about')} className="text-blue-600 font-black uppercase tracking-widest text-sm hover:text-blue-800 transition flex items-center justify-center md:justify-start space-x-2">
              <span>{t.founder.signature}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">{t.services.title}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(t.services.items).slice(0, 6).map(([key, item]) => (
              <div key={key} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{item.description}</p>
                <button 
                  onClick={() => setPage('services')}
                  className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] hover:text-blue-800 flex items-center group-hover:translate-x-2 transition-transform"
                >
                  {item.learnMore}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
             <button onClick={() => setPage('services')} className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition shadow-xl uppercase tracking-widest">
                {t.services.viewAll}
             </button>
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight">{t.testimonials.title}</h2>
            <div className="space-y-8">
              {t.testimonials.items.map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border-l-8 border-blue-600 shadow-sm">
                  <p className="text-lg text-slate-700 italic leading-relaxed mb-6">"{item.text}"</p>
                  <div>
                    <p className="font-black text-slate-900">{item.author}</p>
                    <p className="text-blue-600 text-xs font-black uppercase tracking-widest">{item.context}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">{t.testimonials.trustNote}</p>
          </div>
          
          <div className="bg-blue-600 p-12 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.9124 14 15.017 13.1046 15.017 12V9C15.017 7.89543 15.9124 7 17.017 7H20.017C21.1216 7 22.017 7.89543 22.017 9V12C22.017 13.1046 21.1216 14 20.017 14H19.017V16H22.017V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697V14H5.01697C3.9124 14 3.01697 13.1046 3.01697 12V9C3.01697 7.89543 3.9124 7 5.01697 7H8.01697C9.12154 7 10.017 7.89543 10.017 9V12C10.017 13.1046 9.12154 14 8.01697 14H7.01697V16H10.017V21H2.01697Z" /></svg>
            </div>
            <h3 className="text-3xl font-black mb-12 uppercase tracking-tight">{t.trustCompliance.title}</h3>
            <div className="space-y-10">
               {Object.values(t.trustCompliance.items).map((item, i) => (
                 <div key={i} className="flex items-start space-x-6 group">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition">
                     <svg className="w-5 h-5 text-white group-hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                   </div>
                   <div>
                     <h4 className="font-black text-xl mb-1 uppercase tracking-tight">{item.title}</h4>
                     <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">{t.areasCovered.title}</h2>
          <p className="text-slate-400 text-lg mb-16 leading-relaxed">{t.areasCovered.intro}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {t.areasCovered.locations.map(loc => (
              <span key={loc} className="bg-slate-800 px-8 py-4 rounded-2xl text-blue-400 font-black border border-slate-700 uppercase tracking-widest text-sm">{loc}</span>
            ))}
          </div>
          <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em]">{t.areasCovered.bottomLine}</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="animate-fadeIn">
       <section className="bg-blue-600 py-24 text-white">
         <div className="max-w-5xl mx-auto px-4 text-center">
           <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight leading-tight">{t.aboutPage.intro.title}</h1>
           <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
             {t.aboutPage.intro.text}
           </p>
         </div>
       </section>

       <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1200" alt="Care" className="relative rounded-[3rem] shadow-2xl z-10" />
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">{t.aboutPage.founder.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.aboutPage.founder.text}
            </p>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-inner">
               <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">{t.aboutPage.values.title}</h3>
               <div className="space-y-8">
                 {t.aboutPage.values.items.map((item, i) => (
                   <div key={i} className="flex items-start space-x-6">
                     <span className="text-3xl bg-white p-3 rounded-2xl shadow-sm">{item.icon}</span>
                     <div>
                       <h4 className="font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
       </section>

       <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
             <h2 className="text-4xl font-black uppercase tracking-tight">{t.aboutPage.howWeWork.title}</h2>
             <p className="text-lg text-slate-400 leading-relaxed">{t.aboutPage.howWeWork.text}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
               {t.aboutPage.qualitySafety.items.map((item, i) => (
                 <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                   <h4 className="font-black text-blue-500 mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                   <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                 </div>
               ))}
             </div>
          </div>
       </section>
       
       <section className="py-24 max-w-4xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">{t.aboutPage.local.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{t.aboutPage.local.text}</p>
          <p className="text-2xl font-black text-blue-600 italic leading-relaxed">"{t.aboutPage.closing}"</p>
       </section>

       <section className="pb-24 px-4">
         <ConsultationForm />
       </section>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="animate-fadeIn">
       <section className="bg-slate-900 py-24 text-white">
         <div className="max-w-5xl mx-auto px-4 text-center">
           <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight leading-tight">{t.servicesPage.title}</h1>
           <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
             {t.servicesPage.intro}
           </p>
         </div>
       </section>

       <section className="py-24 max-w-7xl mx-auto px-4 space-y-32">
          {t.servicesPage.items.map((item, i) => (
            <div key={item.id} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-600 rounded-[3rem] opacity-10 blur-2xl"></div>
                  <img src={`https://images.unsplash.com/photo-${i === 0 ? '1581578731548-c64695cc6958' : i === 1 ? '1516733725897-1aa73b87c8e8' : '1576765608535-5f04d1e3f289'}?auto=format&fit=crop&q=80&w=1200`} alt={item.title} className="relative rounded-[3rem] shadow-2xl z-10 w-full h-[500px] object-cover" />
                  <div className="absolute -bottom-8 -right-8 z-20 bg-white text-blue-600 p-8 rounded-3xl shadow-2xl font-black text-5xl">
                    {item.icon}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-10">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">{item.title}</h2>
                <p className="text-xl text-blue-600 font-bold italic">"{item.reassurance}"</p>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{t.servicesPage.whoItIsForLabel}</h4>
                    <p className="text-lg text-slate-700 leading-relaxed">{item.whoItIsFor}</p>
                  </div>
                  <div className="pt-8 border-t border-slate-100 space-y-2">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{t.servicesPage.howWeProvideLabel}</h4>
                    <p className="text-lg text-slate-700 leading-relaxed">{item.howWeProvide}</p>
                  </div>
                </div>
                <button 
                   onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
                   className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition shadow-xl uppercase tracking-widest transform active:scale-95"
                >
                  {t.servicesPage.discussButton}
                </button>
              </div>
            </div>
          ))}
       </section>

       <section className="bg-slate-50 py-24 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
             <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">{t.servicesPage.closingTitle}</h2>
             <p className="text-xl text-slate-600 leading-relaxed">{t.servicesPage.closingText}</p>
             <p className="text-blue-600 font-black text-2xl uppercase tracking-widest">{t.servicesPage.closingSub}</p>
             <button 
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
                className="mt-8 bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-2xl uppercase tracking-widest"
             >
               {t.nav.consultation}
             </button>
          </div>
       </section>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (q: string) => {
    setOpenItems(prev => prev.includes(q) ? prev.filter(i => i !== q) : [...prev, q]);
  };

  return (
    <div className="animate-fadeIn">
       <section className="bg-white py-24 border-b border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
           <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight text-slate-900">{t.faqPage.title}</h1>
           <p className="text-xl text-slate-600 leading-relaxed font-medium">
             {t.faqPage.intro}
           </p>
         </div>
       </section>

       <section className="py-24 max-w-4xl mx-auto px-4 space-y-20">
          {t.faqPage.sections.map((section, idx) => (
            <div key={idx} className="space-y-10">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] border-b-2 border-blue-600 pb-2 inline-block">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                    <button 
                      onClick={() => toggleItem(item.q)}
                      className="w-full text-left p-8 md:p-10 flex justify-between items-center group"
                    >
                      <span className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition tracking-tight">{item.q}</span>
                      <svg className={`w-8 h-8 transform transition duration-500 ${openItems.includes(item.q) ? 'rotate-180 text-blue-600' : 'text-slate-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    {openItems.includes(item.q) && (
                      <div className="px-10 pb-10 text-slate-600 text-lg leading-relaxed animate-slideDown">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-slate-900 p-12 md:p-16 rounded-[3rem] text-center text-white space-y-8 shadow-2xl">
             <p className="text-xl text-slate-300 font-medium leading-relaxed">{t.faqPage.closing}</p>
             <button 
               onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
               className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition uppercase tracking-widest"
             >
               {t.nav.contact}
             </button>
          </div>
       </section>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const { t, setPage, setSlug } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const posts = activeCategory 
    ? t.blogPage.posts.filter(p => p.category === activeCategory)
    : t.blogPage.posts;

  return (
    <div className="animate-fadeIn">
       <section className="bg-slate-50 py-24 border-b border-slate-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
           <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight text-slate-900">{t.blogPage.title}</h1>
           <p className="text-xl text-slate-600 leading-relaxed font-medium">
             {t.blogPage.intro}
           </p>
         </div>
       </section>

       <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-wrap justify-center gap-3 mb-20">
             <button 
               onClick={() => setActiveCategory(null)}
               className={`px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest border transition duration-300 ${!activeCategory ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-900 hover:text-slate-900'}`}
             >
               {t.blogPage.allCategories}
             </button>
             {t.blogPage.categories.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest border transition duration-300 ${activeCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-xl' : 'bg-white text-slate-500 border-slate-200 hover:border-blue-600 hover:text-blue-600'}`}
               >
                 {cat}
               </button>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map(post => (
              <div key={post.slug} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group h-full">
                <div className="h-64 bg-slate-100 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800" alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-10 space-y-6 flex-1 flex flex-col">
                  <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest space-x-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} {t.blogPage.readTimeLabel}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition duration-300 uppercase tracking-tight">{post.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm flex-1">{post.excerpt}</p>
                  <button 
                    onClick={() => { setSlug(post.slug); setPage('article'); window.scrollTo(0,0); }}
                    className="pt-6 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] flex items-center group"
                  >
                    <span>{t.blogPage.readMore}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
       </section>
    </div>
  );
};

const ArticlePage: React.FC = () => {
  const { t, currentSlug, setPage } = useContext(LanguageContext);
  const post = t.blogPage.posts.find(p => p.slug === currentSlug);

  if (!post) {
    useEffect(() => { setPage('blog'); }, []);
    return null;
  }

  return (
    <div className="animate-fadeIn pb-24">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4">
           <button onClick={() => setPage('blog')} className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-12 flex items-center hover:text-white transition group">
             <svg className="w-5 h-5 mr-3 group-hover:-translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
             Back to advice
           </button>
           <div className="space-y-8">
             <span className="bg-blue-600 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">{post.category}</span>
             <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight uppercase">{post.title}</h1>
             <div className="flex items-center text-slate-500 text-xs font-black uppercase tracking-[0.3em] space-x-8 pt-4">
               <span>{post.date}</span>
               <span>•</span>
               <span>{post.readTime} read</span>
             </div>
           </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-24">
         <div className="prose prose-xl prose-slate max-w-none">
            <p className="text-2xl md:text-3xl text-slate-600 font-bold leading-relaxed italic mb-16 border-l-8 border-blue-600 pl-10">
              {post.intro}
            </p>
            
            {post.content.map((block, i) => (
              <div key={i} className="mb-20 space-y-10">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">{block.heading}</h2>
                <p className="text-xl text-slate-600 leading-relaxed">{block.body}</p>
                {block.bullets && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 mt-10">
                    {block.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start space-x-6 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-slate-700 font-bold leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
         </div>
         
         <div className="mt-24 bg-blue-600 p-12 md:p-20 rounded-[4rem] text-center text-white shadow-2xl space-y-10">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">{t.blogPage.articleCtaText}</h3>
            <button 
               onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
               className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 transition shadow-2xl uppercase tracking-widest transform active:scale-95"
            >
              {t.blogPage.articleCtaButton}
            </button>
         </div>
      </article>
      
      <section className="px-4">
        <ConsultationForm />
      </section>
    </div>
  );
};

// --- Main App ---

/**
 * Main App Component.
 * Fixed the 'no default export' error for index.tsx.
 */
const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setPage] = useState<Page>('home');
  const [currentSlug, setSlug] = useState<string | null>(null);

  const contextValue = {
    lang,
    setLang,
    t: translations[lang],
    currentPage,
    setPage,
    currentSlug,
    setSlug
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
        <Header />
        
        <main className="min-h-[70vh]">
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'faq' && <FAQPage />}
          {currentPage === 'blog' && <BlogPage />}
          {currentPage === 'article' && <ArticlePage />}
        </main>

        <Footer />

        {/* Floating Call Button */}
        <a 
          href="tel:07563011244" 
          className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-green-600 transition-all hover:scale-110 active:scale-95 lg:hidden animate-bounce"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </a>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;

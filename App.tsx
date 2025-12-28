import React, { useState, createContext, useContext, useEffect } from 'react';
import { Language, TranslationStrings, TrustIndicator, ServiceItem, Page, DetailedServiceItem } from './types';
import { translations } from './constants';

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

// Primary Logo URL (Hands with Cross variant)
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
    <header className="sticky top-0 z-50 bg-brand-navy border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => navigate('home')}>
            <img 
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" 
              src={LOGO_PRIMARY} 
              alt="Everyday Care Plus Logo" 
            />
            <div className="ml-4 flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-black text-white leading-none uppercase tracking-tighter">Everyday</span>
              <span className="text-xl md:text-2xl font-black text-brand-orange leading-none uppercase tracking-tighter">Care Plus</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8 items-center">
            <button onClick={() => navigate('home')} className={`text-xs font-black tracking-widest uppercase transition-colors ${currentPage === 'home' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-slate-300 hover:text-white'}`}>{t.nav.home}</button>
            <button onClick={() => navigate('services')} className={`text-xs font-black tracking-widest uppercase transition-colors ${currentPage === 'services' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-slate-300 hover:text-white'}`}>{t.nav.services}</button>
            <button onClick={() => navigate('about')} className={`text-xs font-black tracking-widest uppercase transition-colors ${currentPage === 'about' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-slate-300 hover:text-white'}`}>{t.nav.about}</button>
            <button onClick={() => navigate('faq')} className={`text-xs font-black tracking-widest uppercase transition-colors ${currentPage === 'faq' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-slate-300 hover:text-white'}`}>{t.nav.faq}</button>
            <button onClick={() => navigate('blog')} className={`text-xs font-black tracking-widest uppercase transition-colors ${currentPage === 'blog' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-slate-300 hover:text-white'}`}>{t.nav.blog}</button>
            
            <div className="flex items-center space-x-2 border-l pl-6 ml-6 border-white/10">
              <button onClick={() => setLang('en')} className={`text-[10px] font-black px-2 py-1 rounded transition ${lang === 'en' ? 'bg-brand-blue text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('pl')} className={`text-[10px] font-black px-2 py-1 rounded transition ${lang === 'pl' ? 'bg-brand-blue text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>PL</button>
            </div>
            
            <div className="flex space-x-2 ml-4">
              <a href="tel:07563011244" className="bg-brand-orange text-white px-5 py-3 rounded-xl text-xs font-black hover:bg-orange-600 transition shadow-lg active:scale-95 uppercase tracking-widest flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1"/></svg>
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <a href="https://wa.me/447563011244" target="_blank" className="bg-green-500 text-white px-5 py-3 rounded-xl text-xs font-black hover:bg-green-600 transition shadow-lg active:scale-95 uppercase tracking-widest flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.066l-.694 2.542 2.6-.682c.731.4 1.704.605 2.836.605 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.731-5.767-5.731zm3.385 8.165c-.147.414-.753.754-1.043.801-.284.046-.643.081-1.043-.053-.242-.08-.54-.185-.916-.35-.558-.246-1.127-.63-1.635-1.138-.508-.508-.892-1.077-1.138-1.635-.165-.376-.27-.674-.35-.916-.134-.4-.1-.759-.053-1.043.047-.29.387-.896.801-1.043l.261-.093c.125-.045.26-.04.382.015l.69.313c.118.053.185.166.164.293l-.128.847c-.015.093.03.185.112.23l.31.17c.18.098.384.152.593.152.174 0 .344-.038.5-.11l.365-.164c.092-.042.196-.03.277.034l.79.625c.103.082.13.23.064.343l-.337.568z"/></svg>
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>
          </nav>

          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2" aria-label="Toggle Menu">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-navy border-t border-white/10 py-10 px-6 space-y-6 shadow-2xl animate-slideDown">
          <button onClick={() => navigate('home')} className="block w-full text-left text-2xl font-black text-white uppercase tracking-tighter">{t.nav.home}</button>
          <button onClick={() => navigate('services')} className="block w-full text-left text-2xl font-black text-white uppercase tracking-tighter">{t.nav.services}</button>
          <button onClick={() => navigate('about')} className="block w-full text-left text-2xl font-black text-white uppercase tracking-tighter">{t.nav.about}</button>
          <button onClick={() => navigate('faq')} className="block w-full text-left text-2xl font-black text-white uppercase tracking-tighter">{t.nav.faq}</button>
          <button onClick={() => navigate('blog')} className="block w-full text-left text-2xl font-black text-white uppercase tracking-tighter">{t.nav.blog}</button>
          <div className="flex items-center space-x-4 pt-4">
            <button onClick={() => {setLang('en'); setIsMenuOpen(false);}} className={`flex-1 text-center text-xs font-black py-4 rounded-xl border ${lang === 'en' ? 'bg-brand-blue text-white border-brand-blue shadow-xl' : 'text-slate-400 border-white/10'}`}>ENGLISH</button>
            <button onClick={() => {setLang('pl'); setIsMenuOpen(false);}} className={`flex-1 text-center text-xs font-black py-4 rounded-xl border ${lang === 'pl' ? 'bg-brand-blue text-white border-brand-blue shadow-xl' : 'text-slate-400 border-white/10'}`}>POLSKI</button>
          </div>
          <button 
             onClick={() => { navigate('home'); setTimeout(() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'}), 100); }}
             className="w-full mt-4 bg-brand-orange text-white py-5 rounded-2xl font-black text-xl shadow-2xl uppercase tracking-widest"
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
    <footer className="bg-slate-900 text-slate-300 py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center md:text-left">
        <div className="space-y-8 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate('home')}>
            <img src={LOGO_PRIMARY} alt="Everyday Care Plus" className="h-16 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-black text-white leading-none uppercase tracking-tighter">Everyday</span>
              <span className="text-xl font-black text-brand-orange leading-none uppercase tracking-tighter">Care Plus</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 font-medium">
            {t.hero.subtitle}
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="https://www.facebook.com/everydaycareplus" target="_blank" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300">
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/care.everyday/" target="_blank" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition duration-300">
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM17.5 5.5C18.05 5.5 18.5 5.95 18.5 6.5C18.5 7.05 18.05 7.5 17.5 7.5C16.95 7.5 16.5 7.05 16.5 6.5C16.5 5.95 16.95 5.5 17.5 5.5Z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/grzegorz-rusinek-93362a336/" target="_blank" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition duration-300">
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">{t.nav.services}</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><button onClick={() => navigate('services')} className="hover:text-brand-orange transition uppercase tracking-tight">{t.services.items.hourly.title}</button></li>
            <li><button onClick={() => navigate('services')} className="hover:text-brand-orange transition uppercase tracking-tight">{t.services.items.liveIn.title}</button></li>
            <li><button onClick={() => navigate('services')} className="hover:text-brand-orange transition uppercase tracking-tight">{t.services.items.dementia.title}</button></li>
            <li><button onClick={() => navigate('services')} className="hover:text-brand-orange transition uppercase tracking-tight">{t.services.items.autism.title}</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Helpful Links</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><button onClick={() => navigate('about')} className="hover:text-brand-orange transition uppercase tracking-tight">{t.nav.about}</button></li>
            <li><button onClick={() => navigate('faq')} className="hover:text-brand-orange transition uppercase tracking-tight">{t.nav.faq}</button></li>
            <li><button onClick={() => navigate('blog')} className="hover:text-brand-orange transition uppercase tracking-tight">{t.nav.blog}</button></li>
            <li><a href="https://share.google/DxoW6Z12RYCina2s8" target="_blank" className="hover:text-brand-orange transition uppercase tracking-tight">Google Business</a></li>
          </ul>
        </div>
        
        <div className="space-y-8 flex flex-col items-center md:items-start">
          <h4 className="text-white font-black mb-4 uppercase tracking-widest text-xs">{t.nav.contact}</h4>
          <div className="space-y-4 font-bold">
            <div className="flex items-start space-x-3 text-sm group">
              <svg className="w-5 h-5 text-brand-orange mt-0.5 group-hover:scale-125 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
              <span className="text-slate-200">DY4 8UU, Tipton, UK</span>
            </div>
            <a href="tel:07563011244" className="flex items-center space-x-3 text-sm group">
              <svg className="w-5 h-5 text-brand-orange group-hover:scale-125 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1"/></svg>
              <span className="text-white text-lg">07563 011 244</span>
            </a>
            <a href="mailto:greg@every-day-care.com" className="flex items-center space-x-3 text-sm group">
              <svg className="w-5 h-5 text-brand-orange group-hover:scale-125 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span className="text-slate-200 lowercase tracking-tighter">greg@every-day-care.com</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] space-y-6 md:space-y-0 text-slate-500">
        <p>{t.footer.rights}</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
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
        <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">{t.consultationForm.successTitle}</h3>
        <p className="text-slate-600 text-lg mb-8 font-medium">{t.consultationForm.successMessage}</p>
        <div className="pt-8 border-t border-slate-100">
           <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{t.consultationForm.speakDirectly}</p>
           <a href="tel:07563011244" className="text-3xl font-black text-brand-blue hover:text-blue-700 transition block uppercase tracking-tighter">
             {t.consultationForm.callNow}
           </a>
        </div>
      </div>
    );
  }

  return (
    <div id="consultation-form" className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl max-w-5xl mx-auto border-t-8 border-brand-orange relative">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">{t.consultationForm.title}</h3>
        <p className="text-slate-500 text-xl font-medium">{t.consultationForm.intro}</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">{t.consultationForm.fields.name} *</label>
          <input 
            type="text" 
            className={`w-full p-6 bg-slate-50 border-2 ${errors.name ? 'border-red-500' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition duration-300 font-bold`}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-2">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">{t.consultationForm.fields.phone} *</label>
          <input 
            type="tel" 
            className={`w-full p-6 bg-slate-50 border-2 ${errors.phone ? 'border-red-500' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition duration-300 font-bold`}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          {errors.phone && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-2">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">{t.consultationForm.fields.email}</label>
          <input 
            type="email" 
            className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition duration-300 font-bold"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">{t.consultationForm.fields.postcode} *</label>
          <input 
            type="text" 
            className={`w-full p-6 bg-slate-50 border-2 ${errors.postcode ? 'border-red-500' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition duration-300 font-bold`}
            value={formData.postcode}
            onChange={(e) => setFormData({...formData, postcode: e.target.value})}
          />
          {errors.postcode && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-2">{errors.postcode}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">{t.consultationForm.fields.careType}</label>
          <div className="relative">
            <select 
              className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none appearance-none transition duration-300 font-bold cursor-pointer"
              value={formData.careType}
              onChange={(e) => setFormData({...formData, careType: e.target.value})}
            >
              <option value="">-- Please select --</option>
              {t.consultationForm.careOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">{t.consultationForm.fields.message}</label>
          <textarea 
            rows={4}
            className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition duration-300 font-bold resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <div className="md:col-span-2 flex items-start space-x-4 mt-4">
          <input 
            type="checkbox" 
            className="mt-1.5 w-6 h-6 rounded-lg text-brand-blue focus:ring-4 focus:ring-brand-blue/20 cursor-pointer transition border-2 border-slate-200"
            checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
          />
          <span className={`text-sm font-bold ${errors.consent ? 'text-red-500' : 'text-slate-500'}`}>{t.consultationForm.fields.consent}</span>
        </div>

        <div className="md:col-span-2 mt-8">
          <button 
            type="submit"
            disabled={loading}
            className={`w-full bg-brand-blue text-white p-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition shadow-2xl active:scale-[0.98] transform uppercase tracking-widest flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <svg className="animate-spin h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
            ) : t.consultationForm.submit}
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-6 uppercase font-black tracking-[0.3em]">{t.consultationForm.reassurance}</p>
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
      {/* Hero Section - Boxed & Centered */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <section className="relative bg-brand-navy rounded-[3rem] overflow-hidden py-20 lg:py-32 px-8 lg:px-20 shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000" alt="Home Care background" className="w-full h-full object-cover" />
          </div>
          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="inline-block bg-brand-blue/20 backdrop-blur-md border border-brand-blue/30 px-6 py-2 rounded-full animate-fadeIn">
                 <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.3em]">CQC Standards Aligned • DBS Checked</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start pt-4">
                <button 
                  onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-brand-orange text-white px-8 py-4 rounded-xl font-black text-base hover:bg-orange-600 transition shadow-xl uppercase tracking-widest active:scale-95 transform"
                >
                  {t.hero.ctaPrimary}
                </button>
                <a 
                  href="tel:07563011244"
                  className="bg-white text-brand-navy px-8 py-4 rounded-xl font-black text-base hover:bg-slate-50 transition shadow-xl uppercase tracking-widest active:scale-95 transform flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1"/></svg>
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>
            </div>
            <div className="lg:w-2/5 hidden lg:block">
               <div className="relative">
                  <div className="absolute -inset-10 bg-brand-orange/20 blur-[100px] rounded-full"></div>
                  <img src={LOGO_PRIMARY} alt="Everyday Care Plus Logo Large" className="relative w-full h-auto drop-shadow-2xl animate-fadeIn" />
               </div>
            </div>
          </div>
        </section>
      </div>

      {/* Founder Message */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-6 bg-slate-100 rounded-[3rem] group-hover:rotate-6 transition duration-500 border-2 border-slate-200"></div>
              <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" alt="Founder Portrait" className="relative rounded-[3rem] shadow-2xl w-full h-[450px] object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-10">
            <div className="space-y-4">
              <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs block">{t.founder.title}</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">{t.founder.name}</h2>
            </div>
            <div className="text-2xl text-slate-600 leading-relaxed italic border-l-12 border-brand-blue pl-10 py-4 font-bold bg-slate-50/50 rounded-r-3xl">
              "{t.founder.message}"
            </div>
            <button onClick={() => setPage('about')} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-blue transition-all shadow-xl flex items-center space-x-4">
              <span>{t.founder.signature}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Overhauled Services summary */}
      <ServicesSummary />

      {/* Trust Badges */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-12">{t.trustCompliance.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-60 hover:opacity-100 transition duration-500">
               {(Object.values(t.trustCompliance.items) as TrustIndicator[]).map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-brand-blue transition">
                       <svg className="w-6 h-6 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.title}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">{t.testimonials.title}</h2>
               <div className="space-y-10">
                 {t.testimonials.items.map((item, i) => (
                   <div key={i} className="relative pl-12 group">
                      <div className="absolute left-0 top-0 text-6xl text-brand-blue font-black opacity-30 group-hover:opacity-100 transition">“</div>
                      <p className="text-2xl font-bold italic text-slate-300 leading-relaxed">"{item.text}"</p>
                      <div className="mt-6">
                        <p className="font-black uppercase tracking-widest text-sm">{item.author}</p>
                        <p className="text-brand-blue text-[10px] font-black uppercase tracking-[0.4em]">{item.context}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="bg-white p-12 md:p-20 rounded-[4rem] text-slate-900 shadow-2xl relative overflow-hidden">
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
               <img src={LOGO_PRIMARY} alt="Everyday Care Plus Symbol" className="h-20 w-auto mb-12 opacity-80" />
               <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">{t.trustCompliance.footerLine}</h3>
               <div className="space-y-6">
                 {['DBS Checked Professionals', 'Comprehensive Assessments', 'Tailored Support Plans', '24/7 Management Support'].map(item => (
                   <div key={item} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center flex-shrink-0">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="font-black text-xs uppercase tracking-widest text-slate-500">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
};

const ServicesSummary: React.FC = () => {
  const { t, setPage } = useContext(LanguageContext);
  
  // Mapping 6 high-impact services for the homepage overview with specific images from the requirements
  const homepageServices = [
    { 
      ...t.servicesPage.items.find(i => i.id === 'personal')!, 
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      ...t.servicesPage.items.find(i => i.id === 'medication')!, 
      img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      ...t.servicesPage.items.find(i => i.id === 'companionship')!, 
      img: "https://images.unsplash.com/photo-1516703757599-9473633ac1ad?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      ...t.servicesPage.items.find(i => i.id === 'dementia')!, 
      img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      ...t.servicesPage.items.find(i => i.id === 'autism')!, 
      img: "https://images.unsplash.com/photo-1594495894542-a471467e49f1?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      ...t.servicesPage.items.find(i => i.id === 'respite')!, 
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-brand-navy font-montserrat leading-tight uppercase tracking-tighter drop-shadow-sm">
            Tailored Support<br/>For Every Need
          </h2>
          <p className="text-lg text-slate-600 font-openSans leading-relaxed font-medium">
            Comprehensive care solutions tailored to your unique needs, delivered with professionalism and compassion in the comfort of your own home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {homepageServices.map((item, i) => (
            <div 
              key={i} 
              className="bg-white rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group flex flex-col h-full overflow-hidden"
              onClick={() => { setPage('services'); window.scrollTo(0, 0); }}
            >
              {/* Image Section */}
              <div className="relative h-[185px] w-full overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-brand-blue to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-lg border border-white/20">
                  <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-brand-navy font-montserrat mb-4 uppercase tracking-tight group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-openSans leading-relaxed text-sm flex-grow font-medium line-clamp-3">
                  {item.description}
                </p>
                <button 
                  className="mt-8 flex items-center space-x-2 text-brand-orange font-black text-[10px] uppercase tracking-[0.3em] group/btn"
                >
                  <span>{item.learnMore}</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={() => { setPage('services'); window.scrollTo(0, 0); }}
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-brand-orange to-orange-400 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 uppercase tracking-widest group"
          >
            <span>View All Services</span>
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="animate-fadeIn">
      <section className="bg-brand-navy py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">{t.aboutPage.intro.title}</h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">{t.aboutPage.intro.text}</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8">{t.aboutPage.founder.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">{t.aboutPage.founder.text}</p>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" alt="Care Professional" />
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-16">{t.aboutPage.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.aboutPage.values.items.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition border border-slate-100">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-16">{t.aboutPage.qualitySafety.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.aboutPage.qualitySafety.items.map((item, i) => (
              <div key={i} className="border-l-4 border-brand-blue pl-6 py-4">
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm font-bold">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-20 text-center text-xl text-slate-600 font-medium max-w-3xl mx-auto italic">{t.aboutPage.closing}</p>
        </div>
      </section>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-blue py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">{t.servicesPage.title}</h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto mb-12">{t.servicesPage.intro}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition shadow-2xl uppercase tracking-widest"
            >
              {t.servicesPage.discussButton}
            </button>
            <a 
              href="tel:07563011244"
              className="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition shadow-2xl uppercase tracking-widest"
            >
              {t.servicesPage.callNowButton} 07563 011 244
            </a>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy uppercase tracking-tighter">Our Detailed Care Solutions</h2>
            <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">Each service is delivered by DBS-checked, trained professionals who understand the importance of dignity, respect, and person-centered care.</p>
          </div>

          <div className="space-y-40">
            {t.servicesPage.items.map((item, i) => {
              const isEven = i % 2 !== 0;
              const serviceImg = item.img || `https://images.unsplash.com/photo-${1581000000000 + i}?auto=format&fit=crop&q=80&w=800`;
              
              return (
                <div key={item.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                  {/* Image Side */}
                  <div className="lg:w-1/2 w-full relative group">
                    <div className={`absolute -inset-4 ${isEven ? 'bg-brand-orange' : 'bg-brand-blue'} rounded-[3rem] opacity-10 blur-2xl transition duration-500 group-hover:opacity-20`}></div>
                    <div className="relative h-[295px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                      <img src={serviceImg} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-brand-blue to-indigo-600 rounded-full flex items-center justify-center text-4xl shadow-2xl border-2 border-white/20">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-1/2 space-y-10">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-black text-brand-orange uppercase tracking-tighter leading-none">{item.title}</h3>
                      <p className="text-xl text-slate-600 font-medium leading-relaxed">{item.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <h4 className="text-lg font-black text-brand-blue uppercase tracking-widest border-b-2 border-brand-blue/20 pb-2">{t.servicesPage.whatsIncludedLabel}</h4>
                        <ul className="space-y-3">
                          {item.whatsIncluded?.map((point, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-slate-500 text-sm font-bold">
                              <svg className="w-5 h-5 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-black text-brand-orange uppercase tracking-widest border-b-2 border-brand-orange/20 pb-2">{t.servicesPage.practicalExamplesLabel}</h4>
                        <ul className="space-y-3">
                          {item.practicalExamples?.map((example, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-slate-500 text-sm font-bold">
                              <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-brand-blue/5 p-8 rounded-3xl border-l-8 border-brand-blue">
                      <p className="text-brand-navy font-bold italic leading-relaxed">"{item.reassurance}"</p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <button 
                        onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
                        className="bg-brand-orange text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition shadow-xl flex items-center space-x-2"
                      >
                        <span>{t.servicesPage.discussButton}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </button>
                      <a 
                        href="tel:07563011244"
                        className="bg-white border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-brand-blue hover:text-white transition shadow-sm flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1"/></svg>
                        <span>{t.servicesPage.callNowButton}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-orange py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Serving Families Across the West Midlands</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Tipton', 'Dudley', 'West Bromwich', 'Oldbury', 'Sandwell', 'Wednesbury', 'Wolverhampton', 'Stourbridge'].map(area => (
              <span key={area} className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest border border-white/30">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-900 py-32 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">{t.servicesPage.closingTitle}</h2>
          <p className="text-xl text-slate-400 font-medium mb-10">{t.servicesPage.closingText}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-brand-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-orange-600 transition shadow-2xl uppercase tracking-widest"
            >
              {t.servicesPage.discussButton}
            </button>
            <a 
              href="tel:07563011244"
              className="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/20 transition shadow-2xl uppercase tracking-widest"
            >
              07563 011 244
            </a>
            <a 
              href="https://wa.me/447563011244" 
              target="_blank"
              className="bg-green-500 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-green-600 transition shadow-2xl uppercase tracking-widest flex items-center space-x-3"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.066l-.694 2.542 2.6-.682c.731.4 1.704.605 2.836.605 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.731-5.767-5.731zm3.385 8.165c-.147.414-.753.754-1.043.801-.284.046-.643.081-1.043-.053-.242-.08-.54-.185-.916-.35-.558-.246-1.127-.63-1.635-1.138-.508-.508-.892-1.077-1.138-1.635-.165-.376-.27-.674-.35-.916-.134-.4-.1-.759-.053-1.043.047-.29.387-.896.801-1.043l.261-.093c.125-.045.26-.04.382.015l.69.313c.118.053.185.166.164.293l-.128.847c-.015.093.03.185.112.23l.31.17c.18.098.384.152.593.152.174 0 .344-.038.5-.11l.365-.164c.092-.042.196-.03.277.034l.79.625c.103.082.13.23.064.343l-.337.568z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Scroll to top of section for form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => setOpenIndex(openIndex === id ? null : id);

  return (
    <div className="animate-fadeIn">
      <section className="bg-brand-navy py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8">{t.faqPage.title}</h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">{t.faqPage.intro}</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {t.faqPage.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-6">
              <h2 className="text-xl font-black text-brand-blue uppercase tracking-[0.3em] mb-8">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item, iIdx) => {
                  const id = `${sIdx}-${iIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={id} className="border border-slate-100 rounded-3xl overflow-hidden hover:border-brand-blue transition">
                      <button 
                        onClick={() => toggle(id)}
                        className="w-full flex justify-between items-center p-8 text-left bg-white hover:bg-slate-50 transition"
                      >
                        <span className="text-lg font-black text-slate-900 uppercase tracking-tight">{item.q}</span>
                        <svg className={`w-6 h-6 text-brand-blue transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/></svg>
                      </button>
                      {isOpen && (
                        <div className="p-8 bg-slate-50 border-t border-slate-100 animate-slideDown">
                          <p className="text-slate-600 font-medium leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <p className="text-center pt-20 text-slate-500 font-bold">{t.faqPage.closing}</p>
        </div>
      </section>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const { t, setPage, setSlug } = useContext(LanguageContext);
  return (
    <div className="animate-fadeIn">
      <section className="bg-brand-navy py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8">{t.blogPage.title}</h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">{t.blogPage.intro}</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.blogPage.posts.map((post) => (
              <div key={post.slug} className="group cursor-pointer" onClick={() => { setSlug(post.slug); setPage('article'); window.scrollTo(0,0); }}>
                <div className="aspect-[16/10] bg-slate-100 rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition duration-500">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight group-hover:text-brand-blue transition">{post.title}</h2>
                  <p className="text-slate-500 font-medium line-clamp-3">{post.excerpt}</p>
                  <div className="pt-4 flex items-center space-x-2 text-brand-blue font-black text-[10px] uppercase tracking-[0.2em]">
                    <span>{t.blogPage.readMore}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ArticlePage: React.FC = () => {
  const { t, currentSlug, setPage } = useContext(LanguageContext);
  const post = t.blogPage.posts.find(p => p.slug === currentSlug);

  if (!post) {
    return null;
  }

  return (
    <div className="animate-fadeIn">
      <article className="max-w-4xl mx-auto px-4 py-24">
        <button onClick={() => setPage('blog')} className="flex items-center space-x-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:text-brand-blue transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
          <span>Back to Articles</span>
        </button>
        
        <header className="space-y-8 mb-16">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">{post.category}</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.date} • {post.readTime} {t.blogPage.readTimeLabel}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">{post.title}</h1>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed italic border-l-8 border-brand-orange pl-8">{post.intro}</p>
        </header>

        <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden mb-20 shadow-2xl">
           <img src="https://images.unsplash.com/photo-1516703757599-9473633ac1ad?auto=format&fit=crop&q=80&w=1600" alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-16">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{section.heading}</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">{section.body}</p>
              {section.bullets && (
                <ul className="space-y-4 pt-4">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-lg text-slate-600 font-bold">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-24 p-12 md:p-20 bg-brand-navy rounded-[4rem] text-center text-white space-y-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent"></div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter relative">{t.blogPage.articleCtaText}</h3>
          <button 
             onClick={() => { setPage('home'); setTimeout(() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'}), 100); }}
             className="bg-brand-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-orange-600 transition shadow-2xl uppercase tracking-widest relative active:scale-95"
          >
            {t.blogPage.articleCtaButton}
          </button>
        </div>
      </article>
    </div>
  );
};

// --- Main App Shell ---

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

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-blue/10 selection:text-brand-navy scroll-smooth">
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
          className="fixed bottom-8 right-8 bg-green-500 text-white w-20 h-20 rounded-[2rem] shadow-[0_20px_50px_rgba(34,197,94,0.4)] flex items-center justify-center z-50 hover:bg-green-600 transition-all hover:scale-110 active:scale-95 lg:hidden animate-bounce border-4 border-white"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1"/></svg>
        </a>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;

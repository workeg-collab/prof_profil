import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/201142466903?text=" + encodeURIComponent(
    isRtl 
      ? "مرحباً شركة المحترف للتجارة والمقاولات والتوريدات، أود الاستفسار عن خدمات وأنظمة التوريد والمقاولات"
      : "Hello Professional Trading, Contracting & Supplies, I would like to inquire about your services"
  );

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-200' : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand & Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="w-11 h-11 object-contain rounded-xl bg-slate-50 p-1 border border-amber-200 shadow-md group-hover:scale-105 transition-transform" 
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-black text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                {isRtl ? 'شركة المحترف' : 'Al-Mohtaraf'}
              </span>
              <span className="bg-amber-100 text-amber-800 text-[11px] font-extrabold px-2 py-0.5 rounded-full border border-amber-300">
                {isRtl ? 'للمقاولات والتوريدات' : 'Contracting & Supplies'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Professional Contracting & Supplies Co.</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 text-xs xl:text-sm font-bold text-slate-700">
          <a href="#hero" className="hover:text-amber-600 transition-colors">{isRtl ? 'الرئيسية' : 'Home'}</a>
          <a href="#about" className="hover:text-amber-600 transition-colors">{isRtl ? 'عن الشركة' : 'About Us'}</a>
          <a href="#policies" className="hover:text-amber-600 transition-colors">{isRtl ? 'سياسة الرضا' : 'Policies'}</a>
          <a href="#services" className="hover:text-amber-600 transition-colors">{isRtl ? 'خدماتنا (12)' : 'Services'}</a>
          <a href="#contracting" className="hover:text-amber-600 transition-colors font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">{isRtl ? 'قسم المقاولات' : 'Contracting'}</a>
          <a href="#clients" className="hover:text-amber-600 transition-colors">{isRtl ? 'العملاء' : 'Clients'}</a>
          <a href="#quote" className="hover:text-amber-600 transition-colors">{isRtl ? 'طلب عرض سعر' : 'Get Quote'}</a>
          <a href="#contact" className="hover:text-amber-600 transition-colors">{isRtl ? 'تواصل معنا' : 'Contact'}</a>
        </nav>

        {/* Quick Contact & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-3 py-2 rounded-xl text-xs font-black transition-all shadow-sm"
            title="Switch Language"
          >
            <Globe className="w-4 h-4 text-amber-600" />
            <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          <a 
            href="tel:01142466903"
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-slate-200"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span dir="ltr">01142466903</span>
          </a>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{isRtl ? 'واتساب مباشر' : 'WhatsApp Us'}</span>
          </a>
        </div>

        {/* Mobile Menu Button & Lang Switcher */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-1.5 rounded-lg text-xs font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 text-sm font-bold text-slate-800 shadow-xl">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">{isRtl ? 'الرئيسية' : 'Home'}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">{isRtl ? 'عن المحترف' : 'About Us'}</a>
          <a href="#policies" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">{isRtl ? 'سياسة إرضاء العملاء' : 'Policies'}</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">{isRtl ? 'خدماتنا وأنظمتنا (12)' : 'Services (12)'}</a>
          <a href="#contracting" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 text-amber-700 font-black">{isRtl ? 'قسم المقاولات العامة' : 'Contracting Sector'}</a>
          <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">{isRtl ? 'عملاؤنا' : 'Clients'}</a>
          <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">{isRtl ? 'طلب عرض سعر' : 'Get Quote'}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-amber-600 font-extrabold">{isRtl ? 'تواصل معنا' : 'Contact Us'}</a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 py-2.5 rounded-xl font-bold"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'ar' ? 'التحويل إلى English' : 'Switch to العربية'}</span>
            </button>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{isRtl ? 'تواصل عبر الواتساب' : 'WhatsApp Chat'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

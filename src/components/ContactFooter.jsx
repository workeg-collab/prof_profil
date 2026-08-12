import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Coffee, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactFooter() {
  const { isRtl } = useLanguage();

  const whatsappLink = "https://wa.me/201142466903?text=" + encodeURIComponent(
    isRtl ? "مرحباً شركة المحترف للتجارة والتوريدات" : "Hello Professional Trading & Supplies Co."
  );

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Top Friendly Coffee Invitation Box */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
            <Coffee className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">
            {isRtl ? 'أسئلة؟ تعليقات؟ مخاوف؟' : 'Questions? Comments? Concerns?'}
          </h3>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {isRtl
              ? 'اتصل بنا لمناقشة أي شيء تريده، أو ببساطة اترك سطراً لتلقي التحية. نحن نحب القهوة (الافتراضية) ونرحب دائماً بالفرصة.'
              : 'Contact us to discuss anything you need, or simply drop a line to say hello. We love (virtual) coffee and always welcome new opportunities.'
            }
          </p>
        </div>

        {/* Contact Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone */}
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-3 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-200">{isRtl ? 'أرقام التواصل والمبيعات' : 'Sales & Support Numbers'}</h4>
              <p className="text-amber-400 font-black text-base pt-1" dir="ltr">01142466903</p>
              <p className="text-amber-400 font-black text-base" dir="ltr">01060958991</p>
              <p className="text-slate-400 text-xs pt-1">{isRtl ? 'خدمة الاستفسارات الفنية والمشتريات' : 'Technical & Procurement Inquiries'}</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-3 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-200">{isRtl ? 'البريد الإلكتروني الرسمي' : 'Official Email & Web'}</h4>
              <p className="text-blue-400 font-bold text-sm pt-1 select-all font-mono">profegypt2015@gmail.com</p>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-slate-300">profegypt.ml</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-3 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-200">{isRtl ? 'العنوان والمقر الرئيسي' : 'Headquarters Address'}</h4>
              <p className="text-slate-300 font-bold text-xs pt-1 leading-relaxed">
                {isRtl ? '86 عمارات الشركة السعودية - حدائق القبة - القاهرة' : '86 Saudi Co. Buildings - Hadaek El-Kobbah - Cairo'}
              </p>
              <p className="text-slate-400 text-xs pt-1">Egypt</p>
            </div>
          </div>

        </div>

        {/* Footer Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-slate-800 pt-12">
          
          {/* Col 1: About */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-xl bg-white p-1" />
              <div>
                <h3 className="text-lg font-black text-slate-100">{isRtl ? 'شركة المحترف للتجارة والتوريدات' : 'Professional Trading & Supplies'}</h3>
                <p className="text-xs text-amber-400 font-bold">Professional Trading & Supplies Co.</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {isRtl 
                ? 'شركة مبتكرة وتقدمية أنشئت في العام 2007، متخصصة في التصميم والتوزيع وتركيب وصيانة أنظمة المراقبة وشبكات اتصالات البيانات وكافة الحلول التكنولوجية المتكاملة.'
                : 'An innovative enterprise founded in 2007 specializing in the design, distribution, installation, and maintenance of surveillance systems, data networks, and IT solutions.'
              }
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{isRtl ? 'مواعيد العمل: طوال أيام الأسبوع لخدمتكم' : 'Working Hours: 7 Days a week at your service'}</span>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-extrabold text-slate-200 text-sm">{isRtl ? 'أقسام الموقع' : 'Quick Links'}</h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">{isRtl ? 'الرئيسية' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">{isRtl ? 'عن الشركة' : 'About Us'}</a></li>
              <li><a href="#policies" className="hover:text-amber-400 transition-colors">{isRtl ? 'سياسة إرضاء العملاء' : 'Policies'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{isRtl ? 'خدماتنا وأنظمتنا (12)' : 'Services (12)'}</a></li>
              <li><a href="#clients" className="hover:text-amber-400 transition-colors">{isRtl ? 'قائمة العملاء' : 'Clients'}</a></li>
              <li><a href="#quote" className="hover:text-amber-400 transition-colors">{isRtl ? 'طلب عرض سعر' : 'Get Quote'}</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Action */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-extrabold text-slate-200 text-sm">{isRtl ? 'تواصل مباشر واتساب' : 'Direct WhatsApp Chat'}</h4>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'فريق المبيعات والدعم الفني بشركة المحترف متواجد فوراً للرد على استفساراتكم وتوفير الدراسة الفنية والكتالوجات.'
                : 'Our sales and engineering team is online to respond to your inquiries and provide technical catalogs.'
              }
            </p>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{isRtl ? 'محادثة واتساب مباشرة (01142466903)' : 'WhatsApp Live Chat (01142466903)'}</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Professional Trading & Supplies Co. - {isRtl ? 'جميع الحقوق محفوظة.' : 'All Rights Reserved.'}</p>
        </div>

      </div>
    </footer>
  );
}

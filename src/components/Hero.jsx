import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Truck, 
  Building2, 
  ArrowLeft,
  Zap,
  Sparkles,
  Camera,
  Network
} from 'lucide-react';

export default function Hero() {
  const whatsappLink = "https://wa.me/201142466903?text=" + encodeURIComponent("مرحباً شركة المحترف للتجارة والتوريدات، أود الاستفسار عن أنظمة المراقبة والحلول التكنولوجية");

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-amber-50/70 via-slate-50 to-white border-b border-slate-200">
      
      {/* Background Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Main Text Content */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300/80 text-amber-900 text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>أنشئت عام 2007 — حلول تكنولوجية متكاملة توحي بالثقة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight">
              شركة المحترف <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900">
                للتجارة والتوريدات
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              شركة مبتكرة وتقدمية متخصصة في التصميم، التوزيع، تركيب وصيانة <strong className="text-slate-900">أنظمة المراقبة</strong> وشبكات <strong className="text-slate-900">اتصالات البيانات</strong> والحلول المتكاملة للأجهزة والبرامج والبنية التحتية.
            </p>

            {/* Hero Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-slate-700 text-xs md:text-sm font-bold">
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-2xl border border-slate-200 shadow-sm">
                <Camera className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>أنظمة مراقبة وكاميرات فائقة الدقة</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-2xl border border-slate-200 shadow-sm">
                <Network className="w-5 h-5 text-amber-600 shrink-0" />
                <span>حلول البنية التحتية والشبكات</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-2xl border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>أنظمة التحكم بالدخول والإنذار المبكر</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-2xl border border-slate-200 shadow-sm">
                <Award className="w-5 h-5 text-amber-600 shrink-0" />
                <span>قائمة عريقة من العملاء الحكوميين والخاصين</span>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-extrabold text-sm md:text-base px-7 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>استشارة فنية وعرض سعر فوري</span>
              </a>

              <a
                href="#services"
                className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-extrabold text-sm md:text-base px-6 py-4 rounded-2xl shadow-sm transition-all hover:border-slate-400"
              >
                <span>استكشف كافة الخدمات (12 خدمة)</span>
                <ArrowLeft className="w-4 h-4 text-amber-600" />
              </a>
            </div>

          </div>

          {/* Left Column: Visual Banner & Stats Box */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src="/images/hero.jpg" 
                alt="أنظمة المراقبة والشبكات شركة المحترف" 
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

              {/* Overlay Badge */}
              <div className="absolute bottom-4 right-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-xl shadow-md">
                    2007
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">عام التأسيس والبداية</h4>
                    <p className="text-xs text-slate-500">خبرة متواصلة في التوريد وخدمات ما بعد البيع</p>
                  </div>
                </div>
                <div className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                  حلول مهنية 100%
                </div>
              </div>
            </div>

            {/* Decorative Floating Card */}
            <div className="hidden sm:flex absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold">شركاء النجاح</div>
                <div className="text-base font-black text-slate-900">كبرى القطاعات الحكومية والخاصة</div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

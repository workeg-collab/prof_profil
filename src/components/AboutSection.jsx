import React from 'react';
import { Building2, Target, Lightbulb, Compass, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { isRtl } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <Building2 className="w-4 h-4 text-amber-600" />
            <span>{isRtl ? 'نبذة عن المحترف للتجارة والتوريدات' : 'About Professional Trading & Supplies'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {isRtl ? 'حلول تكنولوجية متكاملة تمنحك الثقة والأداء الفائق' : 'Integrated Technology Solutions Inspiring Confidence & Superior Performance'}
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            {isRtl ? (
              <>
                أنشئت شركة المحترف في العام <strong className="text-slate-900 font-black">2007</strong>، وهي شركة مبتكرة وتقدمية متخصصة في التصميم والتوزيع وتركيب وصيانة أنظمة المراقبة وشبكات اتصالات البيانات. على مدار سنوات، أنشأت الشركة قائمة محترمة من العملاء الراضين عن الحلول المهنية وخدمات ما بعد البيع المتميزة.
              </>
            ) : (
              <>
                Established in <strong className="text-slate-900 font-black">2007</strong>, Professional Trading & Supplies is an innovative and progressive company specializing in the design, distribution, installation, and maintenance of surveillance systems and data communication networks. Over the years, we have built a respected roster of satisfied clients with professional solutions and post-sales support.
              </>
            )}
          </p>
        </div>

        {/* Mission, Goal & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: المهام / Mission */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-3">
                {isRtl ? 'مهام الشركة' : 'Company Mission'}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {isRtl 
                  ? 'ابتكار وإلهام المستهلكين. نخلق تجربة غيرت الحياة من خلال جودة منتجاتنا وخدماتنا. نحن نقدم أرضية مشتركة لجميع الناس في جميع أنحاء العالم.'
                  : 'Innovate and inspire consumers. We create life-changing experiences through the quality of our products and services. We provide common ground for people across the globe.'
                }
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-amber-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>{isRtl ? 'ابتكار • تجربة متميزة • شمولية' : 'Innovation • Quality • Global Ground'}</span>
            </div>
          </div>

          {/* Card 2: الهدف / Goal */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center shadow-lg shadow-amber-400/20">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-amber-400 border-b border-slate-800 pb-3">
                {isRtl ? 'هدف الشركة' : 'Company Goal'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {isRtl
                  ? 'غالباً ما تكون حلول الأجهزة والبرامج هي أغلى استثمارات تكنولوجيا المعلومات التي تقوم بها شركتك، لذلك يضمن فريقنا التكنولوجي تحديث أجهزتك وبرامجك وأداءها بأعلى معايير الجودة.'
                  : 'Hardware and software solutions are often the most expensive IT investments your company makes. Our tech team ensures your hardware and software are updated and performing at peak quality standards.'
                }
              </p>
              <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-2xl">
                <p className="text-xs font-bold text-amber-300 text-center">
                  {isRtl ? '"هدفنا: إلهام الثقة من أجل عالم أكثر مرونة."' : '"Our Goal: Inspiring confidence for a more resilient world."'}
                </p>
              </div>
            </div>
            <div className="pt-2 text-xs font-bold text-amber-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>{isRtl ? 'جودة الاستثمار • تحديث وحماية • مرونة' : 'Investment Quality • Resilience • Upgrades'}</span>
            </div>
          </div>

          {/* Card 3: الرؤية / Vision */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-3">
                {isRtl ? 'رؤية الشركة' : 'Company Vision'}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {isRtl
                  ? 'تزويد عملائنا بمتطلبات التكنولوجيا الحديثة بالشكل الأنسب المصمم خصيصاً لاحتياجاتهم الخاصة. يسهل التعامل مع المعلومات التي تم تصميمها مع إيلاء اعتبار خاص لميزانية العملاء ومتطلباتهم المحددة.'
                  : 'Providing our clients with modern technology tailored to their specific needs. Information is designed to be easily manageable with special consideration for clients budgets and requirements.'
                }
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-amber-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>{isRtl ? 'حلول مخصصة • ملائمة الميزانية • سهولة الوصول' : 'Tailored Solutions • Budget Friendly • Simplicity'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

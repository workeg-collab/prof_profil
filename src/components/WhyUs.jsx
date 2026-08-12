import React from 'react';
import { ShieldCheck, Clock, Award, DollarSign, Headphones, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      title: 'التزام تام ودقيق بمواعيد التسليم',
      desc: 'نعلم أهمية الوقت في إدارة المصانع والمشروعات؛ لذا نلتزم بالجدول الزمني المحدد بدون أي تأخير.',
      icon: <Clock className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'أعلى معايير الجودة والمواصفات القياسية',
      desc: 'جميع المنتجات والخامات والمعدات الموردة تأتي مع شهادات جودة واختبارات فنية معتمدة رسمياً.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'أسعار تنافسية وتسهيلات سداد مرنة',
      desc: 'نوفر لشركائنا أسعار توريد متميزة من المصادر المباشرة مع أنظمة سداد وتسهيلات تجارية مريحة.',
      icon: <DollarSign className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'فريق دعم فني وهندسي 24/7',
      desc: 'نوفر مهندسين وفنيين متخصصين لمتابعة عمليات التركيب والتجميع وتقديم الاستشارات الفنية.',
      icon: <Headphones className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'تنوع شمولى وتوريد متكامل',
      desc: 'قدرة على توريد كافة احتياجات منشأتك في طلب واحد بدلاً من التعامل مع عشرات الموردين.',
      icon: <Award className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'شراكات وتوكيلات دولية مباشرة',
      desc: 'علاقات ممتدة وتوكيلات مع كبرى الشركات المصنعة عالمياً توفر لك الأمان والموثوقية.',
      icon: <HeartHandshake className="w-6 h-6 text-amber-600" />
    }
  ];

  return (
    <section id="whyus" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <Award className="w-4 h-4 text-amber-600" />
            <span>مميزاتنا ونقاط قوتنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            لماذا تختار شركة المحترف لشراكتك التوريدية؟
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            نجمع بين الخبرة الطويلة، الموثوقية التامة، والأسعار المنافسة لنكون خيارك الأول والمستدام دائماً.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                {adv.icon}
              </div>
              <h3 className="text-base font-extrabold text-slate-900">{adv.title}</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

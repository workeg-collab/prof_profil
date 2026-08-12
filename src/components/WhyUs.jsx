import React from 'react';
import { ShieldCheck, Clock, Award, DollarSign, Headphones, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const { isRtl } = useLanguage();

  const advantages = [
    {
      titleAr: 'التزام تام ودقيق بمواعيد التسليم',
      titleEn: 'Strict Delivery Timelines',
      descAr: 'نعلم أهمية الوقت في إدارة المشروعات والمؤسسات؛ لذا نلتزم بالجدول الزمني المحدد بدون أي تأخير.',
      descEn: 'We understand the value of time in project execution, strictly adhering to timelines without delays.',
      icon: <Clock className="w-6 h-6 text-amber-600" />
    },
    {
      titleAr: 'أعلى معايير الجودة والمواصفات القياسية',
      titleEn: 'Highest Quality & Global Standards',
      descAr: 'جميع المنتجات والأنظمة والمعدات الموردة تأتي مع شهادات جودة واختبارات فنية معتمدة رسمياً.',
      descEn: 'All supplied products and surveillance systems carry official quality certification and test reports.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />
    },
    {
      titleAr: 'أسعار تنافسية وتسهيلات سداد مرنة',
      titleEn: 'Competitive Pricing & Flexible Terms',
      descAr: 'نوفر لشركائنا أسعار توريد متميزة من المصادر المباشرة مع أنظمة سداد وتسهيلات تجارية مريحة.',
      descEn: 'Providing direct factory pricing and flexible commercial payment terms for our partners.',
      icon: <DollarSign className="w-6 h-6 text-amber-600" />
    },
    {
      titleAr: 'فريق دعم فني وهندسي 24/7',
      titleEn: '24/7 Technical & Engineering Support',
      descAr: 'نوفر مهندسين وفنيين متخصصين لمتابعة عمليات التركيب والتجميع وتقديم الاستشارات الفنية.',
      descEn: 'Dedicated specialized engineers for installation, testing, and continuous technical support.',
      icon: <Headphones className="w-6 h-6 text-amber-600" />
    },
    {
      titleAr: 'تنوع شمولى وتوريد متكامل',
      titleEn: 'Comprehensive One-Stop Solution',
      descAr: 'قدرة على توريد كافة احتياجات منشأتك في طلب واحد بدلاً من التعامل مع عشرات الموردين.',
      descEn: 'Fulfilling all your facility IT and security needs under one single trusted contract.',
      icon: <Award className="w-6 h-6 text-amber-600" />
    },
    {
      titleAr: 'شراكات وتوكيلات دولية مباشرة',
      titleEn: 'Direct International Partnerships',
      descAr: 'علاقات ممتدة وتوكيلات مع كبرى الشركات المصنعة عالمياً توفر لك الأمان والموثوقية.',
      descEn: 'Long-standing agency relationships with top global manufacturers for complete peace of mind.',
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
            <span>{isRtl ? 'مميزاتنا ونقاط قوتنا' : 'Why Choose Us'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {isRtl ? 'لماذا تختار شركة المحترف لشراكتك التوريدية والتكنولوجية؟' : 'Why Choose Professional Co. for Your Tech & Supply Partnership?'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {isRtl 
              ? 'نجمع بين الخبرة الطويلة، الموثوقية التامة، والأسعار المنافسة لنكون خيارك الأول والمستدام دائماً.'
              : 'Combining long expertise, total reliability, and competitive pricing to be your first sustainable choice.'
            }
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                {adv.icon}
              </div>
              <h3 className="text-base font-extrabold text-slate-900">{isRtl ? adv.titleAr : adv.titleEn}</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{isRtl ? adv.descAr : adv.descEn}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

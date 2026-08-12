import React from 'react';
import { HeartHandshake, ShieldCheck, Headphones, MessageSquareText, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CompanyPolicies() {
  const { isRtl } = useLanguage();

  const pillars = [
    {
      titleAr: '01. التعامل مع العميل بصدق',
      titleEn: '01. Honest & Sincere Customer Relations',
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      descAr: 'يتعين علينا التعامل مع عملائنا بصدق وإخلاص، فهذه الصفات تلعب دوراً مهماً في كسب رضا العملاء وإخلاصهم على المدى البعيد. كما يجب علينا الحرص على تقديم خدمة متميزة باستمرار والالتزام بأداء واجباتنا تجاه العملاء على أكمل وجه، مع توفير حلول مبتكرة لكافة المشاكل التي قد تواجه العميل. فإنعدام المصداقية يؤثر سلباً على موظفينا، وعلى الشركة وسمعتها.',
      descEn: 'Honesty and sincerity are crucial in winning customer satisfaction and long-term loyalty. We consistently deliver outstanding service, fulfill our obligations, and provide innovative solutions to any challenges clients face.'
    },
    {
      titleAr: '02. الاستماع إلى العميل والاهتمام بملاحظاتهم',
      titleEn: '02. Active Listening & Valuing Client Feedback',
      icon: <MessageSquareText className="w-6 h-6 text-amber-600" />,
      descAr: 'يعد الاستماع إلى ملاحظات عملائنا أفضل وسيلة لكسب ولائهم وثقتهم على المدى الطويل. حيث يجب على موظفينا الاستماع جيداً لملاحظات العملاء والسعي لتطبيقها عملياً، فموظفونا متميزون ويضعون أنفسهم مكان العميل ويتفهمون آراءه ووجهات نظره المختلفة.',
      descEn: 'Listening to client feedback is the single best way to earn long-term trust. Our team actively listens to client remarks, applies them practically, and puts themselves in the clients shoes.'
    },
    {
      titleAr: '03. الحرص على التواصل الدائم',
      titleEn: '03. Constant Communication & Dedicated Support',
      icon: <Headphones className="w-6 h-6 text-amber-600" />,
      descAr: 'قد يكون التواصل السيء هو السبب الرئيسي الذي يدفع العملاء إلى البحث عن شركات أخرى تبدي اهتماماً أكبر بعملائها وتلبي احتياجاتهم بفعالية أكبر. لذا يتعين حرصنا على إنشاء قسم خاص بخدمة العملاء يهدف إلى خدمتهم بطريقة سريعة وفعّالة. وقمنا بتوظيف فريق عمل يتمتعون بمهارات تواصل جيدة، وحرصنا على تزويدهم بدورات تدريبية حول كيفية تقديم خدمة متميزة للعملاء، وتلبية احتياجاتهم ومتطلباتهم بفعالية.',
      descEn: 'Poor communication drives clients away. We established a dedicated, rapid-response customer service department. Our team undergoes continuous communication training to serve client requirements effectively.'
    }
  ];

  return (
    <section id="policies" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <HeartHandshake className="w-4 h-4 text-amber-600" />
            <span>{isRtl ? 'سياسات الشركة ورضا العملاء' : 'Company Policies & Client Satisfaction'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {isRtl ? 'سياسة الشركة نحو سوق العمل وإرضاء عملائها' : 'Company Policies Towards the Job Market & Client Satisfaction'}
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            {isRtl ? (
              <>
                في ظل سوق العمل الحالي الذي تتنافس فيه آلاف الشركات لجذب العملاء والاحتفاظ بهم، يتعين على شركتنا التميّز بالعمل على تبني السياسات والأساليب التي ترتكز بشكل رئيسي على العميل وكسب رضاه، فتقديم خدمة عملاء متميزة هو المعيار الوحيد الذي يميّز أفضل المهنيين لدينا عن غيرهم، وهو الذي يساهم في تعزيز أرباح الشركة وصورتها.
              </>
            ) : (
              <>
                In todays competitive market where thousands of companies compete for clients, our company stands out by adopting customer-centric policies. Providing outstanding customer service is our sole benchmark distinguishing top professionals and building brand image.
              </>
            )}
          </p>
        </div>

        {/* Market Adaptation Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>{isRtl ? 'مواكبة سوق العمل العالمي والتطوير المستمر' : 'Adapting to Global Market Trends & Development'}</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              {isRtl ? 'سياسات الشركة نحو سوق العمل والتأهيل الفني' : 'Company Policies Towards the Job Market & Technical Training'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isRtl
                ? 'حرصاً منا على مواكبة سوق العمل المحلي قمنا باتباع أحدث وسائل التواصل مع السوق العالمي لتطوير العملية التسويقية من خلال حضور دورات تدريبية لفريق العمل بالشركة لنقل الخبرات المختلفة والوصول إلى أفضل النتائج التي ترضي عملائنا والحفاظ على سمعة شركتنا.'
                : 'To keep pace with the local and global market, we employ modern communication and marketing strategies. Our team regularly attends international training courses to transfer expertise, achieve superior results, and preserve company reputation.'
              }
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl text-center space-y-2 shrink-0 min-w-[240px]">
            <Users className="w-10 h-10 text-amber-400 mx-auto" />
            <div className="text-2xl font-black text-white">{isRtl ? 'فريق تدريب متخصص' : 'Specialized Team Training'}</div>
            <div className="text-xs text-slate-300">{isRtl ? 'دورات مستمرة في خدمة العملاء والحلول التكنولوجية' : 'Continuous Courses in CS & Tech Solutions'}</div>
          </div>
        </div>

        {/* 3 Customer Satisfaction Pillars */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-900">
              {isRtl ? 'سياسة الشركة في إرضاء عملائها تتلخص في الآتي:' : 'Our 3 Pillars of Client Satisfaction:'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-black text-slate-900">
                    {isRtl ? pillar.titleAr : pillar.titleEn}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {isRtl ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

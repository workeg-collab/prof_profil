import React, { useState } from 'react';
import { Building2, Award, Landmark, Briefcase, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ClientsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const { isRtl } = useLanguage();

  const govClients = [
    { nameAr: 'جهاز الأمن الوطني', nameEn: 'National Security Agency', code: 'NSA' },
    { nameAr: 'وزارة الداخلية', nameEn: 'Ministry of Interior', code: 'MoI' },
    { nameAr: 'الهيئة العربية للتصنيع', nameEn: 'Arab Organization for Industrialization', code: 'AOI' },
    { nameAr: 'مكتبة الإسكندرية (مكتبة الإسكندرية الجديدة)', nameEn: 'Bibliotheca Alexandrina', code: 'BibAlex' },
    { nameAr: 'شبكة الجامعات المصرية', nameEn: 'Egyptian Universities Network', code: 'EUN' },
    { nameAr: 'وزارة الدفاع - القوات الجوية', nameEn: 'Ministry of Defense - Air Force', code: 'Air Force' },
    { nameAr: 'وزارة الدفاع - القوات المسلحة', nameEn: 'Ministry of Defense - Armed Forces', code: 'Armed Forces' },
    { nameAr: 'وزارة التجارة والصناعة', nameEn: 'Ministry of Trade & Industry', code: 'MoCI' },
    { nameAr: 'وزارة الكهرباء والطاقة المتجددة', nameEn: 'Ministry of Electricity & Renewable Energy', code: 'MOEE' },
    { nameAr: 'الهيئة القومية للإنتاج الحربي', nameEn: 'National Authority for Military Production', code: 'NSPO / MP' },
    { nameAr: 'وزارة الإنتاج الحربي', nameEn: 'Ministry of Military Production', code: 'MoMP' },
    { nameAr: 'وزارة التضامن الاجتماعي', nameEn: 'Ministry of Social Solidarity', code: 'MoSS' },
    { nameAr: 'مؤسسات حكومية وهيئات رسمية أخرى...', nameEn: 'Other Governmental Agencies...', code: 'Etc.' }
  ];

  const privateClients = [
    { nameAr: 'شركة ماستر جاز', nameEn: 'Master Gas Company', code: 'Master Gas' },
    { nameAr: 'شركة امحوتس / امحوسس', nameEn: 'EMHOSUS Company', code: 'EMHOSUS' },
    { nameAr: 'تكنولوجيا الكمبيوتر المتقدمة', nameEn: 'Advanced Computer Technology', code: 'ACT' },
    { nameAr: 'خدمات فوجيتسو - مصر', nameEn: 'Fujitsu Services - Egypt', code: 'Fujitsu Egypt' },
    { nameAr: 'آي بي إم مصر', nameEn: 'IBM Egypt', code: 'IBM Egypt' },
    { nameAr: 'مصرتك - مصر للتكنولوجيا والمشروعات', nameEn: 'MisrTech for Technology & Projects', code: 'MisrTech' },
    { nameAr: 'ميست - مصر لخدمات المعلومات والتجارة', nameEn: 'MEST - Information & Trade Services', code: 'MEST' },
    { nameAr: 'أوراسكوم للحلول التكنولوجية', nameEn: 'Orascom Technology Solutions', code: 'OTS' },
    { nameAr: 'رايا التكامل', nameEn: 'Raya Integration', code: 'Raya Integration' },
    { nameAr: 'هندسة النظم المصرية', nameEn: 'Systems Engineering Egypt', code: 'SEE' },
    { nameAr: 'هندسة الاتصال الداخلي PACC', nameEn: 'PACC Systems Engineering', code: 'PACC' },
    { nameAr: 'شركات ومؤسسات خاصة أخرى...', nameEn: 'Other Private Enterprises...', code: 'Etc.' }
  ];

  return (
    <section id="clients" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{isRtl ? 'شركاء النجاح والسابقة العريقة' : 'Our Track Record & Partners'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            {isRtl ? 'نبذة عن عملائنا الراضين عن خدمات المحترف' : 'Our Prestigious Clients & Partners'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {isRtl 
              ? 'أنشأت شركة المحترف منذ عام 2007 قائمة محترمة من العملاء والشركاء في القطاعين الحكومي والخاص بفضل جودة أنظمتنا وخدمات ما بعد البيع المتميزة.'
              : 'Since 2007, Professional Trading & Supplies has built an esteemed portfolio of satisfied clients across government and private sectors.'
            }
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-2xl font-extrabold text-xs md:text-sm transition-all border ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            {isRtl ? 'جميع القطاعات' : 'All Sectors'}
          </button>
          <button
            onClick={() => setActiveTab('gov')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-extrabold text-xs md:text-sm transition-all border ${
              activeTab === 'gov'
                ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>{isRtl ? `القطاع الحكومي (${govClients.length - 1})` : `Government (${govClients.length - 1})`}</span>
          </button>
          <button
            onClick={() => setActiveTab('private')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-extrabold text-xs md:text-sm transition-all border ${
              activeTab === 'private'
                ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{isRtl ? `القطاع الخاص (${privateClients.length - 1})` : `Private Sector (${privateClients.length - 1})`}</span>
          </button>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Government Sector Block */}
          {(activeTab === 'all' || activeTab === 'gov') && (
            <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700/80 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{isRtl ? 'القطاع الحكومي والسيادي' : 'Government & Sovereign Sector'}</h3>
                    <p className="text-xs text-amber-400">{isRtl ? 'وزارات وهئيات وأجهزة أمنية' : 'Ministries, Security & National Authorities'}</p>
                  </div>
                </div>
                <span className="bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20">
                  {isRtl ? 'شراكات موثوقة' : 'Trusted Partnerships'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {govClients.map((client, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">{isRtl ? client.nameAr : client.nameEn}</h4>
                      <span className="text-[10px] text-slate-400 font-mono">{client.code}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Private Sector Block */}
          {(activeTab === 'all' || activeTab === 'private') && (
            <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700/80 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{isRtl ? 'القطاع الخاص والشركات' : 'Private Sector & Enterprises'}</h3>
                    <p className="text-xs text-blue-400">{isRtl ? 'شركات عالمية ومحلية رائدة' : 'Leading Global & Local Enterprises'}</p>
                  </div>
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
                  {isRtl ? 'حلول تقنية متميزة' : 'High-Performance Solutions'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {privateClients.map((client, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/60 hover:border-blue-500/50 transition-all flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">{isRtl ? client.nameAr : client.nameEn}</h4>
                      <span className="text-[10px] text-slate-400 font-mono">{client.code}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

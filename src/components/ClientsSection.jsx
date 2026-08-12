import React, { useState } from 'react';
import { Building2, Award, Landmark, Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ClientsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const govClients = [
    { name: 'الهيئة العربية للتصنيع', code: 'AOI' },
    { name: 'مكتبة الإسكندرية (مكتبة الإسكندرية الجديدة)', code: 'BibAlex' },
    { name: 'شبكة الجامعات المصرية', code: 'EUN' },
    { name: 'وزارة الدفاع - القوات الجوية', code: 'Air Force' },
    { name: 'وزارة الدفاع - القوات المسلحة', code: 'Armed Forces' },
    { name: 'وزارة التجارة والصناعة', code: 'MoCI' },
    { name: 'وزارة الكهرباء والطاقة المتجددة', code: 'MOEE' },
    { name: 'الهيئة القومية للإنتاج الحربي', code: 'NSPO / MP' },
    { name: 'وزارة الإنتاج الحربي', code: 'MoMP' },
    { name: 'وزارة التضامن الاجتماعي', code: 'MoSS' },
    { name: 'مؤسسات حكومية وهيئات رسمية أخرى...', code: 'Etc.' }
  ];

  const privateClients = [
    { name: 'تكنولوجيا الكمبيوتر المتقدمة', code: 'ACT' },
    { name: 'خدمات فوجيتسو - مصر', code: 'Fujitsu Egypt' },
    { name: 'آي بي إم مصر', code: 'IBM Egypt' },
    { name: 'مصرتك - مصر للتكنولوجيا والمشروعات', code: 'MisrTech' },
    { name: 'ميست - مصر لخدمات المعلومات والتجارة', code: 'MEST' },
    { name: 'أوراسكوم للحلول التكنولوجية', code: 'OTS' },
    { name: 'رايا التكامل', code: 'Raya Integration' },
    { name: 'هندسة النظم المصرية', code: 'SEE' },
    { name: 'هندسة الاتصال الداخلي PACC', code: 'PACC' },
    { name: 'شركات ومؤسسات خاصة أخرى...', code: 'Etc.' }
  ];

  return (
    <section id="clients" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <Award className="w-4 h-4 text-amber-400" />
            <span>شركاء النجاح والسابقة العريقة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            نبذة عن عملائنا الراضين عن خدمات المحترف
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            أنشأت شركة المحترف منذ عام 2007 قائمة محترمة من العملاء والشركاء في القطاعين الحكومي والخاص بفضل جودة أنظمتنا وخدمات ما بعد البيع المتميزة.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-2xl font-extrabold text-xs md:text-sm transition-all border ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            جميع القطاعات
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
            <span>القطاع الحكومي ({govClients.length - 1})</span>
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
            <span>القطاع الخاص ({privateClients.length - 1})</span>
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
                    <h3 className="text-xl font-black text-white">القطاع الحكومي والسيادي</h3>
                    <p className="text-xs text-amber-400">وزارات وهئيات وقوات مسلحة</p>
                  </div>
                </div>
                <span className="bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20">
                  شراكات موثوقة
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
                      <h4 className="text-xs font-bold text-slate-200">{client.name}</h4>
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
                    <h3 className="text-xl font-black text-white">القطاع الخاص والتكنولوجي</h3>
                    <p className="text-xs text-blue-400">شركات عالمية ومحلية رائدة</p>
                  </div>
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
                  حلول تقنية متميزة
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
                      <h4 className="text-xs font-bold text-slate-200">{client.name}</h4>
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

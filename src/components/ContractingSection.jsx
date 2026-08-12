import React, { useState } from 'react';
import { 
  HardHat, 
  Building, 
  Ruler, 
  Paintbrush, 
  Flame, 
  CheckCircle2, 
  MessageCircle, 
  Hammer, 
  Wrench, 
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContractingSection() {
  const [activeTab, setActiveTab] = useState('all');
  const { isRtl } = useLanguage();

  const categories = [
    { id: 'all', nameAr: 'جميع بنود المقاولات', nameEn: 'All Contracting Items' },
    { id: 'civil', nameAr: 'الإنشاءات والخرسانات', nameEn: 'Civil & Structural' },
    { id: 'finishings', nameAr: 'التشطيبات والديكور', nameEn: 'Architectural Finishings' },
    { id: 'mep', nameAr: 'الكهروميكانيك والسلامة MEP', nameEn: 'MEP & Safety Systems' }
  ];

  const items = [
    {
      id: 'c1',
      cat: 'civil',
      num: '01',
      titleAr: 'أعمال الحفر والأساسات والهياكل الخرسانية',
      titleEn: 'Excavation, Foundations & Reinforced Concrete',
      icon: <Building className="w-6 h-6 text-amber-600" />,
      descAr: 'تجهيز الموقع وحفر ونزح المياه وتأهيل التربة، وتنفيد الهياكل الخرسانية المسلحة والقواعد والأسقف طبقاً للمواصفات الهندسية.',
      descEn: 'Site preparation, excavation, soil stabilization, and reinforced concrete structures built to strict engineering codes.',
      highlightsAr: ['حفر وتجهيز الأساسات والقواعد', 'صب الهياكل الخرسانية المسلحة', 'اختبارات ضغط الخرسانة والحديد المعتمد'],
      highlightsEn: ['Excavation & Footing Preparation', 'Reinforced Concrete Framework', 'Approved Concrete & Steel Pressure Testing']
    },
    {
      id: 'c2',
      cat: 'finishings',
      num: '02',
      titleAr: 'أعمال المباني والمحارة والبياض',
      titleEn: 'Masonry, Plastering & Render Works',
      icon: <Hammer className="w-6 h-6 text-amber-600" />,
      descAr: 'تنفيذ أعمال المباني والطقشورة، وبياض المحارة الداخلي والخارجي باستواء دقيق وتجهيز كامل لمراحل الدهانات.',
      descEn: 'Precision brickwork, interior and exterior plastering, render preparation ready for high-end paint application.',
      highlightsAr: ['مباني الطوب الإسمنتي والأحمر', 'محارة وحقن بجودة واستواء تام', 'تأهيل الحوائط والواجهات ضد العوامل الجوية'],
      highlightsEn: ['Brick & Concrete Masonry', 'Precision Plastering & Rendering', 'Weather-resistant Exterior Prep']
    },
    {
      id: 'c3',
      cat: 'finishings',
      num: '03',
      titleAr: 'الدهانات والطلاءات الديكورية والإيبوكسي',
      titleEn: 'Painting, Decorative Coatings & Industrial Epoxy',
      icon: <Paintbrush className="w-6 h-6 text-amber-600" />,
      descAr: 'تطبيق أحدث دهانات الجرافياتو، الدهانات البلاستيكية والزيتية الفاخرة، والأرضيات الإيبوكسية للمصانع والمستودعات.',
      descEn: 'Premium interior & exterior paint finishes, decorative coatings, and heavy-duty industrial epoxy floor systems.',
      highlightsAr: ['دهانات بلاستيكية وديكورية عالية الجودة', 'أرضيات إيبوكسية شديدة التحمل للمصانع', 'دهانات مقاومة للرطوبة والبكتيريا'],
      highlightsEn: ['High-Grade Interior & Exterior Paints', 'Heavy-Duty Industrial Epoxy Flooring', 'Anti-Bacterial & Moisture Resistant Paints']
    },
    {
      id: 'c4',
      cat: 'finishings',
      num: '04',
      titleAr: 'أعمال سيراميك، بورسلين، رخام وباركيه',
      titleEn: 'Flooring (Ceramic, Porcelain, Marble & Parquet)',
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      descAr: 'توريد وتركيب أرضيات وحوائط السيراميك، البورسلين، الرخام الطبيعي، الباركيه الخشبي، والوزرات بأعلى دقة تشطيب.',
      descEn: 'Supply and installation of ceramic, porcelain, natural marble, hardwood parquet, and skirting with master craftsmanship.',
      highlightsAr: ['تركيب سيراميك وبورسلين قص ليزر', 'جلي وتلميع الرخام الطبيعي', 'تركيب أرضيات باركيه ومقاومة للمياه'],
      highlightsEn: ['Laser-Cut Porcelain & Ceramic Tiling', 'Natural Marble Installation & Polishing', 'Waterproof Parquet & Skirting']
    },
    {
      id: 'c5',
      cat: 'finishings',
      num: '05',
      titleAr: 'الأسقف المعلقة، الجبس بورد والديكورات',
      titleEn: 'Gypsum Board, False Ceilings & Interior Joinery',
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      descAr: 'تصميم وتنفيذ أسقف الجبس بورد الحديثة، الأسقف البلاطات المعلقة للشركات، وتركيب بيوت النور والإضاءات المخفية.',
      descEn: 'Custom gypsum board ceiling designs, commercial suspended acoustic ceilings, concealed LED lighting coves.',
      highlightsAr: ['أسقف جبس بورد مضادة للرطوبة والحريق', 'بلاطات أسقف معلقة 60×60 للمكاتب', 'إضاءات مخفية وشاشات ديكورية'],
      highlightsEn: ['Moisture & Fire Resistant Gypsum Ceilings', 'Commercial 60x60 Suspended Ceiling Tiles', 'Concealed LED Cove Lighting']
    },
    {
      id: 'c6',
      cat: 'mep',
      num: '06',
      titleAr: 'التأسيسات والتمديدات الكهربائية واللوحات',
      titleEn: 'Electrical Installations, Wiring & Main Distribution',
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
      descAr: 'تأسيس شبكات الكهرباء، مد الكابلات، تجميع لوحات التوزيع الرئيسية والفرعية، وتركيب مفاتيح ووحدات الإضاءة.',
      descEn: 'Complete electrical wiring, main and sub-distribution panel assembly, cable trays, and architectural lighting fixture installation.',
      highlightsAr: ['تمديدات كابلات نحاسية معتمدة', 'لوحات توزيع وقواطع أوتوماتيكية', 'تأسيس شبكات إضاءة وتغذية قوى'],
      highlightsEn: ['Certified Copper Cable Laying', 'Main & Sub Distribution Panels', 'Power Supply & Lighting Circuits']
    },
    {
      id: 'c7',
      cat: 'mep',
      num: '07',
      titleAr: 'أعمال السباكة وتغذية وصرف المياه',
      titleEn: 'Plumbing, Water Supply & Drainage Networks',
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
      descAr: 'تنفيذ شبكات التغذية بالبطاريات والـ PPR الخضراء، شبكات الصرف الصحي الرمادي والأبيض، وتجهيز الحمامات والمطابخ.',
      descEn: 'PPR water supply manifold networks, PVC drainage piping systems, and luxury sanitary ware fitting installation.',
      highlightsAr: ['شبكات تغذية خضراء PPR مضغوطة', 'شبكات صرف حراري وصامت', 'تركيب الأطقم والخلاطات والأنظمة الذكية'],
      highlightsEn: ['Pressure-Tested Green PPR Water Pipes', 'Silent & Thermal PVC Drainage Networks', 'Luxury Sanitary Ware & Fixtures']
    },
    {
      id: 'c8',
      cat: 'mep',
      num: '08',
      titleAr: 'أنظمة التكييف المركزي والتهوية HVAC',
      titleEn: 'Central HVAC, Ducting & Ventilation Systems',
      icon: <Ruler className="w-6 h-6 text-amber-600" />,
      descAr: 'تصميم وتنفيذ مجاري الهواء (Duct)، تركيب أجهزة التكييف المركزي، الشيلرات، وأنظمة التبريد VRV / VRF للمباني.',
      descEn: 'Design & fabrication of HVAC air ducts, central chiller installation, VRV/VRF multi-split systems for commercial facilities.',
      highlightsAr: ['تصنيع وتركيب مجاري الهواء معزولة', 'أنظمة VRV / VRF موفرة للطاقة', 'تهوية واستخراج صاج للمطابخ والمصانع'],
      highlightsEn: ['Insulated Sheet Metal Air Duct Fabrication', 'Energy-Efficient VRV/VRF Systems', 'Kitchen Hoods & Industrial Ventilation']
    },
    {
      id: 'c9',
      cat: 'mep',
      num: '09',
      titleAr: 'أنظمة شبكات إطفاء الحريق والإنذار الآلي',
      titleEn: 'Fire Fighting & Automatic Alarm Networks',
      icon: <Flame className="w-6 h-6 text-amber-600" />,
      descAr: 'تركيب شبكات الرشاشات التلقائية (Sprinklers)، صناديق الحريق، مضخات الإطفاء المعتمدة، وحساسات كشف الدخان.',
      descEn: 'Installation of automatic sprinkler systems, fire hose cabinets, certified fire pumps, and smoke/heat alarm panels.',
      highlightsAr: ['شبكات رشاشات تلقائية Sprinklers', 'طلمبات ومضخات إطفاء معتمدة UL/FM', 'لوحات إنذار مبكر وكواشف دخان وحرارة'],
      highlightsEn: ['Automatic Fire Sprinkler Networks', 'UL/FM Certified Fire Pump Sets', 'Early Smoke/Heat Alarm Panels']
    },
    {
      id: 'c10',
      cat: 'finishings',
      num: '10',
      titleAr: 'الواجهات الخارجية، والكلادينج والزجاج',
      titleEn: 'Exterior Cladding, Aluminum & Glass Curtain Walls',
      icon: <Building className="w-6 h-6 text-amber-600" />,
      descAr: 'تكسية واجهات المباني بألواح الكلادينج المقاومة للحريق، قطاعات الألومنيوم الفاخرة، والواجهات الزجاجية الاستراكشر.',
      descEn: 'External building cladding with fire-rated aluminum composite panels, structural glass curtain walls, and double-glazed windows.',
      highlightsAr: ['ألواح كلادينج مضادة للحريق والمعتمدة', 'واجهات زجاجية استراكشر وسيستما ألومنيوم', 'عزل تام للصوت والحرارة والأتربة'],
      highlightsEn: ['Fire-Rated ACP Cladding Panels', 'Structural Glass & Aluminum Systems', 'Sound, Dust & Heat Insulation']
    },
    {
      id: 'c11',
      cat: 'civil',
      num: '11',
      titleAr: 'العزل المائي والحراري للأساسات والأسطح',
      titleEn: 'Waterproofing & Thermal Insulation Systems',
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      descAr: 'عزل القواعد والأساسات والأسطح والحمامات بأنسجة البتومين، الإنسومات، والفوم الرغوي لضمان حماية المنشأة 100%.',
      descEn: 'Bituminous membrane, acrylic elastomeric, and polyurethane foam insulation for roofs, wet areas, and underground structures.',
      highlightsAr: ['عزل ممبرين بتوميني مائل وحراري', 'عزل فوم بولي يوريثان للأسطح', 'اختبار مائي وضمان يصل إلى 10 سنوات'],
      highlightsEn: ['Bituminous Membrane Roofing Systems', 'Polyurethane Foam Thermal Insulation', 'Water Ponding Test & 10-Year Guarantee']
    },
    {
      id: 'c12',
      cat: 'civil',
      num: '12',
      titleAr: 'إدارة المشروعات والمقايسات والإشراف',
      titleEn: 'Project Management, BOQ & Site Supervision',
      icon: <HardHat className="w-6 h-6 text-amber-600" />,
      descAr: 'إعداد مقايسات بنود الأعمال BOQ، الجداول الزمنية المعتمدة، والإشراف الهندسي الكامل على استلام البنود طبقاً لأعلى معايير الجودة.',
      descEn: 'BOQ preparation, CPM project scheduling, and full engineering site supervision ensuring adherence to quality and safety standards.',
      highlightsAr: ['مقايسات هندسية دقيقة BOQ', 'جداول زمنية مضغوطة ومحسوبة', 'إشراف واستلام هندسي لكل بند من بنود التنفيذ'],
      highlightsEn: ['Detailed Engineering BOQ Quantities', 'Optimized Master Schedule (CPM)', 'Strict Engineering Site Supervision & Sign-off']
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(i => i.cat === activeTab);

  const getWhatsappLink = (title) => {
    return "https://wa.me/201142466903?text=" + encodeURIComponent(
      isRtl
        ? `مرحباً شركة المحترف للمقاولات العامة والتوريدات، أود الاستفسار عن مقايسة وتنفيذ بند (${title})`
        : `Hello Professional General Contracting Co., I would like to inquire about BOQ & execution for (${title})`
    );
  };

  return (
    <section id="contracting" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>{isRtl ? 'قطاع المقاولات العامة والتنفيذ' : 'General Contracting & Civil Works Sector'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            {isRtl ? 'بنود أعمال المقاولات والإنشاءات والتشطيبات المتكاملة' : 'Integrated General Contracting & Interior Finishing Work Items'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {isRtl
              ? 'ننفذ كافة بنود أعمال المقاولات العامة، التأسيسات الهندسية، التشطيبات الفاخرة، والأعمال الكهروميكانيكية بأعلى مواصفات الجودة وتحت إشراف هندسي متخصص.'
              : 'Executing full-scope general contracting, civil construction, luxury finishings, and MEP engineering works under specialized site supervision.'
            }
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs md:text-sm font-extrabold transition-all border ${
                activeTab === cat.id
                  ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
              }`}
            >
              {isRtl ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-800/90 rounded-3xl p-7 border border-slate-700 hover:border-amber-500/80 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {item.num}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    {isRtl ? item.titleAr : item.titleEn}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  {isRtl ? item.descAr : item.descEn}
                </p>

                {/* Bullet Highlights */}
                <div className="pt-3 border-t border-slate-700/80 space-y-2 text-xs font-bold text-slate-200">
                  {(isRtl ? item.highlightsAr : item.highlightsEn).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <a
                  href={getWhatsappLink(isRtl ? item.titleAr : item.titleEn)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-3.5 px-4 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>{isRtl ? 'طلب مقايسة وعرض سعر للبند' : 'Request Item BOQ & Quote'}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Camera, 
  Network, 
  CheckCircle, 
  MessageCircle, 
  Cpu, 
  Server, 
  UserCheck, 
  Users, 
  Zap, 
  KeyRound, 
  PhoneCall, 
  ShieldAlert, 
  Volume2, 
  Scan, 
  DoorClosed,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { isRtl } = useLanguage();

  const categories = [
    { id: 'all', nameAr: 'جميع الخدمات (12)', nameEn: 'All Services (12)' },
    { id: 'tech', nameAr: 'الأنظمة والتكنولوجيا', nameEn: 'Tech & Systems' },
    { id: 'security', nameAr: 'كاميرات وأمن الأفراد', nameEn: 'Security & Surveillance' },
    { id: 'infra', nameAr: 'البنية التحتية والاستشارات', nameEn: 'Infrastructure & Consulting' }
  ];

  const services = [
    {
      num: '01',
      id: 's1',
      cat: 'tech',
      titleAr: 'حلول الأجهزة والبرامج',
      titleEn: 'Hardware & Software Solutions',
      subtitleAr: 'الحل التكنولوجي المتكامل الذي يوحي بالثقة',
      subtitleEn: 'Integrated IT Solutions You Can Trust',
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      descAr: 'غالباً ما تكون حلول الأجهزة والبرامج هي أغلى استثمارات تكنولوجيا المعلومات، لذلك يضمن فريقنا التكنولوجي تحديث أجهزتك وبرامجك وأداءها بأعلى معايير الجودة، لحماية سمعتك وسلسلة التوريد الخاصة بك.',
      descEn: 'Hardware & software are often your highest IT investment. Our tech team guarantees your equipment and systems perform at peak standards to protect your supply chain and reputation.',
      highlightsAr: ['تحديث مستمر للأجهزة والأنظمة', 'ضمان الأداء بأعلى معايير الجودة العالمية', 'حماية سمعة وسلسلة التوريد لمؤسستك'],
      highlightsEn: ['Continuous System & Hardware Upgrades', 'Guaranteed International Quality Standards', 'Supply Chain & Brand Protection']
    },
    {
      num: '02',
      id: 's2',
      cat: 'infra',
      titleAr: 'حلول البنية التحتية والشبكات',
      titleEn: 'Infrastructure & Network Solutions',
      subtitleAr: 'تأسيس وتطوير الشبكات الاحترافية',
      subtitleEn: 'Professional Network Design & Implementation',
      icon: <Server className="w-6 h-6 text-amber-600" />,
      descAr: 'نقدم تصميم هندسي وتدشين متكامل للبنية التحتية الرقمية لضمان سرعة واستقرار الاتصالات والخوادم بكل كفاءة.',
      descEn: 'Engineering design and turnkey deployment of digital infrastructure ensuring ultra-fast, stable server operations.',
      highlightsAr: ['نظام وتصميم الشبكات والهندسة', 'ترحيل الخادم (Server Migration)', 'الكابلات الهيكلية للبيانات والشبكات', 'تنفيذ UPS للخادم وإعداد رف المعدات Rack'],
      highlightsEn: ['Network Design & Engineering', 'Server Migration', 'Structured Cabling for Data', 'Server UPS & Rack Setup']
    },
    {
      num: '03',
      id: 's3',
      cat: 'infra',
      titleAr: 'خدمات الاستشارات التكنولوجية',
      titleEn: 'Strategic IT Consulting Services',
      subtitleAr: 'استشارات استراتيجية للتحول الرقمي والأتمتة',
      subtitleEn: 'Digital Transformation & Automation Strategy',
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      descAr: 'نقوم بتطوير إستراتيجية شاملة لتكنولوجيا المعلومات من أجل التحول الرقمي والتكنولوجي لمؤسستك بما يتوافق تماماً مع أهداف عملك.',
      descEn: 'We develop comprehensive IT strategies for digital transformation matching your exact corporate goals.',
      highlightsAr: ['أتمتة العمليات ورقمنتها وتحسين البرامج', 'تنفيذ التقنيات المتطورة واستغلالها بالشكل الأمثل', 'مراجعة شمولية لـ: تطبيقات IT، الشبكات، قواعد البيانات'],
      highlightsEn: ['Process Automation & Digitization', 'Cutting-Edge Tech Implementation', 'Comprehensive IT Audit (Apps, DBs, Networks)']
    },
    {
      num: '04',
      id: 's4',
      cat: 'infra',
      titleAr: 'حلول الحوكمة وتعهيد العمليات (Outsourcing)',
      titleEn: 'Governance & Business Process Outsourcing (BPO)',
      subtitleAr: 'استعانة بمصادر خارجية مع مهنيين مؤهلين',
      subtitleEn: 'Outsourcing Solutions with Qualified Professionals',
      icon: <Users className="w-6 h-6 text-amber-600" />,
      descAr: 'نقدم قيمة مستدامة للقوى العاملة والإنتاجية، ونظهر التفوق في التعامل مع مبادرات تعهيد العمليات التجارية وميزة التكلفة المستدامة.',
      descEn: 'Delivering sustainable value through highly qualified workforce outsourcing and BPO solutions with sustainable cost efficiency.',
      highlightsAr: ['تعهيد العمليات التجارية (BPO)', 'مهنيون ذوو تعليم عالٍ ومؤهلون ماهرون', 'ميزة تكلفة مستدامة ورفع الإنتاجية'],
      highlightsEn: ['Business Process Outsourcing (BPO)', 'Highly Qualified & Skilled Professionals', 'Sustainable Cost Efficiency']
    },
    {
      num: '05',
      id: 's5',
      cat: 'security',
      titleAr: 'أنظمة التيار الخفيف (Low Current Systems)',
      titleEn: 'Low Current Systems',
      subtitleAr: 'منظومة متكاملة لأحدث أجهزة الأمن والحضور',
      subtitleEn: 'Integrated Building Security & Attendance',
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      descAr: 'توفير وتوريد أحدث معدات التيار الخفيف الذكية للمباني والشركات والمشروعات.',
      descEn: 'Supplying smart low-current equipment for commercial & residential complexes.',
      highlightsAr: ['CCTV & IP & Dome & IR Bullet Cameras', 'أجهزة الحضور والانصراف (Time Attendance)', 'الأقفال الإلكترونية (Door Lock) و Intercom'],
      highlightsEn: ['CCTV, IP, Dome, IR Bullet Cameras', 'Time Attendance Systems', 'Electronic Door Locks & Intercoms']
    },
    {
      num: '06',
      id: 's6',
      cat: 'security',
      titleAr: 'أنظمة وكاميرات المراقبة المتقدمة',
      titleEn: 'Advanced Surveillance Camera Systems',
      subtitleAr: 'دقة فائقة ورؤية ليلية ملونة وتحليل ذكي',
      subtitleEn: 'Full HD, Color Night Vision & AI Analytics',
      icon: <Camera className="w-6 h-6 text-amber-600" />,
      descAr: 'تتمتع كاميرات الفيديو الرقمية بدقة أعلى وزوايا مشاهدة أوسع ومراقبة عن بعد ورؤية ليلية ملونة وتحديد الوجوه وعد الأشخاص.',
      descEn: 'HD digital cameras with wider viewing angles, remote mobile streaming, color night vision, face detection, and line counting.',
      highlightsAr: ['مراقبة عن بعد وبث مباشر وتخزين مؤرشب', 'رؤية ليلية بالألوان واستقرار كامل للعمليات', 'حساب عدد الأشخاص والكشف عن الوجوه وسيرفرات متخصصة'],
      highlightsEn: ['Remote Live Streaming & Archived Footage', 'Color Night Vision & High Server Stability', 'People Counting, Face Detection & Dedicated Servers']
    },
    {
      num: '07',
      id: 's7',
      cat: 'security',
      titleAr: 'نظام التحكم في الدخول والخروج (Access Control)',
      titleEn: 'Access Control Systems',
      subtitleAr: 'صلاحيات وصول دقيقة وتوثيق زمني',
      subtitleEn: 'Selective Access Authorization & Logs',
      icon: <KeyRound className="w-6 h-6 text-amber-600" />,
      descAr: 'سيسمح لك نظام الوصول الإلكتروني بمنح أشخاص محددين حق الوصول إلى مناطق معينة وتسجيل من يدخل ويخرج للمراجعة لاحقاً.',
      descEn: 'Grant electronic access rights to authorized personnel for specific zones and maintain full entry/exit logs.',
      highlightsAr: ['منح صلاحيات محددة لأفراد محددين', 'تقسيم وتأمين المناطق الحساسة بالمنشأة', 'تسجيل وتوثيق حركة الدخول والخروج للمراجعة'],
      highlightsEn: ['Selective Personnel Authorization', 'Sensitive Zone Partitioning', 'Full Audit Trail Entry/Exit Logs']
    },
    {
      num: '08',
      id: 's8',
      cat: 'security',
      titleAr: 'أنظمة الإنتركم (Intercom Systems)',
      subtitleAr: 'تواصل متبادل ورؤية مرئية فورية',
      titleEn: 'Intercom Systems',
      subtitleEn: 'Two-Way Audio & Video Communication',
      icon: <PhoneCall className="w-6 h-6 text-amber-600" />,
      descAr: 'أجهزة متنوعة تتيح للشخص من داخل المبنى رؤية الفرد عبر كاميرات CCTV والتواصل المتبادل بنظام الاتصال الداخلي.',
      descEn: 'Diverse range of intercom units enabling indoor visual verification via CCTV cameras and clear two-way communication.',
      highlightsAr: ['تنوع واسع في الأجهزة بما يناسب احتياج المبنى', 'ربط مباشر مع كاميرات CCTV المغلقة', 'تواصل صوتي ومرئي متبادل وسهل الاستخدام'],
      highlightsEn: ['Wide Array of Units per Facility Need', 'Direct Integration with CCTV Networks', 'Two-Way Audio & Video Intercom']
    },
    {
      num: '09',
      id: 's9',
      cat: 'security',
      titleAr: 'نظم الإنذار المبكر ومكافحة الاختراق',
      titleEn: 'Early Warning & Intrusion Detection Systems',
      subtitleAr: 'أمان كامل لحماية الممتلكات والموقع',
      subtitleEn: 'Total Security Against Unauthorized Entry',
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      descAr: 'أنت بأمان تام من خلال حلول الإنذار المتطورة اللاسلكية والسلكية وأجهزة منع الاختراق.',
      descEn: 'Protect your premises with wireless & wired alarm systems and anti-intrusion devices.',
      highlightsAr: ['أنظمة إنذار لاسلكية حديثة', 'أنظمة إنذار سلكية عالية الاعتمادية', 'أجهزة ومستشعرات منع الاختراق المتقدمة'],
      highlightsEn: ['Modern Wireless Alarm Systems', 'Reliable Wired Intrusion Alarms', 'Advanced Anti-Breach Sensors']
    },
    {
      num: '10',
      id: 's10',
      cat: 'tech',
      titleAr: 'الأنظمة الصوتية (Sound Systems)',
      titleEn: 'Professional Sound Systems',
      subtitleAr: 'تغطية صوتية نقية للمساحات المفتوحة والمغلقة',
      subtitleEn: 'High-Fidelity Audio Coverage for Indoor/Outdoor',
      icon: <Volume2 className="w-6 h-6 text-amber-600" />,
      descAr: 'تغطية بصوت عالي الجودة للمساحات المغلقة والمفتوحة بأجهزة يحمل علامات تجارية عالمية مؤهلة وحلول للمؤتمرات.',
      descEn: 'High-fidelity acoustic coverage for open & closed spaces, events, and conference rooms using global brand equipment.',
      highlightsAr: ['تغطية صوتية متوازنة لكافة المساحات', 'أجهزة من أشهر العلامات التجارية العالمية', 'حلول صوتية سليمة وفعالة للفعاليات والمؤتمرات'],
      highlightsEn: ['Balanced Audio for Open/Closed Venues', 'Qualified Top Global Brands', 'Conference & Event Sound Solutions']
    },
    {
      num: '11',
      id: 's11',
      cat: 'security',
      titleAr: 'كاشفات المعادن الأمنية (Security Metal Detectors)',
      titleEn: 'Security Metal Detectors',
      subtitleAr: 'حماية أمنية مشددة للمطارات والموقع العامة',
      subtitleEn: 'Walk-Through Gates & Handheld Scanners',
      icon: <Scan className="w-6 h-6 text-amber-600" />,
      descAr: 'بوابات أمنية وكاشفات يدوية للمطارات، المباني، والمواقع المغلقة والخارجية للتأمين ضد دخول الأسلحة.',
      descEn: 'Walk-through detection gates and handheld scanners for airports, public facilities, indoor and outdoor venues.',
      highlightsAr: ['بوابات أمنية للمطارات والمواقع المغلقة والخارجية', 'أجهزة كشف عن المعادن يدوية عالية الحساسية', 'تأمين كامل للمباني والفعاليات الحيوية'],
      highlightsEn: ['Airport & Venue Walk-Through Gates', 'High-Sensitivity Handheld Metal Scanners', 'Complete Facility Security Screening']
    },
    {
      num: '12',
      id: 's12',
      cat: 'tech',
      titleAr: 'نظام البوابات الأوتوماتيكي (Automatic Gates System)',
      titleEn: 'Automatic Gate Systems',
      subtitleAr: 'تحكم ذكي بالبوابات والمداخل الكهربائية',
      subtitleEn: 'Smart Gate Automation & Motor Controls',
      icon: <DoorClosed className="w-6 h-6 text-amber-600" />,
      descAr: 'بوابات متأرجحة، سحابية تلسكوبية، محركات أوتوماتيكية، وطرق فتح متعددة (ريموت، كروت ورقية ومغناطيسية).',
      descEn: 'Swing gates, bi-folding gates, telescopic sliding gates, and motors with multiple opening methods (remote, card readers).',
      highlightsAr: ['بوابات متأرجحة وسحابية تلسكوبية', 'محركات بوابات عالية القدرة', 'وسائل فتح متعددة (ريموت، بطاقات ورقية، كروت ممغنطة)'],
      highlightsEn: ['Swing, Bi-Folding & Sliding Gates', 'Heavy-Duty Gate Operators & Motors', 'Multiple Triggers (Remote, RFID, Cards)']
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.cat === activeCategory);

  const getWhatsappLink = (title) => {
    return "https://wa.me/201142466903?text=" + encodeURIComponent(
      isRtl
        ? `مرحباً شركة المحترف للتجارة والتوريدات، أود الاستفسار وطلب عرض سعر خاص بـ (${title})`
        : `Hello Professional Trading & Supplies, I would like to inquire about (${title})`
    );
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>{isRtl ? 'خدماتنا المتخصصة (12 قطاعاً)' : 'Our 12 Core Services'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {isRtl ? 'حلول وتوريدات تكنولوجية وأمنية متكاملة' : 'Integrated IT, Security & Surveillance Solutions'}
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            {isRtl 
              ? 'نحن شركة مبتكرة وتقدمية متخصصة في حماية سمعتك وسلسلة التوريد الخاصة بك من خلال تقديم أحدث الأنظمة والمعدات بأعلى معايير الجودة العالمية.'
              : 'We are an innovative company protecting your reputation and supply chain with cutting-edge equipment and global standards.'
            }
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs md:text-sm font-extrabold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {isRtl ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((svc) => (
            <div 
              key={svc.id}
              className="bg-slate-50 rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm">
                    {svc.icon}
                  </div>
                  <span className="text-sm font-black text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
                    {svc.num}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                    {isRtl ? svc.titleAr : svc.titleEn}
                  </h3>
                  <p className="text-xs font-bold text-amber-700 pt-0.5">{isRtl ? svc.subtitleAr : svc.subtitleEn}</p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {isRtl ? svc.descAr : svc.descEn}
                </p>

                {/* Bullet Highlights */}
                <div className="pt-3 border-t border-slate-200/80 space-y-2 text-xs font-bold text-slate-800">
                  {(isRtl ? svc.highlightsAr : svc.highlightsEn).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <a
                  href={getWhatsappLink(isRtl ? svc.titleAr : svc.titleEn)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all group-hover:shadow-amber-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{isRtl ? 'طلب تفاصيل وعرض سعر للخدمة' : 'Request Service Details & Quote'}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

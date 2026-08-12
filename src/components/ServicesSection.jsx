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
  ChevronDown,
  Layers
} from 'lucide-react';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع الخدمات (12)' },
    { id: 'tech', name: 'الأنظمة والتكنولوجيا' },
    { id: 'security', name: 'كاميرات وأمن الأفراد' },
    { id: 'infra', name: 'البنية التحتية والاستشارات' }
  ];

  const services = [
    {
      num: '01',
      id: 's1',
      cat: 'tech',
      title: 'حلول الأجهزة والبرامج',
      subtitle: 'الحل التكنولوجي المتكامل الذي يوحي بالثقة',
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      desc: 'غالباً ما تكون حلول الأجهزة والبرامج هي أغلى استثمارات تكنولوجيا المعلومات التي تقوم بها شركتك، لذلك يضمن فريقنا التكنولوجي تحديث أجهزتك وبرامجك وأداءها بأعلى معايير الجودة، لحماية سمعتك وسلسلة التوريد الخاصة بك.',
      highlights: [
        'تحديث مستمر للأجهزة والأنظمة',
        'ضمان الأداء بأعلى معايير الجودة العالمية',
        'حماية سمعة وسلسلة التوريد لمؤسستك'
      ]
    },
    {
      num: '02',
      id: 's2',
      cat: 'infra',
      title: 'حلول البنية التحتية والشبكات',
      subtitle: 'تأسيس وتطوير الشبكات الاحترافية',
      icon: <Server className="w-6 h-6 text-amber-600" />,
      desc: 'نقدم تصميم هندسي وتدشين متكامل للبنية التحتية الرقمية لضمان سرعة واستقرار الاتصالات والخوادم بكل كفاءة.',
      highlights: [
        'نظام وتصميم الشبكات والهندسة',
        'ترحيل الخادم (Server Migration)',
        'الكابلات الهيكلية للبيانات والشبكات',
        'تنفيذ وحدات عدم انقطاع التيار (UPS) للخادم',
        'إعداد وتجهيز رف المعدات (Rack Setup)'
      ]
    },
    {
      num: '03',
      id: 's3',
      cat: 'infra',
      title: 'خدمات الاستشارات التكنولوجية',
      subtitle: 'استشارات استراتيجية للتحول الرقمي والأتمتة',
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      desc: 'نقوم بتطوير إستراتيجية شاملة لتكنولوجيا المعلومات من أجل التحول الرقمي والتكنولوجي لمؤسستك بما يتوافق تماماً مع أهداف عملك.',
      highlights: [
        'أتمتة العمليات ورقمنتها وتحسين مجموعة البرامج',
        'تنفيذ التقنيات المتطورة واستغلالها بالشكل الأمثل',
        'مراجعة شمولية لـ: تطبيقات IT، تعقيد الشبكة، قواعد البيانات البنية التحتية'
      ]
    },
    {
      num: '04',
      id: 's4',
      cat: 'infra',
      title: 'أدوات وحلول للحوكمة والدعم وتعهيد العمليات (Outsourcing)',
      subtitle: 'استعانة بمصادر خارجية مع مهنيين مؤهلين',
      icon: <Users className="w-6 h-6 text-amber-600" />,
      desc: 'نقدم قيمة مستدامة للقوى العاملة الشابة والإنتاجية، وأظهر التفوق في التعامل مع مبادرات تعهيد العمليات التجارية، وميزة التكلفة المستدامة مع كوادر مؤهلة في كافة المجالات الميدانية.',
      highlights: [
        'تعهيد العمليات التجارية (BPO)',
        'مهنيون ذوو تعليم عالٍ ومؤهلون ماهرون',
        'ميزة تكلفة مستدامة ورفع الإنتاجية'
      ]
    },
    {
      num: '05',
      id: 's5',
      cat: 'security',
      title: 'أنظمة التيار الخفيف (Low Current Systems)',
      subtitle: 'منظومة متكاملة لأحدث أجهزة الأمن والحضور',
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      desc: 'توفير وتوريد أحدث معدات التيار الخفيف الذكية للمباني والشركات والمشروعات.',
      highlights: [
        'CCTV Camera & IP Camera',
        'Dome Camera & IR Bullet Camera',
        'أجهزة الحضور والانصراف (Time Attendance)',
        'الأقفال الإلكترونية (Door Lock)',
        'أجهزة DVR & NVR وأنظمة الإنتركم'
      ]
    },
    {
      num: '06',
      id: 's6',
      cat: 'security',
      title: 'أنظمة وكاميرات المراقبة المتقدمة',
      subtitle: 'دقة فائقة ورؤية ليلية ملونة وتحليل ذكي',
      icon: <Camera className="w-6 h-6 text-amber-600" />,
      desc: 'لا تقوم كاميرات المراقبة الرقمية فقط بالتقاط وتخزين المزيد من مقاطع الفيديو، بل توفر جودة تغذية أعلى بدقة فائقة وزوايا مشاهدة أوسع تمكنك من رؤية التفاصيل بوضوح تام.',
      highlights: [
        'مراقبة عن بعد وبث مباشر وتخزين مؤرشب على جهازك الشخصي',
        'رؤية ليلية بالألوان مع تثبيت واستقرار كامل للعمليات',
        'إمكانية تحديد موقع وإرسال صورة بدون إمالة عند الحركة',
        'حساب عدد الأشخاص في ممر معين والكشف عن الوجوه وتسجيلها',
        'إنشاء سيرفرات متخصصة بكاميرات المراقبة بخوادم قوية'
      ]
    },
    {
      num: '07',
      id: 's7',
      cat: 'security',
      title: 'نظام التحكم في الدخول والخروج (Access Control)',
      subtitle: 'صلاحيات وصول دقيقة وتوثيق زمني',
      icon: <KeyRound className="w-6 h-6 text-amber-600" />,
      desc: 'سيسمح لك نظام الوصول الإلكتروني بمنح أشخاص محددين حق الوصول إلى مناطق معينة من منشأتك بالإضافة إلى أنه يمكن تسجيل من يدخل ويخرج من المبنى الخاص بك للمراجعة لاحقاً.',
      highlights: [
        'منح صلاحيات محددة لأفراد محددين',
        'تقسيم وتأمين المناطق الحساسة بالمنشأة',
        'تسجيل وتوثيق حركة الدخول والخروج للمراجعة'
      ]
    },
    {
      num: '08',
      id: 's8',
      cat: 'security',
      title: 'أنظمة الإنتركم (Intercom Systems)',
      subtitle: 'تواصل متبادل ورؤية مرئية فورية',
      icon: <PhoneCall className="w-6 h-6 text-amber-600" />,
      desc: 'بقدر ما تحتاج، سوف تختار من بين أجهزة متنوعة تتيح للشخص من داخل المبنى رؤية الفرد عبر كاميرات CCTV والتواصل المتبادل بنظام الاتصال الداخلي.',
      highlights: [
        'تنوع واسع في الأجهزة بما يناسب احتياج المبنى',
        'ربط مباشر مع كاميرات CCTV المغلقة',
        'تواصل صوتي ومرئي متبادل وسهل الاستخدام'
      ]
    },
    {
      num: '09',
      id: 's9',
      cat: 'security',
      title: 'نظم الإنذار المبكر ومكافحة الاختراق',
      subtitle: 'أمان كامل لحماية الممتلكات والموقع',
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      desc: 'أنت بأمان تام من خلال حلول الإنذار المتطورة التي تكشف أي محاولات اختراق أو خطورة قبل وقوعها.',
      highlights: [
        'أنظمة إنذار لاسلكية حديثة',
        'أنظمة إنذار سلكية عالية الاعتمادية',
        'أجهزة ومستشعرات منع الاختراق المتقدمة'
      ]
    },
    {
      num: '10',
      id: 's10',
      cat: 'tech',
      title: 'الأنظمة الصوتية (Sound Systems)',
      subtitle: 'تغطية صوتية نقية للمساحات المفتوحة والمغلقة',
      icon: <Volume2 className="w-6 h-6 text-amber-600" />,
      desc: 'كم مساحة؟ - منطقة مغلقة أم مفتوحة؟ لا يهم! ستحصل على أفضل تغطية بصوت عالي الجودة بواسطة أجهزة تحمل علامات تجارية عالمية مؤهلة.',
      highlights: [
        'تغطية صوتية متوازنة لكافة المساحات',
        'أجهزة من أشهر العلامات التجارية العالمية',
        'حلول صوتية سليمة وفعالة للفعاليات والمؤتمرات'
      ]
    },
    {
      num: '11',
      id: 's11',
      cat: 'security',
      title: 'كاشفات المعادن الأمنية (Security Metal Detectors)',
      subtitle: 'حماية أمنية مشددة للمطارات والمواقع العامة',
      icon: <Scan className="w-6 h-6 text-amber-600" />,
      desc: 'تستخدم كإجراء أمني ضد دخول الأشخاص الذين يحملون أسلحة أو أواني خطيرة في الأماكن العامة، مثل المطارات والمقاهي، متوفرة للمواقع الداخلية والخارجية.',
      highlights: [
        'بوابات أمنية للمطارات والمواقع المغلقة والخارجية',
        'أجهزة كشف عن المعادن يدوية عالية الحساسية',
        'تأمين كامل للمباني والفعاليات الحيوية'
      ]
    },
    {
      num: '12',
      id: 's12',
      cat: 'tech',
      title: 'نظام البوابات الأوتوماتيكي (Automatic Gates System)',
      subtitle: 'تحكم ذكي بالبوابات والمداخل الكهربائية',
      icon: <DoorClosed className="w-6 h-6 text-amber-600" />,
      desc: 'توفير وتجهيز كافة أنظمة البوابات الأوتوماتيكية بناءً على طلب العميل مع تعدد وسائل الفتح والتحكم.',
      highlights: [
        'بوابات متأرجحة أوتوماتيكية وثنائية الطي',
        'بوابات منزلقة تلسكوبية ومحركات بوابات',
        'وسائل فتح متعددة (ريموت كنترول، بطاقات ورقية، بطاقات ممغنطة)'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.cat === activeCategory);

  const getWhatsappLink = (title) => {
    return "https://wa.me/201142466903?text=" + encodeURIComponent(`مرحباً شركة المحترف للتجارة والتوريدات، أود الاستفسار وطلب عرض سعر خاص بـ (${title})`);
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>خدماتنا المتخصصة (12 قطاعاً)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            حلول وتوريدات تكنولوجية وأمنية متكاملة
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            نحن شركة مبتكرة وتقدمية متخصصة في حماية سمعتك وسلسلة التوريد الخاصة بك من خلال تقديم أحدث الأنظمة والمعدات بأعلى معايير الجودة العالمية.
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
              {cat.name}
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
                    {svc.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-700 pt-0.5">{svc.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {svc.desc}
                </p>

                {/* Bullet Highlights */}
                <div className="pt-3 border-t border-slate-200/80 space-y-2 text-xs font-bold text-slate-800">
                  {svc.highlights.map((item, idx) => (
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
                  href={getWhatsappLink(svc.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all group-hover:shadow-amber-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>طلب تفاصيل وعرض سعر للخدمة</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

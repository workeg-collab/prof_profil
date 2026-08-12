import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, FileText, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    sector: 'كاميرات مراقبة رقمية وسيرفرات',
    details: '',
    urgency: 'عاجل (خلال 48 ساعة)'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*طلب عرض سعر واستشارة - شركة المحترف للتجارة والتوريدات*
---------------------------------------
🏢 *اسم الشركة/الجهة:* ${formData.companyName}
👤 *الاسم والتواصل:* ${formData.contactName} (${formData.phone})
📦 *الخدمة/النظام المطلوب:* ${formData.sector}
⚡ *مستوى الاستعجال:* ${formData.urgency}
📝 *تفاصيل الاحتياجات والكميات:* 
${formData.details}`;

    const whatsappUrl = `https://wa.me/201142466903?text=${encodeURIComponent(message)}`;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="quote" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold px-3.5 py-1 rounded-full">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>طلب عرض سعر واستشارة مباشرة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            احصل على عرض سعر مخصص ودراسة لمتطلباتك فوراً
          </h2>
          <p className="text-slate-700 text-sm max-w-xl mx-auto">
            قم بملء البيانات التالية ليتواصل معك فريق المهندسين والمشتريات بشركة المحترف للتجارة والتوريدات بأسرع وقت.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl space-y-6">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">تم تجهيز الطلب بنجاح!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                تم تحويلك إلى تطبيق الواتساب لإرسال تفاصيل طلبك مباشرةً إلى مسؤول المهندسين بشركة المحترف.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all"
              >
                تقديم طلب استشارة جديد
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">اسم الشركة / المنشأة / الفرد</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    placeholder="مثال: شركة تكنولوجيا المعلومات / الهيئة..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">اسم المسؤول ورقم الهاتف / الواتساب</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value, contactName: e.target.value})}
                    placeholder="01142466903 أو 01060958991"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">النظام أو القطاع المطلوب</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-bold outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="01. حلول الأجهزة والبرامج">01. حلول الأجهزة والبرامج</option>
                    <option value="02. حلول البنية التحتية والشبكات">02. حلول البنية التحتية والشبكات</option>
                    <option value="03. خدمات الاستشارات">03. خدمات الاستشارات التكنولوجية</option>
                    <option value="04. أدوات وحلول للحوكمة والتعايد Outsourcing">04. خدمات الدعم والمصادر الخارجية</option>
                    <option value="05. أنظمة التيار الخفيف Low Current">05. أنظمة التيار الخفيف Low Current</option>
                    <option value="06. كاميرات مراقبة رقمية وسيرفرات">06. أنظمة وكاميرات المراقبة المتقدمة</option>
                    <option value="07. نظام التحكم في الدخول والخروج Access Control">07. نظام التحكم في الدخول والخروج Access Control</option>
                    <option value="08. أنظمة الإنتركم Intercom">08. أنظمة الإنتركم Intercom</option>
                    <option value="09. نظم الإنذار المبكر ومكافحة الاختراق">09. نظم الإنذار المبكر ومكافحة الاختراق</option>
                    <option value="10. الأنظمة الصوتية Sound Systems">10. الأنظمة الصوتية Sound Systems</option>
                    <option value="11. كاشفات المعادن الأمنية Metal Detectors">11. كاشفات المعادن الأمنية Metal Detectors</option>
                    <option value="12. نظام البوابات الأوتوماتيكي Automatic Gates">12. نظام البوابات الأوتوماتيكي Automatic Gates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">أولوية ومستوى الاستعجال</label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-bold outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="عاجل (خلال 48 ساعة)">عاجل جداً (خلال 48 ساعة)</option>
                    <option value="خلال أسبوع">خلال أسبوع</option>
                    <option value="دراسة مشروع مستقبلي">دراسة مشروع وتخطيط ميزانية</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">تفاصيل الاحتياجات، والمواقع أو المواصفات</label>
                <textarea
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  placeholder="اكتب هنا تفاصيل الملاحظات، عدد الكاميرات أو النقاط، أو موقع التركيب والمواصفات المطلوب تنفيذها..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium outline-none focus:border-amber-500 focus:bg-white transition-all leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-sm md:text-base py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>إرسال الطلب وحساب التكلفة عبر الواتساب فوراً</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

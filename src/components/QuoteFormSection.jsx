import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export default function QuoteFormSection() {
  const { isRtl } = useLanguage();

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

    const message = `*${isRtl ? 'طلب عرض سعر واستشارة - شركة المحترف للتجارة والتوريدات' : 'Quote & Consultation Request - Professional Co.'}*
---------------------------------------
🏢 *${isRtl ? 'اسم الشركة/الجهة' : 'Company/Client'}:* ${formData.companyName}
👤 *${isRtl ? 'الاسم والتواصل' : 'Contact Person & Phone'}:* ${formData.contactName} (${formData.phone})
📦 *${isRtl ? 'الخدمة/النظام المطلوب' : 'Service/System'}:* ${formData.sector}
⚡ *${isRtl ? 'مستوى الاستعجال' : 'Urgency'}:* ${formData.urgency}
📝 *${isRtl ? 'تفاصيل الاحتياجات والكميات' : 'Requirement Details'}:* 
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
            <span>{isRtl ? 'طلب عرض سعر واستشارة مباشرة' : 'Direct Quote & Consultation Request'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            {isRtl ? 'احصل على عرض سعر مخصص ودراسة لمتطلباتك فوراً' : 'Get a Customized Quotation & Technical Study'}
          </h2>
          <p className="text-slate-700 text-sm max-w-xl mx-auto">
            {isRtl
              ? 'قم بملء البيانات التالية ليتواصل معك فريق المهندسين والمشتريات بشركة المحترف للتجارة والتوريدات بأسرع وقت.'
              : 'Fill in the details below and our engineering team will get in touch with you promptly.'
            }
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl space-y-6">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{isRtl ? 'تم تجهيز الطلب بنجاح!' : 'Request Prepared Successfully!'}</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                {isRtl 
                  ? 'تم تحويلك إلى تطبيق الواتساب لإرسال تفاصيل طلبك مباشرةً إلى مسؤول المهندسين بشركة المحترف.'
                  : 'You have been redirected to WhatsApp to send your request directly to our team.'
                }
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all"
              >
                {isRtl ? 'تقديم طلب استشارة جديد' : 'Submit New Request'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">{isRtl ? 'اسم الشركة / المنشأة / الفرد' : 'Company / Entity Name'}</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    placeholder={isRtl ? 'مثال: شركة تكنولوجيا المعلومات / الهيئة...' : 'e.g. Master Gas / Ministry...'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">{isRtl ? 'اسم المسؤول ورقم الهاتف / الواتساب' : 'Contact Person Name & Phone'}</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value, contactName: e.target.value})}
                    placeholder="01142466903 / 01060958991"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">{isRtl ? 'النظام أو القطاع المطلوب' : 'Required Service / System'}</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-bold outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="01. حلول الأجهزة والبرامج">01. Hardware & Software Solutions</option>
                    <option value="02. حلول البنية التحتية والشبكات">02. Infrastructure & Network Solutions</option>
                    <option value="03. خدمات الاستشارات">03. Strategic IT Consulting</option>
                    <option value="04. أدوات وحلول للحوكمة والتعايد Outsourcing">04. BPO & Staff Outsourcing</option>
                    <option value="05. أنظمة التيار الخفيف Low Current">05. Low Current Systems</option>
                    <option value="06. كاميرات مراقبة رقمية وسيرفرات">06. Surveillance Cameras & Servers</option>
                    <option value="07. نظام التحكم في الدخول والخروج Access Control">07. Access Control Systems</option>
                    <option value="08. أنظمة الإنتركم Intercom">08. Intercom Systems</option>
                    <option value="09. نظم الإنذار المبكر ومكافحة الاختراق">09. Early Warning & Intrusion Alarms</option>
                    <option value="10. الأنظمة الصوتية Sound Systems">10. Professional Sound Systems</option>
                    <option value="11. كاشفات المعادن الأمنية Metal Detectors">11. Security Metal Detectors</option>
                    <option value="12. نظام البوابات الأوتوماتيكي Automatic Gates">12. Automatic Gate Systems</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">{isRtl ? 'أولوية ومستوى الاستعجال' : 'Urgency Level'}</label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-bold outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="عاجل (خلال 48 ساعة)">{isRtl ? 'عاجل جداً (خلال 48 ساعة)' : 'Urgent (Within 48h)'}</option>
                    <option value="خلال أسبوع">{isRtl ? 'خلال أسبوع' : 'Within 1 Week'}</option>
                    <option value="دراسة مشروع مستقبلي">{isRtl ? 'دراسة مشروع وتخطيط ميزانية' : 'Future Planning / Budgeting'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">{isRtl ? 'تفاصيل الاحتياجات، والمواقع أو المواصفات' : 'Requirement Details & Specs'}</label>
                <textarea
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  placeholder={isRtl ? 'اكتب هنا تفاصيل الملاحظات، عدد الكاميرات أو النقاط، أو موقع التركيب والمواصفات...' : 'Enter camera count, locations, network specs, or special notes...'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium outline-none focus:border-amber-500 focus:bg-white transition-all leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-sm md:text-base py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{isRtl ? 'إرسال الطلب وحساب التكلفة عبر الواتساب فوراً' : 'Send Request & Get Instant WhatsApp Response'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

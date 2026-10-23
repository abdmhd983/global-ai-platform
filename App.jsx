
import React, { useState } from 'react';
import {
Bot, ShieldCheck, FileText, Cpu, CreditCard, CheckCircle2,
ArrowRight, Sparkles, Zap, Lock, Globe, Layers, Copy, Check
} from 'lucide-react';

export default function App() {
const [activeTab, setActiveTab] = useState('hub');
const [selectedService, setSelectedService] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [copied, setCopied] = useState(false);
const [txId, setTxId] = useState('');
const [submitted, setSubmitted] = useState(false);

// عنوان محفظتك الحقيقي (USDT TRC20)
const walletAddress = "TWz45uauDNkroso1VLjJcEYsj81t1Lsxfu";

const handleCopy = () => {
navigator.clipboard.writeText(walletAddress);
setCopied(true);
setTimeout(() => setCopied(false), 2000);
};

const handleOpenCheckout = (service) => {
setSelectedService(service);
setIsModalOpen(true);
setSubmitted(false);
setTxId('');
};

const handleVerifyPayment = (e) => {
e.preventDefault();
if (!txId.trim()) return;
setSubmitted(true);
};

return (
<div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">

{/* 🌟 Header / Navbar */}
<header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center space-x-3 space-x-reverse">
<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
<Sparkles className="w-6 h-6 text-white animate-pulse" />
</div>
<div>
<span className="text-xl font-black bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
Global AI Hub
</span>
<span className="block text-[10px] text-cyan-400/80 tracking-widest uppercase font-semibold">Enterprise Platform</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
USDT TRC20 Live
</span>
</div>
</div>
</header>

{/* 🚀 Hero Section */}
<section className="relative pt-20 pb-16 overflow-hidden">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none"></div>

<div className="max-w-5xl mx-auto px-4 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs sm:text-sm font-medium mb-6 shadow-inner">
<Zap className="w-4 h-4 text-cyan-400" />
منصة عالمية متكاملة للذكاء الاصطناعي والأتمتة والوساطة الرقمية
</div>
<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
بوابتك الذكية للأعمال الرقمية <br />
<span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
بدون قيود، بدفع فوري عبر USDT
</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
أدوات ذكاء اصطناعي متقدمة، حلول أتمتة الشركات B2B، وصياغة العقود القانونية مع نظام وساطة مالي آمن تماماً.
</p>
</div>
</section>

{/* 🎛️ Navigation Tabs */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2 bg-slate-900/90 rounded-2xl border border-slate-800/80 backdrop-blur-md">
<button
onClick={() => setActiveTab('hub')}
className={flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
activeTab === 'hub'
? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
: 'text-slate-400 hover:text-white hover:bg-slate-800/60'
}} &gt; &lt;Bot className="w-5 h-5" /&gt; خدمات AI والميديا &lt;/button&gt; &lt;button onClick={() =&gt; setActiveTab('b2b')} className={flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${ activeTab === 'b2b' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'text-slate-400 hover:text-white hover:bg-slate-800/60' }}
>
<Cpu className="w-5 h-5" /> أعمال B2B
</button>
<button
onClick={() => setActiveTab('legal')}
className={flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
activeTab === 'legal'
? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
: 'text-slate-400 hover:text-white hover:bg-slate-800/60'
}} &gt; &lt;FileText className="w-5 h-5" /&gt; العقود القانونية &lt;/button&gt; &lt;button onClick={() =&gt; setActiveTab('escrow')} className={flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${ activeTab === 'escrow' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'text-slate-400 hover:text-white hover:bg-slate-800/60' }}
>
<ShieldCheck className="w-5 h-5" /> الوساطة (Escrow)
</button>
<button
onClick={() => setActiveTab('subscriptions')}
className={flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${ activeTab === 'subscriptions' ? 'bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white shadow-lg shadow-fuchsia-500/25' : 'text-slate-400 hover:text-white hover:bg-slate-800/60' }}
>
<Layers className="w-5 h-5" /> الباقات الشهرية
</button>
</div>
</div>

{/* 📦 Main Content Area */}
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

{/* 1️⃣ AI & Media Hub */}
{activeTab === 'hub' && (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Bot className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">مولد سيناريوهات Shorts/Reels</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">إنشاء سيناريوهات فيديو جذابة ومصممة لزيادة المشاهدات والتفاعل على تيك توك وإنستغرام ويوتيوب.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-cyan-400">3 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "سيناريوهات Shorts/Reels", price: "3" })}
className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-cyan-500/20"
>
اطلب الآن
</button>
</div>
</div>

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Sparkles className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">كتابة الإعلانات التسويقية</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">صياغة إعلانات مقنعة وموجهة للعملاء المستهدفين لتحقيق أعلى معدلات تحويل ومبيعات.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-indigo-400">5 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "كتابة الإعلانات التسويقية", price: "5" })}
className="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-colors shadow-lg shadow-indigo-500/20"
>
اطلب الآن
</button>
</div>
</div>

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Zap className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">خطط المحتوى الشهرية</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">جدولة وتنظيم أفكار المنشورات لجميع منصات التواصل الاجتماعي لمدة كاملة بذكاء واحترافية.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-fuchsia-400">8 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "خطط المحتوى الشهرية", price: "8" })}
className="px-4 py-2.5 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-bold text-sm transition-colors shadow-lg shadow-fuchsia-500/20"
>
اطلب الآن
</button>
</div>
</div>
</div>
)}

{/* 2️⃣ Business & B2B Hub */}
{activeTab === 'b2b' && (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Cpu className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">أتمتة الردود على العملاء</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">بناء روبوتات محادثة ذكية للرد على استفسارات الزبائن على مدار الساعة عبر واتساب وتليجرام.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-cyan-400">4 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "أتمتة الردود على العملاء", price: "4" })}
className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-cyan-500/20"
>
اطلب الآن
</button>
</div>
</div>

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<FileText className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">تلخيص وتحليل ملفات PDF</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">استخراج الأفكار الرئيسية، العقود الكبيرة، والتقارير المعقدة وتلخيصها بدقة فائقة.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-blue-400">3 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "تلخيص وتحليل ملفات PDF", price: "3" })}
className="px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm transition-colors shadow-lg shadow-blue-500/20"
>
اطلب الآن
</button>
</div>
</div>

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Globe className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">تحليل المنافسين والأسواق</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">دراسة نقاط قوة وضعف المنافسين وتقديم تقرير استراتيجي لتعزيز موقعك التجاري.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-indigo-400">10 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "تحليل المنافسين والأسواق", price: "10" })}
className="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-colors shadow-lg shadow-indigo-500/20"
>
اطلب الآن
</button>
</div>
</div>
</div>
)}

{/* 3️⃣ Legal & Contracts Hub */}
{activeTab === 'legal' && (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<ShieldCheck className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">عقود العمل المستقل (Freelance)</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">صياغة عقود قانونية متكاملة لحفظ حقوقك وحقوق العميل وضمان تسليم المهام بسلاسة.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-emerald-400">6 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "عقود العمل المستقل", price: "6" })}
className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20"
>
اطلب الآن
</button>
</div>
</div>

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Lock className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">اتفاقيات عدم الإفصاح (NDA)</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">حماية أفكارك ومشاريعك السرية باتفاقيات قانونية صارمة وموثوقة.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-cyan-400">5 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "اتفاقيات عدم الإفصاح (NDA)", price: "5" })}
className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-cyan-500/20"
>
اطلب الآن
</button>
</div>
</div>

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group">
<div>
<div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<FileText className="w-6 h-6" />
</div>
<h3 className="text-xl font-bold mb-3 text-white">سياسات الخصوصية وشروط الاستخدام</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">توليد سياسات خصوصية احترافية تتوافق مع المعايير الدولية لموقعك أو تطبيقك.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-2xl font-black text-fuchsia-400">7 USDT</span>
<button
onClick={() => handleOpenCheckout({ name: "سياسات الخصوصية وشروط الاستخدام", price: "7" })}
className="px-4 py-2.5 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-bold text-sm transition-colors shadow-lg shadow-fuchsia-500/20"
>
اطلب الآن
</button>
</div>
</div>
</div>
)}

{/* 4️⃣ Crypto Escrow Hub */}
{activeTab === 'escrow' && (
<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl max-w-4xl mx-auto">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20">
<ShieldCheck className="w-8 h-8" />
</div>
<div>
<h2 className="text-2xl font-black text-white">خدمة الوساطة الرقمية الآمنة (Crypto Escrow)</h2>
<p className="text-slate-400 text-sm">حماية كاملة للمعاملات المالية بين المستقلين والشركات بضمان البلوكشين.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
<div className="text-emerald-400 font-bold mb-1">1. إيداع المبلغ</div>
<p className="text-xs text-slate-400">يقوم المشتري بتحويل المبلغ لعقد الوساطة لضمان الجدية.</p>
</div>
<div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
<div className="text-cyan-400 font-bold mb-1">2. إنجاز العمل</div>
<p className="text-xs text-slate-400">يقوم المستقل بتسليم المشروع والمراجعة الآمنة.</p>
</div>
<div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
<div className="text-fuchsia-400 font-bold mb-1">3. تحرير الأرباح</div>
<p className="text-xs text-slate-400">تحويل الأموال فوراً للمستقل عند رضا الطرفين بنسبة عمولة رمزية.</p>
</div>
</div>
<div className="text-center">
<button
onClick={() => handleOpenCheckout({ name: "خدمة الوساطة المالية (Escrow Setup)", price: "12" })}
className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-black text-base shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-opacity"
>
بدء معاملة وساطة جديدة (12 USDT)
</button>
</div>
</div>
)}

{/* 5️⃣ Subscriptions Hub */}
{activeTab === 'subscriptions' && (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-fuchsia-500/50 transition-all duration-300">
<div>
<span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Freelancer</span>
<h3 className="text-2xl font-black text-white mt-4 mb-2">باقة المستقلين</h3>
<p className="text-slate-400 text-sm mb-6">وصول كامل لأدوات السير الذاتية وصياغة العقود.</p>
<div className="text-3xl font-black text-cyan-400 mb-6">15 USDT <span className="text-xs text-slate-500 font-normal">/ شهرياً</span></div>
</div>
<button
onClick={() => handleOpenCheckout({ name: "باقة المستقلين الشهرية", price: "15" })}
className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-cyan-500/20"
>
اشتراك شهري
</button>
</div>

<div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-fuchsia-500/50 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-xl shadow-fuchsia-500/10 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white text-[10px] font-black uppercase tracking-wider">
الأكثر طلباً
</div>
<div>
<span className="px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">Creator</span>
<h3 className="text-2xl font-black text-white mt-4 mb-2">باقة صانع المحتوى</h3>
<p className="text-slate-400 text-sm mb-6">سيناريوهات غير محدودة، جداول نشر، وأوامر ذكاء اصطناعي متقدمة.</p>
<div className="text-3xl font-black text-fuchsia-400 mb-6">20 USDT <span className="text-xs text-slate-500 font-normal">/ شهرياً</span></div>
</div>
<button
onClick={() => handleOpenCheckout({ name: "باقة صانع المحتوى الشهرية", price: "20" })}
className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-600 hover:opacity-95 text-white font-bold text-sm transition-opacity shadow-lg shadow-fuchsia-500/25"
>
اشتراك شهري
</button>
</div>

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-fuchsia-500/50 transition-all duration-300">
<div>
<span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Business</span>
<h3 className="text-2xl font-black text-white mt-4 mb-2">باقة الشركات B2B</h3>
<p className="text-slate-400 text-sm mb-6">حلول أتمتة كاملة، تلخيص تقارير ضخمة، ودعم فني مخصص.</p>
<div className="text-3xl font-black text-indigo-400 mb-6">35 USDT <span className="text-xs text-slate-500 font-normal">/ شهرياً</span></div>
</div>
<button
onClick={() => handleOpenCheckout({ name: "باقة الشركات الشهرية B2B", price: "35" })}
className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-colors shadow-lg shadow-indigo-500/20"
>
اشتراك شهري
</button>
</div>
</div>
)}

</main>

{/* 💳 Checkout Modal */}
{isModalOpen && selectedService && (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
<div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-bold text-white">إتمام الدفع الفوري</h3>
<p className="text-xs text-cyan-400">{selectedService.name}</p>
</div>
<span className="text-xl font-black text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/20">
{selectedService.price} USDT
</span>
</div>

{!submitted ? (
<form onSubmit={handleVerifyPayment} className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">
عنوان محفظة المنصة (USDT TRC20):
</label>
<div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
<input
type="text"
readOnly
value={walletAddress}
className="bg-transparent text-xs text-slate-300 w-full outline-none font-mono"
/>
<button
type="button"
onClick={handleCopy}
className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors"
>
{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
</button>
</div>
{copied && <span className="text-[10px] text-emerald-400 mt-1 block">تم نسخ العنوان بنجاح!</span>}
</div>

<div>
<label className="block text-xs font-medium text-slate-400 mb-2">
رقم المعاملة (TxID) بعد التحويل:
</label>
<input
type="text"
required
placeholder="الصق رقم المعاملة هنا (مثال: 5f4e...)"
value={txId}
onChange={(e) => setTxId(e.target.value)}
className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 outline-none focus:border-cyan-500 transition-colors"
/>
</div>

<div className="flex gap-3 pt-2">
<button
type="button"
onClick={() => setIsModalOpen(false)}
className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors"
>
إلغاء
</button>
<button
type="submit"
className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-cyan-500/20"
>
تأكيد الدفع والخدمة
</button>
</div>
</form>
) : (
<div className="text-center py-8 space-y-4">
<div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
<CheckCircle2 className="w-8 h-8 animate-bounce" />
</div>
<h4 className="text-lg font-bold text-white">تم استلام طلبك بنجاح!</h4>
<p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
جاري التحقق من معاملة البلوكشين وتفعيل خدمتك فوراً عبر نظام n8n. شكراً لثقتك بنا.
</p>
<button
onClick={() => setIsModalOpen(false)}
className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold transition-colors"
>
إغلاق النافذة
</button>
</div>
)}
</div>
</div>
)}

{/* Footer */}
<footer className="border-t border-slate-900 bg-slate-950/40 py-8 mt-20 text-center text-xs text-slate-500">
<p>© 2026 Global AI Hub. All rights reserved. Powered by React, Tailwind & USDT.</p>
</footer>

</div>
);
}


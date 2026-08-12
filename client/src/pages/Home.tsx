import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LabsSection } from '@/components/LabsSection';
import { ReportsSection } from '@/components/ReportsSection';
import { TerminalSection } from '@/components/TerminalSection';
import { Shield, Lock, Cpu, BookOpen, Terminal, ArrowRight, CheckCircle2, Github, ExternalLink, Key } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    en: {
      badge: 'Advanced Cybersecurity Educational Platform',
      title1: 'Master Modern Cryptography &',
      titleGradient: 'Network Defense',
      desc: 'Explore core cybersecurity principles, cryptographic algorithms, secure banking system simulations, and interactive security labs curated by Ali Al-Karrar.',
      exploreLabs: 'Explore Security Labs',
      readReports: 'Read Research Reports',
      statsUsers: 'Open-source projects',
      statsLabs: 'Security focus areas',
      statsReports: 'Languages supported',
      statsUptime: 'Security-first',
      aboutTitle: 'About Mr. Atomic Platform',
      aboutDesc1: 'Mr. Atomic is a specialized educational web platform designed to explore and present core cybersecurity concepts. It serves as a comprehensive repository for academic research, technical whitepapers, and interactive learning modules focused on network security, encryption, and secure system architectures.',
      aboutDesc2: 'Created and curated as an advanced cybersecurity student project by Ali Al-Karrar, the platform bridges theoretical cryptography with hands-on interactive simulations.',
      feature1Title: 'Network Security',
      feature1Desc: 'Analysis of internet speeds, routing bottlenecks, and secure TCP/IP protocol simulations.',
      feature2Title: 'Cryptography',
      feature2Desc: 'Detailed reports and live encoders for Caesar, ROT13, Base64, and AES encryption principles.',
      feature3Title: 'System Simulation',
      feature3Desc: 'Practical simulations of secure financial banking architectures and threat modeling.',
    },
    ar: {
      badge: 'المنصة التعليمية المتقدمة للأمن السيبراني',
      title1: 'أتقن التشفير الحديث و',
      titleGradient: 'دفاع الشبكات',
      desc: 'استكشف مبادئ الأمن السيبراني الأساسية، خوارزميات التشفير، محاكاة الأنظمة المصرفية الآمنة، والمختبرات الأمنية التفاعلية بإشراف علي الكرار.',
      exploreLabs: 'استكشف المختبرات الأمنية',
      readReports: 'قراءة التقارير البحثية',
      statsUsers: 'مشروع مفتوح المصدر',
      statsLabs: 'مجالات أمنية',
      statsReports: 'لغات مدعومة',
      statsUptime: 'أمان أولًا',
      aboutTitle: 'عن منصة مستر أتوميك',
      aboutDesc1: 'مستر أتوميك هي منصة ويب تعليمية متخصصة مصممة لاستكشاف وعرض مفاهيم الأمن السيبراني الأساسية. وهي بمثابة مستودع شامل للبحث الأكاديمي والتقارير التقنية ووحدات التعلم التفاعلية.',
      aboutDesc2: 'تم إنشاء المنصة كمشروع أمني متقدم بواسطة علي الكرار، لربط التشفير النظري بالمحاكاة التفاعلية العملية.',
      feature1Title: 'أمن الشبكات',
      feature1Desc: 'تحليل سرعات الإنترنت، مختنقات التوجيه، ومحاكاة بروتوكولات TCP/IP الآمنة.',
      feature2Title: 'علم التشفير',
      feature2Desc: 'تقارير مفصلة ومشفّرات حية لأنظمة Caesar, ROT13, Base64 ومبادئ AES.',
      feature3Title: 'محاكاة الأنظمة',
      feature3Desc: 'محاكاة عملية لبنيات الخدمات المصرفية المالية الآمنة ونمذجة التهديدات.',
    },
  }[lang];

  return (
    <div className={`min-h-screen flex flex-col bg-[#0B0F19] text-[#F3F4F6] ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest shadow-lg shadow-cyan-500/10">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>{content.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              {content.title1}{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-500 bg-clip-text text-transparent neon-glow">
                {content.titleGradient}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {content.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#labs"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold text-base shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2.5"
              >
                <Cpu className="w-5 h-5" />
                {content.exploreLabs}
              </a>
              <a
                href="#reports"
                className="px-8 py-4 rounded-2xl glass-card hover:bg-white/10 text-white font-bold text-base border border-white/15 transition-all flex items-center gap-2.5"
              >
                <BookOpen className="w-5 h-5 text-cyan-400" />
                {content.readReports}
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-6 text-center border border-white/10">
                <span className="block text-3xl font-extrabold text-cyan-400 font-mono">14</span>
                <span className="text-xs text-gray-400 mt-1 block">{content.statsUsers}</span>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center border border-white/10">
                <span className="block text-3xl font-extrabold text-violet-400 font-mono">3</span>
                <span className="text-xs text-gray-400 mt-1 block">{content.statsLabs}</span>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center border border-white/10">
                <span className="block text-3xl font-extrabold text-emerald-400 font-mono">2</span>
                <span className="text-xs text-gray-400 mt-1 block">{content.statsReports}</span>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center border border-white/10">
                <span className="block text-3xl font-extrabold text-amber-400 font-mono">100%</span>
                <span className="text-xs text-gray-400 mt-1 block">{content.statsUptime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Labs Section */}
      <LabsSection lang={lang} />

      {/* Reports Section */}
      <ReportsSection lang={lang} />

      {/* Terminal Section */}
      <TerminalSection lang={lang} />

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-[#070A12]/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                {lang === 'en' ? 'About The Author' : 'عن المنصة والمؤلف'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {content.aboutTitle}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                {content.aboutDesc1}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {content.aboutDesc2}
              </p>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://github.com/9gkc/AtomicSite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-cyan-400 border border-cyan-500/30 text-sm font-bold flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  {lang === 'en' ? 'View GitHub Repository' : 'عرض مستودع GitHub'}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{content.feature1Title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{content.feature1Desc}</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <Key className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{content.feature2Title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{content.feature2Desc}</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{content.feature3Title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{content.feature3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}

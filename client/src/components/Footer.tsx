import React from 'react';
import { Shield, Github, Heart, Lock } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = {
    en: {
      desc: 'An advanced educational cybersecurity platform exploring network security, cryptography, and secure system architectures.',
      quickLinks: 'Quick Links',
      labs: 'Security Labs',
      reports: 'Research Reports',
      terminal: 'Hacker CLI',
      author: 'Curated by Ali Al-Karrar',
      rights: 'All rights reserved.',
      github: 'GitHub Repository',
    },
    ar: {
      desc: 'منصة تعليمية متقدمة في الأمن السيبراني تستكشف أمن الشبكات، التشفير، وبنيات الأنظمة الآمنة.',
      quickLinks: 'روابط سريعة',
      labs: 'المختبرات الأمنية',
      reports: 'التقارير البحثية',
      terminal: 'طرفية الهاكر',
      author: 'تم الإشراف بواسطة علي الكرار',
      rights: 'جميع الحقوق محفوظة.',
      github: 'مستودع GitHub',
    },
  }[lang];

  return (
    <footer className="bg-[#070A12] border-t border-white/10 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                MR. ATOMIC
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">{t.desc}</p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/9gkc/AtomicSite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary/80 hover:bg-cyan-500/20 text-cyan-400 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#terminal"
                className="w-10 h-10 rounded-xl bg-secondary/80 hover:bg-violet-500/20 text-violet-400 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Lock className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">{t.quickLinks}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#labs" className="hover:text-cyan-400 transition-colors">{t.labs}</a>
              </li>
              <li>
                <a href="#reports" className="hover:text-cyan-400 transition-colors">{t.reports}</a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-cyan-400 transition-colors">{t.terminal}</a>
              </li>
              <li>
                <a href="https://github.com/9gkc/AtomicSite" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  {t.github}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">
              {lang === 'en' ? 'Security Domain' : 'مجال الأمان'}
            </h4>
            <div className="space-y-2 text-xs font-mono text-cyan-400/80 bg-secondary/40 p-4 rounded-xl border border-white/5">
              <div className="flex items-center justify-between">
                <span>STATUS:</span>
                <span className="text-emerald-400">SECURE [OK]</span>
              </div>
              <div className="flex items-center justify-between">
                <span>ENCRYPTION:</span>
                <span className="text-cyan-400">AES-256-GCM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>PORT:</span>
                <span className="text-violet-400">443 TLS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 AtomicSite. {t.rights}</p>
          <p className="flex items-center gap-1">
            {t.author} <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

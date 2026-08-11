import React, { useState } from 'react';
import { Shield, Terminal, BookOpen, Cpu, Globe, Github, Menu, X, Lock } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    en: {
      brand: 'MR. ATOMIC',
      tagline: 'Cybersecurity Hub',
      labs: 'Security Labs',
      reports: 'Research Reports',
      terminal: 'Hacker CLI',
      about: 'About',
      github: 'GitHub Repo',
      langToggle: 'العربية',
    },
    ar: {
      brand: 'مستر أتوميك',
      tagline: 'منصة الأمن السيبراني',
      labs: 'المختبرات الأمنية',
      reports: 'التقارير البحثية',
      terminal: 'طرفية الهاكر',
      about: 'عن المنصة',
      github: 'مستودع GitHub',
      langToggle: 'English',
    },
  }[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-black" />
            <div className="absolute inset-0 rounded-xl border border-white/30 animate-pulse"></div>
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {t.brand}
            </span>
            <span className="block text-xs text-muted-foreground font-mono">{t.tagline}</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#labs" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            {t.labs}
          </a>
          <a href="#reports" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-violet-400" />
            {t.reports}
          </a>
          <a href="#terminal" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            {t.terminal}
          </a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            {t.about}
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-xs font-semibold text-cyan-400 border border-cyan-500/30 transition-all flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            {t.langToggle}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/9gkc/AtomicSite"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            {t.github}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="px-2.5 py-1 rounded-md bg-secondary text-xs font-semibold text-cyan-400 border border-cyan-500/30 flex items-center gap-1"
          >
            <Globe className="w-3 h-3" />
            {t.langToggle}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 space-y-4">
          <a
            href="#labs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-cyan-400"
          >
            {t.labs}
          </a>
          <a
            href="#reports"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-cyan-400"
          >
            {t.reports}
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-cyan-400"
          >
            {t.terminal}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-cyan-400"
          >
            {t.about}
          </a>
          <div className="pt-4 border-t border-white/10">
            <a
              href="https://github.com/9gkc/AtomicSite"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-cyan-500 text-black text-sm font-bold flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              {t.github}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { Cpu, Lock, Key, ShieldCheck, RefreshCw, Terminal, CheckCircle2, AlertTriangle, Play, Zap } from 'lucide-react';

interface LabsProps {
  lang: 'en' | 'ar';
}

export const LabsSection: React.FC<LabsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'crypto' | 'password' | 'network'>('crypto');

  // Crypto state
  const [inputText, setInputText] = useState('Cybersecurity & Cryptography');
  const [caesarShift, setCaesarShift] = useState(3);
  const [cryptoMode, setCryptoMode] = useState<'caesar' | 'base64' | 'rot13'>('caesar');

  // Password state
  const [password, setPassword] = useState('AtomicP@ss2026!');

  // Network Scanner state
  const [scanning, setScanning] = useState(false);
  const [scanResults, setScanResults] = useState<Array<{ port: number; service: string; status: string; risk: string }>>([
    { port: 22, service: 'SSH', status: 'OPEN', risk: 'Medium' },
    { port: 80, service: 'HTTP', status: 'OPEN', risk: 'Low' },
    { port: 443, service: 'HTTPS', status: 'SECURE', risk: 'Low' },
    { port: 3306, service: 'MySQL', status: 'FILTERED', risk: 'High' },
  ]);

  // Crypto functions
  const caesarCipher = (str: string, shift: number) => {
    return str.replace(/[a-zA-Z]/g, (char) => {
      const start = char <= 'z' ? 97 : 65;
      return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
    });
  };

  const rot13 = (str: string) => caesarCipher(str, 13);

  const base64Encode = (str: string) => {
    try {
      return btoa(unescape(encodeURIComponent(str)));
    } catch {
      return 'Invalid Input';
    }
  };

  const getEncryptedOutput = () => {
    if (cryptoMode === 'caesar') return caesarCipher(inputText, caesarShift);
    if (cryptoMode === 'rot13') return rot13(inputText);
    if (cryptoMode === 'base64') return base64Encode(inputText);
    return inputText;
  };

  // Password calculations
  const calculatePasswordStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score += 25;
    if (pwd.length >= 12) score += 15;
    if (/[A-Z]/.test(pwd)) score += 20;
    if (/[0-9]/.test(pwd)) score += 20;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;
    return Math.min(score, 100);
  };

  const strength = calculatePasswordStrength(password);
  const getStrengthLabel = (s: number) => {
    if (s < 40) return { label: lang === 'en' ? 'Weak' : 'ضعيفة', color: 'text-red-400 bg-red-500/10 border-red-500/30' };
    if (s < 75) return { label: lang === 'en' ? 'Moderate' : 'متوسطة', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    return { label: lang === 'en' ? 'Strong & Secure' : 'قوية وآمنة', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
  };

  const runPortScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanResults([
        { port: 21, service: 'FTP', status: 'CLOSED', risk: 'Low' },
        { port: 22, service: 'SSH Secure Shell', status: 'OPEN', risk: 'Medium' },
        { port: 80, service: 'HTTP Web Server', status: 'OPEN', risk: 'Low' },
        { port: 443, service: 'HTTPS TLS v1.3', status: 'SECURE', risk: 'Low' },
        { port: 3306, service: 'MySQL Database', status: 'INTERNAL', risk: 'High' },
        { port: 8080, service: 'Proxy / API Gateway', status: 'OPEN', risk: 'Medium' },
      ]);
      setScanning(false);
    }, 1200);
  };

  const content = {
    en: {
      title: 'Interactive Security Labs',
      subtitle: 'Test, simulate, and experiment with real-time cryptographic algorithms, password entropy analyzers, and network telemetry.',
      tabCrypto: 'Cryptography Lab',
      tabPassword: 'Password Entropy',
      tabNetwork: 'Network Port Scanner',
      inputLabel: 'Plaintext Input:',
      modeLabel: 'Encryption Algorithm:',
      outputLabel: 'Encrypted / Processed Output:',
      pwdLabel: 'Test Password:',
      crackTime: 'Estimated Brute-Force Time:',
      scanBtn: 'Run Network Scan',
      scanning: 'Scanning ports and telemetry...',
    },
    ar: {
      title: 'المختبرات الأمنية التفاعلية',
      subtitle: 'جرب واختبر خوارزميات التشفير في الوقت الفعلي، محللات قوة كلمات المرور، ومحاكاة شبكات الاتصال.',
      tabCrypto: 'مختبر التشفير',
      tabPassword: 'فحص قوة الكلمة',
      tabNetwork: 'ماسح المنافذ',
      inputLabel: 'النص الأصلي:',
      modeLabel: 'خوارزمية التشفير:',
      outputLabel: 'الناتج المشفر:',
      pwdLabel: 'كلمة المرور التجريبية:',
      crackTime: 'الوقت المقدر للاختراق:',
      scanBtn: 'بدء فحص الشبكة',
      scanning: 'جاري فحص المنافذ والاتصالات...',
    },
  }[lang];

  return (
    <section id="labs" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            {lang === 'en' ? 'Live Interactive Labs' : 'مختبرات تفاعلية حية'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{content.subtitle}</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('crypto')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
              activeTab === 'crypto'
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-secondary/60 text-gray-300 hover:bg-secondary border border-white/10'
            }`}
          >
            <Key className="w-4 h-4" />
            {content.tabCrypto}
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
              activeTab === 'password'
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-secondary/60 text-gray-300 hover:bg-secondary border border-white/10'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            {content.tabPassword}
          </button>
          <button
            onClick={() => setActiveTab('network')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
              activeTab === 'network'
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-secondary/60 text-gray-300 hover:bg-secondary border border-white/10'
            }`}
          >
            <Terminal className="w-4 h-4" />
            {content.tabNetwork}
          </button>
        </div>

        {/* Tab Content 1: Cryptography Lab */}
        {activeTab === 'crypto' && (
          <div className="glass-card rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
                    {content.inputLabel}
                  </label>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full bg-[#070A12] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
                    {content.modeLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setCryptoMode('caesar')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                        cryptoMode === 'caesar' ? 'bg-cyan-500 text-black' : 'bg-secondary text-gray-300 hover:bg-secondary/80'
                      }`}
                    >
                      Caesar
                    </button>
                    <button
                      onClick={() => setCryptoMode('rot13')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                        cryptoMode === 'rot13' ? 'bg-cyan-500 text-black' : 'bg-secondary text-gray-300 hover:bg-secondary/80'
                      }`}
                    >
                      ROT13
                    </button>
                    <button
                      onClick={() => setCryptoMode('base64')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                        cryptoMode === 'base64' ? 'bg-cyan-500 text-black' : 'bg-secondary text-gray-300 hover:bg-secondary/80'
                      }`}
                    >
                      Base64
                    </button>
                  </div>
                </div>

                {cryptoMode === 'caesar' && (
                  <div>
                    <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
                      Caesar Shift Key: {caesarShift}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={caesarShift}
                      onChange={(e) => setCaesarShift(Number(e.target.value))}
                      className="w-full accent-cyan-500 bg-secondary"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between bg-[#070A12] p-6 rounded-xl border border-white/10 font-mono">
                <div>
                  <span className="text-xs text-gray-500 uppercase block mb-2">{content.outputLabel}</span>
                  <div className="text-cyan-400 text-lg break-all bg-secondary/50 p-4 rounded-lg border border-cyan-500/20">
                    {getEncryptedOutput()}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Algorithm: {cryptoMode.toUpperCase()}</span>
                  <span className="text-emerald-400">STATUS: SECURE</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Password Entropy */}
        {activeTab === 'password' && (
          <div className="glass-card rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto border border-white/10">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
                  {content.pwdLabel}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#070A12] border border-white/10 rounded-xl px-4 py-3.5 text-white text-base font-mono focus:outline-none focus:border-cyan-500 transition-colors pr-24"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${getStrengthLabel(strength).color}`}>
                      {getStrengthLabel(strength).label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                  <span>Strength Score</span>
                  <span>{strength}%</span>
                </div>
                <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      strength < 40 ? 'bg-red-500' : strength < 75 ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${strength}%` }}
                  ></div>
                </div>
              </div>

              {/* Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="bg-[#070A12] p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  {password.length >= 8 ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-5 h-5 text-gray-500 shrink-0" />}
                  <span className="text-xs text-gray-300">{lang === 'en' ? '8+ Characters' : '8+ أحرف'}</span>
                </div>
                <div className="bg-[#070A12] p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  {/[A-Z]/.test(password) ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-5 h-5 text-gray-500 shrink-0" />}
                  <span className="text-xs text-gray-300">{lang === 'en' ? 'Uppercase Letter' : 'حرف كبير'}</span>
                </div>
                <div className="bg-[#070A12] p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  {/[0-9]/.test(password) ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-5 h-5 text-gray-500 shrink-0" />}
                  <span className="text-xs text-gray-300">{lang === 'en' ? 'Numbers Included' : 'أرقام'}</span>
                </div>
                <div className="bg-[#070A12] p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  {/[^A-Za-z0-9]/.test(password) ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-5 h-5 text-gray-500 shrink-0" />}
                  <span className="text-xs text-gray-300">{lang === 'en' ? 'Special Symbol' : 'رمز خاص'}</span>
                </div>
              </div>

              <div className="bg-[#070A12] p-4 rounded-xl border border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-400">{content.crackTime}</span>
                <span className="text-cyan-400 font-bold">
                  {strength > 75 ? '3,400 Years (Secure)' : strength > 40 ? '42 Days' : 'Instant (< 1 second)'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Network Port Scanner */}
        {activeTab === 'network' && (
          <div className="glass-card rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto border border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {lang === 'en' ? 'Simulated Target: 192.168.1.105' : 'الهدف المحاكى: 192.168.1.105'}
                </h3>
                <p className="text-xs text-gray-400 font-mono">TCP SYN Port Scan & Protocol Inspection</p>
              </div>
              <button
                onClick={runPortScan}
                disabled={scanning}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black text-xs font-bold shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {scanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                {scanning ? content.scanning : content.scanBtn}
              </button>
            </div>

            <div className="bg-[#070A12] rounded-xl border border-white/10 overflow-hidden font-mono text-xs">
              <div className="grid grid-cols-4 bg-secondary/80 p-3 text-gray-400 font-bold border-b border-white/10">
                <span>PORT</span>
                <span>SERVICE</span>
                <span>STATUS</span>
                <span>RISK LEVEL</span>
              </div>
              <div className="divide-y divide-white/5">
                {scanResults.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-4 p-3.5 items-center hover:bg-white/5 transition-colors">
                    <span className="text-cyan-400 font-bold">{item.port}</span>
                    <span className="text-gray-200">{item.service}</span>
                    <span className={item.status === 'OPEN' ? 'text-amber-400 font-bold' : item.status === 'SECURE' ? 'text-emerald-400 font-bold' : 'text-gray-400'}>
                      {item.status}
                    </span>
                    <span className={item.risk === 'High' ? 'text-red-400' : item.risk === 'Medium' ? 'text-amber-400' : 'text-emerald-400'}>
                      {item.risk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

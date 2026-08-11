import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Shield, Play, CornerDownLeft } from 'lucide-react';

interface TerminalProps {
  lang: 'en' | 'ar';
}

interface LogEntry {
  command?: string;
  output: string | React.ReactNode;
  type?: 'input' | 'output' | 'error' | 'success';
}

export const TerminalSection: React.FC<TerminalProps> = ({ lang }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      output: (
        <span className="text-cyan-400">
          {'===================================================\n'}
          {'MR. ATOMIC SECURITY CLI v3.4.1 [SECURE KERNEL]\n'}
          {'Type "help" to view available commands or "scan" to run diagnostics.\n'}
          {'==================================================='}
        </span>
      ),
      type: 'output',
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: LogEntry[] = [...logs, { command: input, output: `$ ${input}`, type: 'input' }];

    if (cmd === 'help') {
      newLogs.push({
        output: `Available Commands:
  - scan      : Run comprehensive vulnerability & port scan
  - status    : Check system telemetry and firewall status
  - crypto    : Display active cipher suites and encryption health
  - about     : Display platform background & author info
  - clear     : Clear terminal output
  - date      : Print current UTC timestamp`,
        type: 'output',
      });
    } else if (cmd === 'scan') {
      newLogs.push({
        output: `[+] Initializing TCP SYN scan on 127.0.0.1...
[+] Port 22 (SSH)   : OPEN [RSA/ED25519]
[+] Port 80 (HTTP)  : OPEN [Redirect to HTTPS]
[+] Port 443 (HTTPS): SECURE [TLS v1.3 / AES-256-GCM]
[+] Port 3306(SQL)  : RESTRICTED [Localhost Only]
[✔] Scan complete. 0 critical vulnerabilities found.`,
        type: 'success',
      });
    } else if (cmd === 'status') {
      newLogs.push({
        output: `SYSTEM STATUS: ALL SYSTEMS SECURE
- Firewall: ACTIVE (Strict Ingress Policy)
- IDS / IPS: MONITORING (0 alerts in last 24h)
- Memory Integrity: VERIFIED`,
        type: 'success',
      });
    } else if (cmd === 'crypto') {
      newLogs.push({
        output: `ACTIVE CIPHER SUITES:
- TLS_AES_256_GCM_SHA384
- TLS_CHACHA20_POLY1305_SHA256
- RSA 4096-bit Key Exchange Active`,
        type: 'output',
      });
    } else if (cmd === 'about') {
      newLogs.push({
        output: `Mr. Atomic Security Platform - Curated by Ali Al-Karrar.
Focus areas: Network security, cryptography, secure banking simulations.`,
        type: 'output',
      });
    } else if (cmd === 'clear') {
      setLogs([]);
      setInput('');
      return;
    } else if (cmd === 'date') {
      newLogs.push({
        output: new Date().toUTCString(),
        type: 'output',
      });
    } else {
      newLogs.push({
        output: `Command not recognized: "${input}". Type "help" for available commands.`,
        type: 'error',
      });
    }

    setLogs(newLogs);
    setInput('');
  };

  const t = {
    en: {
      badge: 'Interactive Hacker CLI',
      title: 'Command Line Security Terminal',
      subtitle: 'Execute real diagnostic commands, inspect telemetry, and simulate security operations in a sandboxed environment.',
      placeholder: 'Type command (e.g., help, scan, status)...',
    },
    ar: {
      badge: 'طرفية الهاكر التفاعلية',
      title: 'طرفية الأوامر الأمنية',
      subtitle: 'قم بتنفيذ أوامر التشخيص الحقيقية، افحص القياسات عن بعد، ومحاكاة عمليات الأمان في بيئة آمنة.',
      placeholder: 'اكتب أمراً (مثل: help, scan, status)...',
    },
  }[lang];

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <TerminalIcon className="w-4 h-4" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Terminal Box */}
        <div className="rounded-2xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 font-mono">
          {/* Top Title Bar */}
          <div className="bg-[#070A12] px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-3 text-xs text-gray-400">ali@mr-atomic-terminal:~#</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-cyan-400">
              <Shield className="w-3.5 h-3.5" />
              <span>SECURE SHELL</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 bg-[#05080E] min-h-[350px] max-h-[450px] overflow-y-auto space-y-3 text-xs sm:text-sm">
            {logs.map((log, index) => (
              <div key={index} className="space-y-1">
                {log.command && <div className="text-gray-500">{log.output}</div>}
                {!log.command && (
                  <div className={`whitespace-pre-wrap ${log.type === 'error' ? 'text-red-400' : log.type === 'success' ? 'text-emerald-400' : 'text-gray-300'}`}>
                    {log.output}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef}></div>
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={handleCommand} className="bg-[#070A12] p-4 border-t border-white/10 flex items-center gap-3">
            <span className="text-cyan-400 font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>{lang === 'en' ? 'Execute' : 'تنفيذ'}</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

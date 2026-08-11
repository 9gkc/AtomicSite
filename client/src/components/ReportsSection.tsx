import React, { useState } from 'react';
import { BookOpen, FileText, Download, ExternalLink, ShieldAlert, CheckCircle, ArrowRight, X } from 'lucide-react';

interface ReportsProps {
  lang: 'en' | 'ar';
}

interface ReportItem {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  descEn: string;
  descAr: string;
  date: string;
  readTime: string;
  contentEn: string;
  contentAr: string;
}

const reportsData: ReportItem[] = [
  {
    id: 'banking',
    titleEn: 'Banking System Simulation & Secure Architecture',
    titleAr: 'محاكاة النظام المصرفي وبنيته الأمنية',
    categoryEn: 'System Architecture',
    categoryAr: 'بنية الأنظمة',
    descEn: 'A deep-dive technical simulation analyzing secure transaction pipelines, multi-factor authentication, and end-to-end ledger protection against man-in-the-middle attacks.',
    descAr: 'محاكاة تقنية متعمقة تحلل خطوط المعاملات الآمنة، المصادقة متعددة العوامل، وحماية السجلات من هجمات الرجل في المنتصف.',
    date: 'August 2026',
    readTime: '12 min read',
    contentEn: `Banking System Simulation Report\n\n1. Executive Summary\nModern financial institutions require robust cryptographic shielding and atomic transaction validation to prevent fraudulent injections.\n\n2. Core Security Protocols\n- Mutual TLS (mTLS) for inter-service communication.\n- Hardware Security Modules (HSM) for asymmetric key storage.\n- Real-time anomaly detection using behavioral heuristics.\n\n3. Threat Modeling\nWe simulated a distributed denial of service (DDoS) combined with credential stuffing. The system successfully throttled unauthorized IPs and triggered automated rate-limiting guards.`,
    contentAr: `تقرير محاكاة النظام المصرفي\n\n1. الملخص التنفيذي\nتتطلب المؤسسات المالية الحديثة دروعاً تشفيرية قوية والتحقق من المعاملات الذرية لمنع الحقن الاحتيالي.\n\n2. بروتوكولات الأمان الأساسية\n- بروتوكول TLS المتبادل (mTLS) للاتصال بين الخدمات.\n- وحدات الأمان الهاردويرية (HSM) لتخزين المفاتيح غير المتماثلة.\n- كشف الشذوذ في الوقت الفعلي باستخدام الاستدلال السلوكي.\n\n3. نمذجة التهديدات\nقمنا بمحاكاة هجوم حجب الخدمة الموزع (DDoS) مع حشو بيانات الاعتماد. نجح النظام في تقييد عناوين IP غير المصرح بها وتفعيل حدود المعدل الآلي.`,
  },
  {
    id: 'encryption',
    titleEn: 'Encryption Principles & Modern Cryptographic Standards',
    titleAr: 'مبادئ التشفير ومعايير التشفير الحديثة',
    categoryEn: 'Cryptography',
    categoryAr: 'علم التشفير',
    descEn: 'An exhaustive analysis of symmetric vs. asymmetric encryption, Elliptic Curve Cryptography (ECC), and post-quantum cryptographic readiness.',
    descAr: 'تحليل شامل للتشفير المتماثل وغير المتماثل، تشفير المنحنيات الإهليلجية (ECC)، والاستعداد للتشفير ما بعد الكمي.',
    date: 'August 2026',
    readTime: '15 min read',
    contentEn: `Encryption Principles & Modern Cryptographic Standards\n\n1. Introduction\nCryptography forms the bedrock of digital trust. As computing power escalates, traditional RSA-2048 faces increasing vulnerability to Shor's algorithm.\n\n2. Symmetric Encryption (AES-256)\nAdvanced Encryption Standard with 256-bit keys provides the industry standard for data-at-rest and data-in-transit.\n\n3. Asymmetric & ECC\nElliptic Curve Cryptography offers equivalent security to RSA with significantly smaller key sizes, optimizing bandwidth and latency in mobile and IoT ecosystems.`,
    contentAr: `مبادئ التشفير ومعايير التشفير الحديثة\n\n1. مقدمة\nيشكل التشفير أساس الثقة الرقمية. ومع تصاعد القدرة الحوسبية، يواجه نظام RSA-2048 تقليديًا ضعفًا متزايدًا أمام خوارزمية شور.\n\n2. التشفير المتماثل (AES-256)\nيوفر معيار التشفير المتقدم بمفاتيح 256 بت المعيار الصناعي للبيانات أثناء السكون وأثناء النقل.\n\n3. التشفير غير المتماثل و ECC\nيوفر تشفير المنحنيات الإهليلجية أمانًا مكافئًا لـ RSA مع أحجام مفاتيح أصغر بكثير، مما يحسن النطاق الترددي والكمون في أنظمة إنترنت الأشياء.`,
  },
  {
    id: 'network',
    titleEn: 'Network Speed & Protocol Vulnerability Analysis',
    titleAr: 'تحليل سرعة الشبكات وثغرات البروتوكولات',
    categoryEn: 'Network Security',
    categoryAr: 'أمن الشبكات',
    descEn: 'Examining latency bottlenecks, TCP handshake vulnerabilities, packet sniffing countermeasures, and firewall rule optimizations.',
    descAr: 'فحص مختنقات زمن الوصول، ثغرات مصافحة TCP، تدابير مكافحة التنصت على الحزم، وتحسينات قواعد جدار الحماية.',
    date: 'August 2026',
    readTime: '10 min read',
    contentEn: `Network Speed & Protocol Vulnerability Analysis\n\n1. Overview\nPacket inspection reveals how suboptimal routing tables and legacy unencrypted protocols expose enterprise networks to passive wiretapping.\n\n2. Mitigation Strategies\n- Implementation of strict firewall ingress/egress filtering.\n- Transitioning all web traffic to HTTPS / HTTP/3 over QUIC.\n- Continuous monitoring via Intrusion Detection Systems (IDS).`,
    contentAr: `تحليل سرعة الشبكات وثغرات البروتوكولات\n\n1. نظرة عامة\nيكشف فحص الحزم كيف تعرض جداول التوجيه دون الأوبتيمال والبروتوكولات غير المشفرة القديمة شبكات المؤسسات للتنصت السلبي.\n\n2. استراتيجيات التخفيف\n- تنفيذ تصفية صارمة لدخول/خروج الجدار الناري.\n- الانتقال بجميع حركة مرور الويب إلى HTTPS / HTTP/3 عبر QUIC.\n- المراقبة المستمرة عبر أنظمة كشف التسلل (IDS).`,
  },
  {
    id: 'discrete',
    titleEn: 'Discrete Structures & Mathematical Foundations for Security',
    titleAr: 'الهياكل المتقطعة والأسس الرياضية للأمان',
    categoryEn: 'Academic Theory',
    categoryAr: 'النظريات الأكاديمية',
    descEn: 'Exploring graph theory, modular arithmetic, prime number factorization, and combinatorial logic underpinning modern cryptographic keys.',
    descAr: 'استكشاف نظرية الرسوم البيانية، الحساب المعياري، تحليل الأعداد الأولية، والمنطق التوافقي الذي يدعم مفاتيح التشفير الحديثة.',
    date: 'August 2026',
    readTime: '14 min read',
    contentEn: `Discrete Structures & Mathematical Foundations for Security\n\n1. Number Theory & Primes\nThe difficulty of factoring large composite numbers into prime components remains the mathematical trapdoor behind RSA encryption.\n\n2. Graph Theory in Network Topology\nDirected and undirected graphs model network reachability, firewall traversal paths, and potential attack vectors in enterprise microservices.`,
    contentAr: `الهياكل المتقطعة والأسس الرياضية للأمان\n\n1. نظرية الأعداد والأوليات\nتبقى صعوبة تحليل الأعداد المركبة الكبيرة إلى مكونات أولية هي الباب الخلفي الرياضي خلف تشفير RSA.\n\n2. نظرية الرسوم البيانية في طبولوجيا الشبكات\nتصمم الرسوم البيانية الموجهة وغير الموجهة إمكانية الوصول للشبكة، مسارات عبور الجدار الناري، ومواضع الهجوم المحتملة في الخدمات المصغرة للمؤسسات.`,
  },
];

export const ReportsSection: React.FC<ReportsProps> = ({ lang }) => {
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);

  const t = {
    en: {
      badge: 'Research Repository',
      title: 'Academic & Technical Reports',
      subtitle: 'Comprehensive whitepapers and security analyses authored for advanced cybersecurity studies and system architectures.',
      readMore: 'Read Full Report',
      close: 'Close Report',
      download: 'Download PDF',
      published: 'Published',
      readTime: 'Estimated Read',
    },
    ar: {
      badge: 'مستودع الأبحاث',
      title: 'التقارير الأكاديمية والتقنية',
      subtitle: 'أوراق بيضاء شاملة وتحليلات أمنية تم إعدادها لدراسات الأمن السيبراني المتقدمة وبنيات الأنظمة.',
      readMore: 'قراءة التقرير الكامل',
      close: 'إغلاق التقرير',
      download: 'تحميل PDF',
      published: 'تاريخ النشر',
      readTime: 'وقت القراءة',
    },
  }[lang];

  return (
    <section id="reports" className="py-24 relative overflow-hidden bg-[#070A12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reportsData.map((report) => (
            <div key={report.id} className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                    {lang === 'en' ? report.categoryEn : report.categoryAr}
                  </span>
                  <span className="text-xs font-mono text-gray-500">{report.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {lang === 'en' ? report.titleEn : report.titleAr}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {lang === 'en' ? report.descEn : report.descAr}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">{report.date}</span>
                <button
                  onClick={() => setSelectedReport(report)}
                  className="px-4 py-2 rounded-xl bg-secondary hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-bold transition-all flex items-center gap-2"
                >
                  {t.readMore}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Report Modal */}
        {selectedReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel w-full max-w-3xl max-h-[85vh] rounded-2xl overflow-y-auto border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative">
              <button
                onClick={() => setSelectedReport(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-secondary hover:bg-red-500 hover:text-white text-gray-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                    {lang === 'en' ? selectedReport.categoryEn : selectedReport.categoryAr}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {lang === 'en' ? selectedReport.titleEn : selectedReport.titleAr}
                  </h2>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mt-2">
                    <span>{t.published}: {selectedReport.date}</span>
                    <span>•</span>
                    <span>{selectedReport.readTime}</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#070A12] border border-white/10 font-mono text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {lang === 'en' ? selectedReport.contentEn : selectedReport.contentAr}
                </div>

                <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => alert(lang === 'en' ? 'PDF report download initiated!' : 'تم بدء تحميل تقرير PDF!')}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {t.download}
                  </button>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-gray-300 text-xs font-bold transition-all"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TEMPLATES } from '@/constants/templates';
import styles from './page.module.scss';

const TemplatePreviews = {
  modern: (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#fff" />
      <rect x="0" y="0" width="200" height="52" fill="#2563eb" />
      <rect x="12" y="10" width="100" height="10" rx="2" fill="#fff" opacity="0.9" />
      <rect x="12" y="26" width="70" height="6" rx="1.5" fill="#fff" opacity="0.6" />
      <rect x="12" y="38" width="55" height="5" rx="1.5" fill="#fff" opacity="0.5" />
      <rect x="12" y="64" width="45" height="6" rx="1.5" fill="#2563eb" />
      <rect x="12" y="73" width="176" height="1" fill="#e2e8f0" />
      <rect x="12" y="80" width="120" height="5" rx="1.5" fill="#94a3b8" />
      <rect x="12" y="90" width="100" height="4" rx="1.5" fill="#cbd5e1" />
      <rect x="12" y="108" width="50" height="6" rx="1.5" fill="#2563eb" />
      <rect x="12" y="117" width="176" height="1" fill="#e2e8f0" />
      <rect x="12" y="124" width="110" height="5" rx="1.5" fill="#334155" />
      <rect x="12" y="133" width="80" height="4" rx="1.5" fill="#94a3b8" />
      <rect x="12" y="142" width="150" height="4" rx="1.5" fill="#cbd5e1" />
      <rect x="12" y="150" width="140" height="4" rx="1.5" fill="#cbd5e1" />
      <rect x="12" y="170" width="50" height="6" rx="1.5" fill="#2563eb" />
      <rect x="12" y="179" width="176" height="1" fill="#e2e8f0" />
      <rect x="12" y="186" width="30" height="16" rx="8" fill="#f1f5f9" />
      <rect x="48" y="186" width="36" height="16" rx="8" fill="#f1f5f9" />
      <rect x="90" y="186" width="28" height="16" rx="8" fill="#f1f5f9" />
      <rect x="124" y="186" width="40" height="16" rx="8" fill="#f1f5f9" />
    </svg>
  ),
  classic: (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#fff" />
      <rect x="12" y="12" width="176" height="1" fill="#1e293b" />
      <rect x="12" y="20" width="130" height="12" rx="2" fill="#1e293b" />
      <rect x="12" y="36" width="90" height="6" rx="1.5" fill="#64748b" />
      <rect x="12" y="46" width="176" height="1" fill="#1e293b" />
      <rect x="12" y="56" width="80" height="6" rx="1.5" fill="#1e293b" />
      <rect x="12" y="66" width="176" height="1" fill="#e2e8f0" />
      <rect x="12" y="73" width="120" height="5" rx="1.5" fill="#475569" />
      <rect x="12" y="82" width="100" height="4" rx="1.5" fill="#94a3b8" />
      <rect x="12" y="98" width="80" height="6" rx="1.5" fill="#1e293b" />
      <rect x="12" y="107" width="176" height="1" fill="#e2e8f0" />
      <rect x="12" y="114" width="100" height="5" rx="1.5" fill="#475569" />
      <rect x="12" y="123" width="80" height="4" rx="1.5" fill="#94a3b8" />
      <rect x="12" y="132" width="150" height="4" rx="1.5" fill="#cbd5e1" />
      <rect x="12" y="140" width="140" height="4" rx="1.5" fill="#cbd5e1" />
      <rect x="12" y="156" width="60" height="6" rx="1.5" fill="#1e293b" />
      <rect x="12" y="165" width="176" height="1" fill="#e2e8f0" />
      <rect x="16" y="172" width="140" height="4" rx="1.5" fill="#94a3b8" />
      <rect x="16" y="180" width="120" height="4" rx="1.5" fill="#94a3b8" />
    </svg>
  ),
  minimal: (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#fafafa" />
      <rect x="12" y="18" width="110" height="14" rx="2" fill="#111827" />
      <rect x="12" y="37" width="160" height="5" rx="1.5" fill="#9ca3af" />
      <rect x="12" y="58" width="40" height="1" fill="#111827" />
      <rect x="12" y="66" width="100" height="5" rx="1.5" fill="#374151" />
      <rect x="12" y="75" width="70" height="4" rx="1.5" fill="#9ca3af" />
      <rect x="12" y="86" width="145" height="4" rx="1.5" fill="#d1d5db" />
      <rect x="12" y="94" width="130" height="4" rx="1.5" fill="#d1d5db" />
      <rect x="12" y="110" width="40" height="1" fill="#111827" />
      <rect x="12" y="118" width="95" height="5" rx="1.5" fill="#374151" />
      <rect x="12" y="127" width="60" height="4" rx="1.5" fill="#9ca3af" />
      <rect x="12" y="144" width="40" height="1" fill="#111827" />
      <rect x="12" y="152" width="140" height="4" rx="1.5" fill="#d1d5db" />
      <rect x="12" y="164" width="40" height="1" fill="#111827" />
      <rect x="12" y="172" width="155" height="4" rx="1.5" fill="#9ca3af" />
    </svg>
  ),
  professional: (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#fff" />
      <rect x="0" y="0" width="200" height="60" fill="#1e3a5f" />
      <rect x="12" y="10" width="110" height="12" rx="2" fill="#fff" />
      <rect x="12" y="27" width="80" height="6" rx="1.5" fill="#93c5fd" opacity="0.8" />
      <rect x="12" y="38" width="176" height="5" rx="1.5" fill="#fff" opacity="0.4" />
      <rect x="0" y="60" width="200" height="2" fill="#2563eb" />
      <rect x="12" y="72" width="60" height="6" rx="1.5" fill="#1e3a5f" />
      <rect x="12" y="82" width="176" height="1" fill="#dbeafe" />
      <rect x="12" y="89" width="100" height="5" rx="1.5" fill="#334155" />
      <rect x="12" y="98" width="75" height="4" rx="1.5" fill="#64748b" />
      <rect x="16" y="106" width="145" height="3" rx="1" fill="#cbd5e1" />
      <rect x="16" y="112" width="130" height="3" rx="1" fill="#cbd5e1" />
      <rect x="12" y="125" width="70" height="6" rx="1.5" fill="#1e3a5f" />
      <rect x="12" y="134" width="176" height="1" fill="#dbeafe" />
      <rect x="12" y="141" width="90" height="5" rx="1.5" fill="#334155" />
      <rect x="12" y="150" width="70" height="4" rx="1.5" fill="#64748b" />
      <rect x="16" y="158" width="140" height="3" rx="1" fill="#cbd5e1" />
      <rect x="12" y="171" width="65" height="6" rx="1.5" fill="#1e3a5f" />
      <rect x="12" y="180" width="176" height="1" fill="#dbeafe" />
      <rect x="12" y="187" width="50" height="14" rx="3" fill="#eff6ff" />
      <rect x="68" y="187" width="50" height="14" rx="3" fill="#eff6ff" />
      <rect x="124" y="187" width="50" height="14" rx="3" fill="#eff6ff" />
    </svg>
  ),
  executive: (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#fff" />
      <rect x="0" y="0" width="65" height="260" fill="#0f172a" />
      <rect x="8" y="18" width="49" height="10" rx="2" fill="#fff" opacity="0.9" />
      <rect x="8" y="32" width="40" height="4" rx="1" fill="#94a3b8" />
      <rect x="8" y="60" width="35" height="4" rx="1" fill="#60a5fa" />
      <rect x="8" y="68" width="49" height="3" rx="1" fill="#475569" />
      <rect x="8" y="74" width="45" height="3" rx="1" fill="#475569" />
      <rect x="8" y="80" width="40" height="3" rx="1" fill="#475569" />
      <rect x="8" y="96" width="35" height="4" rx="1" fill="#60a5fa" />
      <rect x="8" y="104" width="49" height="3" rx="1" fill="#64748b" />
      <rect x="8" y="110" width="45" height="3" rx="1" fill="#64748b" />
      <rect x="8" y="116" width="49" height="3" rx="1" fill="#64748b" />
      <rect x="76" y="12" width="112" height="9" rx="1.5" fill="#0f172a" />
      <rect x="76" y="26" width="80" height="5" rx="1" fill="#64748b" />
      <rect x="76" y="35" width="112" height="3" rx="1" fill="#e2e8f0" />
      <rect x="76" y="46" width="90" height="5" rx="1" fill="#334155" />
      <rect x="76" y="54" width="100" height="3" rx="1" fill="#94a3b8" />
      <rect x="76" y="60" width="112" height="3" rx="1" fill="#cbd5e1" />
      <rect x="76" y="66" width="100" height="3" rx="1" fill="#cbd5e1" />
      <rect x="76" y="78" width="112" height="3" rx="1" fill="#e2e8f0" />
      <rect x="76" y="86" width="90" height="5" rx="1" fill="#334155" />
      <rect x="76" y="94" width="75" height="3" rx="1" fill="#94a3b8" />
      <rect x="76" y="100" width="112" height="3" rx="1" fill="#cbd5e1" />
      <rect x="76" y="106" width="100" height="3" rx="1" fill="#cbd5e1" />
    </svg>
  ),
};

const templateColors = {
  modern:       'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
  classic:      'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
  minimal:      'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
  professional: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)',
  executive:    'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
};

export default function Home() {
  const router = useRouter();

  const handleTemplateClick = (templateId) => {
    const newId = `resume-${Date.now()}`;
    router.push(`/builder/${templateId}?id=${newId}`);
  };

  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Build Your Perfect Resume</h1>
          <p className={styles.description}>
            Choose from professionally designed templates and create a standout resume in minutes.
            ATS-friendly, print-ready, and downloadable as PDF.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.badge}>ATS Friendly</span>
            <span className={styles.badge}>PDF Export</span>
            <span className={styles.badge}>5 Templates</span>
            <span className={styles.badge}>Auto-Save</span>
          </div>
        </div>

        <div className={styles.templates}>
          <h2>Choose a Template</h2>
          <div className={styles.templates__grid}>
            {TEMPLATES.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateClick(template.id)}
                className={styles.templateCard}
              >
                <div
                  className={styles.templateCard__preview}
                  style={{ background: templateColors[template.id] || templateColors.modern }}
                >
                  <div className={styles.templateCard__svg}>
                    {TemplatePreviews[template.id]}
                  </div>
                </div>
                <div className={styles.templateCard__info}>
                  <h3>{template.name}</h3>
                  <p>{template.description}</p>
                </div>
                <div className={styles.templateCard__cta}>
                  Use Template
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.feature__icon}>✍️</div>
            <h3>Easy to Fill</h3>
            <p>Intuitive form editor with live preview as you type</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature__icon}>📄</div>
            <h3>PDF Ready</h3>
            <p>Download a high-quality PDF with one click</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature__icon}>🎯</div>
            <h3>ATS Optimized</h3>
            <p>Built for applicant tracking systems</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature__icon}>💾</div>
            <h3>Auto-Saved</h3>
            <p>Your work is saved locally as you type</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            onClick={() => handleTemplateClick('modern')}
            className={styles.primaryButton}
          >
            Start Building Now
          </button>
          <Link href="/dashboard" className={styles.secondaryButton}>
            My Resumes
          </Link>
        </div>
      </main>
    </div>
  );
}

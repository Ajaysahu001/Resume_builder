'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loadResumesList, deleteResumeFromStorage, saveResumesList } from '@/utils/storage';
import styles from './page.module.scss';

const templateColors = {
  modern:       { bg: '#dbeafe', text: '#1d4ed8' },
  classic:      { bg: '#f1f5f9', text: '#475569' },
  minimal:      { bg: '#f3f4f6', text: '#374151' },
  professional: { bg: '#dbeafe', text: '#1e40af' },
  executive:    { bg: '#0f172a', text: '#60a5fa' },
};

const templateLabel = {
  modern: 'Modern',
  classic: 'Classic',
  minimal: 'Minimal',
  professional: 'Professional',
  executive: 'Executive',
};

export default function DashboardPage() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const saved = loadResumesList();
    setResumes(saved);
    setLoading(false);
  }, []);

  const handleDelete = (resumeId) => {
    if (!window.confirm('Delete this resume? This cannot be undone.')) return;
    deleteResumeFromStorage(resumeId);
    const updated = resumes.filter((r) => r.id !== resumeId);
    setResumes(updated);
    saveResumesList(updated);
  };

  const handleCreateNew = () => {
    const newId = `resume-${Date.now()}`;
    router.push(`/builder/modern?id=${newId}`);
  };

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.loading}>Loading your resumes...</div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.header__title}>My Resumes</h1>
            <p className={styles.header__sub}>
              {resumes.length === 0
                ? 'Create your first resume to get started'
                : `${resumes.length} resume${resumes.length > 1 ? 's' : ''} saved`}
            </p>
          </div>
          <button className={styles.createBtn} onClick={handleCreateNew}>
            + New Resume
          </button>
        </header>

        {resumes.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.empty__icon}>📄</div>
            <h2 className={styles.empty__title}>No resumes yet</h2>
            <p className={styles.empty__desc}>
              Start by choosing a template and filling in your details.
            </p>
            <button className={styles.createBtn} onClick={handleCreateNew}>
              + Create Your First Resume
            </button>
            <Link href="/" className={styles.empty__browse}>
              Browse templates
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {resumes.map((resume) => {
              const colors = templateColors[resume.template] || templateColors.modern;
              const label = templateLabel[resume.template] || resume.template;
              return (
                <div key={resume.id} className={styles.card}>
                  <div
                    className={styles.card__preview}
                    style={{ background: colors.bg }}
                  >
                    <span
                      className={styles.card__templateBadge}
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {label}
                    </span>
                    <div className={styles.card__previewLines}>
                      <div className={styles.card__line} style={{ width: '60%', background: colors.text, opacity: 0.7 }} />
                      <div className={styles.card__line} style={{ width: '40%', background: colors.text, opacity: 0.4 }} />
                      <div className={styles.card__line} style={{ width: '80%', background: colors.text, opacity: 0.2 }} />
                      <div className={styles.card__line} style={{ width: '70%', background: colors.text, opacity: 0.2 }} />
                    </div>
                  </div>

                  <div className={styles.card__body}>
                    <h3 className={styles.card__name}>{resume.name || 'Untitled Resume'}</h3>
                    <p className={styles.card__meta}>
                      Updated {new Date(resume.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>

                  <div className={styles.card__actions}>
                    <Link
                      href={`/builder/${resume.template || 'modern'}?id=${resume.id}`}
                      className={styles.card__editBtn}
                    >
                      Edit
                    </Link>
                    <button
                      className={styles.card__deleteBtn}
                      onClick={() => handleDelete(resume.id)}
                      title="Delete resume"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}

            <button className={styles.newCard} onClick={handleCreateNew}>
              <span className={styles.newCard__icon}>+</span>
              <span className={styles.newCard__label}>New Resume</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

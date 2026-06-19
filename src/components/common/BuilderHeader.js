'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setTemplate, toggleTheme, setPreviewMode } from '@/redux/slices/uiSlice';
import { exportToPDF, printResume } from '@/utils/pdf';
import { saveResumeToStorage } from '@/utils/storage';
import Button from '../ui/Button';
import Select from '../ui/Select';
import UndoRedoButtons from './UndoRedoButtons';
import AtsScore from './AtsScore';
import { TEMPLATES } from '@/constants/templates';
import styles from '../../styles/components/_builder-header.module.scss';
import toast from 'react-hot-toast';

const BuilderHeader = ({ resumeId = 'current' }) => {
  const dispatch = useDispatch();
  const { selectedTemplate, theme, previewMode } = useSelector((state) => state.ui);
  const resumeData = useSelector((state) => state.resume);

  const handleTemplateChange = (e) => {
    dispatch(setTemplate(e.target.value));
  };

  const handleThemeToggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme());
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  };

  const handleSave = () => {
    const resumeName = resumeData.personalInfo?.fullName
      ? `${resumeData.personalInfo.fullName}'s Resume`
      : 'Untitled Resume';
    saveResumeToStorage(resumeData, resumeId, resumeName, selectedTemplate);
    toast.success('Saved!', { duration: 1500 });
  };

  const handleExportPDF = async () => {
    const name = resumeData.personalInfo?.fullName
      ? `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`
      : 'resume.pdf';
    try {
      await exportToPDF('resume-preview', name);
    } catch {
      toast.error('PDF export failed. Please try again.');
    }
  };

  const handlePrint = () => {
    printResume('resume-preview');
  };

  const templateOptions = TEMPLATES.map((t) => ({ value: t.id, label: t.name }));

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Link href="/dashboard" className={styles.header__back} title="Back to My Resumes">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </Link>
        <span className={styles.header__brand}>Resume Builder</span>
      </div>

      <div className={styles.header__center}>
        <Select
          value={selectedTemplate}
          onChange={handleTemplateChange}
          options={templateOptions}
          className={styles.header__templateSelect}
        />
        <div className={styles.header__viewModes}>
          {['split', 'form', 'preview'].map((mode) => (
            <button
              key={mode}
              className={`${styles.header__viewBtn} ${previewMode === mode ? styles['header__viewBtn--active'] : ''}`}
              onClick={() => dispatch(setPreviewMode(mode))}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.header__right}>
        <AtsScore />
        <UndoRedoButtons />
        <div className={styles.header__divider} />
        <Button variant="secondary" size="sm" onClick={handleThemeToggle} title="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
        <Button variant="secondary" size="sm" onClick={handleSave}>
          Save
        </Button>
        <Button variant="secondary" size="sm" onClick={handlePrint}>
          Print
        </Button>
        <Button variant="primary" size="sm" onClick={handleExportPDF}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          PDF
        </Button>
      </div>
    </header>
  );
};

export default memo(BuilderHeader);

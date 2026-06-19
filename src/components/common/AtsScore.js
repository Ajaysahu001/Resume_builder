'use client';

import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { computeAtsScore } from '@/utils/atsScore';
import styles from '../../styles/components/_ats-score.module.scss';

const AtsScore = () => {
  const [open, setOpen] = useState(false);
  const resumeData = useSelector((state) => state.resume);
  const { score, checks } = computeAtsScore(resumeData);

  const color = score >= 80 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444';
  const label = score >= 80 ? 'Strong' : score >= 50 ? 'Fair' : 'Weak';

  return (
    <div className={styles.ats}>
      <button
        className={styles.ats__toggle}
        onClick={() => setOpen((v) => !v)}
        style={{ '--ats-color': color }}
        title="ATS Compatibility Score"
      >
        <span className={styles.ats__score} style={{ color }}>
          {score}%
        </span>
        <span className={styles.ats__label}>ATS</span>
      </button>

      {open && (
        <div className={styles.ats__panel}>
          <div className={styles.ats__header}>
            <span>ATS Score: <strong style={{ color }}>{score}% — {label}</strong></span>
            <button className={styles.ats__close} onClick={() => setOpen(false)}>×</button>
          </div>
          <div className={styles.ats__bar}>
            <div className={styles.ats__fill} style={{ width: `${score}%`, background: color }} />
          </div>
          <ul className={styles.ats__list}>
            {checks.map((c) => (
              <li key={c.label} className={c.pass ? styles.ats__pass : styles.ats__fail}>
                <span className={styles.ats__icon}>{c.pass ? '✓' : '✗'}</span>
                <span>
                  {c.label}
                  {!c.pass && c.hint && (
                    <span className={styles.ats__hint}> — {c.hint}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default memo(AtsScore);

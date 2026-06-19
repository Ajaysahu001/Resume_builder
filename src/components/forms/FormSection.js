'use client';

import { memo, useState } from 'react';
import styles from '../../styles/components/_form-section.module.scss';

const FormSection = ({
  title,
  subtitle,
  children,
  className = '',
  actions,
  defaultOpen = true,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.section} ${className}`}>
      <div className={styles.section__header}>
        <button
          type="button"
          className={styles.section__trigger}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <div className={styles.section__titleGroup}>
            {title && <h3 className={styles.section__title}>{title}</h3>}
            {subtitle && <p className={styles.section__subtitle}>{subtitle}</p>}
          </div>
          <svg
            className={styles.section__chevron}
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {actions && (
          <div className={styles.section__actions}>
            {actions}
          </div>
        )}
      </div>
      {open && (
        <div className={styles.section__body}>{children}</div>
      )}
    </div>
  );
};

export default memo(FormSection);

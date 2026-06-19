'use client';

import { memo, forwardRef } from 'react';
import styles from '../../styles/components/_textarea.module.scss';

const Textarea = forwardRef(({
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  rows = 4,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`${styles.textarea__wrapper} ${className}`}>
      {label && (
        <label className={styles.textarea__label}>
          {label}
          {required && <span className={styles.textarea__required}>*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`${styles.textarea} ${error ? styles['textarea--error'] : ''}`}
        required={required}
        {...props}
      />
      {error && <span className={styles.textarea__error}>{error}</span>}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default memo(Textarea);


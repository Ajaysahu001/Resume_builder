'use client';

import { memo, forwardRef } from 'react';
import styles from '../../styles/components/_input.module.scss';

const Input = forwardRef(({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`${styles.input__wrapper} ${className}`}>
      {label && (
        <label className={styles.input__label}>
          {label}
          {required && <span className={styles.input__required}>*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles['input--error'] : ''}`}
        required={required}
        {...props}
      />
      {error && <span className={styles.input__error}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default memo(Input);


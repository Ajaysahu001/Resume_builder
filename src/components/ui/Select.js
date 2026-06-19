'use client';

import { memo, forwardRef } from 'react';
import styles from '../../styles/components/_select.module.scss';

const Select = forwardRef(({
  label,
  value,
  onChange,
  options = [],
  error,
  required = false,
  placeholder = 'Select...',
  className = '',
  selectClassName = '',
  ...props
}, ref) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <select
        ref={ref}
        value={value}
        onChange={onChange}
        className={`${styles.selectEl} ${error ? styles['selectEl--error'] : ''} ${selectClassName}`}
        required={required}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
});

Select.displayName = 'Select';

export default memo(Select);

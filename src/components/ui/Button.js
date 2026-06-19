'use client';

import { memo } from 'react';
import styles from '../../styles/components/_button.module.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);


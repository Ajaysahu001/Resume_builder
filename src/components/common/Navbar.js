'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '@/redux/slices/uiSlice';
import styles from '../../styles/components/_navbar.module.scss';

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.ui);

  const isBuilder = pathname?.startsWith('/builder');
  if (isBuilder) return null;

  const handleThemeToggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme());
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  };

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname?.startsWith(path);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__inner}>
        <Link href="/" className={styles.nav__logo}>
          <span className={styles.nav__logoMark}>R</span>
          <span className={styles.nav__logoText}>ResumeBuilder</span>
        </Link>

        <div className={styles.nav__links}>
          <Link
            href="/"
            className={`${styles.nav__link} ${isActive('/') ? styles['nav__link--active'] : ''}`}
          >
            Home
          </Link>
          <Link
            href="/builder/modern"
            className={`${styles.nav__link} ${isActive('/builder') ? styles['nav__link--active'] : ''}`}
          >
            Builder
          </Link>
          <Link
            href="/dashboard"
            className={`${styles.nav__link} ${isActive('/dashboard') ? styles['nav__link--active'] : ''}`}
          >
            My Resumes
          </Link>
        </div>

        <div className={styles.nav__actions}>
          <button
            onClick={handleThemeToggle}
            className={styles.nav__themeBtn}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link href="/builder/modern" className={styles.nav__cta}>
            Build Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

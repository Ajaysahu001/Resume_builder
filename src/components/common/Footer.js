'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/components/_footer.module.scss';

const YEAR = new Date().getFullYear();

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/builder')) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <div className={styles.footer__logo}>
              <span className={styles.footer__logoMark}>R</span>
              <span className={styles.footer__logoText}>ResumeBuilder</span>
            </div>
            <p className={styles.footer__tagline}>
              Build professional resumes in minutes. ATS-friendly, print-ready, and free.
            </p>
          </div>

          <div className={styles.footer__links}>
            <div className={styles.footer__col}>
              <h4 className={styles.footer__colTitle}>Product</h4>
              <Link href="/" className={styles.footer__link}>Home</Link>
              <Link href="/builder/modern" className={styles.footer__link}>Builder</Link>
              <Link href="/dashboard" className={styles.footer__link}>My Resumes</Link>
            </div>
            <div className={styles.footer__col}>
              <h4 className={styles.footer__colTitle}>Templates</h4>
              <Link href="/builder/modern" className={styles.footer__link}>Modern</Link>
              <Link href="/builder/classic" className={styles.footer__link}>Classic</Link>
              <Link href="/builder/minimal" className={styles.footer__link}>Minimal</Link>
              <Link href="/builder/professional" className={styles.footer__link}>Professional</Link>
              <Link href="/builder/executive" className={styles.footer__link}>Executive</Link>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copy}>
            © {YEAR} ResumeBuilder. All rights reserved.
          </p>
          <p className={styles.footer__note}>
            Your data stays on your device — we never store personal information.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

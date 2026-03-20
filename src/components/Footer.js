'use client';

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
      <footer className={styles.footerCTA}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Let&apos;s Build Something.</h2>
          
          <Link href="/contact" className={styles.ctaButton}>
            <span className={styles.ctaButtonText}>Get In Touch</span>
          </Link>
          
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/hasnain-imran-086853340/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/hasnaincoder1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/hasnainimrann/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        
        <div className={styles.copyright}>
          &copy; 2025 Hasnain Imran
        </div>
      </footer>
    );
}

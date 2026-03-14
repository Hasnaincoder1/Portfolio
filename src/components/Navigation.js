"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change or escape key
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav 
        className={styles.nav}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Link href="/" className={styles.logo}>
          Hasnain Imran
        </Link>
        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          >
            <div className={styles.menuHeader}>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={44} strokeWidth={1} />
              </button>
            </div>

            <ul className={styles.menuLinks}>
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  className={styles.menuItem}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                  <Link
                    href={link.href}
                    className={`${styles.menuLink} ${pathname === link.href ? styles.menuLinkActive : ""}`}
                  >
                    <span className={styles.linkNumber}>0{i + 1}</span>
                    <span className={styles.linkText}>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

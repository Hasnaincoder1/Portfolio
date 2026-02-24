"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.hero}
        >
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hasnain
          </motion.h1>
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Creative Developer & UI/UX Designer
          </motion.p>
        </motion.div>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I build modern web experiences with a focus on performance,
          scalability, and user-centric design. Combining technical expertise
          with creative vision.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href="/projects" className={styles.primary}>
            View Projects
          </Link>
          <Link href="/contact" className={styles.secondary}>
            Get in Touch
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

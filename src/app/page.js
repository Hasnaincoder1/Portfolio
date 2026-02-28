"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const containerRef = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background moves slightly down (parallax depth)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Text moves up faster than background
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Scroll indicator fades out fast
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className={styles.page} ref={containerRef}>
      {/* Noise Texture Overlay */}
      <div className={styles.noiseOverlay}></div>

      {/* Parallax Background Layer */}
      <motion.div
        className={styles.backgroundLayer}
        style={{ y: bgY }}
      />

      {/* Main Content */}
      <main className={styles.main}>
        <motion.div
          className={styles.heroContent}
          style={{ y: textY }}
        >
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Hasnain Imran
          </motion.h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            I design with purpose and build with precision.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          style={{ opacity: indicatorOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className={styles.scrollLine}></div>
        </motion.div>
      </main>
    </div>
  );
}

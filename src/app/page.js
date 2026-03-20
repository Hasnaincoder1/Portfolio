"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Spline from '@splinetool/react-spline';
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import styles from "./page.module.css";

// Reusable Project Card Component for Scroll Animation
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      className={`${styles.projectCard} ${isEven ? styles.projectCardEven : styles.projectCardOdd}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.projectImageWrapper}>
        <Image 
           src={project.image} 
           alt={project.name} 
           fill 
           style={{ objectFit: 'cover' }} 
        />
        <div className={styles.imageOverlay}>
           <span className={styles.overlayText}>View Project</span>
        </div>
      </div>
      
      <div className={styles.projectDetails}>
        <h3 className={styles.projectName}>{project.name}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <Link href={project.link} className={styles.projectLink}>
          View <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}

// Reusable Service Row Component
function ServiceRow({ service }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={rowRef}
      className={styles.serviceRow}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.serviceHoverBg}></div>
      <div className={styles.serviceContent}>
        <span className={styles.serviceNumber}>{service.number}</span>
        <h3 className={styles.serviceName}>{service.name}</h3>
        <span className={styles.serviceDescription}>
          <i>{service.description}</i>
        </span>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const statementRef = useRef(null);

  // Statement Section Animation triggers
  const isStatementInView = useInView(statementRef, { once: false, margin: "-20% 0px" });

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

  const name = "Hasnain Imran";
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const statementWords = "I build things that feel as good as they look.".split(" ");
  const statementContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Aggressively strip all HTML UI overlays (buttons, navbars, text, watermarks) from the Spline container
  useEffect(() => {
      function cleanSplineUI() {
          const canvases = document.querySelectorAll('canvas');
          let cleaned = false;
          
          canvases.forEach(canvas => {
              const splineWrapper = canvas.parentElement;
              if (splineWrapper) {
                  // Hide every peer element next to the canvas (these are the HTML UI overlays/watermarks/navbars)
                  Array.from(splineWrapper.children).forEach(child => {
                      if (child.tagName.toLowerCase() !== 'canvas') {
                          child.style.setProperty('display', 'none', 'important');
                          child.style.setProperty('opacity', '0', 'important');
                          child.style.setProperty('pointer-events', 'none', 'important');
                          cleaned = true;
                      }
                  });
              }
          });
          return cleaned;
      }

      let attempts = 0;
      const interval = setInterval(() => {
          attempts++;
          cleanSplineUI();
          // Keep checking repeatedly because Spline injects UI elements asynchronously after WebGL loads
          if (attempts > 15) {
              clearInterval(interval);
          }
      }, 500);

      return () => clearInterval(interval);
  }, []);

  const tickerText = "Frontend Developer • UI/UX Design • AI Products • Web Experiences • Creative Developer • React • Python • ";

  const featuredProjects = [
    {
      id: 1,
      name: "Nebula AI",
      description: "An AI-powered conversational interface designed for absolute minimalism and focused human interaction.",
      link: "/projects",
      image: "/handshake.avif"
    },
    {
      id: 2,
      name: "Aura Commerce",
      description: "A high-conversion headless e-commerce storefront focusing on editorial layouts and fast checkout flows.",
      link: "/projects",
      image: "/commitment.avif"
    },
    {
      id: 3,
      name: "Velocity Dashboard",
      description: "A dark-mode financial analytics dashboard bringing clarity to complex real-time data ecosystems.",
      link: "/projects",
      image: "/result.avif"
    }
  ];

  const services = [
    {
      number: "01",
      name: "UI/UX Design",
      description: "Wireframing, Prototyping, Visual Identity"
    },
    {
      number: "02",
      name: "Frontend Development",
      description: "React, Next.js, Framer Motion, Animations"
    },
    {
      number: "03",
      name: "AI-Powered Products",
      description: "Integration, UX for AI, LLM Interfaces"
    },
    {
      number: "04",
      name: "Creative Development",
      description: "WebGL, Spline 3D, Custom Interactions"
    }
  ];

  return (
    <div className={styles.page} ref={containerRef}>
      {/* Noise Texture Overlay */}
      <div className={styles.noiseOverlay}></div>

      {/* Parallax Background Layer */}
      <motion.div
        className={styles.backgroundLayer}
        style={{ y: bgY }}
      >
        <div className={styles.splineContainer}>
          <Spline 
            scene="https://prod.spline.design/4GxCiBNhmKrDtxrl/scene.splinecode" 
            style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, margin: 0, padding: 0, maxWidth: "none" }}
          />
        </div>
      </motion.div>

      {/* Main Content (Hero) */}
      <main className={styles.main}>
        <motion.div
          className={styles.heroContent}
          style={{ y: textY }}
        >
          <motion.h1
            className={styles.name}
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block' }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            I design with purpose and build with precision.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          style={{ opacity: indicatorOpacity }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <ArrowDown size={28} strokeWidth={1} />
        </motion.div>
      </main>

      {/* Marquee Ticker Strip */}
      <div className={styles.tickerSection}>
        <div className={styles.tickerContainer}>
          <div className={styles.tickerContent}>
            {tickerText.repeat(5)}
          </div>
          <div className={styles.tickerContent} aria-hidden="true">
            {tickerText.repeat(5)}
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Statement Section */}
      <section className={styles.statementSection} ref={statementRef}>
        <motion.h2 
          className={styles.statementText}
          variants={statementContainerVariants}
          initial="hidden"
          animate={isStatementInView ? "visible" : "hidden"}
        >
          {statementWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className={styles.statementWord}>
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </section>

      <SectionDivider />

      {/* Featured Work Preview Section */}
      <section className={styles.workSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
        </div>
        
        <div className={styles.workGrid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* What I Do / Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Services</h2>
        </div>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <ServiceRow key={index} service={service} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Global Footer CTA Component */}
      <Footer />
    </div>
  );
}

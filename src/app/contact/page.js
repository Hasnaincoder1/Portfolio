"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowRight, Plus, X } from "lucide-react";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import styles from "./contact.module.css";
import Spline from '@splinetool/react-spline';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// A lightweight, staggered text animation component for the header
const SplitText = ({ children }) => {
    return (
        <span style={{ display: "inline-block" }}>
            {children.split(" ").map((word, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}>
                    <motion.span
                        style={{ display: "inline-block" }}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

export default function Contact() {
    useEffect(() => {
        function hideWatermark() {
            // Search all elements for "Built with Spline" text
            const allElements = document.querySelectorAll('a, div, span, button, p');
            for (const el of allElements) {
                if (el.textContent?.includes('Built with Spline') ||
                    el.querySelector?.('img[alt*="spline" i]') ||
                    el.getAttribute?.('href')?.includes('spline.design')) {
                    el.style.setProperty('display', 'none', 'important');
                    return true;
                }
            }
            // Also check inside iframes
            const iframes = document.querySelectorAll('iframe');
            for (const iframe of iframes) {
                try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                    if (iframeDoc) {
                        const els = iframeDoc.querySelectorAll('a, div, span, button');
                        for (const el of els) {
                            if (el.textContent?.includes('Built with Spline') ||
                                el.getAttribute?.('href')?.includes('spline.design')) {
                                el.style.setProperty('display', 'none', 'important');
                                return true;
                            }
                        }
                    }
                } catch (e) { /* cross-origin iframe, skip */ }
            }
            return false;
        }

        // Keep trying every 500ms until found (max 30s)
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (hideWatermark() || attempts > 60) {
                clearInterval(interval);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className={styles.page}>
            {/* Collaborate Strip */}
            <section className={styles.collaborateStrip}>
                <h2 className={styles.collaborateHeading}>
                    {"Got an idea? Let's make it ".split(" ").map((word, i) => (
                        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}>
                            <motion.span
                                style={{ display: "inline-block" }}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                    <span style={{ display: "inline-block", overflow: "hidden" }}>
                        <motion.span
                            className={styles.goldItalic}
                            style={{ display: "inline-block" }}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 7 * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            real.
                        </motion.span>
                    </span>
                </h2>
                <motion.p 
                    className={styles.availabilitySubtext}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                >
                    I AM CURRENTLY AVAILABLE FOR FREELANCE AND FULL-TIME OPPORTUNITIES.
                </motion.p>
                <motion.div 
                    className={styles.collaborateDivider}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                />
            </section>

            {/* Availability Banner */}
            <div className={styles.availabilityBanner}>
                <div className={styles.availabilityLeft}>
                    <div className={styles.greenDot} />
                    <span className={styles.availabilityStatus}>Available for Opportunities</span>
                </div>
                <div className={styles.availabilityRight}>
                    <span className={styles.detailItem}>Response time: within 24 hours</span>
                    <span className={styles.detailItem}>Lahore, PKT — UTC+5</span>
                </div>
            </div>

            <div className={styles.contactBody}>
                {/* Header Section */}
                <div className={styles.headerSection}>
                    <div className={styles.bgNumberHeader}>04</div>
                    
                    <div className={styles.headerContent}>
                        <h1 className={styles.hugeHeading}>
                            <SplitText>Let's Connect</SplitText>
                        </h1>
                        
                        <motion.p 
                            className={styles.headerSubtext}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            WHETHER IT'S A BIG IDEA OR JUST A HELLO — REACH OUT, I'D LOVE TO CONNECT.
                        </motion.p>
                    </div>
                    
                    <motion.div 
                        className={styles.headingLine}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                </div>

            <div className={styles.mainLayout}>
                {/* Spline on the left */}
                <div className={styles.splineWrapper}>
                    <Spline
                        scene="https://prod.spline.design/clPkJYTbIi-JwaPe/scene.splinecode"
                    />
                </div>

                {/* Contact content on the right */}
                <div className={styles.contactContent}>
                    <motion.div
                        className={styles.infoSection}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className={styles.socialLinks}>
                            <a href="mailto:hasnainimran2005@gmail.com" className={styles.socialRow}>
                                <div className={styles.rowLeft}>
                                    <Mail size={24} />
                                </div>
                                <div className={styles.rowMiddle}>
                                    hasnainimran2005@gmail.com
                                </div>
                                <div className={styles.rowRight}>
                                    <ArrowRight size={20} />
                                </div>
                            </a>
                            
                            <a
                                href="https://www.linkedin.com/in/hasnain-imran-086853340/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialRow}
                            >
                                <div className={styles.rowLeft}>
                                    <Linkedin size={24} />
                                </div>
                                <div className={styles.rowMiddle}>
                                    LinkedIn Profile
                                </div>
                                <div className={styles.rowRight}>
                                    <ArrowRight size={20} />
                                </div>
                            </a>
                            
                            <a href="tel:+923061202874" className={styles.socialRow}>
                                <div className={styles.rowLeft}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.rowMiddle}>
                                    +92 306 120 2874
                                </div>
                                <div className={styles.rowRight}>
                                    <ArrowRight size={20} />
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formCard}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <form
                            className={styles.form}
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className={styles.group}>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" className={styles.input} placeholder="" required />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" className={styles.input} placeholder="" required />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" className={styles.textarea} placeholder="" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                <span>Send</span>
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
                </div>
            </div>

            {/* Social Links Section */}
            <section className={styles.socialSection}>
                <motion.div 
                    className={styles.findMeOn}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    FIND ME ON
                </motion.div>

                <div className={styles.socialGrid}>
                    {[
                        { name: "GitHub", url: "https://github.com/hasnaincoder1" },
                        { name: "LinkedIn", url: "https://www.linkedin.com/in/hasnain-imran-086853340/" },
                        { name: "Instagram", url: "https://www.instagram.com/hasnain_imran_/" },
                        { name: "Behance", url: "https://www.behance.net/hasnainimran1" }
                    ].map((platform, idx) => (
                        <motion.div 
                            key={platform.name}
                            className={styles.socialItem}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <a 
                                href={platform.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.socialLink}
                            >
                                <span className={styles.socialLinkText}>{platform.name}</span>
                                <div className={styles.socialArrow}>
                                    <ArrowRight />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection styles={styles} />
        </div>
        
        <SectionDivider />
        
        <Footer />
        </>
    );
}

const FAQSection = ({ styles }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Do you take on freelance projects?",
            answer: "Yes, I'm currently available for freelance work and interested in collaborating on new ideas."
        },
        {
            question: "How quickly do you respond?",
            answer: "I typically respond within 24 hours."
        },
        {
            question: "Are you open to full-time roles?",
            answer: "Yes, I'm open to discussing full-time opportunities with companies that value innovation."
        },
        {
            question: "What is your preferred way to collaborate?",
            answer: "Email or LinkedIn are my preferred communication channels for the first contact."
        }
    ];

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqHeader}>
                <h3 className={styles.faqTitle}>FAQ</h3>
                <div className={styles.faqLine} />
            </div>

            <div className={styles.faqContainer}>
                {faqs.map((faq, idx) => (
                    <div key={idx} className={styles.faqRow}>
                        <button 
                            className={styles.faqQuestionButton}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <span className={styles.faqQuestionText}>{faq.question}</span>
                            <div 
                                className={styles.faqIcon}
                                style={{ transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)" }}
                            >
                                <Plus />
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className={styles.faqAnswerContainer}
                                >
                                    <p className={styles.faqAnswerText}>{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

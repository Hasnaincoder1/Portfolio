"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";
import styles from "./contact.module.css";

export default function Contact() {
    return (
        <div className={styles.page}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>Let's Connect</h1>
                <p className={styles.subtitle}>
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </motion.div>

            <div className={styles.content}>
                <motion.div
                    className={styles.infoSection}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h2>Contact Information</h2>
                    <p>
                        Feel free to reach out via the form or through my social networks.
                        I usually respond within 24 hours.
                    </p>

                    <div className={styles.socialLinks}>
                        <a href="mailto:hello@hasnain.dev" className={styles.socialLink}>
                            <div className={styles.iconWrapper}>
                                <Mail size={20} />
                            </div>
                            hello@hasnain.dev
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <div className={styles.iconWrapper}>
                                <Linkedin size={20} />
                            </div>
                            LinkedIn Profile
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <div className={styles.iconWrapper}>
                                <Github size={20} />
                            </div>
                            GitHub Repository
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    className={styles.form}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className={styles.group}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" className={styles.textarea} placeholder="How can I help you?" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import styles from "./about.module.css";

function SplitText({ children, delayOffset = 0 }) {
    const text = typeof children === "string" ? children : "";
    const words = text.split(" ");

    return (
        <p className={styles.splitText}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.5,
                        delay: delayOffset + i * 0.03,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className={styles.word}
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </p>
    );
}

function LogoImage({ src, alt, initials }) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={styles.logoFallback}>
                {initials}
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={48}
            height={48}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            onError={() => setError(true)}
            unoptimized
        />
    );
}

export default function About() {
    const experiences = [
        {
            role: "Frontend Developer",
            company: "AntroSys",
            duration: "Dec 2025 – Present · Full-time · Hybrid",
            logo: "/logos/antrosys.png",
            initials: "AS",
        },
        {
            role: "Chief Information Security Officer",
            company: "Invantros",
            duration: "Nov 2025 – Present · Part-time · Hybrid",
            logo: "/logos/invantros.png",
            initials: "IV",
        },
    ];

    const education = [
        {
            degree: "B.Sc. in Artificial Intelligence",
            school: "NASTP Institute of Information Technology",
            year: "2024 – 2028",
            logo: "/logos/nastp.png",
            initials: "NI",
        },
        {
            degree: "Intermediate, Computer Science",
            school: "Forman Christian College (A Chartered University)",
            year: "Sep 2022 – Jul 2024",
            logo: "/logos/forman.png",
            initials: "FC",
        },
    ];

    const skills = [
        { name: "Next.js", percent: 85, icon: "⚛️" },
        { name: "React", percent: 90, icon: "⚛️" },
        { name: "HTML & CSS", percent: 95, icon: "🌐✨" },
        { name: "Figma", percent: 75, icon: "🖌️" },
        { name: "C++", percent: 70, icon: "⚙️" },
        { name: "Python", percent: 85, icon: "🐍" },
    ];

    return (
        <div className={styles.page}>
            <motion.section
                className={styles.profileSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.imageWrapper}>
                    <Image
                        src="/profile.jpg"
                        alt="Hasnain — Professional Portrait"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top center" }}
                    />
                </div>
                <div className={styles.whoIAm}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Who I Am
                    </motion.h1>

                    <SplitText delayOffset={0.2}>
                        An AI student and frontend developer focused on crafting seamless digital experiences powered by thoughtful design and intelligent systems. Specialized in UI/UX-driven web development, my focus is on delivering products that align with business goals while maintaining exceptional user experience.
                    </SplitText>

                    <SplitText delayOffset={0.5}>
                        With a solid foundation in artificial intelligence concepts, I also understand how intelligent systems can enhance digital products — whether through automation, data-driven decision-making, or AI-assisted features.
                    </SplitText>

                    <SplitText delayOffset={0.8}>
                        My goal is to contribute to forward-thinking teams where I can apply my technical skills, problem-solving ability, and design awareness to create impactful and scalable solutions.
                    </SplitText>
                </div>
            </motion.section>

            <motion.section
                className={styles.section}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.sectionTitle}>Experience</h2>
                <div className={styles.expGrid}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.expCard}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.logoBox}>
                                    <LogoImage src={exp.logo} alt={exp.company} initials={exp.initials} />
                                </div>
                                <div>
                                    <div className={styles.role}>{exp.role}</div>
                                    <div className={styles.company}>{exp.company}</div>
                                </div>
                            </div>
                            <div className={styles.duration}>{exp.duration}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className={styles.section}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.sectionTitle}>Education</h2>
                <div className={styles.timeline}>
                    {education.map((edu, idx) => (
                        <div key={idx} className={styles.timelineItem}>
                            <div className={styles.cardHeader}>
                                <div className={styles.logoBox}>
                                    <LogoImage src={edu.logo} alt={edu.school} initials={edu.initials} />
                                </div>
                                <div>
                                    <div className={styles.role}>{edu.degree}</div>
                                    <div className={styles.company}>{edu.school}</div>
                                    <div className={styles.duration}>{edu.year}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className={styles.section}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.skillsGridNew}>
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.skillCard}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.skillHeader}>
                                <div className={styles.skillNameGroup}>
                                    <span className={styles.skillIcon}>{skill.icon}</span>
                                    <span className={styles.skillName}>{skill.name}</span>
                                </div>
                                <span className={styles.skillPercent}>{skill.percent}%</span>
                            </div>
                            <div className={styles.progressTrack}>
                                <motion.div
                                    className={styles.progressBar}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percent}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

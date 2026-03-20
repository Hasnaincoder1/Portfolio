"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import StatCounter from "@/components/StatCounter";
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

    const stats = [
        { value: 5, suffix: "+", label: "Projects" },
        { value: 2, suffix: "", label: "Active Roles" },
        { value: 4, suffix: "", label: "Years Coding" },
        { value: 1, suffix: "", label: "Big Goal" },
    ];

    const bringStatements = [
        "I design with the user in mind, always.",
        "I build clean, scalable frontend systems.",
        "I bring AI thinking into every product I touch."
    ];

    return (
        <>
        <div className={styles.page}>
            {/* Fun Stats Strip */}
            <div className={styles.statsStrip}>
                {stats.map((stat, idx) => (
                    <div key={idx} className={styles.statItem}>
                        <StatCounter 
                            value={stat.value} 
                            suffix={stat.suffix} 
                            className={styles.statNumber} 
                        />
                        <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>

            <section className={styles.whoIAmSection}>
                <motion.h1 
                    className={styles.hugeHeading}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    WHO I AM
                </motion.h1>

                <div className={styles.whoIAmDivider} />

                <div className={styles.profileContent}>
                    <motion.div 
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9] }}
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Hasnain — Professional Portrait"
                            fill
                            style={{ objectFit: "cover", objectPosition: "top center" }}
                        />
                    </motion.div>
                    
                    <motion.div 
                        className={styles.textContent}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.2 }}
                    >
                        <h2 className={styles.quoteText}>
                            An AI student and frontend developer focused on crafting seamless digital experiences powered by thoughtful design and intelligent systems.
                        </h2>
                        
                        <div className={styles.paragraphText}>
                            <p>Specialized in UI/UX-driven web development, my focus is on delivering products that align with business goals while maintaining exceptional user experience.</p>
                            <p>With a solid foundation in artificial intelligence concepts, I also understand how intelligent systems can enhance digital products — whether through automation, data-driven decision-making, or AI-assisted features.</p>
                            <p>My goal is to contribute to forward-thinking teams where I can apply my technical skills, problem-solving ability, and design awareness to create impactful and scalable solutions.</p>
                        </div>
                    </motion.div>
                </div>
            </section>



            <SectionDivider />

            {/* What I Bring To The Table Section */}
            <section className={styles.whatIBringSection}>
                <div className={styles.whatIBringHeader}>
                    <span className={styles.whatIBringLabel}>What I Bring</span>
                    <div className={styles.whatIBringLine}></div>
                </div>

                {bringStatements.map((statement, idx) => (
                    <motion.div
                        key={idx}
                        className={styles.statementRow}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className={styles.statementText}>
                            <span className={styles.statementDash}>—</span>
                            {statement}
                        </h3>
                    </motion.div>
                ))}
            </section>

            <SectionDivider />

            <motion.section
                className={styles.section}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.sectionTitle}>Experience</h2>
                <div className={styles.expList}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.expRow}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                        >
                            <div className={styles.rowLeft}>
                                <div className={styles.logoBox}>
                                    <LogoImage src={exp.logo} alt={exp.company} initials={exp.initials} />
                                </div>
                            </div>
                            
                            <div className={styles.rowMiddle}>
                                <h3 className={styles.roleTitle}>{exp.role}</h3>
                                <p className={styles.companyName}>{exp.company}</p>
                            </div>

                            <div className={styles.rowRight}>
                                {exp.duration.split(" · ").map((part, i) => (
                                    <span key={i} className={i === 0 ? styles.durationText : styles.typeText}>
                                        {part}
                                    </span>
                                ))}
                            </div>
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
                <div className={styles.eduList}>
                    {education.map((edu, idx) => (
                        <motion.div 
                            key={idx} 
                            className={styles.eduRow}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                        >
                            <span className={styles.bgNumber}>0{idx + 1}</span>
                            
                            <div className={styles.rowLeft}>
                                <div className={styles.logoBox}>
                                    <LogoImage src={edu.logo} alt={edu.school} initials={edu.initials} />
                                </div>
                            </div>
                            
                            <div className={styles.rowMiddle}>
                                <div className={styles.roleTitle}>{edu.degree}</div>
                                <div className={styles.companyName}>{edu.school}</div>
                            </div>

                            <div className={styles.rowRight}>
                                <div className={styles.durationText}>{edu.year}</div>
                            </div>
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
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.skillsWrap}>
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.skillPill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                delay: idx * 0.1, 
                                duration: 0.5, 
                                type: "spring", 
                                stiffness: 200, 
                                damping: 15 
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className={styles.skillIcon}>{skill.icon}</span>
                            <span className={styles.skillName}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
        
        <SectionDivider className={styles.aboutFooterDivider} />
        
        <Footer />
        </>
    );
}

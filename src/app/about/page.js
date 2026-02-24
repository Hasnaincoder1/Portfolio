"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./about.module.css";

export default function About() {
    const experiences = [
        {
            role: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            duration: "2022 - Present",
        },
        {
            role: "Full Stack Engineer",
            company: "Creative Digital Agency",
            duration: "2020 - 2022",
        },
        {
            role: "Junior Web Developer",
            company: "Startup Hub",
            duration: "2018 - 2020",
        },
    ];

    const education = [
        {
            degree: "B.Sc. in Computer Science",
            school: "Metropolitan University",
            year: "2018",
        },
        {
            degree: "UX Design Certification",
            school: "Design Academy",
            year: "2019",
        },
    ];

    const skills = [
        "Next.js", "React", "JavaScript", "Node.js",
        "Tailwind CSS", "Framer Motion", "UI/UX Design",
        "PostgreSQL", "Git", "Figma"
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
                        alt="Professional Portrait"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className={styles.whoIAm}>
                    <h1>Who I Am</h1>
                    <p>
                        I'm a passionate developer based in your location, driven by the challenge
                        of bringing complex ideas to life through elegant code and intuitive design.
                    </p>
                    <p>
                        Beyond coding, I have a deep interest in minimalist architecture,
                        generative art, and exploring the intersection between technology
                        and human behavior. I believe that great software is as much about
                        empathy as it is about efficiency.
                    </p>
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
                            <div className={styles.role}>{exp.role}</div>
                            <div className={styles.company}>{exp.company}</div>
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
                            <div className={styles.role}>{edu.degree}</div>
                            <div className={styles.company}>{edu.school}</div>
                            <div className={styles.duration}>{edu.year}</div>
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
                <div className={styles.skillsGrid}>
                    {skills.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

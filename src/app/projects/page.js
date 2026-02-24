"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./projects.module.css";

const projects = [
    {
        id: 1,
        title: "EcoTrack Dashboard",
        description: "A real-time environmental monitoring dashboard using IoT sensors and Next.js.",
        category: "Web App",
        tech: ["React", "D3.js", "Node.js"],
        image: "/personal-1.jpg" // Using personal photo as a creative project showcase
    },
    {
        id: 2,
        title: "Vault Crypto Wallet",
        description: "Secure digital asset management with advanced encryption and biometric authentication.",
        category: "Mobile",
        tech: ["React Native", "Firebase", "Web3"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Lumina UI Kit",
        description: "A comprehensive design system and component library built for accessibility and speed.",
        category: "Design",
        tech: ["Figma", "Stitches", "React"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Aura Social Network",
        description: "Privacy-focused social platform with decentralized data storage and end-to-end encryption.",
        category: "Web App",
        tech: ["Next.js", "GraphQL", "Prisma"],
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Pulse E-commerce",
        description: "High-performance online store with seamless checkout and dynamic inventory management.",
        category: "Web App",
        tech: ["Shopify", "React", "Tailwind"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    },
];

const categories = ["All", "Web App", "Mobile", "Design"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className={styles.page}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Selected Work</h1>
                <p>A collection of projects that define my technical journey.</p>
            </motion.div>

            <div className={styles.filters}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${activeFilter === cat ? styles.activeFilter : ""}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                className={styles.grid}
                layout
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={styles.card}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={styles.thumbnailWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className={styles.overlay}>
                                    <button className={styles.viewBtn}>View Details</button>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

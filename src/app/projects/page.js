"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./projects.module.css";

const haufScreenshots = [
    "/hauf/s1.png",
    "/hauf/s2.png",
    "/hauf/s3.png",
    "/hauf/s5.png",
];

const projects = [
    {
        id: 1,
        title: "HAUF — Social Media Platform",
        description: "A hybrid Instagram & VSCO-inspired social media platform built as a project for Data Structures in which AI is integrated, featuring photo sharing, social feeds, filters, and an AI-powered content recommendation engine.",
        category: "Web App",
        tech: ["DSA", "AI/ML", "Social Networking", "Image Processing"],
        image: "/hauf/hauf_cover.png",
        isReal: true,
        details: {
            overview: "HAUF is a hybrid social media platform that merges the photo-sharing and social feed experience of Instagram with the artistic, filter-focused aesthetic of VSCO. Built as a university semester project, it combines advanced Data Structures & Algorithms with an AI recommendation pipeline to deliver a fully-featured social networking experience.",
            features: [
                { name: "Photo Feed", desc: "Users can post photos to a dynamic social feed, like, comment, and follow other users — modelled after Instagram's core social loop." },
                { name: "VSCO-Style Filters", desc: "Apply a curated set of artistic photo filters inspired by VSCO's film-like presets before posting." },
                { name: "User Profiles", desc: "Each user has a profile grid displaying their posts, follower/following counts, and a bio section." },
                { name: "AI Recommendation Engine", desc: "An AI pipeline analyses user interactions (likes, follows, view time) to surface personalised content in the feed using collaborative filtering." },
                { name: "DSA-Powered Architecture", desc: "Core data structures such as graphs (social connections), hash maps (user lookups), and priority queues (feed ranking) underpin the platform." },
                { name: "Stories & Highlights", desc: "Ephemeral story posts and the ability to save them as permanent highlights on the user profile." },
            ],
            dataStructures: "The social graph is represented as a directed adjacency list for following relationships. The feed is ranked using a priority queue weighted by recency, engagement score, and AI affinity score. User and post lookups are O(1) via hash maps. The image filter pipeline applies matrix convolution operations for each preset.",
            aiPipeline: "The recommendation engine uses collaborative filtering: it builds a user–post interaction matrix from likes and view durations, then applies matrix factorisation to predict affinity scores for unseen posts. The top-ranked posts are injected into the personalised feed, balancing followed-user content with discovered content.",
            conclusion: "HAUF demonstrates the real-world application of DSA and AI concepts in a product that mirrors industry-grade social platforms. It bridges theoretical computer science with modern software design, showing how graphs, queues, and ML models come together to power a living social network.",
            screenshots: haufScreenshots,
        }
    },
    {
        id: 2,
        title: "EcoTrack Dashboard",
        description: "A real-time environmental monitoring dashboard using IoT sensors and Next.js.",
        category: "Web App",
        tech: ["React", "D3.js", "Node.js"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Vault Crypto Wallet",
        description: "Secure digital asset management with advanced encryption and biometric authentication.",
        category: "Mobile",
        tech: ["React Native", "Firebase", "Web3"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Lumina UI Kit",
        description: "A comprehensive design system and component library built for accessibility and speed.",
        category: "Design",
        tech: ["Figma", "Stitches", "React"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        title: "Aura Social Network",
        description: "Privacy-focused social platform with decentralized data storage and end-to-end encryption.",
        category: "Web App",
        tech: ["Next.js", "GraphQL", "Prisma"],
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    },
];

const categories = ["All", "Web App", "Mobile", "Design"];

function ProjectModal({ project, onClose }) {
    const [activeShot, setActiveShot] = useState(0);

    // Close on Escape key
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    // Prevent body scroll while modal open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    const d = project.details;

    return (
        <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className={styles.modal}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className={styles.modalHeader}>
                    <div>
                        <h2 className={styles.modalTitle}>{project.title}</h2>
                        <div className={styles.modalTechStack}>
                            {project.tech.map((t, i) => (
                                <span key={i} className={styles.tag}>{t}</span>
                            ))}
                        </div>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">✕</button>
                </div>

                <div className={styles.modalBody}>
                    {/* Screenshot Gallery */}
                    {d.screenshots && d.screenshots.length > 0 && (
                        <div className={styles.gallery}>
                            <div className={styles.galleryMain}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeShot}
                                        className={styles.galleryMainInner}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <Image
                                            src={d.screenshots[activeShot]}
                                            alt={`${project.title} screenshot ${activeShot + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className={styles.galleryThumbs}>
                                {d.screenshots.map((src, i) => (
                                    <button
                                        key={i}
                                        className={`${styles.thumb} ${i === activeShot ? styles.thumbActive : ""}`}
                                        onClick={() => setActiveShot(i)}
                                    >
                                        <Image src={src} alt={`thumb-${i}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Overview */}
                    <section className={styles.modalSection}>
                        <h3 className={styles.sectionTitle}>📌 Overview</h3>
                        <p className={styles.sectionText}>{d.overview}</p>
                    </section>

                    {/* Features */}
                    <section className={styles.modalSection}>
                        <h3 className={styles.sectionTitle}>✨ Features</h3>
                        <div className={styles.featuresGrid}>
                            {d.features.map((f, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <strong className={styles.featureName}>{f.name}</strong>
                                    <p className={styles.featureDesc}>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Data Structures */}
                    <section className={styles.modalSection}>
                        <h3 className={styles.sectionTitle}>🗄️ Data Architecture</h3>
                        <p className={styles.sectionText}>{d.dataStructures}</p>
                    </section>

                    {/* AI Pipeline */}
                    <section className={styles.modalSection}>
                        <h3 className={styles.sectionTitle}>🤖 AI Pipeline</h3>
                        <p className={styles.sectionText}>{d.aiPipeline}</p>
                    </section>

                    {/* Conclusion */}
                    <section className={styles.modalSection}>
                        <h3 className={styles.sectionTitle}>🏁 Conclusion</h3>
                        <p className={styles.sectionText}>{d.conclusion}</p>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

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

            <motion.div className={styles.grid} layout>
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`${styles.card} ${project.isReal ? styles.featuredCard : ""}`}
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
                                    <button
                                        className={styles.viewBtn}
                                        onClick={() => project.details ? setSelectedProject(project) : null}
                                    >
                                        View Details
                                    </button>
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

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

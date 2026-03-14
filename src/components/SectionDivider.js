'use client';

import { motion } from 'framer-motion';

export default function SectionDivider({ className = '' }) {
    return (
        <motion.hr
            className={`section-divider ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.75 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity: 0 }} // Starts fully hidden before whileInView overrides
        />
    );
}

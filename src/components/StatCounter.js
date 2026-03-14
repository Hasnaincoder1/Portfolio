'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

export default function StatCounter({ value, suffix = "", className = "" }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.round(latest) + suffix;
                    }
                }
            });
            return controls.stop;
        }
    }, [isInView, value, motionValue, suffix]);

    return <span ref={ref} className={className}>0{suffix}</span>;
}

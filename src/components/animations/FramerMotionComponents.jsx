import React from 'react';
import { motion } from 'framer-motion';

/**
 * Framer Motion Animation Variants
 * Notion-style smooth animations
 */

// Fade in variants
export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Fade in up variants
export const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Scale in variants
export const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Slide in from left
export const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Slide in from right
export const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Stagger container
export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Stagger item
export const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

/**
 * Pre-built Motion Components
 */

// Fade In Component
export const FadeIn = ({ children, delay = 0, ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
        transition={{ delay }}
        {...props}
    >
        {children}
    </motion.div>
);

// Fade In Up Component
export const FadeInUp = ({ children, delay = 0, ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUpVariants}
        transition={{ delay }}
        {...props}
    >
        {children}
    </motion.div>
);

// Scale In Component
export const ScaleIn = ({ children, delay = 0, ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={scaleInVariants}
        transition={{ delay }}
        {...props}
    >
        {children}
    </motion.div>
);

// Slide In Left Component
export const SlideInLeft = ({ children, delay = 0, ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={slideInLeftVariants}
        transition={{ delay }}
        {...props}
    >
        {children}
    </motion.div>
);

// Slide In Right Component
export const SlideInRight = ({ children, delay = 0, ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={slideInRightVariants}
        transition={{ delay }}
        {...props}
    >
        {children}
    </motion.div>
);

// Stagger Container Component
export const StaggerContainer = ({ children, ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainerVariants}
        {...props}
    >
        {children}
    </motion.div>
);

// Stagger Item Component
export const StaggerItem = ({ children, ...props }) => (
    <motion.div variants={staggerItemVariants} {...props}>
        {children}
    </motion.div>
);

// Hover Lift Component
export const HoverLift = ({ children, ...props }) => (
    <motion.div
        whileHover={{
            y: -4,
            transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
        }}
        whileTap={{ scale: 0.98 }}
        {...props}
    >
        {children}
    </motion.div>
);

// Hover Scale Component
export const HoverScale = ({ children, scale = 1.05, ...props }) => (
    <motion.div
        whileHover={{
            scale,
            transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
        }}
        whileTap={{ scale: 0.95 }}
        {...props}
    >
        {children}
    </motion.div>
);

// Parallax Component
export const Parallax = ({ children, speed = 0.5, ...props }) => {
    const [offsetY, setOffsetY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            style={{ y: offsetY * speed }}
            transition={{ type: 'spring', stiffness: 100 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Page Transition Component
export const PageTransition = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
        {children}
    </motion.div>
);

// Floating Component (continuous animation)
export const Floating = ({ children, ...props }) => (
    <motion.div
        animate={{
            y: [0, -10, 0],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        }}
        {...props}
    >
        {children}
    </motion.div>
);

// Pulsing Component
export const Pulsing = ({ children, ...props }) => (
    <motion.div
        animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1],
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        }}
        {...props}
    >
        {children}
    </motion.div>
);

export default {
    FadeIn,
    FadeInUp,
    ScaleIn,
    SlideInLeft,
    SlideInRight,
    StaggerContainer,
    StaggerItem,
    HoverLift,
    HoverScale,
    Parallax,
    PageTransition,
    Floating,
    Pulsing,
};

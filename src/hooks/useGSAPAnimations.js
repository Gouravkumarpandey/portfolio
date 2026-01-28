import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll animations
 * Provides smooth, professional scroll-triggered animations
 */

export const useGSAPScroll = () => {
    useEffect(() => {
        // Refresh ScrollTrigger on mount
        ScrollTrigger.refresh();

        return () => {
            // Clean up all ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
};

/**
 * Fade in animation on scroll
 */
export const useFadeInScroll = (ref, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                    ...options,
                },
            }
        );
    }, [ref, options]);
};

/**
 * Scale in animation on scroll
 */
export const useScaleInScroll = (ref, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                scale: 0.8,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    ...options,
                },
            }
        );
    }, [ref, options]);
};

/**
 * Slide in from left animation
 */
export const useSlideInLeft = (ref, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    ...options,
                },
            }
        );
    }, [ref, options]);
};

/**
 * Slide in from right animation
 */
export const useSlideInRight = (ref, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: 100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    ...options,
                },
            }
        );
    }, [ref, options]);
};

/**
 * Stagger children animation
 */
export const useStaggerChildren = (containerRef, childSelector, options = {}) => {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = container.querySelectorAll(childSelector);

        gsap.fromTo(
            children,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    ...options,
                },
            }
        );
    }, [containerRef, childSelector, options]);
};

/**
 * Parallax effect
 */
export const useParallax = (ref, speed = 0.5) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.to(element, {
            y: () => window.innerHeight * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, [ref, speed]);
};

/**
 * Pin element on scroll
 */
export const usePinOnScroll = (ref, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        ScrollTrigger.create({
            trigger: element,
            pin: true,
            start: 'top top',
            end: '+=500',
            ...options,
        });
    }, [ref, options]);
};

/**
 * Reveal text character by character
 */
export const useTextReveal = (ref, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const text = element.textContent;
        element.innerHTML = text
            .split('')
            .map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');

        const chars = element.querySelectorAll('.char');

        gsap.fromTo(
            chars,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.05,
                stagger: 0.03,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    ...options,
                },
            }
        );
    }, [ref, options]);
};

/**
 * Counter animation
 */
export const useCounterAnimation = (ref, endValue, options = {}) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const counter = { value: 0 };

        gsap.to(counter, {
            value: endValue,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                ...options,
            },
            onUpdate: () => {
                element.textContent = Math.floor(counter.value);
            },
        });
    }, [ref, endValue, options]);
};

export default {
    useGSAPScroll,
    useFadeInScroll,
    useScaleInScroll,
    useSlideInLeft,
    useSlideInRight,
    useStaggerChildren,
    useParallax,
    usePinOnScroll,
    useTextReveal,
    useCounterAnimation,
};

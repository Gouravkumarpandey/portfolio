import React, { useEffect, useRef } from 'react';


/**
 * Interactive 2D Canvas that responds to scroll
 * Creates Notion-style geometric patterns and animations
 */

const ScrollCanvas = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const scrollY = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Set canvas size
        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle system
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update(scroll) {
                this.x += this.speedX + scroll * 0.01;
                this.y += this.speedY;

                // Wrap around screen
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw(ctx, isDark) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(155, 154, 151, ${this.opacity})`
                    : `rgba(55, 53, 47, ${this.opacity * 0.3})`;
                ctx.fill();
            }
        }

        // Create particles
        const particles = Array.from({ length: 50 }, () => new Particle());

        // Geometric shapes
        class Shape {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 100 + 50;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.002;
                this.type = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
                this.opacity = Math.random() * 0.1 + 0.05;
            }

            update(scroll) {
                this.rotation += this.rotationSpeed;
                this.y += scroll * 0.02;

                if (this.y > height + this.size) {
                    this.y = -this.size;
                }
            }

            draw(ctx, isDark) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.strokeStyle = isDark
                    ? `rgba(155, 154, 151, ${this.opacity})`
                    : `rgba(55, 53, 47, ${this.opacity})`;
                ctx.lineWidth = 2;

                if (this.type === 0) {
                    // Circle
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                    ctx.stroke();
                } else if (this.type === 1) {
                    // Square
                    ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
                } else {
                    // Triangle
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size / 2);
                    ctx.lineTo(this.size / 2, this.size / 2);
                    ctx.lineTo(-this.size / 2, this.size / 2);
                    ctx.closePath();
                    ctx.stroke();
                }

                ctx.restore();
            }
        }

        const shapes = Array.from({ length: 8 }, () => new Shape());

        // Check if dark mode
        const isDarkMode = () => {
            return document.documentElement.getAttribute('data-theme') === 'dark';
        };

        // Animation loop
        const animate = () => {
            const isDark = isDarkMode();

            // Clear canvas with background color
            ctx.fillStyle = isDark ? '#191919' : '#faf9f7';
            ctx.fillRect(0, 0, width, height);

            // Update and draw shapes
            shapes.forEach(shape => {
                shape.update(scrollY.current);
                shape.draw(ctx, isDark);
            });

            // Update and draw particles
            particles.forEach(particle => {
                particle.update(scrollY.current);
                particle.draw(ctx, isDark);
            });

            // Connect nearby particles
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = isDark
                            ? `rgba(155, 154, 151, ${0.1 * (1 - distance / 150)})`
                            : `rgba(55, 53, 47, ${0.05 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            scrollY.current *= 0.95; // Smooth scroll decay
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle scroll
        const handleScroll = () => {
            scrollY.current = window.scrollY - (scrollY.current || 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', handleScroll);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="scroll-canvas"
            aria-hidden="true"
        />
    );
};

export default ScrollCanvas;

/**
 * Animation utilities
 * Handles scroll-based animations and visual effects
 */

class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupTypeWriter();
    }

    /**
     * Setup intersection observer for scroll animations
     */
    setupScrollAnimations() {
        // Temporarily disabled animations to ensure content visibility
        const animateElements = document.querySelectorAll('.project, .experience-item, .education-item, .course-item');
        animateElements.forEach(el => {
            // Ensure all content is visible
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.classList.add('animate-in');
        });
    }

    /**
     * Setup typewriter effect for hero section (optional)
     */
    setupTypeWriter() {
        const typewriterElement = document.querySelector('[data-typewriter]');
        if (typewriterElement) {
            const text = typewriterElement.getAttribute('data-typewriter');
            const speed = parseInt(typewriterElement.getAttribute('data-speed')) || 50;
            
            this.typeWrite(typewriterElement, text, speed);
        }
    }

    /**
     * Typewriter effect implementation
     */
    typeWrite(element, text, speed) {
        element.innerHTML = '';
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    /**
     * Smooth fade in animation
     */
    fadeIn(element, duration = 500) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            element.style.opacity = Math.min(progress / duration, 1);
            
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
});
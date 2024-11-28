// Intersection Observer for timeline items
const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

// Progress bar scroll effect
const updateProgressBar = () => {
    const timeline = document.querySelector('.timeline');
    const timelineContents = document.querySelectorAll('.timeline-content');
    if (!timeline || !timelineContents.length) return;

    // Calculate how many sections are visible
    let visibleSections = 0;
    timelineContents.forEach((content, index) => {
        const rect = content.getBoundingClientRect();
        // Check if the content is mostly in view
        if (rect.top < window.innerHeight - 200) {
            visibleSections = index + 1;
            // Ensure progress never exceeds 100%
            const progress = Math.min((visibleSections / timelineContents.length) * 100, 100);
            timeline.style.setProperty('--progress', `${progress}`);
        }
    });
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe timeline items for fade/slide effects
    document.querySelectorAll('.timeline-content').forEach(item => {
        itemObserver.observe(item);
    });

    // Add scroll listener for progress bar
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
    // Initial call to set initial state
    updateProgressBar();
});

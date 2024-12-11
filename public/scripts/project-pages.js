document.addEventListener('DOMContentLoaded', () => {
    const bentoItems = document.querySelectorAll('.bento-item');
    const overlay = document.querySelector('.overlay');
    const expandedContents = document.querySelectorAll('.expanded-content');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Handle bento item clicks
    bentoItems.forEach(item => {
        item.addEventListener('click', () => {
            const expandId = item.dataset.expand;
            if (!expandId) return;

            const expandedContent = document.getElementById(expandId);
            if (expandedContent) {
                expandedContent.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Handle close button clicks
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeExpandedContent);
    });

    // Close when clicking overlay
    overlay.addEventListener('click', closeExpandedContent);

    function closeExpandedContent() {
        expandedContents.forEach(content => {
            content.classList.remove('active');
        });
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Prevent clicks inside expanded content from closing it
    expandedContents.forEach(content => {
        content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});

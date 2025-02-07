document.addEventListener('DOMContentLoaded', function() {
    const hoverTrigger = document.querySelector('.hover-trigger');
    const hoverGif = document.querySelector('.hover-gif');

    // Early return if elements don't exist
    if (!hoverTrigger || !hoverGif) {
        console.warn('Hover elements not found');
        return;
    }

    // Initialize hover-gif state
    function initializeHoverGif() {
        hoverGif.style.display = 'none';
        hoverGif.style.opacity = '0';
        // Ensure initial state is completely hidden
        hoverGif.classList.remove('visible');
    }

    // Show hover-gif
    function showHoverGif() {
        hoverGif.style.display = 'block';
        requestAnimationFrame(() => {
            hoverGif.classList.add('visible');
        });
    }

    // Hide hover-gif
    function hideHoverGif() {
        hoverGif.classList.remove('visible');
        setTimeout(() => {
            if (!hoverGif.classList.contains('visible')) {
                hoverGif.style.display = 'none';
            }
        }, 300);
    }

    // Update hover-gif position
    function updateHoverGifPosition(e) {
        if (hoverGif.classList.contains('visible')) {
            requestAnimationFrame(() => {
                hoverGif.style.left = e.clientX + 'px';
                hoverGif.style.top = e.clientY + 'px';
            });
        }
    }

    // Initialize on load
    initializeHoverGif();

    // Event listeners
    hoverTrigger.addEventListener('mouseenter', showHoverGif);
    hoverTrigger.addEventListener('mouseleave', hideHoverGif);
    document.addEventListener('mousemove', updateHoverGifPosition);
}); 
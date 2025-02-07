document.addEventListener('DOMContentLoaded', function() {
    const hoverTrigger = document.querySelector('.hover-trigger');
    const hoverGif = document.querySelector('.hover-gif');

    if (!hoverTrigger || !hoverGif) {
        console.warn('Hover elements not found');
        return;
    }

    function updateGifPosition(e) {
        if (hoverGif.classList.contains('visible')) {
            hoverGif.style.left = e.pageX + 'px';
            hoverGif.style.top = e.pageY + 'px';
        }
    }

    function showGif(e) {
        hoverGif.style.left = e.pageX + 'px';
        hoverGif.style.top = e.pageY + 'px';
        hoverGif.classList.add('visible');
    }

    function hideGif() {
        hoverGif.classList.remove('visible');
    }

    // Event listeners
    hoverTrigger.addEventListener('mouseenter', showGif);
    hoverTrigger.addEventListener('mouseleave', hideGif);
    document.addEventListener('mousemove', updateGifPosition);
}); 
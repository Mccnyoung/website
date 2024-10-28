document.addEventListener('DOMContentLoaded', function() {
    const projectsNav = document.querySelector('.projects-nav');
    const footer = document.querySelector('footer');

    // Smooth scroll to projects
    if (projectsNav) {
        projectsNav.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector('.project-section');
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        });
    }

    // Smooth scroll function
    function smoothScrollTo(targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        // Calculate the maximum scroll position that doesn't show the footer
        const maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight - footer.offsetHeight;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = Math.min(ease(timeElapsed, startPosition, distance, duration), maxScrollPosition);
            window.scrollTo(0, run);
            if (timeElapsed < duration && run < maxScrollPosition) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});
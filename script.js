document.addEventListener('DOMContentLoaded', function() {
    const projectsNav = document.querySelector('.projects-nav');
    const projectSection = document.querySelector('.project-section');
    const footer = document.querySelector('footer');

    if (projectsNav && projectSection && footer) {
        projectsNav.addEventListener('click', function(e) {
            e.preventDefault();
            const projectSectionTop = projectSection.getBoundingClientRect().top + window.pageYOffset;
            const windowHeight = window.innerHeight;
            const scrollTarget = projectSectionTop - (windowHeight * 0.1); // Scroll to 10% from the top

            window.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
            });

            // Hide footer
            footer.style.display = 'none';

            // Show footer after scrolling is complete
            setTimeout(() => {
                footer.style.display = '';
            }, 1000); // Adjust timing as needed
        });
    }
});
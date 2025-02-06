document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const hoverTrigger = document.querySelector('.hover-trigger');
    const hoverGif = document.querySelector('.hover-gif');

    if (hoverTrigger && hoverGif) {
        hoverTrigger.addEventListener('mouseenter', function() {
            hoverGif.style.display = 'block';
            setTimeout(() => {
                hoverGif.classList.add('visible');
            }, 10);
        });

        hoverTrigger.addEventListener('mouseleave', function() {
            hoverGif.classList.remove('visible');
            setTimeout(() => {
                hoverGif.style.display = 'none';
            }, 300);
        });

        document.addEventListener('mousemove', function(e) {
            if (hoverGif.classList.contains('visible')) {
                requestAnimationFrame(() => {
                    hoverGif.style.left = e.clientX + 'px';
                    hoverGif.style.top = e.clientY + 'px';
                });
            }
        });
    }

    const introButton = document.querySelector('.intro-button');
    const projectSection = document.querySelector('.project-section');

    if (introButton && projectSection) {
        introButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the project section's position
            const projectSectionOffset = projectSection.offsetTop;
            
            // Calculate the viewport height
            const viewportHeight = window.innerHeight;
            // Get the project section's height
            const projectSectionHeight = projectSection.offsetHeight;
            
            // Adjust the scroll position to show more of the top portion
            // Using a larger divisor (6) and adding extra padding to avoid footer
            const scrollPosition = projectSectionOffset - (viewportHeight - projectSectionHeight) / 6 - 120;
            
            // Scroll to the calculated position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    }

    const sticker = document.querySelector('.sticker');
    
    if (sticker) {
        sticker.addEventListener('click', function() {
            this.parentElement.remove();
        });
    }

    // Page slider functionality
    const sections = ['overview', 'summary', 'problem', 'solution', 'impact'];
    const sectionElements = sections.map(id => document.getElementById(id));
    const sliderLinks = document.querySelectorAll('.slider-link');
    const progressFill = document.querySelector('.progress-fill');

    // Function to update active section and progress
    function updateActiveSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / documentHeight) * 100;
        
        progressFill.style.height = `${scrollProgress}%`;

        sectionElements.forEach((section, index) => {
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                sliderLinks.forEach(link => link.classList.remove('active'));
                sliderLinks[index].classList.add('active');
            }
        });
    }

    // Smooth scroll to section when clicking slider links
    sliderLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);

    // Initial check for active section
    updateActiveSection();
});

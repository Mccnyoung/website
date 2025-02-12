document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Check initial scroll position
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // Restore smooth scrolling for primary button
    const introButton = document.querySelector('.intro-button');
    const projectSection = document.querySelector('.project-section');
    
    if (introButton && projectSection) {
        introButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectSectionOffset = projectSection.offsetTop;
            const headerHeight = document.querySelector('header').offsetHeight;
            const scrollPosition = projectSectionOffset - headerHeight - 20;
            
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
});

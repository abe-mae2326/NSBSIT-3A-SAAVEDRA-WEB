const navLinks = document.querySelectorAll('nav a');
        
        // Function to highlight the active link in the navigation bar
        function setActiveLink(link) {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
}
         // Function to determine the currently active section
        function updateActiveSection() {
            const scrollPosition = window.scrollY;
            for (const section of document.querySelectorAll('section')) {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    const targetId = section.getAttribute('id');
                    const targetLink = document.querySelector(`nav a[href="#${targetId}"]`);
                    setActiveLink(targetLink);
                }
            }
}
        // Initial call to set the active link based on the page load
        updateActiveSection();

        // Event listener to update the active link when scrolling
        window.addEventListener('scroll', updateActiveSection);
        
        // Event listener for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                setActiveLink(link);
            });
        });
        

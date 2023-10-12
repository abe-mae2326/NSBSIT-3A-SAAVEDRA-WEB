const navLinks = document.querySelectorAll('nav a');
        
        // Function to highlight the active link in the navigation bar
        function setActiveLink(link) {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        }

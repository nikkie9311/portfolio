
        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = mobileMenu.querySelectorAll('a');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Form Submission Handler (Static Example)
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // In a real application, you would send this data to a server/backend service.
                console.log("Form Submitted! In a real app, this data would be sent to a service like Firebase or EmailJS.");

                // Custom success message display instead of alert()
                const messageBox = document.createElement('div');
                messageBox.className = 'fixed top-4 right-4 bg-teal-500 text-white p-4 rounded-lg shadow-lg z-[1000] transition-opacity duration-500';
                messageBox.textContent = 'Message sent successfully! Thank you for reaching out.';
                document.body.appendChild(messageBox);
                
                // Hide after 3 seconds
                setTimeout(() => {
                    messageBox.style.opacity = '0';
                    setTimeout(() => messageBox.remove(), 500);
                }, 3000);

                contactForm.reset();
            });
        }
    
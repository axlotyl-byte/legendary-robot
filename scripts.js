document.addEventListener("DOMContentLoaded", function () {
    // Highlight the current page link in the navbar
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add("active"); // Add 'active' class to current page link
        } else {
            link.classList.remove("active"); // Remove 'active' class from other links
        }
    });

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Form validation and submission feedback for 'Order' and 'Contact Us' pages
    const orderForm = document.querySelector("#order-form form");
    const contactForm = document.querySelector("#contact-form form");

    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validateForm(orderForm)) {
                alert("Your order has been placed successfully!");
                orderForm.reset(); // Reset form after successful submission
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validateForm(contactForm)) {
                alert("Thank you for your message. We will get back to you shortly!");
                contactForm.reset(); // Reset form after successful submission
            }
        });
    }

    // Simple form validation function
    function validateForm(form) {
        const inputs = form.querySelectorAll("input[required], textarea[required]");
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                isValid = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        return isValid;
    }
});

// Custom functionality for interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('About Us page loaded!');

    // Example: Scroll to top functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.className = 'btn btn-primary rounded-circle position-fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


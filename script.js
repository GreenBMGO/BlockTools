document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    // Auto-select Features section when the website opens
    document.getElementById("features").classList.add("active");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = this.getAttribute("data-target");
            sections.forEach(section => {
                if (section.id === target) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
            // Update the active class for the clicked link
            navLinks.forEach(link => {
                if (link.getAttribute("data-target") === target) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });
    });
});
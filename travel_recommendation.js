// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Contact form validation
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields");
        return;
    }

    alert("Thank you for contacting us, " + name + "!");
    contactForm.reset();
});

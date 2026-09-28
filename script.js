const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {

    menuBtn.addEventListener("click", function() {

        navLinks.classList.toggle("show");

    });

}

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeBtn.textContent = "☀️";

        } else {

            themeBtn.textContent = "🌙";

        }

    });

}

const typingText = document.getElementById("typingText");

if (typingText) {

    const text = "If it's meant to be, it will be.";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            typingText.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 80);

        }

    }

    typeText();

}

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const filter = button.getAttribute("data-filter");


        /* Change active button */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        projectCards.forEach(function(card) {

            const category =
                card.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const messageError =
            document.getElementById("messageError");

        const formMessage =
            document.getElementById("formMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";


        let valid = true;

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        }

        else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;

        }

        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;

        }

        if (valid) {

            formMessage.textContent =
                "Thank you! Your message is ready to be sent.";

            formMessage.style.color = "green";

            contactForm.reset();

        }

    });

}
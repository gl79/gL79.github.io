
// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$(document).ready(function () {
    // Show or hide scroll to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    // Scroll smoothly to top when button clicked
    $('#scrollTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // toggle active class
        faqItem.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-fill");

    const options = {
        threshold: 0.5,
    };

    function animateProgress(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progressValue = bar.getAttribute("data-progress");
                bar.style.width = progressValue + "%";
                observer.unobserve(bar);
            }
        });
    }

    const observer = new IntersectionObserver(animateProgress, options);

    progressBars.forEach((bar) => {
        observer.observe(bar);
    });
});

const text = "LET'S GOOO!!";
const typingSpeed = 120;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        const loader = document.getElementById("loader");
        loader.style.opacity = 0;
        // langsung sembunyikan tanpa delay
        loader.style.display = "none";
    }
}


window.onload = () => {
    typeWriter();
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
}

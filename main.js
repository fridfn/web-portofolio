document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar nav ul');

    hamburger.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
});
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#007BFF';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('mouseover', function() {
        img.style.transform = 'scale(1.05)';
    });

    img.addEventListener('mouseout', function() {
        img.style.transform = 'scale(1)';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%'; // Start from 0%
        setTimeout(() => {
            bar.style.width = width; // Animate to the correct width
        }, 500); // Delay for animation
    });
});
// Detect when About Me section enters the viewport
const aboutSection = document.querySelector('.about');

window.addEventListener('scroll', () => {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        aboutSection.style.opacity = 1;
        aboutSection.style.visibility = 'visible';
    }
});














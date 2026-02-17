// Typing Effect
const textToType = "Welcome to my personal world";
const typingElement = document.querySelector('.typing-text');
let charIndex = 0;

function type() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

// Start typing animation after a slight delay
setTimeout(type, 1000); // Wait for fade-in

// Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});

// Smooth Scroll for specific anchor links (optional refinement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation Trigger (Fade In Elements)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// Profile Popup Functionality
const viewProfileBtn = document.getElementById('view-profile-btn');
const profilePopup = document.getElementById('profile-popup');
const closePopupBtn = document.querySelector('.close-popup');

if (viewProfileBtn && profilePopup) {
    viewProfileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        profilePopup.classList.add('active');
    });

    closePopupBtn.addEventListener('click', () => {
        profilePopup.classList.remove('active');
    });

    profilePopup.addEventListener('click', (e) => {
        if (e.target === profilePopup) {
            profilePopup.classList.remove('active');
        }
    });
}

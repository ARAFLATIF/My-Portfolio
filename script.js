// Project data
const projects = [
    { title: "Bin Genius", description: "A smart waste management solution.", url: "https://devpost.com/software/bin-genius" },
    { title: "MavsHub", description: "An innovative platform for university students.", url: "https://devpost.com/software/mavshub" },
    { title: "CryptoScrapper", description: "A tool for scraping cryptocurrency data.", url: "https://github.com/ARAFLATIF/CRYPTOSCRAPPER" }
];

// Function to create a project card
function createProjectCard({ title, description, url }) {
    return `
        <div class="col">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Render project cards
    const projectList = document.getElementById('project-list');
    if (projectList) {
        const projectCards = projects.map(createProjectCard).join('');
        projectList.insertAdjacentHTML('beforeend', projectCards);
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow');
        } else {
            navbar.classList.remove('bg-white', 'shadow');
        }
    });

    // Add animation to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    skillCards.forEach(card => {
        observer.observe(card);
    });

    // Add "Back to Top" button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '&uarr;';
    backToTopButton.setAttribute('aria-label', 'Back to Top');
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});

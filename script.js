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
});

// Project data with URLs for "Learn More" links
const projects = [
    { title: "Project 1", description: "Description of Project 1", url: "#" },
    { title: "Project 2", description: "Description of Project 2", url: "#" },
    { title: "Project 3", description: "Description of Project 3", url: "#" }
];

// Function to create a project card as an HTML string
function createProjectCard({ title, description, url }) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card project-card">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
            </div>
        </div>
    `;
}

// Render project cards after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    
    if (projectList) {
        const projectCards = projects.map(createProjectCard).join('');
        projectList.insertAdjacentHTML('beforeend', projectCards);
    } else {
        console.error('Element with ID "project-list" not found.');
    }
});

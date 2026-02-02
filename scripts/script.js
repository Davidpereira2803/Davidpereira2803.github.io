function truncateText(text, wordLimit) {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("project-container");

  fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
      projects.forEach((project, index) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        
        // Use category from JSON
        card.setAttribute('data-category', project.category || '');

        // Map status to CSS class
        let statusClass = 'status-prototype';
        let statusText = project.status || 'N/A';
        if (project.status) {
          if (project.status.toLowerCase().includes('finished')) {
            statusClass = 'status-finished';
            statusText = 'Finished';
          } else if (project.status.toLowerCase().includes('testing')) {
            statusClass = 'status-prototype';
            statusText = 'Testing';
          } else if (project.status.toLowerCase().includes('production')) {
            statusClass = 'status-prototype';
            statusText = 'In Production';
          } else if (project.status.toLowerCase().includes('prototype')) {
            statusClass = 'status-prototype';
            statusText = 'Prototype';
          }
        }

        card.innerHTML = `
          <div class="project-image">
            <i class="fa-solid ${project.icon}"></i>
            <span class="project-status ${statusClass}">${statusText}</span>
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">
              ${truncateText(project.description, 30)}
            </p>
            <div class="project-tech">
              ${project.tech.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${project.link}" class="project-link github-link" target="_blank">
                <i class="fab fa-github"></i> View Code
              </a>
              <a href="project.html?index=${index}" class="project-link details-link">
                <i class="fas fa-arrow-right"></i> Details
              </a>
            </div>
          </div>
        `;

        // Make entire card clickable to project details
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          // Don't navigate if clicking on the GitHub link
          if (e.target.closest('.github-link')) {
            return;
          }
          window.location.href = `project.html?index=${index}`;
        });

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading projects:", error);
      container.innerHTML = `<p style="color: red;">Failed to load projects. Please try again later.</p>`;
    });
});

// Load CV updated date
async function loadCvUpdatedDate() {
  try {
    const res = await fetch('/assets/cv/cv-info.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load cv-info.json');
    const info = await res.json();

    // Parse UTC timestamp
    const dt = new Date(info.updated_at_utc);

    // Format nicely in the visitor's locale
    const formatted = dt.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

    document.getElementById('cv-last-updated').textContent = formatted;
  } catch (e) {
    // Fallback if fetch fails
    document.getElementById('cv-last-updated').textContent = 'January 2026';
  }
}

loadCvUpdatedDate();


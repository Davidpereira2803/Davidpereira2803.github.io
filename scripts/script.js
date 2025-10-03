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
  
          card.innerHTML = `
          <a href="project.html?index=${index}" class="card-link">
            <div class="project-header">
              <i class="fa-solid ${project.icon} project-icon"></i>
              <h3>${project.title}</h3>
            </div>
            <p>${truncateText(project.description, 35)}</p>
            <div class="project-tech">
              ${project.tech.map(tech => `<span>${tech}</span>`).join("")}
            </div>
            <h4>Project status: ${project.status ? project.status.charAt(0).toUpperCase() + project.status.slice(1) : "N/A"}</h4>
            <div class="project-links">
              <a href="${project.link}" class="code-link" target="_blank">
                <i class="fa-brands fa-github"></i> View Code
              </a>
            </div>
            </a>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Error loading projects:", error);
        container.innerHTML = `<p style="color: red;">Failed to load projects. Please try again later.</p>`;
      });
  });
  
function revealEmail() {
    const user = 'perda2803';
    const domain = 'gmail.com';
    const email = user + '@' + domain;
    window.location.href = 'mailto:' + email;
}
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get("index"), 10);
  
    fetch("projects.json")
      .then((res) => res.json())
      .then((projects) => {
        if (!projects[index]) {
          document.getElementById("project-detail").innerHTML =
            "<p style='color: red;'>Project not found.</p>";
          return;
        }
  
        const project = projects[index];
        document.title = `${project.title} - Project`;
  
        const container = document.getElementById("project-detail");
        container.innerHTML = `
          <h1>${project.title}</h1>
          <p>${project.description}</p>
          <div class="tech-tags">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${project.link}" class="code-link" target="_blank">
              <i class="fa-brands fa-github"></i> View Code
            </a>
          </div>
        `;
      })
      .catch(() => {
        document.getElementById("project-detail").innerHTML =
          "<p style='color: red;'>Error loading project data.</p>";
      });
  });
  
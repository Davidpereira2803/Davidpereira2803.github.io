document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const index = parseInt(urlParams.get("index"), 10);

  const toRawImage = (url) => {
    return url.includes("github.com") && url.includes("/blob/")
      ? url.replace("github.com", "raw.githubusercontent.com").replace("/blob", "")
      : url;
  };

  fetch("projects.json")
    .then((res) => res.json())
    .then((projects) => {
      const container = document.getElementById("project-detail");

      if (!projects[index]) {
        container.innerHTML = "<p style='color: red;'>Project not found.</p>";
        return;
      }

      const project = projects[index];
      document.title = `${project.title} - Project`;

      let videosHTML = "";
      if (project.videos && project.videos.length > 0) {
        videosHTML = `
          <div class="project-content-section">
            <h2>Videos</h2>
            <div class="video-grid">
              ${project.videos.map(
                (url) => `
                  <div class="video-container">
                    <video controls autoplay loop muted playsinline>
                      <source src="${toRawImage(url)}" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                `
              ).join("")}
            </div>
          </div>
        `;
      }

      let imagesHTML = "";
      if (project.images && project.images.length > 0) {
        imagesHTML = `
          <div class="project-content-section">
            <h2>Images</h2>
            <div class="screenshot-grid">
              ${project.images.map(
                (url) => `
                  <div class="screenshot">
                    <img src="${toRawImage(url)}" alt="Screenshot of ${project.title}" />
                  </div>
                `
              ).join("")}
            </div>
          </div>
        `;
      }

      container.innerHTML = `
        <h1>${project.title}</h1>
        <p class="project-status"><strong>Status:</strong> ${project.status ? project.status.charAt(0).toUpperCase() + project.status.slice(1) : "N/A"}</p>
        <p>${project.description}</p>

        <div class="tech-tags">
          ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>

        <div class="project-links">
          <a href="${project.link}" class="code-link" target="_blank">
            <i class="fa-brands fa-github"></i> View Code
          </a>
        </div>

        ${videosHTML}
        ${imagesHTML}
      `;
    })
    .catch(() => {
      document.getElementById("project-detail").innerHTML =
        "<p style='color: red;'>Error loading project data.</p>";
    });
});

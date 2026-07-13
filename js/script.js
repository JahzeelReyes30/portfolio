// Renders the projects grid from the PROJECTS list in js/projects.js.
// Adding a new project to that file is all that's needed to have it show
// up here — no HTML editing required.

function renderProjects() {
  const grid = document.getElementById("projects-grid");

  grid.innerHTML = PROJECTS.map(
    (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        ${
          project.images
            ? `<div class="project-gallery">
                ${project.images
                  .map((img) => `<img src="${img.src}" alt="${img.alt}" loading="lazy" />`)
                  .join("")}
              </div>`
            : ""
        }
        <p class="project-description">${project.description}</p>
        <ul class="project-highlights">
          ${project.highlights.map((point) => `<li>${point}</li>`).join("")}
        </ul>
        <ul class="project-tech">
          ${project.tech.map((t) => `<li>${t}</li>`).join("")}
        </ul>
        <div class="project-links">
          ${
            project.liveUrl
              ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Demo</a>`
              : ""
          }
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">View Code</a>
        </div>
      </article>
    `
  ).join("");
}

renderProjects();

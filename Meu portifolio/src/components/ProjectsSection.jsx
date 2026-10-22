import { useState, useMemo, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function ProjectsSection({ projectsData }) {
  const [filterCategory, setFilterCategory] = useState(projectsData.allCategory || "All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setFilterCategory(projectsData.allCategory || "All");
  }, [projectsData.allCategory]);

  const filteredProjects = useMemo(() => {
    return projectsData.list.filter((p) => {
      const matchCategory =
        filterCategory === projectsData.allCategory || p.category === filterCategory;
      const matchSearch =
        searchTerm.trim() === "" ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [projectsData, filterCategory, searchTerm]);

  return (
    <section id="projetos" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{projectsData.badge}</span>
          <h2 className="section-title">
            {projectsData.title} <span>{projectsData.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{projectsData.subtitle}</p>
        </div>

        <div className="projects-toolbar">
          <div className="search-bar-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              className="search-input-field"
              placeholder={projectsData.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                type="button"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          <div className="filter-pill-group">
            {projectsData.categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill-btn ${filterCategory === cat ? "active" : ""}`}
                onClick={() => setFilterCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              proj={proj}
              onSelect={setActiveProject}
              viewDetailsText={projectsData.viewDetails}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-projects-state">
            <i className="fa-regular fa-folder-open empty-icon"></i>
            <p>{projectsData.noResults}</p>
          </div>
        )}

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          modalHeading={projectsData.modalHeading}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;

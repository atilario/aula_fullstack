import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function ProjectsSection({ projects }) {
  const [filterCategory, setFilterCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    "Todos",
    "Dados & IA",
    "Full Stack & Web",
    "Hardware & IoT",
    "Linguagens & Sistemas"
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory =
        filterCategory === "Todos" || p.category === filterCategory;
      const matchSearch =
        searchTerm === "" ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchCategory && matchSearch;
    });
  }, [projects, filterCategory, searchTerm]);

  return (
    <section id="projetos">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Portfólio Prático</span>
          <h2 className="section-title">Projetos & <span>Trabalhos</span></h2>
          <p className="section-subtitle">
            Aplicações práticas em Ciência de Dados, Inteligência Artificial, Desenvolvimento Web e Hardware.
          </p>
        </div>

        <div className="projects-controls">
          <div className="search-input-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar por nome, tag ou tecnologia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="skills-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filterCategory === cat ? "active" : ""}`}
                onClick={() => setFilterCategory(cat)}
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
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: "var(--text-muted)"
            }}
          >
            <p>Nenhum projeto encontrado com os termos de busca informados.</p>
          </div>
        )}

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;


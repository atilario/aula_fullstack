function ProjectCard({ proj, onSelect }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <span className="project-number">{proj.number}</span>
        <span className="project-category-tag">{proj.category}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{proj.title}</h3>
        <p className="project-description">{proj.shortDesc}</p>

        <div className="project-tech-tags">
          {proj.tags.map((tag, i) => (
            <span key={i} className="tech-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <button className="btn-details" onClick={() => onSelect(proj)}>
            Ver Detalhes <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;


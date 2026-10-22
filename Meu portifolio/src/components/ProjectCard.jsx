function ProjectCard({ proj, onSelect, viewDetailsText }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-number">{proj.number}</span>
        <span className="project-category-tag">{proj.category}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{proj.title}</h3>
        <p className="project-desc">{proj.shortDesc}</p>

        <div className="project-tags-list">
          {proj.tags.map((tag, i) => (
            <span key={i} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <button
            className="btn-details"
            onClick={() => onSelect(proj)}
            type="button"
          >
            {viewDetailsText || "View Details"}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

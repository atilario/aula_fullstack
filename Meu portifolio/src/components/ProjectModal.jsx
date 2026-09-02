function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-header">
          <span className="modal-number">
            PROJETO {project.number} • {project.category}
          </span>
          <h3 className="modal-title">{project.title}</h3>
          <div className="project-tech-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tech-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <p>{project.fullDesc}</p>

          <div className="modal-highlights">
            <h4>Principais Destaques & Entregáveis:</h4>
            <ul>
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;


import { useEffect } from "react";

function ProjectModal({ project, onClose, modalHeading }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-top">
          <div className="modal-meta-line">
            <span className="modal-badge">{project.category}</span>
            <span className="modal-idx">#{project.number}</span>
          </div>
          <h3 className="modal-title">{project.title}</h3>

          <div className="project-tags-list">
            {project.tags.map((tag, i) => (
              <span key={i} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-content-body">
          <p className="modal-description">{project.fullDesc}</p>

          <div className="modal-highlights-box">
            <h4 className="modal-highlights-title">
              {modalHeading || "Key Highlights & Deliverables:"}
            </h4>
            <ul className="modal-highlights-list">
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <i className="fa-solid fa-check"></i>
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

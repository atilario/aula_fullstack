function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-title-area">
          <div className="skill-icon-wrapper">
            <i className={skill.icon}></i>
          </div>
          <div>
            <h3 className="skill-name">{skill.name}</h3>
            <span className="skill-category-badge">{skill.category}</span>
          </div>
        </div>
      </div>

      <p className="skill-desc">{skill.desc}</p>

      <div className="skill-bar-container">
        <div
          className="skill-bar-fill"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;


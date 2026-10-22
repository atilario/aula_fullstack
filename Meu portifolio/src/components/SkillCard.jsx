function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <div className="skill-icon-wrapper">
          <i className={skill.icon}></i>
        </div>
        <div className="skill-header-info">
          <h3 className="skill-name">{skill.name}</h3>
          <span className="skill-category-badge">{skill.category}</span>
        </div>
      </div>
      <p className="skill-desc">{skill.desc}</p>
    </div>
  );
}

export default SkillCard;

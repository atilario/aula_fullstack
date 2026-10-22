import { useState, useMemo, useEffect } from "react";
import SkillCard from "./SkillCard";

function SkillsSection({ skillsData }) {
  const [selectedCategory, setSelectedCategory] = useState(skillsData.all || "All");

  // Keep selectedCategory in sync when language switches
  useEffect(() => {
    setSelectedCategory(skillsData.all || "All");
  }, [skillsData.all]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === skillsData.all) {
      return skillsData.list;
    }
    return skillsData.list.filter((s) => s.category === selectedCategory);
  }, [selectedCategory, skillsData]);

  return (
    <section id="tecnologias" className="section-padding section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{skillsData.badge}</span>
          <h2 className="section-title">
            {skillsData.title} <span>{skillsData.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{skillsData.subtitle}</p>
        </div>

        <div className="filter-pill-group">
          {skillsData.categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
